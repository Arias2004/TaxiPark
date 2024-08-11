export default function FooterDemo() {
    return (
      <>
        <footer className="h-[50vh] bg-[#161d26] text-white relative">
  
          <ul className="absolute translate-y-[-50%] translate-x-[-50%] left-[50%] top-[50%] w-[1200px] px-28 gap-x-8 items-center justify-between flex">
            <li className="cursor-pointe text-xs ">
              <a href="#intro">Inicio</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#contacto">Contacto</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#mision">Misión</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#marcas">Nuestras marcas</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#vision">Visión</a>
            </li>
            <li className="cursor-pointer text-xs ">
              <a href="#noticias">Noticias</a>
            </li>
          </ul>
          <div className="text-[10px] w-[1200px] absolute translate-y-[-50%] translate-x-[-50%] left-[50%] top-[55%] mt-10 gap-10 grid place-content-center">
            <ul className="flex place-content-center gap-x-4">
              <li className="cursor-pointer">TIKTOK</li>
              <li className="cursor-pointer">INSTAGRAM</li>
              <li className="cursor-pointer">FACEBOOK</li>
              <li className="cursor-pointer">X</li>
              <li className="cursor-pointer">PINTEREST</li>
              <li className="cursor-pointer">YOUTUBE</li>
              <li className="cursor-pointer">SPOTIFY</li>
            </ul>
          </div>
          <div className="text-[9px] w-[1200px] absolute translate-y-[-50%] translate-x-[-50%] left-[50%] bottom-5">
            <ul className="flex items-center justify-center gap-x-4">
              <li className="cursor-pointer">CONFIGURACIÓN DE COOKIES</li>
              <li className="cursor-pointer">POdivTICA DE PRIVACIDAD Y COOKIES</li>
              <li className="cursor-pointer">CONDICIONES DE COMPRA</li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
  