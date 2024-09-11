import React from "react";

export default function CommentList({ comments }) {
  return (
    <div>
      <h3 className="mt-4 font-bold">Comments:</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mt-2 p-2 border rounded-md">
              {comment}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
