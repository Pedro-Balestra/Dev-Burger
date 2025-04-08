import {
    PaymentElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import '../styles.css';

export default function CheckoutForm() {
    const { state: { dpmCheckerLink } } = useLocation();
    const stripe = useStripe();
    const elements = useElements();

    const { cartProducts, clearCart } = useCart();
    const navigate = useNavigate();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe ou Elemente com falha, tente novamente");
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            setMessage(error.message);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            try {
                const products = cartProducts.map((product) => {
                    return { id: product.id, quantity: product.quantity, price: product.price }
                });
                const { status } = await api.post(
                    '/order', { products },
                    {
                        validateStatus: () => true,
                    },
                );

                if (status === 200 || status === 201) {
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
                        clearCart();
                    }, 2000);
                    clearCart();
                    toast.success('Pedido realizado com sucesso!');
                } else if (status === 400) {
                    toast.error('Falha ao realizar o seu pedido!');
                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error('😥 Falha no Sistema! Tente novamente');
            }
        } else { oast.error('😥 Falha no Sistema! Tente novamente'); }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar agora"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}