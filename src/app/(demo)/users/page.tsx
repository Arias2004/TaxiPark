import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import styles from './UsersPage.module.css';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function UsersPage() {
  return (
    <>
      <div className="">
        <ContentLayout title="Dashboard">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    className="text-white hover:text-yellow-200 "
                    href="/auth/login"
                  >
                    Iniciar Sesión
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white hover:text-yellow-200 cursor-pointer">
                  Home
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Users
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ContentLayout>
      </div>

      {/* Main content */}
      <main className="w-full pt-[100px] h-[200dvh] bg-[#161d26]">
        <section className="px-8">
          <h1 className="text-white text-[52px] leading-[60px]">Users Page</h1>
          <div className="mt-8 text-white">
            <p className="text-[18px] leading-[26px]">
              Aquí se mostrará la información relacionada con los usuarios.
              Puedes gestionar, editar o visualizar detalles específicos de cada
              usuario registrado en el portal.
            </p>
          </div>
        </section>

        {/* Sección de íconos */}
        <section className="icon-container mt-12">
          <div className="icon-box">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="icon-box">
            <i className="fa-solid fa-cogs"></i>
          </div>
          <div className="icon-box">
            <i className="fa-solid fa-chart-line"></i>
          </div>
        </section>

        {/* Sección About */}
        <section className="about-container mt-12">
          <div className="img-frame">
            <img
              src="https://your-image-source-url.com"
              alt="About Us Image"
            />
          </div>
          <div className="hero-content">
            <h1>About Us</h1>
            <p>
              Aquí puedes añadir información sobre tu empresa, misión, visión,
              y cualquier otro dato relevante que desees compartir con tus
              usuarios.
            </p>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section className="project-container mt-12">
          <div className="project-box">
            <img
              src="https://your-image-source-url.com/project-image"
              alt="Project Image"
            />
            <div className="overlay">
              <span>Project Title</span>
              <button className="more-btn">More</button>
            </div>
          </div>
        </section>

        {/* Sección de Testimonios */}
        <section className="testimonial-container mt-12">
          <h1>What our clients say</h1>
          <div className="swiper">
            <div className="swiper-slide">
              <div className="user-info">
                <img
                  src="https://your-image-source-url.com/testimonial-image"
                  alt="User Image"
                />
                <h2>John Doe</h2>
              </div>
              <p>
                Este es un excelente servicio, altamente recomendado para
                cualquier persona que busque calidad y profesionalismo.
              </p>
            </div>
            <div className="swiper-btn-prev">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="swiper-btn-next">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </section>

        {/* Popup de Contacto */}
        <div className="popup hidden" id="contact">
          <div className="popup-container">
            <div className="popup-header">
              <div className="button-container">
                <button className="close-btn circle-btn red">
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <button className="close-btn circle-btn yellow">
                  <i className="fa-solid fa-window-minimize"></i>
                </button>
                <button className="maximize-btn circle-btn green">
                  <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </button>
              </div>
            </div>
            <div className="popup-body contact-container">
              <h1>Contact</h1>
              <form>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-box">
                  <textarea placeholder="Message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}
