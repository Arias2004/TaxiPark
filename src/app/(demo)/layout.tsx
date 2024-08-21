import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import FooterDemo from "@/components/Footer/Components/Index";
import Link from "next/link";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      <nav className="w-[1070px] z-40 fixed h-16 px-8 py-2 bg-[#161d26] shadow-2xl shadow-[#2e3b4da4] border-b border-[#2e3b4da4] flex justify-between items-center">
      <img className="w-32" src="https://i.ibb.co/vXBZQBw/logo-inner-esteban.png" alt="logo" />
      <h1 className="text-4xl text-[#ffffff25] font-black">TaxiPark</h1>
        <div className="flex gap-4">
          <Link href="/auth/login">
            <svg
              className="text-white hover:text-[#f7ec07] transition-all ease-in duration-300"
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
          </Link>
          <Link href="/about-us">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white hover:text-[#f7ec07] transition-all ease-in duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </Link>
        </div>
      </nav>
      {children}
      <FooterDemo />
    </AdminPanelLayout>
  );
}
