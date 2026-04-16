import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSubject } from "../../../models/Subject";

export default function SubjectCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const subject = await createSubject(formData);
    if (subject.status === 201) {
      redirectToSuccessPage(subject.payload._id);
    } else {
      setInfo(subject.msg);
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
    return navigate(`/createdsubject/${id}`);
  };

  return (
    <>
      <h1>Subject create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="id"
          placeholder="Enter subject id"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="requiredHours"
          placeholder="Enter how many hours are required"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create subject</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
