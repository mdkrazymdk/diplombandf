// src/pages/CommentsPage.jsx
import React from "react";
import useComments from "../hooks/useComments";
import CommentPanel from "../components/CommentPanel";

export default function CommentsPage({ user, token }) {
  const { comments, addComment } = useComments();

  // comments сгруппировать по работе
  const commentsByWork = comments.reduce((acc, comment) => {
    acc[comment.workId] = acc[comment.workId] || [];
    acc[comment.workId].push(comment);
    return acc;
  }, {});

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Коментарі</h1>
      <div className="space-y-4">
        {Object.keys(commentsByWork).map(workId => (
          <CommentPanel
            key={workId}
            workId={workId}
            comments={commentsByWork[workId]}
            addComment={addComment}
            user={user}
          />
        ))}
        {!Object.keys(commentsByWork).length && (
          <div className="text-center p-4 text-gray-500">Поки що немає коментарів</div>
        )}
      </div>
    </div>
  );
}
