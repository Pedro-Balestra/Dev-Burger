import { ShoppingCart, UserCircle } from "@phosphor-icons/react";
import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color='#fff' size={24}></UserCircle>
                        <div>
                            <p>Olá, <span>Pedro</span></p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer color='#fff' size={24}>
                        <ShoppingCart color='#fff' size={24}></ShoppingCart>
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container >
    )
}