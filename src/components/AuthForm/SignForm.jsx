import React, { useState } from "react";
import InputField from "../Common/InputField";
import Button from "../Common/Button";
import { signupUser } from "../../store";
import { useThunk } from "../../hooks/use-thunk";

// icons
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function SignForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [doSignupUser, isLoadingSingup, signupLoadingError] =
    useThunk(signupUser);

  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputs.fullName ||
      !inputs.userName ||
      !inputs.email ||
      !inputs.password
    ) {
      return console.log("please fill the inputs...");
    }

    doSignupUser({ inputs });

    setInputs({ fullName: "", userName: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        name="Full Name"
        type="text"
        placeholder="Full Name..."
        value={inputs.fullName}
        autocomplete="full-name"
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputField
        name="Username"
        type="text"
        placeholder="Username..."
        value={inputs.userName}
        autocomplete="username"
        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
      />
      <InputField
        name="Email"
        type="email"
        placeholder="Email..."
        value={inputs.email}
        autocomplete="email"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <div className="relative">
        <InputField
          name="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Password..."
          value={inputs.password}
          autocomplete="password"
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <button
          type="button"
          className="absolute top-0 bottom-0 right-0 mr-3 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <Button type="submit" loading={isLoadingSingup} className="w-full mt-2">
        Sign Up
      </Button>
    </form>
  );
}
