import Footer from "@/components/Footer/Index";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10 bg-[#12181f] text-white w-full h-dvh grid place-content-center">
      <Link href="/auth/login">
          Iniciar sesión
        </Link>
        <Link href="/auth/register">
          Registrarse
        </Link> 
        <Footer />
    </main>
  );
}
