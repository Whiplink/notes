import { revalidatePath } from "next/cache";
import Link from "next/link";
import AllNotes from "../components/notes";
import notesModel from "../models/notesModel";
import dbConnect from "../lib/db";
import { Suspense } from "react";

export default function Notes() {
  const handleForm = async (formData) => {
    "use server";
    await dbConnect();
    const textarea = formData.get("textarea");
    const newNote = new notesModel({
      content: textarea,
    });
    await newNote.save();
    revalidatePath("/notes");
  };

  return (
    <div className="max-w-xl mx-auto text-center p-12">
      <Link href="/" className="underline text-slate-500">
        Back
      </Link>
      <form action={handleForm} className="flex flex-col">
        <textarea
          className="shadow-md bg-slate-50 outline-0 border rounded-md p-2 my-5"
          name="textarea"
          rows="4"
          cols="40"
        ></textarea>
        <button
          type="submit"
          className="bg-green-100 px-5 py-2 rounded shadow font-bold text-gray-600 w-fit mx-auto"
        >
          Add note
        </button>
      </form>
      <div className="my-10">
        <Suspense fallback={<p>Loading...</p>}>
          <p className="text-lg font-semibold text-slate-500 mb-5">All notes</p>
          <AllNotes />
        </Suspense>
      </div>
    </div>
  );
}
