import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import {
	Container,
	ContainerItens,
	InputContainer,
	Link,
	LoginImage,
	Title,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

import LoginImg from '../../assets/background-login.svg';
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';

export function Login() {
	const navigate = useNavigate();
	const {putUserData} =  useUser();
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
		const {data: userData } = await toast.promise(
			api.post('/session', {
				email: data.email,
				password: data.password,
			}),
			{
				pending: 'Verificando seus dados',
				success: {
					render() {
						setTimeout(() => {
							navigate('/');
						}, 2000);
						return 'Seja Bem-vindo(a)';
					},
				},
				error: 'Email ou senha incorretos',
			},
		);

		putUserData(userData);
	};

	return (
		<Container>
			<LoginImage src={LoginImg} alt="login-image" />
			<ContainerItens>
				<img src={Logo} alt="logo" />
				<Title>Login</Title>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<InputContainer error={errors.email?.message}>
						<label>Email</label>
						<input type="email" {...register('email')} />
						<p>{errors.email?.message}</p>
					</InputContainer>
					<InputContainer error={errors.password?.message}>
						<label>Senha</label>
						<input type="password" {...register('password')} />
						<p>{errors.password?.message}</p>
					</InputContainer>
					<Button type="submit">Entrar</Button>
				</form>
				<p>
					Não possui conta? <Link to="/cadastro">Clique aqui</Link>
				</p>
			</ContainerItens>
		</Container>
	);
}
