import { BackButtonArrow } from "../../components/BackButton";
import { CategoriesCarousel, OffersCarousel } from "../../components";
import { Banner, Container, Content } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)</h1>
            <BackButtonArrow path="/login"></BackButtonArrow>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel></CategoriesCarousel>
                    <OffersCarousel></OffersCarousel>
                </Content>
            </Container>
        </main>
    )
}