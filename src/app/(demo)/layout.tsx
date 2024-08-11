import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import FooterDemo from "@/components/Footer/Components/Index";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>
    {children}
    <FooterDemo />
    </AdminPanelLayout>;
}
