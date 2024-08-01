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
        </div>
        <section className="px-8">
          {/* aqui va el contenido del componente */}
          <h1 className="text-white pb-10 text-[52px] leading-[60px] ">
            I'm a freelance UI/UX designer and 
            <span className="text-[#fcd765] "> began my career in web and front-end development in 2015. </span> 
            I later transitioned into the design
            field, driven by a passion for web design, UI/UX, branding, and
            mobile application projects.
          </h1>
          <div className="flex items-center gap-40 justify-start">
            <div className="w-[200px] gap-4 grid grid-cols-2">
            {/* aqui va el imagenes */}
            <img className="w-[82.75px] h-[108.99px]" src="https://alextkachev.com/media/pages/about/96a9fdfbec-1696257209/loader-3-275x360-crop-q72.jpg" alt="" />
            <img className="w-[82.75px] h-[108.99px]" src="https://alextkachev.com/media/pages/about/8af628ea4e-1696257209/loader-2-275x360-crop-q72.jpg" alt="" />
            <img className="w-[82.75px] h-[108.99px]" src="https://alextkachev.com/media/pages/about/fe3585e56e-1696257209/loader-4-275x360-crop-q72.jpg" alt="" />
            </div>
            <div className="text-sm w-[500px] flex flex-col gap-6 uppercase text-white">
            {/* aqui va el texto */}
            <p>I was born and raised in a small town in Kazakhstan called Kyzylorda. When I enrolled in college in 2014 at the age of 15, I wasn’t sure what I wanted to do with my life. Initially, I thought my profession would be related to the railway industry. And Before delving into the world of web development and design, I also worked as a waiter.</p>
            <p>As a junior web developer I realized that I enjoyed the creative aspect of my work more, and I made a full transition into the field of design. Since then, I have worked as a freelancer on platforms like upwork and collaborated with companies and clients on a full-time or contract basis. I’ve worked with prominent companies and clients.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
