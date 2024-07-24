// import React, { useState } from "react";
// // import profile from "../../../../assets/hr/employee/profile/profile.jpg";
// import profile from "../assets/hr/employee/profile/profile.jpg";
// import HolidayList from "../components/hr/holiday/HolidayList";
// import AllEmployees from "../components/hr/employe/AllEmployees";
// import LeaveRequest from "../components/hr/employe/LeaveRequest";
// import Attendance from "../components/hr/employe/Attendance";
// import DepartmentList from "../components/hr/employe/DepartmentList";
// import AccountPayments from "../components/hr/account/AccountPayments";
// import NavBar from "../components/NavBar";
// import AccountExpenses from "../components/hr/account/AccountExpenses";
// import AccountInvoice from "../components/hr/account/AccountInvoice";
// import ReportInvoice from "../components/hr/report/ReportInvoice";
// import ReportExpenses from "../components/hr/report/ReportExpenses";
// import { useSelector } from "react-redux";
// import ForHrSidebar from "./ForHrSidebar";
// import ForProjectSidebar from "./ForProjectSidebar";
// import HRDashboard from "../components/hr/hr_dashboard/HRDashboard";
// import Activities from "../components/hr/activities/Activities";
// import Events from "../components/hr/events/Events";
// import HrSocial from "../components/hr/hr_social/HrSocial";
// import UserList from "../components/hr/user/UserList";
// import Dashboard from "../components/project/projectDashboard/Dashboard";
// import AddProject from "./project/projecttab/AddProject";
// import ProjectGrid from "./project/projecttab/ProjectGrid";
// import Tickets from "./project/tickets/Tickets";
// import Teams from "./project/teams/Teams";
// import Chat from "./project/chat/Chat";
// import ProjectList from "./project/projecttab/ProjectList";
// const SideBar = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [selectedHeader, setSelectedHeader] = useState("Hr");
//   const jwt = localStorage.getItem("token1");
//   const auth = useSelector((state) => state.auth.user?.email);
//   const user = localStorage.setItem("user", auth);

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//   };
//   const projectoptions = [
//     {
//       title: "Dashboard",
//       component: "Dashboard",
//       icon: <FaTachometerAlt />,
//     },
//     { title: "Inbox", component: "", icon: <FaCalendarAlt /> },
//     { title: "Chat", component: "Chat", icon: <FaCalendarCheck /> },
//     { title: "Project", component: "", icon: <FaTasks /> },
//     { title: "Clients", component: "", icon: <MdOutlineSocialDistance /> },
//     { title: "Teams", component: "Teams", icon: <FaUserFriends /> },
//     { title: "Tickets", component: "Tickets", icon: <FaUserFriends /> },
//     // { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
//     // { title: "Report", component: "", icon: <FaFileAlt /> },
//     // { title: "User", component: "", icon: <FaUser /> },
//     // { title: "Authentication", component: "", icon: <FaLock /> },
//   ];

//   const Hroptions = [
//     {
//       title: "HR Dashboard",
//       component: "HRDashboard",
//       icon: <FaTachometerAlt />,
//     },
//     { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
//     { title: "Events", component: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", component: "Activities", icon: <FaTasks /> },
//     {
//       title: "HR Social",
//       component: "HrSocial",
//       icon: <MdOutlineSocialDistance />,
//     },
//     { title: "Employee", component: "", icon: <FaUserFriends /> },
//     { title: "Account", component: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", component: "", icon: <FaFileAlt /> },
//     { title: "User", component: "UserList", icon: <FaUser /> },
//     { title: "Authentication", component: "", icon: <FaLock /> },
//   ];
//   const employeeOptions = [
//     { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
//     {
//       title: "Leave Requests",
//       component: "LeaveRequest",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Attendance",
//       component: "Attendance",
//       icon: <FaCalendarCheck />,
//     },
//     { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
//   ];

//   const accountOptions = [
//     {
//       title: "Payment",
//       component: "PaymentsTab",
//       icon: <FaCalendarCheck />,
//     },
//     { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
//     { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
//   ];

//   const reportOptions = [
//     {
//       title: "Expenses Report",
//       component: "ReportExpenses",
//       icon: <FaBuilding />,
//     },
//     {
//       title: "Invoice Report",
//       component: "ReportInvoice",
//       icon: <FaBuilding />,
//     },
//   ];

//   const authOptions = [
//     { title: "Login", link: "/login", icon: <FaBuilding /> },
//     { title: "Register", link: "/register", icon: <FaBuilding /> },
//     {
//       title: "Forget Password",
//       link: "/forget-password",
//       icon: <FaBuilding />,
//     },
//     { title: "Page 404", link: "/404", icon: <FaBuilding /> },
//   ];

//   return (
//     <>
//       <div className="relative">
//         <NavBar />
//       </div>
//       <div className="absolute top-0">
//         <div className="flex h-auto pb-10">
//           <div className="bg-[#0098f1] w-[280px] pt-10 pb-10 h-auto rounded-br-[48px]">
//             {/* <div className="px-2 flex pb-5">
//               <img src={profile} className="rounded-full w-[70px] h-[70px]" />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome {auth}</p>
//             </div> */}
//             <div className="text-xl text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Hr"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer  ${
//                   selectedHeader === "Projects"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Projects")}
//               >
//                 Projects
//               </span>
//             </div>

//             {selectedHeader === "Hr" ? (
//               <>
//                 <ForHrSidebar setActiveTab={setActiveTab} />
//               </>
//             ) : (
//               <>
//                 <ForProjectSidebar setActiveTab={setActiveTab} />
//               </>
//             )}
//           </div>
//           <div className="flex-1">
//             {activeTab === "AllEmployees" && <AllEmployees />}
//             {activeTab === "LeaveRequest" && <LeaveRequest />}
//             {activeTab === "Attendance" && <Attendance />}
//             {activeTab === "DepartmentList" && <DepartmentList />}
//             {activeTab === "HolidayTab" && <HolidayList />}
//             {activeTab === "PaymentsTab" && <AccountPayments />}
//             {activeTab === "ExpensesTab" && <AccountExpenses />}
//             {activeTab === "InvoiceTab" && <AccountInvoice />}
//             {activeTab === "ReportInvoice" && <ReportInvoice />}
//             {activeTab === "ReportExpenses" && <ReportExpenses />}
//             {activeTab === "HRDashboard" && <HRDashboard />}
//             {activeTab === "Activities" && <Activities />}
//             {activeTab === "Events" && <Events />}
//             {activeTab === "HrSocial" && <HrSocial />}
//             {activeTab === "UserList" && <UserList />}
//             {activeTab === "Dashboard" && <Dashboard />}
//             {activeTab === "AddProject" && <AddProject />}
//             {activeTab === "ProjectGrid" && <ProjectGrid />}
//             {activeTab === "Tickets" && <Tickets />}
//             {activeTab === "Teams" && <Teams />}
//             {activeTab === "Chat" && <Chat />}
//             {activeTab === "ProjectList" && <ProjectList />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoProjectSymlink } from "react-icons/go";
// import { GoProjectRoadmap } from "react-icons/go";
// import { GrProjects } from "react-icons/gr";
// import { TbListDetails } from "react-icons/tb";
// import {
//   FaTachometerAlt,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaUserFriends,
//   FaMoneyCheckAlt,
//   FaFileAlt,
//   FaUser,
//   FaLock,
//   FaChevronDown,
//   FaChevronUp,
//   FaUsers,
//   FaClipboardList,
//   FaBuilding,
// } from "react-icons/fa";
// import { MdOutlineSocialDistance } from "react-icons/md";
// import profile from "../assets/hr/employee/profile/profile.jpg";
// import AllEmployees from "./hr/employe/AllEmployees";
// import Attendance from "./hr/employe/Attendance";
// import DepartmentList from "./hr/employe/DepartmentList";
// // import NavBar from "./employeeTab/EmployeeNavBar";
// import NavBar from "./NavBar";
// import AddProject from "./project/projecttab/AddProject";
// import LeaveRequest from "./hr/employe/LeaveRequest";

// function SideBar() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [showProjectOptions, setShowProjectOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("Hr");

//   const options = [
//     { title: "HR Dashboard", path: "/", icon: <FaTachometerAlt /> },
//     { title: "Holidays", path: "/holidays", icon: <FaCalendarAlt /> },
//     { title: "Events", path: "/events", icon: <FaCalendarCheck /> },
//     { title: "Activities", path: "/activities", icon: <FaTasks /> },
//     {
//       title: "HR Social",
//       path: "/hr-social",
//       icon: <MdOutlineSocialDistance />,
//     },
//     { title: "Employee", path: "", icon: <FaUserFriends /> },
//     { title: "PayRoll", path: "/payroll", icon: <FaMoneyCheckAlt /> },
//     { title: "Report", path: "/report", icon: <FaFileAlt /> },
//     { title: "User", path: "/user", icon: <FaUser /> },
//     { title: "Authentication", path: "/auth", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "All Employees", path: "/allemployees", icon: <FaUsers /> },
//     {
//       title: "Leave Requests",
//       path: "/leaverequest",
//       icon: <FaClipboardList />,
//     },
//     {
//       title: "Attendance",
//       path: "/attendance",
//       icon: <FaCalendarCheck />,
//     },
//     {
//       title: "Department",
//       path: "/departmentlist",
//       icon: <FaBuilding />,
//     },
//   ];

//   const projectOptions = [
//     { title: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
//     { title: "Inbox", path: "/inbox", icon: <FaFileAlt /> },
//     { title: "Chat", path: "/chat", icon: <FaUser /> },
//     { title: "Projects", path: "", icon: <FaTasks /> },
//     { title: "Clients", path: "/clients", icon: <FaUserFriends /> },
//     { title: "Teams", path: "/teams", icon: <FaUsers /> },
//     { title: "Tickets", path: "/tickets", icon: <FaClipboardList /> },
//   ];

//   const projectDropdownOptions = [
//     { title: "Add Project", path: "/addproject", icon: <GoProjectSymlink /> },
//     { title: "Project List", path: "/projectlist", icon: <GoProjectRoadmap /> },
//     { title: "Project Grid", path: "/projectgrid", icon: <GrProjects /> },
//     {
//       title: "Project Details",
//       path: "/projectdetails",
//       icon: <TbListDetails />,
//     },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else if (option.title === "Projects") {
//       setShowProjectOptions(!showProjectOptions);
//     } else if (activeTab !== option.path) {
//       navigate(option.path);
//       setShowEmployeeOptions(false);
//       setShowProjectOptions(false);
//       setActiveTab(option.path);
//     }
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//     setShowEmployeeOptions(false);
//     setShowProjectOptions(false);
//   };

//   const handleEmployeeOptionClick = (option) => {
//     if (activeTab !== option.path) {
//       navigate(option.path);
//       setShowEmployeeOptions(false);
//       setActiveTab(option.path);
//     }
//   };

//   const handleProjectOptionClick = (option) => {
//     if (activeTab !== option.path) {
//       navigate(option.path);
//       setShowProjectOptions(false);
//       setActiveTab(option.path);
//     }
//   };

//   return (
//     <div className="relative   ">
//       <NavBar />
//       <div className="absolute  top-0">
//         <div className="flex h-auto pb-10">
//           <div className="bg-[#0098f1] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 w-[240px] text-[16px] overflow-x-hidden pt-10 pb-10 h-screen  fixed overflow-y-auto">
//             <div className="px-2 flex pb-5">
//               <img
//                 src={profile}
//                 className="rounded-full w-[70px] h-[70px]"
//                 alt="Profile"
//               />
//               <p className="text-[16px] pt-5 text-white pl-2">Welcome User</p>
//             </div>
//             <div className="text-[16px] text-white flex justify-around pr-10 pb-5 items-center">
//               <span
//                 className={`cursor-pointer ${
//                   selectedHeader === "Hr"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Hr")}
//               >
//                 Hr
//               </span>
//               <span
//                 className={`cursor-pointer ${
//                   selectedHeader === "Projects"
//                     ? "underline decoration-2 underline-offset-8 "
//                     : ""
//                 }`}
//                 onClick={() => handleHeaderClick("Projects")}
//               >
//                 Projects
//               </span>
//             </div>

//             <div className="flex flex-col pr-3 text-white">
//               {selectedHeader === "Hr" &&
//                 options.map((option, index) => (
//                   <div key={index}>
//                     <div
//                       className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                         activeTab === option.path ? "" : ""
//                       }`}
//                       onClick={() => handleOptionClick(option)}
//                     >
//                       <div className="p-3 pl-4 text-[16px] flex items-center">
//                         {option.icon}
//                         <span className="ml-3">{option.title}</span>
//                       </div>
//                       {option.title === "Employee" && (
//                         <div className="ml-auto pr-4">
//                           {showEmployeeOptions ? (
//                             <FaChevronUp />
//                           ) : (
//                             <FaChevronDown />
//                           )}
//                         </div>
//                       )}
//                     </div>
//                     {option.title === "Employee" && showEmployeeOptions && (
//                       <div className="transition-all duration-500 ml-8">
//                         {employeeOptions.map((item, idx) => (
//                           <div
//                             key={idx}
//                             className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                               activeTab === item.path
//                                 ? "bg-white text-[#e65f2b]"
//                                 : ""
//                             }`}
//                             onClick={() => handleEmployeeOptionClick(item)}
//                           >
//                             <div className="p-3 pl-4 text-[16px] flex items-center">
//                               {item.icon}
//                               <span className="ml-3">{item.title}</span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//               {selectedHeader === "Projects" &&
//                 projectOptions.map((option, index) => (
//                   <div key={index}>
//                     <div
//                       className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                         activeTab === option.path ? "" : ""
//                       }`}
//                       onClick={() => handleOptionClick(option)}
//                     >
//                       <div className="p-3 pl-4 text-[16px] flex items-center">
//                         {option.icon}
//                         <span className="ml-3">{option.title}</span>
//                       </div>
//                       {option.title === "Projects" && (
//                         <div className="ml-auto pr-4">
//                           {showProjectOptions ? (
//                             <FaChevronUp />
//                           ) : (
//                             <FaChevronDown />
//                           )}
//                         </div>
//                       )}
//                     </div>
//                     {option.title === "Projects" && showProjectOptions && (
//                       <div className="transition-all duration-500 ml-8">
//                         {projectDropdownOptions.map((item, idx) => (
//                           <div
//                             key={idx}
//                             className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-[200px] mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                               activeTab === item.path
//                                 ? "bg-white text-[#e65f2b]"
//                                 : ""
//                             }`}
//                             onClick={() => handleProjectOptionClick(item)}
//                           >
//                             <div className="p-3 pl-4 text-[16px] flex items-center">
//                               {item.icon}
//                               <span className="ml-3">{item.title}</span>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//             </div>
//           </div>
//           <div className="flex-1">
//             {/* Render components based on activeTab */}
//             {activeTab === "/allemployees" && <AllEmployees />}
//             {activeTab === "/leaverequest" && <LeaveRequest />}
//             {activeTab === "/attendance" && <Attendance />}
//             {activeTab === "/departmentlist" && <DepartmentList />}
//             {/* {activeTab === "/allemployees" && <AllEmployees />} */}
//             {/* {activeTab === "/addproject" && <AddProject />} */}
//             {/* Add other components for project options here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaUser,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaClipboardList,
  FaBuilding,
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import AllEmployees from "./hr/employe/AllEmployees";
import Attendance from "./hr/employe/Attendance";
import DepartmentList from "./hr/employe/DepartmentList";
import AddProject from "./project/projecttab/AddProject";
import LeaveRequest from "./hr/employe/LeaveRequest";

function SideBar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const options = [
    { title: "HR Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { title: "Holidays", path: "/holidays", icon: <FaCalendarAlt /> },
    { title: "Events", path: "/events", icon: <FaCalendarCheck /> },
    { title: "Activities", path: "/activities", icon: <FaTasks /> },
    {
      title: "HR Social",
      path: "/hr-social",
      icon: <MdOutlineSocialDistance />,
    },
    { title: "Employee", path: "", icon: <FaUserFriends /> },
    { title: "PayRoll", path: "/payroll", icon: <FaMoneyCheckAlt /> },
    { title: "Report", path: "/report", icon: <FaFileAlt /> },
    { title: "User", path: "/user", icon: <FaUser /> },
    { title: "Authentication", path: "/auth", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "All Employees", path: "/allemployees", icon: <FaUsers /> },
    {
      title: "Leave Requests",
      path: "/leaverequest",
      icon: <FaClipboardList />,
    },
    { title: "Attendance", path: "/attendance", icon: <FaCalendarCheck /> },
    { title: "Department", path: "/departmentlist", icon: <FaBuilding /> },
  ];

  const projectOptions = [
    { title: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", path: "/inbox", icon: <FaFileAlt /> },
    { title: "Chat", path: "/chat", icon: <FaUser /> },
    { title: "Projects", path: "", icon: <FaTasks /> },
    { title: "Clients", path: "/clients", icon: <FaUserFriends /> },
    { title: "Teams", path: "/teams", icon: <FaUsers /> },
    { title: "Tickets", path: "/tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "Add Project", path: "/addproject", icon: <GoProjectSymlink /> },
    { title: "Project List", path: "/projectlist", icon: <GoProjectRoadmap /> },
    { title: "Project Grid", path: "/projectgrid", icon: <GrProjects /> },
    {
      title: "Project Details",
      path: "/projectdetails",
      icon: <TbListDetails />,
    },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    } else if (option.title === "Projects") {
      setShowProjectOptions(!showProjectOptions);
    } else if (activeTab !== option.path) {
      navigate(option.path);
      setShowEmployeeOptions(false);
      setShowProjectOptions(false);
      setActiveTab(option.path);
    }
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    setShowEmployeeOptions(false);
    setShowProjectOptions(false);
  };

  const handleEmployeeOptionClick = (option) => {
    if (activeTab !== option.path) {
      navigate(option.path);
      setShowEmployeeOptions(false);
      setActiveTab(option.path);
    }
  };

  const handleProjectOptionClick = (option) => {
    if (activeTab !== option.path) {
      navigate(option.path);
      setShowProjectOptions(false);
      setActiveTab(option.path);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="relative">
      <NavBar />
      <div className="absolute top-0">
        <div
          className={`flex ${
            isSidebarCollapsed ? "w-16" : "w-[240px]"
          } h-auto pb-10`}
        >
          <div
            className={`bg-[#0098f1] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 text-[16px] overflow-x-hidden pt-10 pb-10 h-screen fixed overflow-y-auto ${
              isSidebarCollapsed ? "w-16" : "w-[240px]"
            }`}
          >
            <div className="flex justify-between  items-center">
              <IoMdMenu
                className="text-white h-[30px] ml-4 cursor-pointer"
                onClick={toggleSidebar}
              />
              {!isSidebarCollapsed && (
                <div className="flex items-center  px-2 pb-5">
                  <img
                    src={profile}
                    className="rounded-full w-[50px] h-[50px]"
                    alt="Profile"
                  />
                  <p className="text-[16px] pt-5 text-white pl-2">
                    Welcome User
                  </p>
                </div>
              )}
            </div>
            {!isSidebarCollapsed && (
              <div className="text-[16px] text-white flex justify-around pr-10 pb-5 items-center">
                <span
                  className={`cursor-pointer ${
                    selectedHeader === "Hr"
                      ? "underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                  onClick={() => handleHeaderClick("Hr")}
                >
                  Hr
                </span>
                <span
                  className={`cursor-pointer ${
                    selectedHeader === "Projects"
                      ? "underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                  onClick={() => handleHeaderClick("Projects")}
                >
                  Projects
                </span>
              </div>
            )}
            <div className="flex flex-col pr-3 text-white">
              {selectedHeader === "Hr" &&
                options.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === option.path
                          ? "bg-white text-[#e65f2b]"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {option.icon}
                        {!isSidebarCollapsed && (
                          <span className="ml-3">{option.title}</span>
                        )}
                      </div>
                      {option.title === "Employee" && (
                        <div className="ml-auto pr-4">
                          {showEmployeeOptions ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                      )}
                    </div>
                    {option.title === "Employee" && showEmployeeOptions && (
                      <div className="transition-all duration-500 ml-8">
                        {employeeOptions.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                              activeTab === item.path
                                ? "bg-white text-[#e65f2b]"
                                : ""
                            }`}
                            onClick={() => handleEmployeeOptionClick(item)}
                          >
                            <div className="p-3 pl-4 text-[16px] flex items-center">
                              {item.icon}
                              <span className="ml-3">{item.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              {selectedHeader === "Projects" &&
                projectOptions.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === option.path
                          ? "bg-white text-[#e65f2b]"
                          : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {option.icon}
                        {!isSidebarCollapsed && (
                          <span className="ml-3">{option.title}</span>
                        )}
                      </div>
                      {option.title === "Projects" && (
                        <div className="ml-auto pr-4">
                          {showProjectOptions ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </div>
                      )}
                    </div>
                    {option.title === "Projects" && showProjectOptions && (
                      <div className="transition-all duration-500 ml-8">
                        {projectDropdownOptions.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center transition-all duration-500 hover:bg-white text-white hover:text-[#e65f2b] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                              activeTab === item.path
                                ? "bg-white text-[#e65f2b]"
                                : ""
                            }`}
                            onClick={() => handleProjectOptionClick(item)}
                          >
                            <div className="p-3 pl-4 text-[16px] flex items-center">
                              {item.icon}
                              <span className="ml-3">{item.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
