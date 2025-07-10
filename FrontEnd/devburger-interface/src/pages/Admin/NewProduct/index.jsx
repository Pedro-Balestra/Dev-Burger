import { yupResolver } from "@hookform/resolvers/yup"
import { Image } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as yup from "yup"
import { api } from "../../../services/api"
import { Container, ErrorMessage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles"

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
        category: yup.object().required('Selecione uma categoria'),
        file: yup.mixed().test('required', 'Escolha uma imagem', value => {
            return value && value.length > 0
        }).test('fileSize', 'O arquivo deve ter no máximo 5MB', value => {
            return value && value.length > 0 && value[0].size <= 5000000;
        }).test('type', 'Carregue uma imagem válida (png ou jpeg)', value => {
            return value && value.length > 0 && (value[0].type === 'image/png' || value[0].type === 'image/jpeg' || value[0].type === 'image/jpg');
        }),
    })

export function NewProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData();
        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando produto...',
            success: 'Produto adicionado com sucesso!',
            error: 'Erro ao adicionar produto'
        });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>
                        Nome
                    </Label>
                    <Input type="text"{...register('name')} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <Label>
                        Preço
                    </Label>
                    <Input type="number"{...register('price')} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input
                            type='file'
                            {...register('file')}
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={value => {
                                setFileName(value?.target?.files[0]?.name);
                                register("file").onChange(value);
                            }}
                        />
                        {fileName || 'Selecione uma imagem'}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <Label>
                        Categoria
                        <Controller
                            name='category'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={categories}
                                    getOptionLabel={(category) => category.name}
                                    getOptionValue={(category) => category.id}
                                    placeholder="Selecione uma categoria"
                                    menuPortalTarget={document.body}
                                />
                            )}
                        />
                    </Label>
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>
                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    );
}