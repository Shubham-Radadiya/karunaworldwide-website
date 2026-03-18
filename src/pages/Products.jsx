import Seo from '../components/Seo';

const products = [
  {
    id: 1,
    name: 'Office and Copier Paper',
    description: 'Reliable office and copier paper for everyday use. A market leader in office papers, designed for professional documents and seamless printing.',
    icon: '📋',
  },
  {
    id: 2,
    name: 'Writing and Printing Paper',
    description: 'High-quality writing and printing paper for publishing, education, and commercial print. Crafted for clarity and durability.',
    icon: '📄',
  },
  {
    id: 3,
    name: 'Coated Paper and Boards',
    description: 'Premium coated paper and boards for high-end print and packaging applications. Superior finish and consistency.',
    icon: '✨',
  },
  {
    id: 4,
    name: 'Packaging Board Solutions',
    description: 'Durable packaging board solutions for cartons, boxes, and protective packaging. Built for strength and sustainability.',
    icon: '📦',
  },
  {
    id: 5,
    name: 'Carton Board, Container Board & Labels',
    description: 'Carton board, container board, and labels solutions for diverse industrial and consumer packaging needs.',
    icon: '🏷️',
  },
];

export default function Products() {
  return (
    <>
      <Seo
        title="Our Products | Karuna Worldwide LLP - Paper & Packaging Solutions"
        description="Office and copier paper, writing and printing paper, coated paper and boards, packaging board solutions. Market leader in paper products. Karuna Worldwide LLP."
        path="/products"
      />
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Paper connects us in so many ways to the important things in life.</p>
      </div>

      <section className="section container">
        <p className="section-subtitle" style={{ marginBottom: '0.5rem' }}>
          A market leader in Office Papers, Coated Papers, Writing and Printing Papers, and High-end Packaging Boards. Our solutions are designed to integrate seamlessly into daily life.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="thumb">{product.icon}</div>
              <div className="body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
