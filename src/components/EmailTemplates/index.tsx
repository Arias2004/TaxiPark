
interface EmailTemplateProps {
  buttonUrl: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  buttonUrl
}) => (
      <div className="p-5 bg-white grid justify-items-center">
        <p className="text-center">
          <h1 className="text-3xl font-bold">Cambiar contraseña</h1>
          <p className="text-sm">
            <span className="font-bold">Hola,</span> te hemos enviado un enlace para cambiar tu contraseña.
          </p>
          <a className="m-3" href={buttonUrl}>
            {/* <img className="w-24 h-24" src="https://i.ibb.co/hZJfnTn/logo-removebg-preview.png" alt="Logo"/> */}
            cambiar contraseña
          </a>
        </p>
      </div>
)
  