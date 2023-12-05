import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-indigo-700 underline underline-offset-4"
            : "hover:underline underline-offset-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/findJobs"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-indigo-700 underline underline-offset-4"
            : "hover:underline underline-offset-4"
        }
      >
        Find Job
      </NavLink>
      <NavLink
        to="/browseCompanies"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-indigo-700 underline underline-offset-4"
            : "hover:underline underline-offset-4"
        }
      >
        Browse Companies
      </NavLink>
    </>
  );
  return (
    <div className="fixed w-full z-50 bg-[#F8F8FD]">
      <Container className="flex items-center justify-between py-5">
        <Logo />
        <div className="hidden lg:flex items-center gap-8 font-Epilogue font-semibold opacity-80">
          {navLink}
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            to={"/login"}
            className="text-indigo-700 font-semibold hover:underline underline-offset-4"
          >
            Login
          </Link>
          <div className="divider divider-horizontal"></div>
          <Link to={"/signUp"}>
            <Button className="hover:underline underline-offset-4">
              Sign Up
            </Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <label className="btn btn-circle bg-white hover:bg-white/90 swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setNavOpen(!navOpen)} type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen z-50 bg-indigo-600 text-white px-5  transition-transform transform  ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } duration-700 ease-in-out`}
        >
          <div className="flex items-center justify-center h-[88px]">
            <Logo />
          </div>
          <div className="flex flex-col gap-4 lg:hidden font-Epilogue font-semibold opacity-80 border-t py-12">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-4 btn bg-indigo-800 hover:bg-indigo-800 text-white border-none"
                  : "hover:underline underline-offset-4 btn bg-indigo-700 hover:bg-indigo-800 text-white border-none"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/findJobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-4 btn  bg-indigo-800 hover:bg-indigo-800 text-white border-none"
                  : "hover:underline underline-offset-4 btn bg-indigo-700 hover:bg-indigo-800 text-white border-none"
              }
            >
              Find Job
            </NavLink>
            <NavLink
              to="/browseCompanies"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-4 btn bg-indigo-800 hover:bg-indigo-800 text-white border-none"
                  : "hover:underline underline-offset-4 btn bg-indigo-700 hover:bg-indigo-800 text-white border-none"
              }
            >
              Browse Companies
            </NavLink>
            <Link to={"/login"}>
              <Button className="w-full btn-md bg-indigo-700 hover:bg-indigo-800 hover:underline underline-offset-4">
                Login
              </Button>
            </Link>
            <Link to={"/signUp"}>
              {" "}
              <Button className="w-full btn-md bg-indigo-700 hover:bg-indigo-800 hover:underline underline-offset-4">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
