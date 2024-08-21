

export default function AboutUsPage() {
  return (
    <>
      <main className="w-full border-[#283444] h-[260dvh] bg-[#161d26] -z-50">
        <section className="px-8 absolute translate-x-[-50%] left-[60%] top-36">
          <h1 className="text-white text-center pb-10 text-[52px] leading-[60px]">
            Sobre nosotros
          </h1>
          <div className="flex gap-5 flex-col-reverse items-center">
            {/* aquí van las imágenes */}
            <img
              className=""
              src="https://i.ibb.co/6XGqC40/taxi-mejoradp.png"
              alt="Imagen 1"
            />
            <div className="text-sm w-[800px] flex flex-col gap-6 text-white">
              {/* aquí va el texto */}
              <p className="text-center text-[#ffffff7e] text-lg">
                Somos TaxiPark, una empresa dedicada al servicio de transporte
                terrestre con amplia experiencia en el sector. Nos
                especializamos en ofrecer un servicio rápido, de calidad y con
                excelente atención a un precio asequible.
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-center gap-8">
            <ul className="flex items-center justify-center gap-10">
              <li className="w-[506px] text-white h-[407px]">
                <h1>MISION</h1>
                <h2 className="text-[#ffffff80] ">
                  {" "}
                  Nuestra misión es simplificar la experiencia de viaje de
                  nuestros clientes, ofreciendo una gama completa de servicios
                  aeroportuarios personalizados y eficientes. <br />
                  <br /> A través de nuestra plataforma digital, buscamos
                  conectar a los pasajeros con el mejor viaje tranquilo y sin
                  contratiempos.
                  <br />
                  <br /> Ademas de siempre comunicarnos con nuestros clientes
                  por medio de la plataforma de Whatsapp para asi mas facilidad
                  de todos los usuarios que requieren de nuestro servicio.
                </h2>
              </li>
              <li>
                <img
                  className="h-[407px]"
                  src="https://i.pinimg.com/736x/47/b0/08/47b0081ec1713ea5285743cf098ac172.jpg"
                  alt=""
                />
              </li>
            </ul>

            <ul className="flex flex-row-reverse items-center justify-center gap-10">
              <li className="w-[506px] text-white h-[407px]">
                <h1>VISION</h1>
                <h2 className="text-[#ffffff80] ">
                  Ofrecer un servicio de transporte de alta calidad hacia el
                  aeropuerto de Quito, priorizando la puntualidad, seguridad y
                  confort de nuestros clientes. <br />
                  <br />A través de una plataforma web fácil de usar y con
                  múltiples opciones de reserva, contribuyendo a que cada viaje
                  sea una experiencia agradable y sin preocupaciones.
                  <br />
                  <br />
                  ademas de siempre comunicarnos con nuestros clientes por medio
                  de la plataforma de Whatsapp para asi mas facilidad de todos
                  los usuarios que requieren de nuestro servicio.
                </h2>
              </li>
              <li>
                <img
                  className="h-[407px]"
                  src="https://i.pinimg.com/564x/24/d7/bd/24d7bdffd3a388dc6c408229befca550.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <div className="w-full px-16">
        <div className="w-full h-[1px] -mt-10 px-20 bg-[#283444]">

        </div>
      </div>
    </>
  );
}
