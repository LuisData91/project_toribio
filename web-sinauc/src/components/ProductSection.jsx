import "../styles/product-section.css";

export default function ProductSection({ title, bullets, images }) {
  return (
    <section className="productSection">
      <h3 className="productSection__title">{title}</h3>

      <div className="productSection__body">
        <div className="productSection__text">
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="productSection__images">
          {images.map((img, i) => (
            <div className="productSection__imgCard" key={i}>
              <img
                src={new URL(`../assets/images/${img}`, import.meta.url).href}
                alt={title}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
