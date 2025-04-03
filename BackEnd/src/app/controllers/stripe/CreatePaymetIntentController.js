import Stripe from 'stripe';
import * as Yup from 'yup';

const stripe = new Stripe(process.env.STIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    const total = items.reduce((acc, current) => { acc + current.price * current.quantity; }, 0);

    return total * 100;
}

class CreatePaymetIntentController {
    async store(req, res) {
        const schema = Yup.object({
            products: Yup.array()
                .required()
                .of(
                    Yup.object({
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

        const { products } = request.body;

        const amount = calculateOrderAmount(products)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "brl",
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            automatic_payment_methods: {
                enabled: true,
            },
        });

        response.json({
            clientSecret: paymentIntent.client_secret,
        });
    }
}

export default new CreatePaymetIntentController();
