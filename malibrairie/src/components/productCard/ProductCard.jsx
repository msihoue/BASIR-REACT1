import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../../Store';

const ProductCard = ({ product, rating, numReviews }) => {
    const { name, slug, image, price } = product;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    const addToCartHandler = async item => {
        const existItem = cartItems.find(x => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };

    return (
        <Card>
            <Link to={`/product/${slug}`}>
                <img src={image} className="card-img-top" alt={name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${slug}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
                <Rating rating={rating} numReviews={numReviews} />
                <Card.Text>{price}</Card.Text>
            </Card.Body>

            {product.countInStock === 0 ? (
                <Button variant="light" disabled>
                    Out of stock
                </Button>
            ) : (
                <Button onClick={() => addToCartHandler(product)}>
                    AJOUTER AU PANIER
                </Button>
            )}
        </Card>
    );
};

export default ProductCard;
