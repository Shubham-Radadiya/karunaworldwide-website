import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

const EMAIL = 'karunaworldwidellp@gmail.com';
const ADDRESS = 'A/321, Sun Trade Center, Near Gujarat Gas, Char Rasta, Vapi - 396195';
const PHONE_1 = '9023260875';
const PHONE_2 = '9978895557';

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="logo-link" aria-label="Karuna Worldwide LLP - Home">
            <img
              src="/logo.png"
              alt=""
              className="logo-img"
              width="80"
              height="80"
              fetchPriority="high"
            />
            <span className="logo-text">
              <span className="logo-text-main">KARUNA</span>
              <span className="logo-text-sub">WORLDWIDE LLP</span>
            </span>
          </NavLink>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner container">
          <div className="footer-grid">
            <div>
              <h4>Quick Links</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`tel:+91${PHONE_1}`}>+91 {PHONE_1}</a>
              <a href={`tel:+91${PHONE_2}`}>+91 {PHONE_2}</a>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{ADDRESS}</p>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Karuna Worldwide LLP. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
