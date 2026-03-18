import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const CYCLE_STEPS = [
  { num: 'Step 1', title: 'Sapling Distribution', desc: 'We provide Subabul, Casuarina and Eucalyptus saplings to the farmers' },
  { num: 'Step 2', title: 'Agro-Social Farm Forestry', desc: 'Farmers grow the saplings on their farmland' },
  { num: 'Step 3', title: 'Harvesting', desc: 'Farmers harvest the planted trees' },
  { num: 'Step 4', title: 'Sustainable Sourcing', desc: 'We procure the harvested raw material from the farmers hence not harming a single natural forest tree' },
  { num: 'Step 5', title: 'State-of-the-Art Manufacturing', desc: 'Wood is processed to make paper' },
  { num: 'Step 6', title: 'Our Sustainable Solutions', desc: 'We manufacture paper based sustainable solutions for everyday use' },
  { num: 'Step 7', title: 'Returning to Nature', desc: 'All our products are biodegradable, designed to decompose naturally.' },
];

const HOME_PRODUCTS = [
  { name: 'Office and Copier Paper', to: '/products' },
  { name: 'Writing and Printing Paper', to: '/products' },
  { name: 'Coated Paper and Boards', to: '/products' },
  { name: 'Packaging Board Solutions', to: '/products' },
  { name: 'Carton Board, Container Board & Labels', to: '/products' },
];

const CSR_PILLARS = [
  "Women's Empowerment",
  'Community Healthcare',
  'Holistic Education',
  'Youth Engagement',
  'Sustainable Farming',
  'Sustainable Environment',
];

export default function Home() {
  return (
    <>
      <Seo
        title="Karuna Worldwide LLP | Enriching Lives with Responsibly Made Paper & Packaging"
        description="Leading paper and packaging solutions. Sustainable, eco-friendly paper products for office, printing, and packaging. Enriching lives with responsibly made solutions for over eight decades."
        path="/"
      />

      {/* Hero - full width, JK style */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1>Enriching Lives with Responsibly Made Solutions</h1>
          <p className="tagline">
            For over eight decades, we've reimagined the role of paper and packaging, creating sustainable solutions that add purpose to everyday life. From communication to convenience, our eco-friendly alternatives are crafted to meet modern needs while respecting the planet. What began as a bold vision has grown into a trusted presence, shaping experiences, creating value, and touching lives through sustainable innovation.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              About Us
            </Link>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <span className="value">80+</span>
              <span className="label">Years</span>
            </div>
            <div className="stat-item">
              <span className="value">800K+</span>
              <span className="label">People</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability isn't an Initiative */}
      <section className="section--full">
        <div className="container">
          <h2 className="section-title">Sustainability isn't an Initiative, It's Our Foundation</h2>
          <p className="section-subtitle">
            From how we source to how we innovate, every decision is guided by long-term thinking and a deep respect for the world we're part of.
          </p>
          <div className="home-stats">
            <div className="stat-item">
              <span className="value">0+</span>
              <span className="label">Farmer families benefited</span>
            </div>
            <div className="stat-item">
              <span className="value">0 Lac+</span>
              <span className="label">Acres of land planted</span>
            </div>
            <div className="stat-item">
              <span className="value">0 Cr+</span>
              <span className="label">Trees planted</span>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/about" className="btn btn-primary">
              Explore Sustainability
            </Link>
          </div>
        </div>
      </section>

      {/* Regenerative Cycle */}
      <section className="section--full" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">A Regenerative Cycle Rooted in Responsibility</h2>
          <p className="section-subtitle">
            From planting saplings to creating biodegradable solutions, our process is designed to give back more than it takes. Every step is part of a conscious loop, nurturing the land, empowering communities, and crafting with care for a better tomorrow.
          </p>
          <div className="cycle-steps">
            {CYCLE_STEPS.map((step, i) => (
              <div key={i} className="cycle-step">
                <span className="step-num">{step.num}</span>
                <h4>{step.title}</h4>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/about" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainable Solutions - Products */}
      <section className="section--full">
        <div className="container">
          <h2 className="section-title">Sustainable Solutions that Create Lasting Impressions</h2>
          <p className="section-subtitle">
            From homes and offices to packaging and industries, our solutions are designed to integrate seamlessly into daily life. With a strong focus on quality and conscious innovation, we deliver products that perform with purpose.
          </p>
          <div className="home-products">
            {HOME_PRODUCTS.map((product, i) => (
              <div key={i} className="home-product-item">
                <h4>{product.name}</h4>
                <Link to={product.to}>Explore</Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Impact banner */}
      <section className="impact-banner">
        <p>
          Positively impacting your daily life by promoting a healthier & eco-friendly environment without harming any forest.
        </p>
      </section>

      {/* Eight Decades - Manufacturing */}
      <section className="section--full" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">Eight Decades of Responsible Manufacturing</h2>
          <p className="section-subtitle">
            For over 80 years, we've combined scale with conscience, producing close to 800,000 TPA across our integrated mills. Our manufacturing practices are rooted in precision, efficiency, and sustainability, enabling us to meet evolving needs while caring for the resources we depend on.
          </p>
          <div className="section-cta">
            <Link to="/about" className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="section--full">
        <div className="container">
          <h2 className="section-title">Education, Environment, Empowerment for a Sustainable Community</h2>
          <p className="section-subtitle">
            We believe that enriching lives extends beyond the products we manufacture. Our holistic CSR initiatives focus on empowering communities, fostering a healthier environment, and nurturing the potential of future generations.
          </p>
          <div className="csr-grid">
            {CSR_PILLARS.map((name, i) => (
              <div key={i} className="csr-pillar">
                <h4>{name}</h4>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/about" className="btn btn-primary">
              Explore Our CSR Initiatives
            </Link>
          </div>
        </div>
      </section>

      {/* Let's Talk - final CTA */}
      <section className="cta-strip">
        <div className="container">
          <h2>Let's Talk Paper</h2>
          <p>Join the Karuna Worldwide community. Get in touch for partnerships, product inquiries, or to know more about our sustainable solutions.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
