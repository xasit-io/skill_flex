import Home from "./page/Home/Home";
import Jobs from "./page/Jobs/Jobs";
import React, { useState } from "react";
import Email from "./screens/email/Email";
import Profile from "./page/profile/Profile";
import { Routes, Route } from "react-router-dom";
import JobDetail from "./page/Jobs/[id]/JobDetail";
import Questions from "./screens/questions/Questions";
import Startscreen from "./screens/startscreen/Startscreen";
import LearningPath from "./page/LearningPath/learningpath";
import Verification from "./screens/verification/Verification";
import CareerListing from "./page/careerlisting/CareerListing";
import CareerDetails from "./page/CareerDetails/[id]/careerdetails";


function App() {
  const [page, setPage] = useState("Startscreen");
  const [emailData, setEmailData] = useState("");

  const goTo = (nextPage, data) => {
    if (data?.email) setEmailData(data.email);
    setPage(nextPage);
  };


  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/careerdetails/:id" element={<CareerDetails />} />
        <Route path="/questions" element={<Questions />} />

        <Route path="/learningpath" element={<LearningPath />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/careerlisting" element={<CareerListing />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={
          <>
            {page === "Startscreen" && <Startscreen goTo={goTo} />}
            {page === "Questions" && <Questions goTo={goTo} />}
            {page === "Email" && <Email goTo={goTo} />}
            {page === "Verification" && <Verification email={emailData} goTo={goTo} />}
          </>
        } />
      </Routes>
    </>

  );
}

export default App;