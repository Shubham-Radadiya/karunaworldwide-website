import Seo from '../components/Seo';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Karuna Worldwide LLP - Our Story & Sustainability"
        description="Our story is more than just paper. Eight decades of responsible manufacturing. Enriching lives and empowering mindful choices through sustainable paper and packaging."
        path="/about"
      />
      <div className="page-header">
        <h1>About Us</h1>
        <p>Our story is more than just paper. It's a story about enriching lives and empowering mindful choices.</p>
      </div>

      <section className="section container">
        <div className="about-content">
          <p>
            At Karuna Worldwide, our story is more than just paper. It's a story about enriching lives and empowering mindful choices. What began as a bold vision has grown into a trusted presence, shaping experiences, creating value, and touching lives through sustainable innovation.
          </p>

          <h2>Enriching Lives Today, for a Sustainable Tomorrow</h2>
          <p>
            For over eight decades, we've reimagined the role of paper and packaging, creating sustainable solutions that add purpose to everyday life. From communication to convenience, our eco-friendly alternatives are crafted to meet modern needs while respecting the planet.
          </p>

          <h2>Eight Decades of Responsible Manufacturing</h2>
          <p>
            For over 80 years, we've combined scale with conscience, producing close to 800,000 TPA across our integrated mills. Our manufacturing practices are rooted in precision, efficiency, and sustainability, enabling us to meet evolving needs while caring for the resources we depend on.
          </p>

          <h2>A Regenerative Cycle Rooted in Responsibility</h2>
          <p>
            From planting saplings to creating biodegradable solutions, our process is designed to give back more than it takes. Every step is part of a conscious loop—nurturing the land, empowering communities, and crafting with care for a better tomorrow.
          </p>

          <h2>Education, Environment, Empowerment</h2>
          <p>
            We believe that enriching lives extends beyond the products we manufacture. Our holistic initiatives focus on empowering communities, fostering a healthier environment, and nurturing the potential of future generations.
          </p>
        </div>
      </section>
    </>
  );
}
