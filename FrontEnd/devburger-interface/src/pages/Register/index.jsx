import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import {
	Container,
	From,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from './styles';

import { toast } from 'react-toastify';
import { api } from '../../services/api';

export function Register() {
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
		const response = await toast.promise(
			api.post('/users', {
				name: data.name,
				email: data.email,
				password: data.password,
			}),
			{
				pending: 'Verificando seus dados',
				success: 'Cadastro efetuado com sucesso',
				error: 'Ops!!! Algo deu errado! Tente novamente',
			},
		);
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devbuger" />
			</LeftContainer>
			<RightContainer>
				<Title>Criar conta</Title>
				<From onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label>Nome</label>
						<input type="text" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<InputContainer>
						<label>Confirmar senha</label>
						<input type="password" {...register('confirmPassword')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>
					<Button type="submit">Criar conta</Button>
				</From>
				<p>
					Já possui conta?{' '}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Clique aqui</a>
				</p>
			</RightContainer>
		</Container>
	);
}
