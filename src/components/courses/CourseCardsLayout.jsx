import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ENV from "../../env"
import axios from "axios";

import CourseCard from "./CourseCard";
function addnewcourse(){
  let course_id = prompt("Enter course id");
  let course_tags=[]
  let tags = prompt("Enter course tags");
  while(tags){
    course_tags.push(tags);
    tags = prompt("Enter course tags");
  }
  let title = prompt("Enter course title");
  while(!(title.length < 25)){
    alert("title length should be less than 25 characters");
    title = prompt("Enter course title");
  }
  let description = prompt("Enter course description");

  let data = JSON.stringify({
    "course_id": course_id,
    "course_tags": course_tags,
    "title": title,
    "modules": [],
    "description": description
  });
  // alert(data);
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${ENV.SERVER_URI}/add/course`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    alert(JSON.stringify(response.data));
    window.location.reload();
  })
  .catch((error) => {
    console.log(error);
    alert(error);
  });
  



}
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

      <div className="h-60 rounded-lg  flex justify-center items-center align-center bg-white shadow-md bg-clip-border rounded-xl "
      onClick={addnewcourse}>
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
  
  const res = await fetch(`${ENV.SERVER_URI}/fetch/course/all`);

  return res.json();
};

export default CourseCardsLayout;
