import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateStudent, getStudentById } from "../../../models/Student";

export default function StudentUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const student = await updateStudent(id, formData);
    if (student.status === 200) {
      redirectToSuccessPage(student.payload._id);
    } else {
      setInfo(student.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/student/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Student not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading student...</p>
      </>
    )
  }

  return (
    <>
      <h1>Student update form</h1>

      <form>
      <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={student.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="age"
          defaultValue={student.age}
          placeholder="Enter age"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="avgGrades"
          defaultValue={student.avgGrades}
          placeholder="Enter average grade"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update student</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
