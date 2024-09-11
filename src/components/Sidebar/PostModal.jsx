import { useDispatch, useSelector } from "react-redux";
import { changeText, changeFile, reset } from "../../store";
import Modal from "../Common/Modal";
import Button from "../Common/Button";
import { addPost } from "../../store";
import { useThunk } from "../../hooks/use-thunk";
import { RxCross2 } from "react-icons/rx";
import { IoImageOutline } from "react-icons/io5";

export default function PostModal({ isOpen, setIsOpen }) {
  const [doCreatePost, isCreatingPost, creatingPostError] = useThunk(addPost);

  const dispatch = useDispatch();

  const { postText, postFile } = useSelector((state) => {
    return {
      postText: state.form.postText,
      postFile: state.form.postFile,
    };
  });

  const handleTextChange = (e) => {
    dispatch(changeText(e.target.value));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    dispatch(changeFile(fileURL));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postText.trim() && !postFile) {
      alert("The inputs should not be empty!");
      return;
    }

    doCreatePost({ postText });
    dispatch(reset());

    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  let header = (
    <>
      <h2 className="text-lg font-semibold">Linkverse</h2>
      <div onClick={handleCloseModal} className="text-2xl cursor-pointer">
        <RxCross2 />
      </div>
    </>
  );

  return (
    <Modal onClose={handleCloseModal} header={header}>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-start gap-2">
          <img
            src=""
            alt="profile image"
            className="bg-gray-700 rounded-full h-10 w-10"
          />
          <textarea
            value={postText}
            onChange={handleTextChange}
            rows={3}
            placeholder="What is happening..."
            className="w-full resize-none p-2 rounded-lg focus:outline-none"
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload" className="cursor-pointer">
            <IoImageOutline className="text-3xl" />
          </label>
          <Button className="text-white rounded-lg px-4 py-2" type="submit">
            {isCreatingPost ? <div>...</div> : <>Post</>}
          </Button>
        </div>
      </form>

      {postFile && (
        <div className="mt-4">
          <img src={postFile} alt="Uploaded Preview" />
        </div>
      )}
    </Modal>
  );
}
