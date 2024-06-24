import Logo from '../../assets/logo.svg'
import { Button, Container, From, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles"

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devbuger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <From>
                    <InputContainer>
                        <label>email</label>
                        <input type='email'></input>
                    </InputContainer>
                    <InputContainer>
                        <label>senha</label>
                        <input type='password'></input>
                    </InputContainer>
                    <Link>Esqueci minha senha.</Link>
                    <Button>Entrar</Button>
                </From>
                <Link>Não possui conta? Clique aqui</Link>
            </RightContainer>
        </Container>
    )
}