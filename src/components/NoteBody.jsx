import Tabs from "./Tabs";
import Note from "./Note";
import { useState } from "react";

function NoteBody({ sortBy }) {
    const [notes, setNotes] = useState([]);
    const handleAddNote = (newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    const handleDeleteNotes = (id) => {
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        })
    }
    const handleCompleteNote = (e) => {
        setNotes((prevNotes) => prevNotes.map((note) => note.id === Number(e.target.value) ? { ...note, completed: !note.completed } : note));
    }

    return (
        <div className="flex items-start justify-between">
            <AddNote handleAddNote={handleAddNote} />
            <NoteList notes={notes} onDelete={handleDeleteNotes} onCompleteNote={handleCompleteNote} sortBy={sortBy} />
        </div>
    )
}

export default NoteBody

function AddNote({ handleAddNote }) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            desc,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTitle("");
        setDesc("");
        handleAddNote(newNote);
    };
    return (
        <div className="w-1/4 flex flex-col gap-y-5 items-center">
            <h2 className="capitalize text-xl font-bold">add new note</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <input value={title} onChange={e => setTitle(e.target.value)} className="text-inp" type="text" placeholder="note title ..." />
                <input value={desc} onChange={e => setDesc(e.target.value)} className="text-inp" type="text" placeholder="note description ..." />
                <button type="submit" className="w-full capitalize bg-blue-800 text-white font-bold px-4 py-3 rounded-lg">add new note</button>
            </form>
        </div>
    );
}

function NoteList({ notes, onDelete, onCompleteNote, sortBy }) {

    // sorting
    let sortedNotes = notes;

    if (sortBy === "latest") sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortBy === "earliest") sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortBy === "completed") sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed));

    return (
        <div className="w-2/4 flex flex-col gap-y-4">
            <Tabs notes={notes} />
            {
                sortedNotes.map((note) => {
                    return <Note key={note.id} note={note} onDelete={onDelete} onCompleteNote={onCompleteNote} />;
                })
            }
        </div>
    );
}