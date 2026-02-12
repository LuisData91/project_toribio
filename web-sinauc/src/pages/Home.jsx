import SliderHero from "../components/SliderHero";
import SectionGrid from "../components/SectionGrid";
import { services } from "../data/services";
import { company } from "../data/company";
import { productsIntro, products } from "../data/productsFull";
import ProductSection from "../components/ProductSection";
import ServiceShowcase from "../components/ServiceShowcase";
import "../styles/home.css";
import img1 from "../assets/images/1.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img6 from "../assets/images/6.jpg";


export default function Home() {
  const showcases = [
    {
      title: "Servicios generales",
      text:
        "Brindamos soluciones integrales en automatización e instrumentación industrial, que incluyen la fabricación de tableros eléctricos bajo estándares técnicos y de seguridad, así como la instalación y montaje electromecánico de instrumentos y válvulas de control. Realizamos diagnóstico, configuración y respaldo (backup) de equipos de campo utilizando protocolos industriales como HART, Foundation Fieldbus y PROFIBUS PA, asegurando la continuidad operativa de los procesos.",
      images: ["A1.png", "A7.jpg", "A3.jpg"],
    },
    {
      title: "Calibraciones",
      text:
        "Contamos con patrones de calibración certificados y plenamente trazables al INACAL, lo que asegura mediciones confiables, precisas y reconocidas a nivel nacional. Nuestro servicio incluye la verificación y ajuste de los equipos para garantizar que los errores se mantengan dentro de los límites permisibles establecidos por las normas técnicas aplicables. Emitimos certificados de calibración respaldados técnicamente.",
      images: ["A4.jpg", "A5.jpg", "A6.png"],
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
              Hydraulic Industrial Automation Perú ofrece soluciones integrales en automatización, instrumentación e hidráulica móvil industrial. 
              Combinamos productos de alta calidad con soporte técnico especializado para proyectos, puesta en marcha y mantenimiento.
              Nuestro compromiso es entregar soluciones eficientes, seguras y competitivas que impulsen la productividad de nuestros clientes en el mercado
              nacional e internacional.
            </p>

            <div className="about__mv">
              <div className="about__box">
                <h3>Misión</h3>
                <p>
                  Consolidarnos como Hydraulic Industrial Automation Perú, empresa de prestigio reconocida por la excelencia de sus 
                  productos y servicios, y por su competitividad y eficiencia en los mercados nacional e internacional.
                </p>
              </div>
              <div className="about__box">
                <h3>Visión</h3>
                <p>
                  Comercializar productos y servicios, diseñar y fabricar sistemas industriales tecnológicos,
                  y desarrollar nuestras líneas de negocio ofreciendo soluciones confiables, innovadoras y rentables basadas en tecnología de vanguardia.
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
        subtitle="Soluciones hidráulicas, automatización e instrumentación industrial y equipos móviles."
        items={services}
      />
  {/* ================= COMPONENTES (OPCIÓN 1) ================= */}
<section className="components">
  <div className="components__inner">
    <div className="components__head">
      <h2>Componentes hidráulicos con los que trabajamos</h2>
      <p>
        Trabajamos con soluciones para aplicaciones industriales, minería y maquinaria móvil.
        Seleccionamos, integramos y optimizamos equipos según tu necesidad.
      </p>
    </div>

    <div className="components__grid">
      <article className="compCard">
        <div className="compCard__img">
          {/* <img src="/assets/images/1.png" alt="Unidad hidráulica / HPU" loading="lazy" /> */}
          <img src={img1} alt="Unidad hidráulica / HPU" loading="lazy" />
        </div>
        <h3>Unidades hidráulicas (HPU)</h3>
        <p>Diseño, fabricación, puesta en marcha y mantenimiento.</p>
      </article>

      <article className="compCard">
        <div className="compCard__img">
          <img src={img3} alt="Bloques hidráulicos" loading="lazy" />
        </div>
        <h3>Bloques hidráulicos</h3>
        <p>Soluciones compactas para circuitos eficientes y confiables.</p>
      </article>

      <article className="compCard">
        <div className="compCard__img">
          {/* <img src="/assets/images/4.png" alt="Válvulas proporcionales" loading="lazy" /> */}
          <img src={img4} alt="Válvulas proporcionales" loading="lazy" />
        </div>
        <h3>Válvulas proporcionales</h3>
        <p>Regulación fina y control estable para procesos críticos.</p>
      </article>

      <article className="compCard">
        <div className="compCard__img">
          {/* <img src="/assets/images/6.png" alt="Bombas hidráulicas" loading="lazy" /> */}
          <img src={img6} alt="Bombas hidráulicas" loading="lazy" />
        </div>
        <h3>Bombas hidráulicas</h3>
        <p>Selección, diagnóstico y reparación para alto desempeño.</p>
      </article>
    </div>

    {/* <div className="components__cta">
      <a className="btnPrimary" href={company.whatsappLink} target="_blank" rel="noreferrer">
        Consultar disponibilidad
      </a>
      <a className="btnGhost" href="#contacto">
        Hablar con un especialista
      </a>
    </div> */}
  </div>
</section>
{/* ================= FIN COMPONENTES ================= */}



      {/* ================= SERVICIOS Y PROYECTOS (CAMBIOS) ================= */}
        <section id="servicios-proyectos" className="srvSales">
          <div className="srvSales__inner">
            <div className="srvSales__head">
              <h2>Servicios y Proyectos</h2>
              <p className="srvSales__sub">
                Soluciones técnicas para automatización, instrumentación y soporte industrial.
              </p>
            </div>

            <div className="srvSales__grid">
              {/* HIDRÁULICA INDUSTRIAL */}
              <article className="srvCard">
                <div className="srvCard__top">
                  <span className="srvBadge">🔧</span>
                  <h3>Hidráulica industrial</h3>
                </div>

                <p className="srvCard__lead">Servicios que puedes realizar:</p>
                <ul className="srvList">
                  <li>Diagnóstico y optimización de sistemas hidráulicos industriales.</li>
                  <li>Puesta en marcha y comisionamiento de unidades hidráulicas (HPU).</li>
                  <li>Regulación y calibración de válvulas proporcionales y servoválvulas.</li>
                  <li>Ajuste y parametrización de tarjetas Rexroth (VT-MSPA, VT-VSPA, VT-HACD, etc.).</li>
                  <li>Análisis de presión, caudal y temperatura (eficiencia energética).</li>
                  <li>Migración de control ON/OFF a control proporcional.</li>
                  <li>Integración hidráulica con PLC (Siemens, Rockwell).</li>
                  <li>Capacitación técnica a mantenimiento y operación.</li>
                </ul>

                <p className="srvCard__lead">Proyectos típicos:</p>
                <ul className="srvList">
                  <li>Control de presión y velocidad en prensas hidráulicas.</li>
                  <li>Modernización de sistemas hidráulicos obsoletos.</li>
                  <li>Implementación de control en lazo cerrado (presión/posición).</li>
                  <li>Retrofit de HPU con control electrónico proporcional.</li>
                  <li>Solución de inestabilidad hidráulica (oscilaciones, golpes de ariete).</li>
                </ul>

                <a className="srvCard__cta" href={company.whatsappLink} target="_blank" rel="noreferrer">
                  Solicitar evaluación
                </a>
              </article>

              {/* HIDRÁULICA INDUSTRIAL – MINERÍA */}
              <article className="srvCard">
                <div className="srvCard__top">
                  <span className="srvBadge">⛏️</span>
                  <h3>Hidráulica industrial – Minería</h3>
                </div>

                <p className="srvCard__lead">Servicios especializados:</p>
                <ul className="srvList">
                  <li>Diagnóstico integral de sistemas hidráulicos en plantas mineras.</li>
                  <li>Soporte técnico en equipos críticos de proceso.</li>
                  <li>Ajuste fino para operación continua 24/7.</li>
                  <li>Análisis de fallas repetitivas y paradas no programadas.</li>
                  <li>Optimización de presión y caudal para reducción de desgaste.</li>
                  <li>Integración con instrumentación industrial.</li>
                  <li>Supervisión técnica de montajes y comisionamientos.</li>
                </ul>

                <p className="srvCard__lead">Proyectos y equipos:</p>
                <ul className="srvList">
                  <li>Apron Feeder y Belt Feeder (control de torque y velocidad).</li>
                  <li>Espesadores (control hidráulico de rake drive).</li>
                  <li>Clarificadores.</li>
                  <li>Sistemas de lubricación para molinos.</li>
                  <li>Filtros prensa (cierre, apertura y presión de filtrado).</li>
                  <li>Sistemas con accionamientos Hägglunds.</li>
                  <li>HPU minería de alta potencia y sistemas redundantes.</li>
                </ul>

                <a className="srvCard__cta" href={company.whatsappLink} target="_blank" rel="noreferrer">
                  Cotizar servicio minero
                </a>
              </article>

              {/* HIDRÁULICA MÓVIL */}
              <article className="srvCard">
                <div className="srvCard__top">
                  <span className="srvBadge">🚜</span>
                  <h3>Hidráulica móvil</h3>
                </div>

                <p className="srvCard__lead">Servicios que puedes ofrecer:</p>
                <ul className="srvList">
                  <li>Diagnóstico de sistemas hidráulicos móviles.</li>
                  <li>Ajuste y calibración de válvulas proporcionales móviles.</li>
                  <li>Análisis de pérdidas de potencia hidráulica.</li>
                  <li>Soporte en sistemas de tracción y trabajo.</li>
                  <li>Integración hidráulica con control electrónico.</li>
                  <li>Capacitación técnica para mantenimiento en campo.</li>
                </ul>

                <p className="srvCard__lead">Equipos y proyectos típicos:</p>
                <ul className="srvList">
                  <li>Maquinaria pesada (cargadores, excavadoras, equipos auxiliares).</li>
                  <li>Bombas de pistones de caudal variable.</li>
                  <li>Válvulas load sensing y control de caudal.</li>
                  <li>Sistemas de freno y dirección hidráulica.</li>
                  <li>Retrofit de control mecánico a electrónico.</li>
                </ul>

                <a className="srvCard__cta" href={company.whatsappLink} target="_blank" rel="noreferrer">
                  Agendar visita técnica
                </a>
              </article>
            </div>

            {/* “FORMAS” / OFERTA RÁPIDA (A-F) */}
            <div className="srvForms">
              <h3 className="srvForms__title">¿Qué podemos hacer por tu operación?</h3>
              <p className="srvForms__subtitle">
                Elige tu necesidad y te proponemos una solución con tiempos y alcance definidos.
              </p>

              <div className="srvForms__grid">
                {[
                  "Fabricación, diseño y mantenimiento de unidades hidráulicas (UPH).",
                  "Diseño de sistemas de bombeo de alta y baja presión.",
                  "Venta de componentes hidráulicos para equipo móvil e industrial.",
                  "Servicio de reparación de bombas y motores hidráulicos.",
                  "Dializado y análisis de aceite hidráulico.",
                  "Fabricación y diseño de tableros de control automatizados.",
                ].map((t, i) => (
                  <div key={i} className="srvChip">
                    <span className="srvChip__dot" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              {/* <div className="srvForms__actions">
                <a className="btnPrimary" href={company.whatsappLink} target="_blank" rel="noreferrer">
                  Pedir cotización
                </a>
                <a className="btnGhost" href="#contacto">
                  Hablar con un especialista
                </a>
              </div> */}
            </div>
          </div>
        </section>
        {/* ================= FIN BLOQUE NUEVO ================= */}


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
              <p>Job.toribio@hiaperu.com</p>
              <p>
                <b>Dirección:</b> Av. Ricardo Palma 832, Urb. San Joaquín,
                Bellavista - Callao
              </p>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="Ubicación HIA"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.902720891648!2d-77.09267580038504!3d-12.056903543506982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce400a437c0d%3A0xb2447a16922d8919!2sSINAUC!5e0!3m2!1ses-419!2spe!4v1769394551699!5m2!1ses-419!2spe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.0066931022074!2d-77.09121749552399!3d-12.056975685793832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c95ad19a900f%3A0x21de719b83b8ce53!2sJr.Ricardo%20Palma%20832%2C%20Bellavista%2007006!5e0!3m2!1ses-419!2spe!4v1770872181529!5m2!1ses-419!2spe"
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
