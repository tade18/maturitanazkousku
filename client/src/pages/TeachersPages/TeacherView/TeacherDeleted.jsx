import { Link, useParams } from "react-router-dom";

export default function TeacherDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your teacher {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
