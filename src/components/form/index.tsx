'use cliente'

import { createContext, useState } from "react"
import { Footer, Input, SubmitButton } from "./components"

type FormValue = Record<string, string>

interface FormContextType {
    formValues: FormValue
    setFormValues: React.Dispatch<React.SetStateAction<FormValue>>
}

interface FormProps {
    title: string,
    description?: string,
    onSubmit: (values: FormValue) => void,
    children: React.ReactNode
}

export const FormContext = createContext<FormContextType | undefined >(undefined)

export function Form({ title, onSubmit, children }: FormProps) {
    const [formValues, setFormValues] = useState<FormValue>({})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(formValues)
    }
    
    return (
        <FormContext.Provider value={{ formValues, setFormValues }}>
            <form className="z-10" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-48" src="https://i.ibb.co/vXBZQBw/logo-inner-esteban.png" alt="logo" />
                        <h2 className="text-3xl text-white font-semibold">{title}</h2>
                    </div>
                    {children}
                </div>
            </form>
        </FormContext.Provider>
    )
}

Form.Input = Input
Form.Footer = Footer
Form.SubmitButton = SubmitButton


