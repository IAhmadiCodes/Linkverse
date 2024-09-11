import React, { useState } from "react";
import InputField from "../Common/InputField";
import Button from "../Common/Button";
import { loginUser } from "../../store";
import { useThunk } from "../../hooks/use-thunk";

// icons
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [doLoginUser, isLoadingLogin, loginLoadingError] = useThunk(loginUser);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    doLoginUser({ inputs });

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
          className="absolute top-0 bottom-0 right-0 mr-3 
          text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <Button type="submit" loading={isLoadingLogin} className="w-full mt-2">
        Login
      </Button>
    </form>
  );
}
