import { Link } from "react-router-dom";
import StudentLink from "./StudentLink";
import { useState, useEffect } from "react";
import { getAllStudents } from "../../../models/Student";

export default function StudentList() {
  const [students, setStudents] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllStudents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Students not found</p>
        <Link to={"/createstudent"} className="inline-block px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium">
          Add new student
        </Link>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Loading students...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student List</h1>

        <div className="space-y-3">{
        students.map((student, index) => (
            <StudentLink key={index} name={student.name} id={student._id} />
        ))
        }
        </div>

        <div className="mt-10 text-center">
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