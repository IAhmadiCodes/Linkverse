import React, { useState } from "react";
import AddComment from "./AddComment";

// icons
import { TfiComment } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { TfiShare } from "react-icons/tfi";

export default function FeedActions({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleCommentClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="flex gap-8 items-center pt-4">
        <button
          onClick={handleCommentClick}
          className="flex items-center gap-2"
        >
          <TfiComment className="text-lg" />
          <span>{comments.length}</span>
        </button>
        <button className="flex items-center gap-2">
          <BsBookmark className="text-lg" />
          <span>37</span>
        </button>
        <button className="flex items-center gap-2">
          <BsHeart className="text-lg" />
          <span>37</span>
        </button>
        <button className="flex items-center gap-2">
          <TfiShare className="text-lg" />
          <span>37</span>
        </button>
      </div>

      {isOpen && <AddComment comments={comments} setIsOpen={setComments} />}
    </div>
  );
}
