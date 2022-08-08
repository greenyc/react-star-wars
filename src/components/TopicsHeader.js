import { Link } from "react-router-dom";

function TopicsHeader() {
  return (
    <ul>
      <li>
        <Link to={`components`}>Components</Link>
      </li>
      <li>
        <Link to={`props-v-state`}>Props v. State</Link>
      </li>
    </ul>
  );
}

export default TopicsHeader;
