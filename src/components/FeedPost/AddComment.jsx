import React, { useState } from "react";
import CommentList from "./CommentList";
import Button from "../Common/Button";
import InputField from "../Common/InputField";
import { CgProfile } from "react-icons/cg";

export default function AddComment({ comments, setComments }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <div className="flex items-center mt-2">
        <CgProfile className="text-5xl" />
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full gap-2 p-2"
        >
          <InputField
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit">Share</Button>
        </form>
      </div>

      <CommentList comments={comments} />
    </div>
  );
}
