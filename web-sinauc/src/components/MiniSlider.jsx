import { useEffect, useMemo, useState } from "react";
import "../styles/mini-slider.css";

export default function MiniSlider({ images = [], alt = "Imagen", autoMs = 5000 }) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoMs);
    return () => clearInterval(t);
  }, [slides.length, autoMs]);

  const go = (i) => setIndex(i);

  if (!slides.length) return null;

  return (
    <div className="miniSlider">
      <div className="miniSlider__frame">
        <img
          src={new URL(`../assets/images/${slides[index]}`, import.meta.url).href}
          alt={alt}
          loading="lazy"
        />
      </div>

      {slides.length > 1 && (
        <div className="miniSlider__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ver imagen ${i + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
