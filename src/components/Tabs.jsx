const tabsData = ["all", "completed", "open"];

function Tabs({ notes }) {
    const allNotes = notes.length;
    const completedNotes = notes.filter(note => note.completed).length;
    const uncompletedNotes = allNotes - completedNotes;

    if (! allNotes) return <h2>There is no note .</h2>

    return (
        <div className="capitalize text-sm text-gray-500 flex justify-between mb-5 px-1">
            {
                tabsData.map((tab) => {
                    return <div key={tab} className="flex items-center gap-x-2">
                        <span>{tab}</span>
                        <span className="rounded-full bg-gray-500 text-white text-xs w-4 h-5 flex justify-center items-center">
                            {
                                tab === "all" ? allNotes : tab === "completed" ? completedNotes : uncompletedNotes
                            }
                        </span>
                    </div>;
                })
            }
        </div>
    );
}

export default Tabs