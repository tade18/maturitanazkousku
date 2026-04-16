import { Link } from "react-router-dom";
import ClassLink from "./ClassLink";
import { useState, useEffect } from "react";
import { getAllClasses } from "../../../models/Class";

export default function ClassList() {
  const [classes, setClass] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllClasses();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setClasss(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Classes not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Classes are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Class list</h1>
      {
        classess.map((classs, index) => (
            <ClassLink key={index} name={classs.name} id={classs._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
