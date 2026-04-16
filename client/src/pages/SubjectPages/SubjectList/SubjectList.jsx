import { Link } from "react-router-dom";
import SubjectLink from "./SubjectLink";
import { useState, useEffect } from "react";
import { getAllSubjects } from "../../../models/Subject";
export default function SubjectList() {
  const [subjects, setSubjects] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllSubjects();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSubjects(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Subjects not found</p>
        <Link to={"/createsubject"} className="inline-block px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium">
          Add new subject
        </Link>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 flex items-center justify-center p-6">
        <p className="text-xl text-gray-600">Subjects not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Subject List</h1>

        <div className="space-y-3">{
        subjects.map((subject, index) => (
            <SubjectLink key={index} name={subject.name} id={subject._id} />
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
