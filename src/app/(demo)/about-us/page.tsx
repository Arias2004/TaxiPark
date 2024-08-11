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

export default function AboutUsPage() {
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
                    About Us
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ContentLayout>
        </div><section className="px-8">
  <h1 className="text-white pb-10 text-[52px] leading-[60px]">
    Conoce más sobre nosotros
    <span className="text-[#fcd765]"> y nuestro compromiso con la calidad y el servicio.</span>
  </h1>
  <div className="flex items-center gap-40 justify-start">
    <div className="w-[200px] gap-4 grid grid-cols-2">
      {/* aquí van las imágenes */}
      <img className="w-[82.75px] h-[108.99px]" src="https://i.pinimg.com/564x/33/36/5e/33365e5db531e8c8f0456eb1bc5b0ef1.jpg" alt="Imagen 1" />
      <img className="w-[82.75px] h-[108.99px]" src="https://i.pinimg.com/564x/66/65/8c/66658c70494a46aabd008ef78e3f7ed0.jpg" alt="Imagen 2" />
      <img className="w-[82.75px] h-[108.99px]" src="https://i.pinimg.com/564x/a4/54/77/a454776e499427ef11ca00e7cd967dfe.jpg" alt="Imagen 3" />
      <img className="w-[82.75px] h-[108.99px]" src="https://www.aeropuertoquito.aero/wp-content/uploads/2023/03/preparate-transporte.jpg" alt="Transporte Aeropuerto" />
    </div>
    <div className="text-sm w-[500px] flex flex-col gap-6 text-white">
      {/* aquí va el texto */}
      <p>Somos TaxiPark, una empresa dedicada al servicio de transporte terrestre con amplia experiencia en el sector. Nos especializamos en ofrecer un servicio rápido, de calidad y con excelente atención a un precio asequible.</p>
      <p>Iniciamos nuestras operaciones con la misión de proporcionar un transporte seguro y cómodo hacia y desde el Aeropuerto de Tababela en Quito, Ecuador. Nuestra alianza con <span className="text-[#fcd765]">TaxiPark</span> nos permite garantizar la máxima calidad en cada viaje.</p>
      <p>Además de nuestro compromiso con la seguridad y el confort, ofrecemos tarifas atractivas y la posibilidad de realizar reservas de forma sencilla y rápida a través de nuestro portal web, WhatsApp, o correo electrónico.</p>
      <p>Estamos aquí para resolver cualquier duda o inquietud que puedas tener, y te invitamos a conocer más sobre nosotros y nuestro servicio en esta sección.</p>
    </div>
  </div>
</section>

      </main>
    </>
  );
}
