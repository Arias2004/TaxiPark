'use client';

import { Form } from "@/components/form";
import { useAuthFetch } from "@/hooks/useAuthFetch";
import { useLoading } from "@/hooks/useLoading";
import { IconHomeForm } from "@/components/IconHomeForm";

export default function Register() {

    const { startLoading, finishLoading, isLoading } = useLoading();
    const authRouter = useAuthFetch();

    const handleRegister = async (formData: any) => {
        startLoading();
        await authRouter({
            endpoint: "register",
            redirectRoute: "/auth/login",
            formData,
        })
        finishLoading();
    }

    return ( 
        <>
            <main className="flex relative flex-row-reverse bg-[#12181f] w-full h-dvh items-center justify-center">
                <IconHomeForm params="/Registrarse" />
                <div className="bg-[#fcd765] w-full h-dvh grid place-content-center">
                    <h1 className="text-white text-4xl font-bold">
                        Register
                    </h1>
                </div>
                <div className="w-full h-dvh grid place-content-center">
                    {/* AQUI VA EL FORMULARIO */}
                    <Form 
                    title='Registrate'
                    onSubmit={handleRegister}>

                        <Form.Input type="text" name="email" label="Email" placeholder="Ingresa tu email" />
                        <Form.Input type="password" name="password" label="Contraseña" placeholder="Ingresa tu contraseña" />
                        <Form.Input type="password" name="confirmPassword" label="Confirmar contraseña" placeholder="Confirmar tu contraseña" />
                        
                        <Form.SubmitButton buttonText="Registrarse" isLoading={isLoading} />
                        
                        <div className="flex flex-col items-center gap-2">
                            <Form.Footer description="Has olvidado su contraseña?" textLink="Recuperar" link="/auth/forget-password" />
                            <Form.Footer description="Ya estas registrado?" textLink="Iniciar sesión" link="/auth/login" />
                        </div>

                    </Form>
                </div>
            </main>
        </>
    )
}