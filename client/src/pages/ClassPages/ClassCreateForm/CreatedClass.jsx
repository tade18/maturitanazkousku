import { useParams, Link } from "react-router-dom";

export default function CreatedClass() {
  const { id } = useParams();

  return (
    <>
      <p>Class was created: {id}</p>
      <Link to={`/class/${id}`}>
        <p>View class</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
