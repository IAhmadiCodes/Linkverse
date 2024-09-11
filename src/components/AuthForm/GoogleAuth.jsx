import Button from "../Common/Button";
import { IoLogoGoogle } from "react-icons/io";

export default function GoogleAuth({ isLogin }) {
  return (
    <Button className="flex justify-center w-full gap-2">
      <IoLogoGoogle className="text-2xl" />
      {isLogin ? "Sign up with Google" : "Log in with Google"}
    </Button>
  );
}
