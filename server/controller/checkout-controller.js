import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51NpV4tSIgZap0boGTEOZq5T3VcySdHWRoGfGF4z3EB2nuPDdjvhwvaYOmtx6m9ka0ipPvbmPVG3S42nhilRKfygM00wrdqjuIA');

export const checkoutPayment = async (req, res) => {
    const { products } = req.body;

    const LineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title.shortTitle
            },
            unit_amount: product.price.cost * 100,
        },
        quantity: product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: LineItems,
        mode: 'payment',
        success_url: 'http://localhost:8000/success',
        cancel_url: 'http://localhost:8000/success',
    });

    res.json({ id: session.id });

    console.log(products);
}