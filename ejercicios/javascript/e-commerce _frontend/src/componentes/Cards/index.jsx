import './style.css';
import { useContext } from 'react';
import { BagContext } from '../../App';
import { FaShare, FaShoppingBag } from 'react-icons/fa';

function Card({ product }) {
    const [bagItems, setBagItems] = useContext(BagContext);

    const handleAddToBag = () => {
        setBagItems([...bagItems, product]);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.title,
                    text: product.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        }
    };

    return (
        <div className="card">
            <img src={product.thumbnail} alt={product.title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-description">{product.description}</p>
                <div className="card-price">${product.price}</div>
                <div className="card-actions">
                    <button className="add-to-bag" onClick={handleAddToBag}>
                        <FaShoppingBag /> Add to Bag
                    </button>
                    <button className="share" onClick={handleShare}>
                        <FaShare />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;