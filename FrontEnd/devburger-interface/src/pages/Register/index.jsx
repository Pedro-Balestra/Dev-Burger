import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import {
	Container,
	From,
	InputContainer,
	Link,
	RegisterImage,
	Title,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RegImg from '../../assets/background-register.svg';
import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { ContainerItens } from '../Login/styles';

export function Register() {
	const navigate = useNavigate();
	const schema = yup
		.object({
			name: yup.string().required('O nome é Obrigatório'),
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('Digite uma senha'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguas')
				.required('Confirma a sua senha'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
				toast.success('Conta criada com sucesso!');
			} else if (status === 400) {
				toast.error('Email já cadastrado! Faça login para continuar');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('😥 Falha no Sistema! Tente novamente');
		}
	};

	return (
		<Container>
			<RegisterImage src={RegImg} alt="register-image" />
			<ContainerItens>
				<img src={Logo} alt="logo" />
				<Title>Cadastre-se</Title>

				<From noValidate onSubmit={handleSubmit(onSubmit)}>
					<InputContainer error={errors?.name?.message}>
						<label>Nome</label>
						<input type="text" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>
					<InputContainer error={errors?.email?.message}>
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>
					<InputContainer error={errors?.password?.message}>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<InputContainer error={errors?.password?.message}>
						<label>Confirmar senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Criar conta</Button>
				</From>
				<p>
					Já possui conta? <Link to="/login">Clique aqui</Link>
				</p>
			</ContainerItens>
		</Container>
	);
}
