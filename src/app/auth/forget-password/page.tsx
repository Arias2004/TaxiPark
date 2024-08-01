"use client"

import { Form } from "@/components/form";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";



export default function ForgetPasswordPage() {

    const { startLoading, finishLoading, isLoading } = useLoading();
    const authRouter = useAuthFetch();

    const handleLogin = async (formData: any) => {
        startLoading();
        await authRouter({
            endpoint: "forget-password",
            redirectRoute: "/",
            formData,
        })
        finishLoading();
    }

    return ( 
        <>
            <main className="p-10 bg-[#12181f] w-full h-dvh grid place-content-center">

                <Form 
                    title='Recuperar contraseña'
                    description='Si llegaste a olvidar tu contraseña, ingresa tu email para recibir instrucciones para recuperarla'
                    onSubmit={handleLogin}>

                    <Form.Input type="text" name="email" label="Email" placeholder="Ingresa tu email al que deseas enviar la instrucciones" />

                    <Form.SubmitButton buttonText="Recuperar cuenta" isLoading={isLoading} />

                    <Form.Footer description="Deseas volver al incio? " textLink="Ingresa aqui" link="/" />
                </Form>
            </main>
                
        </>
     )
}