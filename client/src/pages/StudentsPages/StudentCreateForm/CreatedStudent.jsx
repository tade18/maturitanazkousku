import { useParams, Link } from "react-router-dom";

export default function CreatedStudent() {
  const { id } = useParams();

  return (
    <>
      <p>Student was created: {id}</p>
      <Link to={`/student/${id}`}>
        <p>View student</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
