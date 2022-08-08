import { Routes, Route } from "react-router-dom";
import Topic from "../components/Topic";
import TopicsHeader from "../components/TopicsHeader";

function Topics() {
  return (
    <div>
      <h2>Topics view</h2>
      <TopicsHeader />
      <Routes>
        <Route path={`:topicId`} element={<Topic />} />
        <Route path={``} element={<h3>Please select a topic.</h3>} />
      </Routes>
    </div>
  );
}

export default Topics;
