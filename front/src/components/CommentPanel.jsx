// src/components/CommentPanel.jsx
import React, { useState } from "react";
import Editor from "./Editor";

export default function CommentPanel({ comments, onSend }) {
  const [text, setText] = useState("");
  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Коментарі</h3>
      <div className="space-y-4 mb-4">
        {comments.map(c => (
          <div key={c.id} className="flex gap-3 items-start">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://ui-avatars.com/api/?name=${c.author}&background=14b8a6&color=fff`}
              alt={c.author}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{c.author}</span>
                <span className="text-xs text-gray-500">{c.createdAt?.slice(0, 10)}</span>
              </div>
              <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: c.text }} />
            </div>
          </div>
        ))}
      </div>
      <Editor value={text} onChange={setText} placeholder="Напишіть коментар..." />
      <button onClick={handleSend} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Надіслати
      </button>
    </div>
  );
}
