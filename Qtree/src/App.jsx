import { Routes, Route} from 'react-router-dom'
import StudentsList from './Admin/StudentsList'
import Courses from './Admin/Courses'
import StaffsList from './Admin/StaffsList'
import AccessRequsts from './Admin/AccessRequsts'
import DailyClasses from './Staff/DailyClasses'
import StudentDetails from './Students/StudentDetails'
import AddStudent from './Admin/AddStudent'
import AddStaff from './Admin/AddStaff'
import AddCourse from './Admin/AddCourse'

function App() {
  return (
    <div>
      <Routes>

          <Route path={'/admin/students/'} element={<StudentsList />}/>
          <Route path={'/admin/students/add/'} element={<AddStudent />}/>
          <Route path={'/admin/Staffs/'} element={<StaffsList />}/>
          <Route path={'/admin/Staffs/add/'} element={<AddStaff />}/>
          <Route path={'/admin/courses/'} element={<Courses />}/>
          <Route path={'/admin/courses/add/'} element={<AddCourse />}/>
          <Route path={'/admin/request/'} element={<AccessRequsts />}/>

          <Route path={'/staff/classes/'} element={<DailyClasses />}/>

          <Route path={'/student/data/'} element={<StudentDetails />}/>
      </Routes>
    </div>
  )
}

export default App
