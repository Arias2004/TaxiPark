'use client';

import { Form } from "@/components/form";
import { IconHomeForm } from "@/components/IconHomeForm";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import { Resend } from "resend";

const resend = new Resend('re_ehbhz1Ma_Mjo7bPf6uriHEyVLWHruB2Rw');

export default function Login() {

    const { startLoading, finishLoading, isLoading } = useLoading();
    const authRouter = useAuthFetch();
    

    const handleLogin = async (formData: any) => {
        startLoading();
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'stevenjavierquihuires@gmail.com',
            subject: 'Confirmar tu inicio de sesión',
            react: <p>Has iniciado sesión en TaxiPark?</p>,
          })
        await authRouter({
            endpoint: "login",
            formData,
            redirectRoute: "/home",
        })
        finishLoading();
    }

    return ( 
        <>
            <main className="flex relative bg-[#12181f] w-full h-dvh items-center justify-center">
            <IconHomeForm params="/login" />
               {
                isLoading ?  
               <div className="absolute z-40 top-0 left-0 w-full h-dvh bg-black/20 grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="none" stroke="#fcd765" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                </div>

                : 

                <>
                    <div className="bg-[#fcd765] w-full h-dvh grid place-content-center">
                    <h1 className="text-white text-4xl font-bold">
                        Login
                    </h1>
                </div>
                <div className="w-full h-dvh grid place-content-center">
                    {/* AQUI VA EL FORMULARIO */}
                    <Form 
                    title='Iniciar sesion' 
                    description='Si ya creaste una cuenta, ingresa aquí para iniciar sesión' 
                    onSubmit={handleLogin}>

                        <Form.Input type="text" name="email" label="Email" placeholder="Ingresa tu email" />

                        <Form.Input type="password" name="password" label="Password" placeholder="Ingresa tu contraseña" />

                        <Form.SubmitButton buttonText="Iniciar sesión" isLoading={isLoading} />

                        <div className="flex flex-col items-center gap-2">
                            <Form.Footer description="Has olvidado su contraseña?" textLink="Recuperar" link="/auth/forget-password" />
                            <Form.Footer description="Aun no tienes cuenta?" textLink="Register" link="/auth/register" />
                        </div>

                    </Form>
                </div>
                
                </>
                }
                
            </main>
        </>
    )
}