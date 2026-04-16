import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CatView from "./CatsPages/CatView/CatView";
import CatList from "./CatsPages/CatList/CatList";
import CatCreateForm from "./CatsPages/CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatsPages/CatUpdateForm/CatUpdateForm";
import CreatedCat from "./CatsPages/CatCreateForm/CreatedCat";
import CatDeleted from "./CatsPages/CatView/CatDeleted";
import StudentCreateForm from "./StudentsPages/StudentCreateForm/StudentCreateForm";
import CreatedStudent from "./StudentsPages/StudentCreateForm/CreatedStudent";
import StudentView from "./StudentsPages/StudentView/StudentView";
import StudentList from "./StudentsPages/StudentList/StudentList";
import StudentUpdateList from "./StudentsPages/StudentUpdateForm/StudentUpdateForm";
import StudentDeleted from "./StudentsPages/StudentView/StudentDeleted";
import SubjectCreateForm from "./SubjectPages/SubjectCreateForm/SubjectCreateForm";
import CreatedSubject from "./SubjectPages/SubjectCreateForm/CreatedSubject";
import SubjectView from "./SubjectPages/SubjectView/SubjectView";
import SubjectList from "./SubjectPages/SubjectList/SubjectList";
import SubjectUpdateForm from "./SubjectPages/SubjectUpdateForm/SubjectUpdateForm";
import SubjectDeleted from "./SubjectPages/SubjectView/SubjectDeleted";
import TeacherCreateForm from "./TeachersPages/TeacherCreateForm/TeacherCreateForm";
import CreatedTeacher from "./TeachersPages/TeacherCreateForm/CreatedTeacher";
import TeacherView from "./TeachersPages/TeacherView/TeacherView";
import TeacherList from "./TeachersPages/TeacherList/TeacherList";
import TeacherUpdateForm from "./TeachersPages/TeacherUpdateForm/TeacherUpdateForm";
import TeacherDeleted from "./TeachersPages/TeacherView/TeacherDeleted";
import ClassCreateForm from "./ClassPages/ClassCreateForm/ClassCreateForm";
import ClassUpdateForm from "./ClassPages/ClassUpdateForm.jsx/ClassUpdateForm";
import CreatedClass from "./ClassPages/ClassCreateForm/CreatedClass";
import ClassList from "./ClassPages/ClassList/ClassList";
import DeletedClass from "./ClassPages/ClassView/DeletedClass";
import ClassView from "./ClassPages/ClassView/ClassView";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cat/:id" element={<CatView />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/createcat" element={<CatCreateForm />} />
        <Route path="/updatecat/:id" element={<CatUpdateForm />} />
        <Route path="/createdcat/:id" element={<CreatedCat />} />
        <Route path="/deletedcat/:id" element={<CatDeleted />} />

        <Route path="/createstudent" element={<StudentCreateForm />} />
        <Route path="/createdstudent/:id" element={<CreatedStudent />} />
        <Route path="/student/:id" element={<StudentView />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/updatestudent/:id" element={<StudentUpdateList />} />
        <Route path="/deletedstudent/:id" element={<StudentDeleted />} />

        <Route path="/createsubject" element={<SubjectCreateForm />} />
        <Route path="/createdsubject/:id" element={<CreatedSubject />} />
        <Route path="/subject/:id" element={<SubjectView />} />
        <Route path="/subjects" element={<SubjectList />} />
        <Route path="/updatesubject/:id" element={<SubjectUpdateForm />} />
        <Route path="/deletedsubject/:id" element={<SubjectDeleted />} />

        <Route path="/createteacher" element={<TeacherCreateForm />} />
        <Route path="/createdteacher/:id" element={<CreatedTeacher />} />
        <Route path="/teacher/:id" element={<TeacherView />} />
        <Route path="/teachers" element={<TeacherList />} />
        <Route path="/updateteacher/:id" element={<TeacherUpdateForm />} />
        <Route path="/deletedteacher/:id" element={<TeacherDeleted />} />

        <Route path="/createclass" element={<ClassCreateForm />} />
        <Route path="/createdclass/:id" element={<CreatedClass />} />
        <Route path="/class/:id" element={<ClassView />} />
        <Route path="/classes" element={<ClassList />} />
        <Route path="/updateclass/:id" element={<ClassUpdateForm />} />
        <Route path="/deletedclass/:id" element={<DeletedClass />} />

      </Routes>
    </BrowserRouter>
  );
}
