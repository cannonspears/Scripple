import NavBar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="p4 m-auto max-w-7xl">{children}</main>
    </>
  );
}
