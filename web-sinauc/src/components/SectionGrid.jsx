import "../styles/section-grid.css";

export default function SectionGrid({ title, subtitle, items, id }) {
  return (
    <section id={id} className="sg">
      <div className="sg__head">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className="sg__grid">
        {items.map((it, idx) => (
          <article className="sg__card" key={idx}>
            <h3>{it.title}</h3>
            {it.desc && <p>{it.desc}</p>}
            {it.bullets && (
              <ul>
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
