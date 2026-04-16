import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTeacherById, deleteTeacher } from "../../../models/Teacher";

export default function TeacherView() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTeacherById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTeacher(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === teacher.name) {
      const result = await deleteTeacher(id);
      if (result.status === 200) {
        navigate(`/deletedteacher/${id}`);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong teacher name");
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
        <p className="text-xl text-gray-600">Teacher not found</p>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Loading teacher...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Detail</h1>

        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 space-y-3">
          <p className="text-lg font-medium text-gray-800">
            Teacher ID: <span className="font-normal">{id}</span>
          </p>
          <p className="text-lg font-medium text-gray-800">
            Name: <span className="font-normal">{teacher.name}</span>
          </p>
          <p className="text-lg font-medium text-gray-800">
            Age: <span className="font-normal">{teacher.age}</span>
          </p>
          <p className="text-lg font-medium text-gray-800">
            Working Hours: <span className="font-normal">{teacher.hours}</span>
          </p>
        </div>

        <form onSubmit={handleDelete} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-xl font-medium text-gray-800">Delete Teacher</h2>
          <p className="text-gray-600">Enter teacher name to confirm deletion:</p>
          <input
            type="text"
            placeholder={teacher.name}
            value={formData}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
          >
            Delete teacher
          </button>
          {info && <p className="text-sm text-red-600">{info}</p>}
        </form>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/updateteacher/${id}`}
            className="flex-1 text-center px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
          >
            Update teacher
          </Link>
          <Link
            to="/"
            className="flex-1 text-center px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}