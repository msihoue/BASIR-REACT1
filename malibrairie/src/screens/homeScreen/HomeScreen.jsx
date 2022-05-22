import { Link } from 'react-router-dom';
import data from '../../data';

const HomeScreen = () => {
    return (
        <section>
            <h1>Meilleurs Produits</h1>
            <div className="products">
                {data.products.map(product => (
                    <div key={product.slug} className="product">
                        <div className="product_image">
                            <Link to={`/${product.slug}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                        </div>
                        <div className="product_info">
                            <Link to={`/${product.slug}`}>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </Link>
                        </div>
                        <button>AJOUTER AU PANIER</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeScreen;
