import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateClass, getClassById } from "../../../models/Class";

export default function ClassUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [classs, setClass] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getClassById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClass(data.payload);
      setFormData(data.payload)
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const classs = await updateClass(id, formData);
    if (classs.status === 200) {
      redirectToSuccessPage(classs.payload._id);
    } else {
      setInfo(classs.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/class/${id}`);
  };

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
      <h1>Class update form</h1>

      <form>
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          defaultValue={classs.year}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="id"
          placeholder="Enter id"
          defaultValue={classs.id}
          onChange={(e) => handleChange(e)}
        />
          
        <input
          type="checkbox"
          required
          name="classroom"
          checked={formData.classroom}
          onChange={(e) => handleCheckboxChange()}
        />
        <input
          type="number"
          name="classroomNumber"
          placeholder="Enter number"
          defaultValue={classs.classroomNumber}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update class</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
