

function NoteHeader({ sortBy, onSort }) {
    return (
        <div className="border-b-2 py-6 flex justify-center mb-8">
            <div className="w-1/2 flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Notes (2)</h1>
                {/* the number of notes () should be computed by notes.length so we have to lift notes up to App component to access it in this component. */}
                <select value={sortBy} onChange={onSort} className="outline-none border-2 border-gray-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-700">
                    <option value="latest" className="bg-gray-600 text-white text-xs text-bold">Sort based on latest notes</option>
                    <option value="earliest" className="bg-gray-600 text-white text-xs text-bold">Sort based on earliest notes</option>
                    <option value="completed" className="bg-gray-600 text-white text-xs text-bold">Sort based on completed notes</option>
                </select>
            </div>
        </div>
    )
}

export default NoteHeader