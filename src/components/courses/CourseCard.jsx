import React from 'react'
import { Link } from 'react-router-dom'

function CourseCard( props ) {
  // console.log("course card")
  // console.log(props.coursedata)
  return (
    
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
    <div className="relative h-40 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card-image"
      />
    </div>
    <div className="p-6">
      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {`${props.coursedata.courseid} | ${props.coursedata.title}`}
      </h5>
      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {props.coursedata.description}
      </p>
    </div>
    <div className="p-6 pt-0">
      <Link
        to={`/courses/${props.coursedata.courseid}`}
        className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-600 hover:text-blue-700">
       <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        View Course
      </button>   
        </Link>
      
    </div>
  </div>
  
  )
}

export default CourseCard
