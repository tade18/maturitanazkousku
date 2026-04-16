import { useParams, Link } from "react-router-dom";

export default function CreatedSubject() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Subject Created</h1>
          <p className="text-lg text-gray-600">
            Subject ID: <span className="font-medium text-gray-800">{id}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/subject/${id}`}
            className="px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
          >
            View subject
          </Link>
          <Link
            to="/"
            className="px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}