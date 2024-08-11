export default function NotFound() {

  return (
    <>
      <div className="text absolute translate-x-[-50%] mt-20 translate-y-[-50%] left-[50%] ">
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div className="mt-2">Creo que te has perdido explorando la pagina</div>
      </div>

      <div className="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt=""
          className="src"
        />
      </div>
    </>
  );
}
