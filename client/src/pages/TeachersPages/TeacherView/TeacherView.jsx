import { Link, useParams, useNavigate } from "react-router-dom";
import { getTeacherById, deleteTeacher } from "../../../models/Teacher";
import { useEffect, useState } from "react";

export default function TeacherView() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTeacherById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTeacher(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === teacher.name) {
      const result = await deleteTeacher(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong teacher name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedteacher/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Teacher not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading teacher...</p>
      </>
    )
  }

  return (
    <>
      <h1>Teacher view</h1>
      <p className="teacherP">Teacher id: {id}</p>
      <p>Teacher name: {teacher.name}</p>
      <p>Teacher year: {teacher.age}</p>
      <p>Teacher hours: {teacher.hours}</p>
      <form>
        <p>Insert Teacher name to delete it</p>
        <input type="text" placeholder={teacher.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete teacher</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateteacher/${id}`}>
        <p>Update teacher</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
