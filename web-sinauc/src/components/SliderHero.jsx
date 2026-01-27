import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "../styles/slider.css";

import { heroSlides, homeCopy } from "../data/home";

export default function SliderHero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="heroSwiper"
      >
        {heroSlides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="heroSlide"
              style={{ backgroundImage: `url(${s.src})` }}
              aria-label={s.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="heroOverlay">
        <div className="heroContent">
          <p className="heroTag">{homeCopy.tagline}</p>
          <h1>{homeCopy.heroTitle}</h1>
          <p className="heroSub">{homeCopy.heroSubtitle}</p>
          <div className="heroActions">
            <a className="btnPrimary" href={homeCopy.whatsapp} target="_blank" rel="noreferrer">
              {homeCopy.ctaText}
            </a>
            <a className="btnGhost" href="#productos">
              Ver productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
