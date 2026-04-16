import { Link, useParams } from "react-router-dom";

export default function DeletedClass() {
  const { id } = useParams();

  return (
    <>
      <p>Your Class {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
