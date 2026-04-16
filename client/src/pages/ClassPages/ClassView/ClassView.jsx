import { Link, useParams, useNavigate } from "react-router-dom";
import { getClassById, deleteClass } from "../../../models/Class";
import { useEffect, useState } from "react";

export default function ClassView() {
  const { id } = useParams();
  const [classs, setClass] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getClassById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClass(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === classs.name) {
      const result = await deleteClass(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong Class name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedclass/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Class not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading Class...</p>
      </>
    )
  }

  return (
    <>
      <h1>Class view</h1>
      <p className="catP">Class id: {id}</p>
      <p>Class name: {classs.year}</p>
      <p>Class id: {classs.id}</p>
      <p>Classroom number: {classs.classroomNumber}</p>

      <form>
        <p>Insert name to delete</p>
        <input type="text" placeholder={classs.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete class</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateclass/${id}`}>
        <p>Update class</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
