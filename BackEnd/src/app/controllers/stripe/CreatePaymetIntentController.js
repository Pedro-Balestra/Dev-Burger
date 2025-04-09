import 'dotenv/config';
import Stripe from 'stripe';
import * as Yup from 'yup';

const stripe = new Stripe(process.env.STIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    const total = items.reduce((acc, current) => { return acc + current.price * current.quantity; }, 0);

    return total;
}

class CreatePaymetIntentController {
    async store(req, res) {
        const schema = Yup.object().shape({
            products: Yup.array()
                .required()
                .of(
                    Yup.object().shape({
                        id: Yup.number().required(),
                        quantity: Yup.number().required(),
                        price: Yup.number().required(),
                    }),
                ),
        });

        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err) {
            return res.status(400).json({ error: err.errors });
        }

        const { products } = req.body;

        const amount = calculateOrderAmount(products)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "brl",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
            dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
        });
    }
}

export default new CreatePaymetIntentController();
