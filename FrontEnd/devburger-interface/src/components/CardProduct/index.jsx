import { useCart } from '../../hooks/CartContext';
import { CartButton } from '../CartButton';
import { CardImage, Container } from './styles';

export function CardProduct({ product }) {
    const { putProductInCart } =  useCart();
    const isPng = product.url?.toLowerCase().endsWith('.png');
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} $isPng={isPng}></CardImage>
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton onClick={() => putProductInCart(product)}></CartButton>
        </Container>
    )
}

