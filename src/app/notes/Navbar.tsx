import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function NavBar() {
  return (
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="flex items-center gap-3">
          <Image src={logo} alt="notesGPT logo" width={40} height={40} />
          <span className="font-bold">notesGPT</span>
        </Link>
        <span>Element 2</span>
      </div>
    </div>
  );
}
