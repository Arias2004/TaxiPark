import { useContext } from "react";
import { FormContext } from "..";

interface InputProps {
  type?: "text" | "password";
  name: string;
  label: string;
  placeholder?: string;
}

export function Input({ type = "text", name, label, placeholder }: InputProps) {
  // Asegúrate de que el contexto está definido
  const context = useContext(FormContext);

  if (!context) {
    // Puedes manejar el caso en el que el contexto es undefined, tal vez lanzando un error
    throw new Error("Input must be used within a Form component.");
  }

  const { formValues, setFormValues } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="input-container">
      <input
        className="input w-[350px] text-white placeholder:text-xs focus:placeholder:text-transparent"
        type={type}
        name={name}
        id={name}
        value={formValues[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="topline"></div>
      <div className="underline"></div>
    </div>
  );
}
