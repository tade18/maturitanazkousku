import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to={"/students"}>
        <p>Show students</p>
      </Link>

      <Link to={"/teachers"}>
        <p>Show teachers</p>
      </Link>
      
      <Link to={"/subjects"}>
        <p>Show subjects</p>
      </Link>

      <Link to={"/classes"}>
        <p>Show classes</p>
      </Link>
    </>
  );
}
