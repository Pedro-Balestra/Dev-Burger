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

import { api } from '../../services/api';

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
	})
	.required();

export function Login() {
	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('Digite uma senha'),
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
		const response = await api.post('/sessions', {
			email: data.email,
			password: data.password,
		});
	};

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devbuger" />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja bem vindo ao <span>Dev Burguer!</span>
					<br />
					Acesse com seu <span>Login e senha.</span>
				</Title>
				<From onSubmit={handleSubmit(onSubmit)}>
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
					<Button type="submit">Entrar</Button>
				</From>
				<p>
					Não possui conta?{' '}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Clique aqui</a>
				</p>
			</RightContainer>
		</Container>
	);
}
