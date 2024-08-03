import dbConnect from "../lib/db";
import notesModel from "../models/notesModel";

export default async function NoteComponent() {
  await dbConnect();
  const allNotes = await notesModel.find();

  return (
    <div>
      <div className="flex flex-wrap gap-5">
        {allNotes.map((note) => {
          return (
            <div className="p-5 bg-orange-100 shadow rounded" key={note._id}>
              <p>{note.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
