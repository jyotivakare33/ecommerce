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
                <img src={user} alt="" className="header-right" />
                <img src={cart} alt="" className="header-right" />
            </header>
        </div>
    );
}

export default Header;
