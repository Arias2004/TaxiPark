import Footer from "@/components/Footer/Index";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1478439972937-1d573678f39c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
      className="bg-center bg-cover bg-no-repeat p-10 bg-[#12181f] relative text-white w-full h-dvh grid place-content-center"
    >
      <div className="absolute top-4 right-4 flex gap-4">
        <Link href="/auth/login">
          <svg
            className="text-white hover:text-[#f7ec07] transition-all ease-in duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            />
          </svg>
        </Link>
        <Link href="/about-us">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white hover:text-[#f7ec07] transition-all ease-in duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </Link>
      </div>
      <div className="absolute top-4 left-4">
        <h1 className="text-8xl text-[#ffffff25] font-black">TaxiPark</h1>
      </div>
      <footer className=" bg-[#12181f] text-white ">
        <ul className="absolute translate-y-[-50%] translate-x-[-50%] left-[50%] top-[75%] w-[1200px] px-28 gap-x-8 items-center justify-between flex">
          <li className="cursor-pointe text-sm ">
            <a href="#intro">Inicio</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#nosotros">Sobre Nosotros</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#contacto">Contacto</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#mision">Misión</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#marcas">Nuestras marcas</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#vision">Visión</a>
          </li>
          <li className="cursor-pointer text-sm ">
            <a href="#noticias">Noticias</a>
          </li>
        </ul>
        <div className="text-[11px] w-[1200px] absolute translate-y-[-50%] translate-x-[-50%] left-[50%] top-[80%] mt-10 gap-10 grid place-content-center">
          <ul className="flex place-content-center gap-x-4">
            <li>TIKTOK</li>
            <li>INSTAGRAM</li>
            <li>FACEBOOK</li>
            <li>X</li>
            <li>PINTEREST</li>
            <li>YOUTUBE</li>
            <li>SPOTIFY</li>
          </ul>
        </div>
        <div className="text-[10px] w-[1200px] absolute translate-y-[-50%] translate-x-[-50%] left-[50%] bottom-5">
          <ul className="flex items-center justify-center gap-x-4">
            <li>CONFIGURACIÓN DE COOKIES</li>
            <li>POdivTICA DE PRIVACIDAD Y COOKIES</li>
            <li>CONDICIONES DE COMPRA</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}
