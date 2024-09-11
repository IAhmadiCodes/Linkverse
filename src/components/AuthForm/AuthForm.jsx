import React, { useState } from "react";
import SignForm from "./SignForm";
import LoginForm from "./LoginForm";
import GoogleAuth from "./GoogleAuth";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-2 my-6 space-y-4">
        <h2 className="text-4xl font-bold">Linkverse</h2>
        <div>{isLogin ? <SignForm /> : <LoginForm />}</div>
        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <GoogleAuth isLogin={isLogin} />

        {isLogin ? null : (
          <div className="py-2 text-sm text-blue-600 cursor-pointer">
            Forgot password?
          </div>
        )}

        <div className="flex justify-center gap-2 py-4 border bg-gray-50 hover:border-gray-300 ">
          <span className="font-normal text-black">
            {isLogin ? "Have an account?" : "Don't have an account?"}
          </span>
          <div
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer"
          >
            {isLogin ? "Log in" : "Sign up"}
          </div>
        </div>
      </div>
    </div>
  );
}
