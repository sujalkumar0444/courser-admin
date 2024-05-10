import React from 'react'
import env from '../../env';
import { useLoaderData } from 'react-router-dom';
import HTMLReactParser from "html-react-parser";

function displaylesson() {
  let previewData=useLoaderData();
  
  let DisplayData=previewData.text_content;
  return (
    <div>
      {HTMLReactParser(DisplayData)}
    </div>
  )
}
export const FetchLessonLoader = async ({ params }) => {
  const { LessonId } = params;
  const res = await fetch(`${env.SERVER_URI}/lesson/preview/`+LessonId);
  const data = await res.json();
  return data;
};

export default displaylesson
