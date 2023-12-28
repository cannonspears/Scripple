import Image from "next/image";
import logo from "@/assets/logo.png";
import fullLogo from "@/assets/full-logo-tp.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Scripple logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Scripple
        </span>
      </div>
      <div className="max-w-prose text-center">
        <p>The AI-driven app for creating video scripts</p>
      </div>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
      {/* <Image src={fullLogo} alt="Scripple mascot" width={500} height={500} /> */}
    </main>
  );
}
