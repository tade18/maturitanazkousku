import { Link } from "react-router-dom"

export default function ClassLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/class/${props.id}`}>
                <p>View class</p>
            </Link>
        </>
    )
}