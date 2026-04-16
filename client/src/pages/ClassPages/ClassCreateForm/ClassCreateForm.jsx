import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClass } from "../../../models/Class";

export default function ClassCreateForm() {
  // Inicializace formData jako objekt
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const classs = await createClass(formData);
    if (classs.status === 201) {
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
    return navigate(`/createdclass/${id}`);
  };

  return (
    <>
      <h1>Class create form</h1>

      <form>
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="id"
          placeholder="Enter id"
          onChange={handleChange}
        />
        <p>Does it have classroom?</p>
        <input
          type="checkbox"
          name="classroom"
          onChange={handleCheckboxChange}
        />
        <input
          type="number"
          name="classroomNumber"
          placeholder="Enter number"
          onChange={handleChange}
        />
        <button onClick={handlePost}>Create class</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}