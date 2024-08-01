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
        </div>
        <section className="px-8">
          {/* aqui va el contenido del componente */}
          <h1 className="text-white text-[52px] leading-[60px] ">
            Esta es la pagina de 
            <span className="text-[#fcd765] "> contacto </span> 
          </h1>
        </section>
      </main>
    </>
  );
}
