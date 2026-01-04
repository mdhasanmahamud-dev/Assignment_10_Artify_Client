import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router";
import useUserHook from "../../../hooks/useUserHook";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userloading, loginUser, signInWithGoogle } = useUserHook();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data.email, data.password);
      console.log(result.user);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const autofillDemo = () => {
    setValue("email", "mdhasanmahamud01947@gmail.com");
    setValue("password", "MdHasanMahamud@@@@");
  };

  return (
    <div className="flex justify-center my-10">
      <div className="dark:bg-zinc-800 dark:text-gray-200 rounded-lg p-8 w-full max-w-xs md:max-w-md lg:max-w-lg shadow-lg border border-zinc-700">
        <h2 className="text-3xl font-bold text-center dark:text-indigo-400 mb-6">
          Sign in Account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-indigo-400 transition ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`w-full px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-indigo-400 transition ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Autofill Button */}
          <button
            type="button"
            onClick={autofillDemo}
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg cursor-pointer transition"
          >
            Fill Demo Account
          </button>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            {userloading ? "Logging....." : "Login Now"}
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-1/3 border-gray-600" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <hr className="w-1/3 border-gray-600" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleLoginGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-md dark:hover:bg-zinc-700 hover:bg-slate-200 transition cursor-pointer"
          >
            <FaGoogle className="text-emerald-400" /> Login with Google
          </button>
        </form>

        <p className="text-center text-sm dark:text-gray-400 mt-5">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-indigo-400 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
