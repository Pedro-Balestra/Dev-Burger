import Logo from '../../assets/logo.svg'
import { Button, Container, From, InputContainer, LeftContainer, RightContainer, Title } from "./styles"

export function Login() {
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
                <From>
                    <InputContainer>
                        <label>Email</label>
                        <input type='email'></input>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type='password'></input>
                    </InputContainer>
                    <Button>Entrar</Button>
                </From>
                <p>Não possui conta? <a>Clique aqui</a></p>
            </RightContainer>
        </Container>
    )
}