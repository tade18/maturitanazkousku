import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateStudent, getStudentById } from "../../../models/Student";

export default function StudentUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [student, setStudent] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setFormData(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const result = await updateStudent(id, formData);
    if (result.status === 200) {
      redirectToSuccessPage(result.payload._id);
    } else {
      setInfo(result.msg);
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
    navigate(`/student/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Student not found</p>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Loading student...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Update Student</h1>

        <form onSubmit={handlePost} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                name="name"
                defaultValue={student.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                required
                name="age"
                defaultValue={student.age}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Average Grade</label>
              <input
                type="number"
                required
                name="avgGrades"
                defaultValue={student.avgGrades}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Update student
          </button>

          {info && <p className="mt-3 text-sm text-red-600 text-center">{info}</p>}
        </form>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}