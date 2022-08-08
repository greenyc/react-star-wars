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
        <Route
          path={``}
          element={
            <div>
              <h3>You haven't selected a topic</h3>
              <p>There are no topics really, I just want an example of multi-level routing.</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Topics;
