import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Navbar from './components/Navbar'
import NotFound from "./layouts/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home";
import About from "./components/About";
import CourseCardsLayout from "./components/courses/CourseCardsLayout";
import CoursePageLayout from "./layouts/CoursePageLayout";
import ModuleContent from "./components/currentCourse/ModuleContent";
import ContentForm from "./components/currentCourse/ContentForm";
import ProblemForm from "./components/currentCourse/ProblemForm";

//loaders
import { coursesLoader } from "./components/courses/CourseCardsLayout";
import { FetchCourseDetailsLoader } from "./layouts/CoursePageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses">
        <Route index loader={coursesLoader} element={<CourseCardsLayout />} />

        <Route
          path=":courseid"
          loader={FetchCourseDetailsLoader}
          element={<CoursePageLayout />}
        >
          <Route
            index
            element={
              <>
                <p>Course DashBoard</p>
              </>
            }
          ></Route>

          <Route path=":moduleid" element={<ModuleContent />} >
            <Route index element={<><h1 className="flex items-center" >EDITOR AREA</h1></>} />
            <Route path="addLesson" element={<ContentForm />} />
            <Route path="addProblem" element={<ProblemForm />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
