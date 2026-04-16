import { Link, useParams, useNavigate } from "react-router-dom";
import { getStudentById, deleteStudent } from "../../../models/Student";
import { useEffect, useState } from "react";

export default function StudentView() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === student.name) {
      const result = await deleteStudent(id);
      if (result.status === 200) {
        navigate(`/deletedstudent/${id}`);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong student name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
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
        <h1 className="text-3xl font-bold text-gray-900">Student Detail</h1>

        <div className="space-y-4">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-lg font-medium text-gray-800">Student ID: <span className="font-normal">{id}</span></p>
            <p className="text-lg font-medium text-gray-800">Name: <span className="font-normal">{student.name}</span></p>
            <p className="text-lg font-medium text-gray-800">Age: <span className="font-normal">{student.age}</span></p>
            <p className="text-lg font-medium text-gray-800">Average Grade: <span className="font-normal">{student.avgGrades}</span></p>
          </div>

          <form onSubmit={handleDelete} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Delete Student</h2>
            <p className="text-gray-600 mb-2">Enter student name to confirm deletion:</p>
            <input
              type="text"
              placeholder={student.name}
              value={formData}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
            >
              Delete student
            </button>
            {info && <p className="mt-3 text-sm text-red-600">{info}</p>}
          </form>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={`/updatestudent/${id}`}
              className="block w-full sm:w-auto text-center px-6 py-2 bg-blue-100 rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
            >
              Update student
            </Link>
            <Link
              to="/students"
              className="block w-full sm:w-auto text-center px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
            >
              Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}