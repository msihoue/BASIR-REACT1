import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating';

const ProductCard = ({ product, rating, numReviews }) => {
    const { name, slug, image, price } = product;
    return (
        <Card>
            <Link to={`/${slug}`}>
                <img src={image} className="card-img-top" alt={name} />
            </Link>
            <Card.Body>
                <Link to={`/${slug}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
                <Rating rating={rating} numReviews={numReviews} />
                <Card.Text>{price}</Card.Text>
            </Card.Body>

            <Button>AJOUTER AU PANIER</Button>
        </Card>
    );
};

export default ProductCard;
