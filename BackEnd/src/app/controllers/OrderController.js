import * as Yup from 'yup';
import Category from '../models/Category';
import Product from '../models/Product';
import User from '../models/User';
import Order from '../schemas/Order';

class OrderController {
	async store(req, res) {
		const schema = Yup.object({
			products: Yup.array()
				.required()
				.of(
					Yup.object({
						id: Yup.number().required(),
						quantity: Yup.number().required(),
					}),
				),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ error: err.errors });
		}

		const { products } = req.body;

		const productsIds = products.map((product) => product.id);

		const findProducts = await Product.findAll({
			where: {
				id: productsIds,
			},
			include: [
				{
					model: Category,
					as: 'category',
					attributes: ['name'],
				},
			],
		});

		const formattedProducts = findProducts.map((product) => {
			const productIndex = products.findIndex((item) => item.id === product.id);

			const newProduct = {
				id: product.id,
				name: product.name,
				category: product.category.name,
				price: product.price,
				url: product.url,
				quantity: products[productIndex].quantity,
			};

			return newProduct;
		});

		const order = {
			user: {
				id: req.userId,
				name: req.userName,
			},
			products: formattedProducts,
			status: 'Pedido realizado',
		};

		const createdOrder = await Order.create(order);

		return res.status(201).json(createdOrder);
	}

	async index(req, res) {
		const orders = await Order.find();
		return res.json(orders);
	}

	async update(req, res) {
		const schema = Yup.object({
			status: Yup.string().required(),
		});

		try {
			schema.validateSync(req.body, { abortEarly: false });
		} catch (err) {
			return res.status(400).json({ error: err.errors });
		}

		const { id } = req.params;
		const { status } = req.body;

		try {
			await Order.updateOne({ _id: id }, { status });
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
		const { admin: isAdmin } = await User.findByPk(req.userId);

		if (!isAdmin) {
			return res.status(401).json();
		}

		return res.json({ message: 'Status updated sucessfully' });
	}
}

export default new OrderController();
