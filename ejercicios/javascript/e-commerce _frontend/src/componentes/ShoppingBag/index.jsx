import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../../App';
import { FaTrash } from 'react-icons/fa';
import './style.css';

function ShoppingBag() {
 // Get bag items and setter function from context
 const [bagItems, setBagItems] = useContext(BagContext);
 // Initialize navigation function
 const navigate = useNavigate();

    const removeFromBag = (productId) => {
        setBagItems(bagItems.filter(item => item.id !== productId));
    };

  // Function to handle checkout process
  const handleCheckout = () => {
    // Clear shopping bag
    setBagItems([]);
    // Navigate to confirmation page
    navigate('/confirmation');
    };

    // If bag is empty, show empty state
    if (bagItems.length === 0) {
        return (
            <div className="empty-bag">
                <img src="/empty-cart.png" alt="Empty Cart" />
                <h2>Your shopping bag is empty</h2>
                <button onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div className="shopping-bag">
            <h2>Shopping Bag</h2>
            <div className="bag-items">
                {/* Map through each item in the bag */}
                {bagItems.map(item => (
                    <div key={item.id} className="bag-item">
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                        <button 
                            className="remove-button"
                            onClick={() => removeFromBag(item.id)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>
            <div className="checkout-section">
                <div className="total">
                    Total: ${bagItems.reduce((sum, item) => sum + item.price, 0)}
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default ShoppingBag;