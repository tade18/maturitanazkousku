import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSubject } from "../../../models/Subject";

export default function SubjectCreateForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState("");
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
    navigate(`/createdsubject/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Subject</h1>

        <form onSubmit={handlePost} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject ID</label>
              <input
                type="number"
                required
                name="id"
                placeholder="Enter subject id"
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
              <input
                type="number"
                required
                name="year"
                placeholder="Enter year"
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Required Hours</label>
              <input
                type="number"
                required
                name="requiredHours"
                placeholder="Enter how many hours are required"
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Create subject
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