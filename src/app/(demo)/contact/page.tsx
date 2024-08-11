/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function ContactPage() {
  return (
    <>
      <main className="w-full h-[200dvh] bg-[#161d26]">
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
                    Contact
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ContentLayout>
        </div><section className="px-8">
  <h1 className="text-white text-[52px] leading-[60px]">
    Solicita aqui el servicio de 
    <span className="text-[#fcd765]"> TaxiPark </span>
  </h1>
  <div className="mt-8 text-white">
    <p className="text-[18px] leading-[26px]">
      Bienvenido al portal web del servicio de transporte al Aeropuerto de Tababela en Quito, Ecuador. Nuestro portal corporativo colabora estrechamente con <span className="text-[#fcd765]">TaxiPark</span>, asegurando que recibas el mejor servicio posible.
    </p>
    <p className="mt-4 text-[18px] leading-[26px]">
      Si deseas adquirir el servicio de taxi, puedes contactarnos a través del siguiente correo electrónico: <a href="mailto:taxiaeropuertotababela@gmail.com" className="text-[#fcd765]">taxiaeropuertotababela@gmail.com</a> o llamarnos al número: <a href="tel:+593983838735" className="text-[#fcd765]">+593983838735</a>.
    </p>
    <p className="mt-4 text-[18px] leading-[26px]">
      <span className="text-[#fcd765]">Taxi Tababela Aeropuerto</span> es una empresa de transporte terrestre con amplia experiencia en el sector. Ofrecemos un servicio rápido, de calidad y con excelente atención a un precio asequible. Nuestro servicio de taxi te llevará hasta tu destino con seguridad, además de que podrás beneficiarte de nuestras atractivas tarifas. Reserva hoy mismo en línea, a través de nuestro WhatsApp, o vía telefónica. No dudes en contactarnos en caso de cualquier pregunta.
    </p>
  </div>
</section>



      </main>
    </>
  );
}
