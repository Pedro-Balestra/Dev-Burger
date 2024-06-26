import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import {
	Container,
	From,
	InputContainer,
	LeftContainer,
	RightContainer,
	Title,
} from "./styles";

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
	})
	.required();

export function Login() {
	const schema = yup
		.object({
			email: yup.string().email().required(),
			password: yup.string().min(6).required(),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => console.log(data);

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
						<input type="email" {...register("email")} />
					</InputContainer>
					<InputContainer>
						<label>Senha</label>
						<input type="password" {...register("password")} />
					</InputContainer>
					<Button>Entrar</Button>
				</From>
				<p>
					Não possui conta?{" "}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Clique aqui</a>
				</p>
			</RightContainer>
		</Container>
	);
}
