import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import CourseCard from "./CourseCard";

function CourseCardsLayout() {
  const allCourses = useLoaderData();
  // console.log(allCourses);

  return (
    <div className="max-w-screen-xl items-center justify-between mx-auto p-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {allCourses ? (
        allCourses.map((course) => (
          <CourseCard coursedata={course} key={course.courseid} />
        ))
      ) : (
        <p>Loading...</p>
      )}

      {/* <CourseCard /> */}

      <div className="h-60 rounded-lg  flex justify-center items-center align-center bg-white shadow-md bg-clip-border rounded-xl ">
        <svg
          className="h-24 w-24 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
        </svg>
        <h1 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">crete new course</h1>
      </div>
    </div>
  );
}

export const coursesLoader = async ({ params }) => {
  const res = await fetch("http://localhost:8800/fetch/courses/all");

  return res.json();
};

export default CourseCardsLayout;
