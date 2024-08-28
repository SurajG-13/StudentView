import React from "react";
import S_Sidebar from "../S_Sidebar";
import { Link } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";

function S_Profile() {
  return (
    <>
      <main className="w-full h-screen flex flex-row relative">
        <S_Sidebar />
        <section className="ml-[5rem] w-full h-screen ">
          <div className="mt-6 flex justify-center text-4xl">Profile</div>

          <div className="flex">
            {/*
          
          ................... Quick Information ...........
          
           */}
            <section className="my-12 w-[30%] h-screen flex flex-col items-center">
              <div className="relative my-24 w-32 h-32 items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-2 border-gray-300"
                />

                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300">
                  <span className="text-lg cursor-pointer">
                    <CameraIcon className="w-6 h-6" />
                  </span>
                </div>

                <div className="mt-4">Suraj Ghosh</div>
              </div>

              <div className="text-left w-fit my-12 leading-8">
                Registration Number: 123456789 <br />
                Roll Number: 123456789
                <br />
                Session: 2020-24
                <br />
              </div>
            </section>

            {/* 

          ......................Detailed Information Tab................

          */}

            <section className="my-12 flex w-[70%] h-screen">
              <div className="w-full m-6 h-fit flex justify-around items-center gap-10">
                <div
                  className="w-full lg:flex lg:flex-row lg:w-auto lg:order-1"
                  id="mobile-menu-2"
                >
                  <ul className="flex flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-8 lg:mt-6">
                    <li>
                      <Link
                        to=""
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-orange-500" : "text-gray-700"
                          }  hover:text-orange-700 lg:p-0`
                        }
                      >
                        Basic Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-orange-500" : "text-gray-700"
                          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        Class - X
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-orange-500" : "text-gray-700"
                          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        Class - XII
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-orange-500" : "text-gray-700"
                          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        Diploma
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 ${
                            isActive ? "text-orange-500" : "text-gray-700"
                          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        Others
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default S_Profile;

//{
/* <div className="h-screen flex items-center justify-center p-4">
<div className="p-6 rounded-lg  max-w-md w-full">
  <h2 className="text-2xl font-semibold mb-6 text-center">
    Basic Details
  </h2>

  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Name
    </label>
    <p className="text-lg bg-gray-200 p-2 rounded">{user.name}</p>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Email
    </label>
    <p className="text-lg bg-gray-200 p-2 rounded">
      {user.email}
    </p>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Role
    </label>
    <p className="text-lg bg-gray-200 p-2 rounded">{user.role}</p>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Enrollment/Employee ID
    </label>
    <p className="text-lg bg-gray-200 p-2 rounded">{user.id}</p>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Contact Number
    </label>
    <p className="text-lg bg-gray-200 p-2 rounded">
      {user.contact}
    </p>
  </div>

  {/* Add more fields as necessary */
// }
// </div>
// </div> */}
