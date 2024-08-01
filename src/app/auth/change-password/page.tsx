"use client"

import { Form } from "@/components/form";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import { AxiosRequestConfig } from "axios";
import { useSearchParams } from "next/navigation";


export default function ChangePasswordPage() {

    const { startLoading, finishLoading, isLoading } = useLoading();
    const authRouter = useAuthFetch();
    const searchParams = useSearchParams();

    const handleLogin = async (formData: any) => {
        startLoading();

        

        const token = searchParams.get("token")

        const options: AxiosRequestConfig<any> = {
            headers: {
                token
            }
        }

        await authRouter({
            endpoint: "change-password",
            redirectRoute: "/auth/login",
            options,
            formData,
        })
        finishLoading();
    }

    return ( 
        <>
            <main className="p-10 bg-[#12181f] w-full h-dvh grid place-content-center">

                <Form 
                    title='Cambiar contraseña'
                    description='Recuerda que tu contraseña es la única forma de acceder a tu cuenta'
                    onSubmit={handleLogin}>

                    <Form.Input type="password" name="newPassword" label="Nueva contraseña" placeholder="Ingresa tu nueva contraseña" />

                    <Form.Input type="password" name="confirmPassword" label="Repite nueva contraseña" placeholder="Repite la contraseña nueva" />
                    
                    <Form.SubmitButton buttonText="Cambiar contraseña" isLoading={isLoading} />

                    <Form.Footer description="Deseas volver al incio? " textLink="Ingresa aqui" link="/" />
                </Form>
            </main>
                
        </>
     )
}