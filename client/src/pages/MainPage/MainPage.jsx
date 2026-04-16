import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">School Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/students"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200"
          >
            <h2 className="text-2xl font-medium text-gray-800">Students</h2>
          </Link>

          <Link
            to="/teachers"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200"
          >
            <h2 className="text-2xl font-medium text-gray-800">Teachers</h2>
          </Link>

          <Link
            to="/subjects"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200"
          >
            <h2 className="text-2xl font-medium text-gray-800">Subjects</h2>
          </Link>

          <Link
            to="/classes"
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200"
          >
            <h2 className="text-2xl font-medium text-gray-800">Classes</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}