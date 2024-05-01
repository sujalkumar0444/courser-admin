import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useState } from "react";
// import { Link } from 'react-router-dom';

import ContentForm from "./ContentForm";

function LessonCardListItem(props) {
  return (
    <li>
      <Link to={`${props.lesson._id}`}>
        <div className="relative pb-8">
          <span
            className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div className="relative flex items-start space-x-3">
            <div>
              <div className="relative px-1">
                <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                  <svg
                    className="text-white h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1 py-0">
              <div className="text-md text-gray-500">
                <div>
                  <Link
                    to={`${props.lesson._id}`}
                    className="font-medium text-gray-900 mr-2"
                  >
                    {props.lesson.lesson_title}
                  </Link>
                  <Link
                    to={`${props.lesson._id}`}
                    className="bg-green-200 my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                  >
                    <div className="absolute flex-shrink-0 flex items-center justify-center  ">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-green-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3.5 font-medium text-gray-900 ">
                      {props.lesson.contentype}
                    </div>
                  </Link>
                </div>
                <span className="whitespace-nowrap text-sm mt-1">
                  Lesson Points <b>{props.lesson.lesson_points}</b>{" "}
                </span>
              </div>
              <div className="mt-2 text-gray-700">
                <p>- {props.lesson.lesson_title} Description</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown} // Toggle dropdown on button click
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
            isOpen ? 'rotate-180' : '' // Rotate arrow icon if dropdown is open
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              to="addLesson"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Add Lesson
            </Link>
          </li>
          <li>
            <Link
              to="addProblem"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Add Problem
            </Link>
          </li>
          <li>
            <Link
              to="addAssignment"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Add Assignment
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

function ModuleContent() {
  let { moduleid } = useParams();
  let moduledata = useSelector(
    (state) => state.CurrentCourse.currentCoursedata.modules
  );
  let current_module = moduledata.find((module) => module._id === moduleid);
  // console.log("Current Module lessons are")
  let lessons = current_module.lessons;
  return (
    <div className="sticky">
      {/* <p>{moduleid}</p> */}
      <>
        {/* component */}
        <div className=" h-screen float-left bg-white  border-r-2 ">
          <div className="max-w-xl mx-auto p-8">
            <div className="flow-root">
              <h1 className="text-lg mb-4">Lessons</h1>
              <ul>
              <Dropdown ></Dropdown>
              </ul>
              <ul className="mb-8 mt-8">
                {lessons.map((lesson) => {
                  return (
                    <LessonCardListItem key={lesson._id} lesson={lesson} />
                  );
                })}
              </ul>
            </div>
          </div>
          
        </div>

        <div className="h-screen float-left bg-white   ">
          <div className="max-w-xl mx-auto p-8">
            <div className="flow-root ">
              {/* header */}
              <div className="flex ">
                <h1 className="mx-8">Update Content Here</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              </div>
              {/* <ContentForm></ContentForm> */}
                <Outlet/>
              {/* editor component */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ModuleContent;
