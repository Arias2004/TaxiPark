import ButtonWhatsapp from "@/components/Whatsapp/Index";

export default function ContactPage() {
  return (
    <>
      <main className="w-full pt-[100px]  bg-[#161d26] flex justify-center items-start">
        <section className="w-full max-w-4xl p-8">
          <h1 className="text-white text-[52px] leading-[60px] text-center">
            Solicita aquí el servicio de
            <span className="text-[#fcd765]"> TaxiPark </span>
          </h1>
          <div className="mt-8 flex">
            {/* Formulario - Centro Izquierda */}
            <div className="w-1/2 pr-4">
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="block w-full mb-4 p-2 focus:outline-none  bg-transparent border-b border-[#e2b56a] text-white"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="block w-full mb-4 p-2 focus:outline-none  bg-transparent border-b border-[#e2b56a] text-white"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="block w-full mb-4 p-2 focus:outline-none  bg-transparent border-b border-[#e2b56a] text-white"
                />
                <textarea
                  placeholder="Message"
                  className="block w-full mb-4 p-2 focus:outline-none  bg-transparent border-b border-[#e2b56a] text-white"
                />
                <input
                  className="form-submit bg-[#fcd765] text-black py-2 px-4 cursor-pointer mt-4"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>

            {/* Información - Centro Derecha */}
            <div className="w-1/2 pl-4 text-white">
              <p>
                <span className="text-[#fcd765]">Phone:</span> +593 983838735
                <br />
                <span className="text-[#fcd765]">Email:</span>{" "}
                <a href="mailto:cutncurl@bigpond.net.au">
                  taxiaeropuertotababela@gmail.com
                </a>
              </p>
              <p className="mt-4">
                <span className="text-[#fcd765]">Horario Laborable</span>
              </p>
              <p>
                LUNES: 24H
                <br />
                MARTES: 24H
                <br />
                MIERCOLES: 24H
                <br />
                JUEVES: 24H
                <br />
                VIERNES: 24H
                <br />
                SABADO: 24H
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
