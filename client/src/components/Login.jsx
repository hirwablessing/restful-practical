import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login, userProfile } from "../../../server/src/services/auth.service";

import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await login(values);

    if (user.data.token) {
      localStorage.setItem("token", user.data.token);
      toast.success("User logged in successfully", { duration: 3000 });
      const userData = await userProfile();
      localStorage.setItem("user", JSON.stringify(userData.data));
      navigate("/owners");
    } else {
      toast.error(user.message);
    }
  }

  return (
    <div>
      <div className="w-full overflow-hidden rounded-3xl bg-white">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 items-center justify-center  h-screen bg-lightblue md:flex md:flex-col md:gap-[33px]">
            <img src="/img/logo.png" alt="rra logo" width={300} />
            <p className="text-primary font-bold tex-base">
              Welcome to <br />
              vehicle management system
            </p>
          </div>
          <div className="w-full py-10 px-5  md:flex md:justify-center md:items-center  md:px-10">
            <form className="md:ml-[50px]" onSubmit={handleSubmit}>
              <div className="mb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black">Login</h1>
                <p className="flex gap-1 text-base">
                  <span className="text-[#ADB5BD] font-semibold">
                    {" "}
                    Already have an account?
                  </span>{" "}
                  <Link className="text-primary font-semibold" to="/signup">
                    Sign up
                  </Link>
                </p>
              </div>

              <div className="-mx-3 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black"
                  >
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="john@gmail.com"
                    className=" rounded-2xl border border-gray-300 text-black sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-black"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    required
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className=" rounded-2xl border border-gray-300 text-black sm:text-sm outline-none focus:ring-blue-500 block w-[346px] p-2.5"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rounded-2xl font-semibold flex justify-center items-center mb-20 mt-4 w-full text-white bg-primary p-3 "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
