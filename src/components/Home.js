import Header from './Header';
import ProductCard from './ProductCard';
import Footer from './Footer';
import './Home.css';


function Home ()  {
    return  (
        <div className='logo-website'>
            <Header />
            <div className='website-description'> 
            <h1 className='website-heading'>DISCOVER OUR PRODUCTS</h1>
            <p className='website-text'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div><ProductCard/></div>
            <Footer />
        </div>
    )
}
export default Home;