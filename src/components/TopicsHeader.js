import { Link } from "react-router-dom";

function TopicsHeader() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`topic A`}>Topic A</Link>
        </li>
        <li>
          <Link to={`topic B`}>Topic B</Link>
        </li>
      </ul>
    </div>
  );
}

export default TopicsHeader;
