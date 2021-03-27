import logo from '../images/logo.png';
import user from '../images/user.png';
import cart from '../images/cart.png';

function Header() {
    return (
        <div>
            <header>
                <img src={logo} className="logo" alt="logo" />
                <a href="/men" className="nav-links">
                    Men
                </a>
                <a href="/" className="nav-links">
                    Women
                </a>
                <a href="/" className="nav-links">
                    Electronics
                </a>
                <a href="/" className="nav-links">
                    Jewellery
                </a>
                <a href = "/login"> 
                <img src={user} alt="" href="/checkout" className="header-right" />
                </a>
                <a href = "/checkout"> 
                <img src={cart} alt="" className="header-right" /></a>
            </header>
        </div>
    );
}

export default Header;
