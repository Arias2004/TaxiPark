import { Navbar } from "@/components/admin-panel/navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar/>
      <div className="container bg-[#161d26] pt-8 pb-8 px-4 sm:px-8">{children}</div>
    </div>
  );
}
