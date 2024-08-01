import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import AllEmployees from "./components/hr/employe/AllEmployees";
import Attendance from "./components/hr/employe/Attendance";
import DepartmentList from "./components/hr/employe/DepartmentList";
import AddProject from "./components/project/projecttab/AddProject";
import LeaveRequest from "./components/hr/employe/LeaveRequest";
import HRDashboard from "./components/hr/hr_dashboard/HRDashboard";
import HolidayList from "./components/hr/holiday/HolidayList";
import Events from "./components/hr/events/Events";
import Activities from "./components/hr/activities/Activities";
import HrSocial from "./components/hr/hr_social/HrSocial";
// import Payroll from "./components/Payroll";
import ReportInvoice from "./components/hr/report/ReportInvoice";
import Userlist from "./components/hr/user/UserList";
// import Authentication from "./components/Authentication";
// import Dashboard from "./components/Dashboard";
import Inbox from "./components/project/inbox/Inbox";
import Chat from "./components/project/chat/Chat";
// import Clients from "./components/Clients";
import TeamList from "./components/project/projectDashboard/TeamList";
import Tickets from "./components/project/tickets/Tickets";
import ProjectList from "./components/project/projecttab/ProjectList";
import ProjectGrid from "./components/project/projecttab/ProjectGrid";
import ProjectDetail from "./components/project/projecttab/ProjectDetail";
import EmployeeSideBar from "./components/hr/employeesidebar/employeSidebar";
import EmployeeNavBar from "./components/hr/employeesidebar/employeNavbar";
function App() {
  return (
    <Router>
      {/* <SideBar /> */}
      <div className="flex-grow p-10">
        <Routes>
        
          {/* <Route path="/employenavbar" element={<EmployeeNavBar />} /> */}
          <Route path="/employesidebar" element={<EmployeeSideBar />} />
          {/* <Route path="/" element={<SideBar />} /> */}

          {/* <Route path="/holidays" element={<HolidayList />} />
          <Route path="/events" element={<Events />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/hr-social" element={<HrSocial />} />
          <Route path="/report" element={<ReportInvoice />} />
          <Route path="/user" element={<Userlist />} />
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/departmentlist" element={<DepartmentList />} />
          <Route path="/leaverequest" element={<LeaveRequest />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/projectgrid" element={<ProjectGrid />} />
          <Route path="/projectdetails" element={<ProjectDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
