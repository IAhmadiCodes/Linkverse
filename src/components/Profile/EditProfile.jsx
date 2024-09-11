import React, { useState } from "react";
import Button from "../Common/Button";
import Modal from "../Common/Modal";

export default function EditProfile() {
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    setShowEdit(!showEdit);
  };

  let modal = (
    <div>
      <Modal />
    </div>
  );

  return (
    <>
      <Button onClick={handleClick} className="w-full font-semibold">
        Edit Profile
      </Button>

      {showEdit && modal}
    </>
  );
}
