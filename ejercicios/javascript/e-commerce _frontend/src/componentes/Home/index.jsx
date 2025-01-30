import './style.css';
import Card from '../Cards';
import { useEffect, useState } from 'react';

function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                 // Update products state with fetched data
                 setProducts(data.products);
                 // Set loading to false when done
                 setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty dependency array, so this runs once on mount

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="home-container">
            <h2>Our Products</h2>
            <div className="products-grid">
                {products.map(product => (
                    <Card 
                    key={product.id} // Unique key for React list rendering
                    product={product} // Pass product data to Card component
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;