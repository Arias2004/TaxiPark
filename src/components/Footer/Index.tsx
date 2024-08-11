export default function Footer() {
  return (
    <>
      <footer className="h-[100vh] bg-[#12181f] text-white relative">

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
    </>
  );
}
