import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "250px", flex: 1, padding: "2rem", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
