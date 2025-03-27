import Logo from '../../assets/logo.svg'
import { Banner, Container, Content, Title } from './styles'

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={ Logo } alt="logo DevBurger"></img>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CartIntems></CartIntems>
                <CartResume></CartResume> */}
            </Content>
        </Container>
    )
}