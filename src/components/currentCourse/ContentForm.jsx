import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import axios from "axios";
import { useSelector ,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import JsonUploadComponent from "./JsonUploadComponent";







function ContentForm(props) {
  let completeCourse = useSelector((state) => state.CurrentCourse.currentCoursedata);
  // let courseid=completeCourse.courseid;
  let {moduleid}=useParams();
  // console.log("data from params");
  // console.log(moduleid);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [lesson_title, setLesson_title] = useState("");

  function PostLesson(e) {
    e.preventDefault();
    console.log("PostLesson");
    let data = JSON.stringify({
    module_id: `${moduleid}`,
    title: `${lesson_title}`,
    content: content,
  });
  console.log(data);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:8800/add/content",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <div className="w-screen m-8">
      <div className="w-1/2 ">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={(e) => setLesson_title(e.target.value)}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Lesson Title
            </label>
          </div>
        </div>

        {/* editor componetn */}
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
            // console.log(content);
          }}
          className="mb-5"
        />
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={PostLesson}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContentForm;
