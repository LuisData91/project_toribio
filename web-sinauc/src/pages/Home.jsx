import SliderHero from "../components/SliderHero";
import SectionGrid from "../components/SectionGrid";
import { services } from "../data/services";
import { company } from "../data/company";
import { productsIntro, products } from "../data/productsFull";
import ProductSection from "../components/ProductSection";
import ServiceShowcase from "../components/ServiceShowcase";
import "../styles/home.css";

export default function Home() {
  const showcases = [
    {
      title: "Servicios generales",
      text:
        "Brindamos soluciones integrales en automatización e instrumentación industrial, que incluyen la fabricación de tableros eléctricos bajo estándares técnicos y de seguridad, así como la instalación y montaje electromecánico de instrumentos y válvulas de control. Realizamos diagnóstico, configuración y respaldo (backup) de equipos de campo utilizando protocolos industriales como HART, Foundation Fieldbus y PROFIBUS PA, asegurando la continuidad operativa de los procesos.",
      images: ["A1.png", "A2.png", "A3.png"],
    },
    {
      title: "Calibraciones",
      text:
        "Contamos con patrones de calibración certificados y plenamente trazables al INACAL, lo que asegura mediciones confiables, precisas y reconocidas a nivel nacional. Nuestro servicio incluye la verificación y ajuste de los equipos para garantizar que los errores se mantengan dentro de los límites permisibles establecidos por las normas técnicas aplicables. Emitimos certificados de calibración respaldados técnicamente.",
      images: ["A4.png", "A5.png", "A6.png"],
    },
  ];

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <SliderHero>
        <div className="heroContent">
          <span className="heroEyebrow">
            HYDRAULIC INDUSTRIAL AUTOMATION
          </span>

          <h1>
            Soluciones hidráulicas e industriales
            <br />
            de alto desempeño
          </h1>

          <p>
            Productos y soporte técnico para aplicaciones industriales y móviles.
            <br />
            Calidad, confianza y respuesta rápida.
          </p>

          <a href="#productos" className="heroCta">
            Ver productos
          </a>
        </div>
      </SliderHero>
      {/* ================================================= */}

      {/* ================= NOSOTROS ================= */}
      <section id="nosotros" className="about">
        <div className="about__inner">
          <div>
            <h2>Nosotros</h2>
            <p>
              Somos una empresa orientada a brindar soluciones en automatización e
              instrumentación industrial, combinando productos de calidad y soporte técnico
              especializado para proyectos y mantenimiento.
            </p>

            <div className="about__mv">
              <div className="about__box">
                <h3>Misión</h3>
                <p>
                  Brindar soluciones confiables en automatización e hidráulica, con enfoque en
                  calidad, seguridad y satisfacción del cliente.
                </p>
              </div>
              <div className="about__box">
                <h3>Visión</h3>
                <p>
                  Ser un referente en soluciones industriales a nivel nacional por innovación,
                  servicio y excelencia técnica.
                </p>
              </div>
            </div>
          </div>

          <aside className="about__aside">
            <h3>Contacto rápido</h3>
            <p><b>Celular:</b> {company.phone}</p>
            <p><b>Correo:</b> {company.email}</p>
            <p><b>Dirección:</b> {company.address}</p>
            <p><b>Horario:</b> {company.hours}</p>

            <a
              className="btnPrimary"
              href={company.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Pedir cotización
            </a>
          </aside>
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <SectionGrid
        id="servicios"
        title="Servicios"
        subtitle="Soluciones técnicas para automatización, instrumentación y soporte industrial."
        items={services}
      />

      {/* ================= SHOWCASES ================= */}
      <div className="showcaseWrap">
        {showcases.map((s, i) => (
          <ServiceShowcase key={i} {...s} />
        ))}
      </div>

      {/* ================= PRODUCTOS ================= */}
      <section id="productos" className="productsWrap">
        <div className="productsWrap__inner">
          <h2>Productos destacados</h2>

          <div className="productsIntro">
            <p>{productsIntro.p1}</p>
            <p>{productsIntro.p2}</p>
          </div>

          {products.map((p, i) => (
            <ProductSection key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section id="contacto" className="contact">
        <div className="contact__inner">

          <div className="contact__left">
            <h2>Contáctanos</h2>
            <p>
              Cuéntanos tu necesidad y te ayudaremos a definir la mejor alternativa técnica.
            </p>

            <a
              href="https://wa.me/51962740682"
              target="_blank"
              rel="noreferrer"
              className="btnPrimary"
            >
              Escribir por WhatsApp
            </a>

            <div className="contact__data">
              <h3>Datos</h3>
              <p><b>Tel:</b> +51 962740682</p>
              <p><b>Email:</b> ingeniería.servicios@hiaperu.com</p>
              <p>
                <b>Dirección:</b> Av. Ricardo Palma 832, Urb. San Joaquín,
                Bellavista - Callao
              </p>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Ubicación HIA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.902720891648!2d-77.09267580038504!3d-12.056903543506982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce400a437c0d%3A0xb2447a16922d8919!2sSINAUC!5e0!3m2!1ses-419!2spe!4v1769394551699!5m2!1ses-419!2spe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </>
  );
}
