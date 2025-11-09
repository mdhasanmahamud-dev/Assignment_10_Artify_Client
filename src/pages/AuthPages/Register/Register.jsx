import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import useUserHook from "../../../hooks/useUserHook";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userloading, createUser } = useUserHook();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center px-5 py-10">
      <div className="bg-zinc-800 text-gray-200 rounded-lg p-8 w-full max-w-xs md:max-w-md lg:max-w-lg shadow-lg border border-zinc-700">
        <h2 className="text-3xl font-playfair font-bold text-center text-indigo-400 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full Name is required" })}
              type="text"
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-indigo-500 transition ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Email
            </label>
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
              className={`w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-indigo-500 transition ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                className={`w-full px-4 py-2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-indigo-500 transition ${
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
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            {userloading ? "Registering..." : "Register Now"}
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <hr className="w-1/3 border-gray-700" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <hr className="w-1/3 border-gray-700" />
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-md hover:bg-zinc-700 transition"
          >
            <FaGoogle className="text-emerald-400" /> Sign up with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-indigo-400 hover:underline cursor-pointer"
          >
            Login Now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
