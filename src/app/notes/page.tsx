import { auth } from "@clerk/nextjs";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import fullLogo from "@/assets/full-logo-tp.png";
import Note from "@/components/Note";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scripple | Home",
};

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
      {allNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center">
          <p className="mb-4">{"You don't have any Scripples yet!"}</p>
          <p className="mb-4">
            {"Add helpful context like topics, style, or scripts."}
          </p>
          <Image
            src={fullLogo}
            alt="Scripple mascot"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
}
