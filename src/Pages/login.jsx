import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSwal from "../components/ui/customswal";
import * as yup from "yup";
import Logo from "../assets/images/zimtams-logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import SuccessIcon from "../assets/images/zimsucces-icon.png";

const VALID_USERNAME = "zimtams@zim.com";
const VALID_PASSWORD = "Admin@2025";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});


const Login = () => {



  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    // keep empty values so placeholders are visible
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const isValidUser =
      data.username === VALID_USERNAME && data.password === VALID_PASSWORD;

    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.add('hidden');

    if (isValidUser) {

      Cookies.set("authToken", "R0jc99vJkBJJuzB3sd545asdGha8hfCBMXWb3o6aEIFowO59GiIpkjMtho1qODPZB9xcbUlV478uijY4Dtk6eM9VV", {
        expires: 1, // 1 day
        path: "/",
      });
      Cookies.set("userName", 'Admin', {
        expires: 1,
        path: "/",
      });

      //router.push('/dashboard');
      CustomSwal.fire({

        /*  icon:"success", */
        iconHtml:  `<img src="${SuccessIcon}" class="w-50 h-32 mx-auto object-contain" />`,

        title: "Login successful",
        text: "Welcome back!",
      }).then(() => {
        // Reset form values (you can use react-hook-form or manually reset the values)
        reset({
          username: "",
          password: "",
        });

        // Redirect to another page after the SweetAlert2 closes
        navigate('/HomeDashboard');
      });
    } else {
      /*  CustomSwal.fire({
         icon: "error",
         iconHtml: '<img src="/images/zimtams-logo-old.png" class="w-50 h-16 mx-auto object-contain" />',
         title: "Invalid credentials",
         text: "Username or password is incorrect.",
       }); */
      errorMessage.classList.remove('hidden');
    }
  };
  useEffect(() => {
    const token = Cookies.get("authToken");

    if (token) {
      // Redirect to dataManager if token exists
      navigate("/HomeDashboard");
    }
  }, [navigate]);


  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-primary-bg">


      <img
        className="max-w-md  h-auto object-contain mb-8 "
        src={Logo}
        alt="Zimtams logo"
        width={400}
        height={100}
      />


      <div className="w-full max-w-md bg-white rounded-2xl shadow-md px-8 py-10">
        <h1 className="text-2xl  text-primary-text mb-8 h1-poppins font-semibold ">
          Log In
        </h1>



        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>

         
            <label className="block text-md font-semibold text-primary-text mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Please enter username"
              {...register("username")}
              className={`w-full rounded-full border px-4 py-4 text-md outline-none transition text-dark-text placeholder:text-gray-400 ${errors.username
                ? "border-red-500"
                : "border-primary-bg focus:border-primary-bg"
                }`}
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
          <div>

            <label className="block text-md font-semibold text-primary-text mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Please enter password"
              {...register("password")}
              className={`w-full rounded-full border px-4 py-4 text-md outline-none transition text-dark-text placeholder:text-gray-400 ${errors.password
                ? "border-red-500"
                : "border-primary-bg focus:border-primary-bg"
                }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-500">
              {/*  <label className="text-sm">342 × 54</label> */}
            </div>
            <div>
              <a href="/forgot-password" className="text-md font-medium text-primary-text hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Error message */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-40 mt-4 mb-0 rounded-full bg-primary-bg text-white font-semibold py-3 text-lg hover:bg-[#17203d] disabled:opacity-70 transition"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
          <div id="error-message" className="mt-2 text-md font-semibold text-red-500 hidden">
            Invalid credentials. Please try again.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
