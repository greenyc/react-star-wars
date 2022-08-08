import { useParams } from "react-router-dom";

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>Topic ID</h3>
      <p>The name of the dyanmic part of this URL (the topicId) is {topicId}</p>
    </div>
  );
}

export default Topic;
