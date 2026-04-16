import { Link } from "react-router-dom"

export default function TeacherLink(props) {

    return (
        <div className="flex flex-row justify-evenly items-center border-1 rounded-lg p-5 rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium">
                <p>Name: {props.name}</p>
                <Link to={`/student/${props.id}`} className="inline-block px-6 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200 border border-gray-100 hover:border-gray-200 text-gray-800 font-medium">
                    View Student
                </Link>
            </div>
            
    )
}