import '../styles/ServicesWindowStyles.css';
import Storefront from '../assets/StorefrontWindows.jpg';
import Garden from '../assets/GardenWindows.jpg';
import CustomShaped from '../assets/CustomShapedWindows.jpg';
import BayAndBow from '../assets/BayAndBowWindow.webp';
import Awning from '../assets/AwningWindows.jpg';
import Picture from '../assets/PictureWindows.jpg';
import Sliding from '../assets/SlidingWindows.jpg';
import Casement from '../assets/CasementWindows.jpg';
import DoubleHung from '../assets/DoubleHungWindows.jpg';
import { Link } from 'react-router-dom';

const ServicesWindowStyles = () => {
  return (
    <section className='service-window-styles'>
      <div className='services-wrapper'>
        <header className='services-title'>
          <h2>Discover The Perfect Windows For Your Tulsa Home Or Business</h2>
          <h3>All Styles, All Sizes – We Do It All</h3>
        </header>
        <div className='window-styles-content'>
          <div className='window-style'>
            <img src={DoubleHung} alt='Double Hung Windows'/>
            <div className='window-style-overlay'>
              <h4>Double Hung <br/>Windows</h4>
              <p>Double-hung windows offer classic style and functionality, featuring two operable sashes for easy ventilation. Perfect for traditional or modern homes, they provide timeless elegance and practical airflow solutions.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Casement} alt='Casement Windows'/>
            <div className='window-style-overlay'>
              <h4>Casement Windows</h4>
              <p>Casement windows open outward with a side hinge, offering maximum ventilation and unobstructed views. Ideal for energy efficiency and modern aesthetics, they enhance light, airflow, and functionality in any space.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Sliding} alt='Sliding Windows'/>
            <div className='window-style-overlay'>
              <h4>Sliding Windows</h4>
              <p>Sliding windows glide horizontally, combining space-saving design with effortless operation. Perfect for modern homes, they provide wide, clear views and excellent ventilation with a sleek, functional design.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Picture} alt='Picture Windows'/>
            <div className='window-style-overlay'>
              <h4>Picture Windows</h4>
              <p>Picture windows bring in maximum natural light with large, fixed glass panes. Perfect for framing stunning outdoor views, they combine beauty and energy efficiency in modern or traditional homes.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Awning} alt='Awning Windows'/>
            <div className='window-style-overlay'>
              <h4>Awning Windows</h4>
              <p>Awning windows open outward and upward, offering a sleek design perfect for modern homes. Often paired with picture windows, they enhance style, functionality, and large window configurations.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={BayAndBow} alt='Bay And Bow Windows'/>
            <div className='window-style-overlay'>
              <h4>Bay And Bow <br/>Windows</h4>
              <p>Bay and bow windows extend outward, creating more space and panoramic views. Ideal for added light and charm, they enhance both interior design and exterior aesthetics.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={CustomShaped} alt='Custom Shaped Windows'/>
            <div className='window-style-overlay'>
              <h4>Custom Shaped <br/>Windows</h4>
              <p>Custom-shaped windows provide unique architectural accents, tailored to fit specific designs. Ideal for adding character and creativity, they suit any home’s style while enhancing light and aesthetics.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Garden} alt='Garden Windows'/>
            <div className='window-style-overlay'>
              <h4>Garden Windows</h4>
              <p>Garden windows extend outward, creating a mini greenhouse for plants. Perfect for kitchens or sunlit spaces, they enhance charm, light, and functionality in any home.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>

          <div className='window-style'>
            <img src={Storefront} alt='Storefront Windows'/>
            <div className='window-style-overlay'>
              <h4>Storefront Windows</h4>
              <p>Storefront windows offer sleek, expansive glass panels ideal for commercial spaces. They maximize visibility, natural light, and curb appeal, enhancing both customer experience and business aesthetics.</p>
              <Link to='/contact'>Book Your Assessment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesWindowStyles
