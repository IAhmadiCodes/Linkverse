import Button from "../Common/Button";
import InputField from "../Common/InputField";

import { useDispatch, useSelector } from "react-redux";
import { changeText, changeFile, reset } from "../../store";
import { addPost } from "../../store";

import { useThunk } from "../../hooks/use-thunk";

import { IoImageOutline } from "react-icons/io5";

export default function FeedCreate() {
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border mt-4 md:rounded-lg lg:rounded-lg"
    >
      <div className="flex items-center gap-2">
        <img
          src=""
          alt="profile image"
          className="bg-gray-700 rounded-full h-10 w-10"
        />
        <InputField
          value={postText}
          onChange={handleTextChange}
          placeholder="Start a post with linkverse..."
          className="w-full resize-none border focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer flex items-center gap-2"
        >
          <IoImageOutline className="text-3xl" />
          <span className="font-medium">Media</span>
        </label>
        <Button
          className="text-white px-4 py-2"
          type="submit"
          loading={isCreatingPost}
        >
          Post
        </Button>
      </div>
    </form>
  );
}
