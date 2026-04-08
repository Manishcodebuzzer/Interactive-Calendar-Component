"use client";

import { useState, useEffect } from "react";

export default function NotesPanel() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("calendar-notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("calendar-notes", notes);
  }, [notes]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 tracking-wide">Notes</h2>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write something..."
        className="
          w-full h-64
          pt-2 px-3
          bg-transparent border-none outline-none resize-none
          leading-8
          align-top
          bg-[linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
          bg-[size:100%_2rem]
        "
      />
    </div>
  );
}
