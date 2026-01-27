import MiniSlider from "./MiniSlider";
import "../styles/service-showcase.css";

export default function ServiceShowcase({ title, text, images = [] }) {
  return (
    <section className="showcase">
      <div className="showcase__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className="showcase__media">
        <MiniSlider images={images} alt={title} autoMs={4500} />
      </div>
    </section>
  );
}
