import { useState } from "react";

function Note({ note, onDelete, onCompleteNote }) {
  return (
    <div className={`w-full bg-white rounded-lg shadow-sm flex flex-col items-start px-4 py-2 ${note.completed ? "opacity-70" : ""}`}>
      <NoteHeader note={note} onDelete={onDelete} onCompleteNote={onCompleteNote} />
      <NoteBody createdAt={note.createdAt} />
    </div>
  );
}

export default Note

function NoteHeader({ note, onDelete, onCompleteNote }) {
  return (
    <div className="w-full flex justify-between items-center pb-2 border-b-2">
      <div className="flex flex-col justify-between items-start gap-y-1 text-sm">
        <span className={`font-bold ${note.completed ? "line-through" : ""}`}>{note.title}</span>
        <span className="text-gray-400">{note.desc}</span>
      </div>
      <div className="flex items-center gap-x-5">
        <span>
          <svg onClick={() => onDelete(note.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-900 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </span>
        <input onChange={onCompleteNote} className="w-4 h-4" type="checkbox" value={note.id} />
      </div>
    </div>
  );
}

function NoteBody({ createdAt }) {
  return (
    <div className="w-full py-1">
      <span className="text-sm text-gray-300">{new Date(createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}</span>
    </div>
  );
}