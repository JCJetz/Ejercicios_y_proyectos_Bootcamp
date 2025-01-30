import { useContext } from 'react';
import { BagContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [bagItems] = useContext(BagContext);
    const navigate = useNavigate();

    return (
        <header className='header_container'>
            <h1 onClick={() => navigate('/')}>Rossman</h1>
            <div className='cart_container' onClick={() => navigate('/shopping-bag')}>
                <FaShoppingCart className='cart_icon' />
                {bagItems.length > 0 && (
                    <div className='cart_badge'>
                        {bagItems.length}
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;