import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import './style.css';

function Confirmation() {
    const navigate = useNavigate();

    return (
        <div className="confirmation">
            <FaCheckCircle className="check-icon" />
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase</p>
            <p>Your order has been successfully processed</p>
            <button onClick={() => navigate('/')}>
                Continue Shopping
            </button>
        </div>
    );
}

export default Confirmation;