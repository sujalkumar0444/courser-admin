import React from 'react'
import env from '../../env';
import { useLoaderData } from 'react-router-dom';
import HTMLReactParser from "html-react-parser";
function DisplayProblem() {
    let previewData=useLoaderData();
    let DisplayThis= previewData.problem_id.problem_description;
  return (
    <div>
      {HTMLReactParser(DisplayThis)}
    </div>
    
  )
}
export const FetchProblemLoader = async ({ params }) => {
    const { LessonId } = params;
    const res = await fetch(`${env.SERVER_URI}/lesson/preview/`+LessonId);
    const data = await res.json();
    return data;
  };
export default DisplayProblem
