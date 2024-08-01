// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoMdMenu } from "react-icons/io";
// import profile from "../assets/hr/employee/profile/profile.jpg";
// import NavBar from "./NavBar";
// import HolidayTab from "../components/hr/holiday/HolidayList";
// import AllEmployees from "../components/hr/employe/AllEmployees";
// import LeaveRequest from "../components/hr/employe/LeaveRequest";
// import Attendance from "../components/hr/employe/Attendance";
// import DepartmentList from "../components/hr/employe/DepartmentList";
// import AccountPayments from "../components/hr/account/AccountPayments";
// // import NavBar from "../components/NavBar";
// import AccountExpenses from "../components/hr/account/AccountExpenses";
// import AccountInvoice from "../components/hr/account/AccountInvoice";
// import ReportInvoice from "../components/hr/report/ReportInvoice";
// import ReportExpenses from "../components/hr/report/ReportExpenses";
// import { useSelector } from "react-redux";
// import ForHrSidebar from "./ForHrSidebar";
// import ForProjectSidebar from "./ForProjectSidebar";
// import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
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
// import ProjectDetails from "./project/projecttab/ProjectDetail";
// import Inbox from "./project/inbox/Inbox";
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
// import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
// import { GrProjects } from "react-icons/gr";
// import { TbListDetails } from "react-icons/tb";

// const SideBar = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("");
//   const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
//   const [showProjectOptions, setShowProjectOptions] = useState(false);
//   const [selectedHeader, setSelectedHeader] = useState("Hr");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const options = [
//     { title: "HrDashboard", icon: <FaTachometerAlt /> },
//     { title: "HolidayTab", icon: <FaCalendarAlt /> },
//     { title: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     { title: "HrSocial", icon: <MdOutlineSocialDistance /> },
//     { title: "Employee", icon: <FaUserFriends /> },
//     { title: "PayRoll", icon: <FaMoneyCheckAlt /> },
//     { title: "ReportInvoice", icon: <FaFileAlt /> },
//     { title: "UserList", icon: <FaUser /> },
//     { title: "Authentication", icon: <FaLock /> },
//   ];

//   const employeeOptions = [
//     { title: "AllEmployees", icon: <FaUsers /> },
//     { title: "LeaveRequest", icon: <FaClipboardList /> },
//     { title: "Attendance", icon: <FaCalendarCheck /> },
//     { title: "DepartmentList", icon: <FaBuilding /> },
//   ];

//   const projectOptions = [
//     { title: "Dashboard", icon: <FaTachometerAlt /> },
//     { title: "Inbox", icon: <FaFileAlt /> },
//     { title: "Chat", icon: <FaUser /> },
//     { title: "Projects", icon: <FaTasks /> },
//     { title: "Clients", icon: <FaUserFriends /> },
//     { title: "Teams", icon: <FaUsers /> },
//     { title: "Tickets", icon: <FaClipboardList /> },
//   ];

//   const projectDropdownOptions = [
//     { title: "AddProject", icon: <GoProjectSymlink /> },
//     { title: "ProjectList", icon: <GoProjectRoadmap /> },
//     { title: "ProjectGrid", icon: <GrProjects /> },
//     { title: "ProjectDetails", icon: <TbListDetails /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Employee") {
//       setShowEmployeeOptions(!showEmployeeOptions);
//     } else if (option.title === "Projects") {
//       setShowProjectOptions(!showProjectOptions);
//     } else {
//       setActiveTab(option.title);
//       setShowEmployeeOptions(false);
//       setShowProjectOptions(false);
//     }
//   };

//   const handleHeaderClick = (header) => {
//     setSelectedHeader(header);
//     setShowEmployeeOptions(false);
//     setShowProjectOptions(false);
//   };

//   const handleEmployeeOptionClick = (option) => {
//     setActiveTab(option.title);
//     setShowEmployeeOptions(false);
//   };

//   const handleProjectOptionClick = (option) => {
//     setActiveTab(option.title);
//     setShowProjectOptions(false);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <div className="relative">
//       <NavBar />
//       <div className="absolute top-0">
//         <div
//           className={`flex ${
//             isSidebarCollapsed ? "w-16" : "w-[240px]"
//           } h-auto pb-10`}
//         >
//           <div
//             className={`bg-[#0098f1] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 text-[16px] overflow-x-hidden pt-10 pb-10 h-screen fixed overflow-y-auto ${
//               isSidebarCollapsed ? "w-16" : "w-[240px]"
//             }`}
//           >
//             <div className="flex justify-between items-center">
//               <IoMdMenu
//                 className="text-white h-[30px] ml-4 cursor-pointer"
//                 onClick={toggleSidebar}
//               />
//               {!isSidebarCollapsed && (
//                 <div className="flex items-center px-2 pb-5">
//                   <img
//                     src={profile}
//                     className="rounded-full w-[50px] h-[50px]"
//                     alt="Profile"
//                   />
//                   <p className="text-[16px] pt-5 text-white pl-2">
//                     Welcome User
//                   </p>
//                 </div>
//               )}
//             </div>
//             {!isSidebarCollapsed && (
//               <div className="text-[16px] text-white flex justify-around pr-10 pb-5 items-center">
//                 <span
//                   className={`cursor-pointer ${
//                     selectedHeader === "Hr"
//                       ? "underline decoration-2 underline-offset-8"
//                       : ""
//                   }`}
//                   onClick={() => handleHeaderClick("Hr")}
//                 >
//                   Hr
//                 </span>
//                 <span
//                   className={`cursor-pointer ${
//                     selectedHeader === "Projects"
//                       ? "underline decoration-2 underline-offset-8"
//                       : ""
//                   }`}
//                   onClick={() => handleHeaderClick("Projects")}
//                 >
//                   Projects
//                 </span>
//               </div>
//             )}
//             <div className="flex flex-col pr-3 text-white">
//               {selectedHeader === "Hr" &&
//                 options.map((option, index) => (
//                   <div key={index}>
//                     <div
//                       className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#800000] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                         activeTab === option.title
//                           ? "bg-white text-[#800000]"
//                           : ""
//                       }`}
//                       onClick={() => handleOptionClick(option)}
//                     >
//                       <div className="p-3 pl-4 text-[16px] flex items-center">
//                         {option.icon}
//                         {!isSidebarCollapsed && (
//                           <span className="ml-3">{option.title}</span>
//                         )}
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
//                             className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#800000] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                               activeTab === item.title
//                                 ? "bg-white text-[#800000]"
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
//                       className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#800000] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                         activeTab === option.title
//                           ? "bg-white text-[#800000]"
//                           : ""
//                       }`}
//                       onClick={() => handleOptionClick(option)}
//                     >
//                       <div className="p-3 pl-4 text-[16px] flex items-center">
//                         {option.icon}
//                         {!isSidebarCollapsed && (
//                           <span className="ml-3">{option.title}</span>
//                         )}
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
//                             className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#800000] w-full mx-0 rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                               activeTab === item.title
//                                 ? "bg-white text-[#800000]"
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
//         </div>
//       </div>
//       <div className="ml-64 p-4">
//         {activeTab === "HrDashboard" && <HrDashboard />}
//         {activeTab === "HolidayTab" && <HolidayTab />}
//         {activeTab === "Events" && <Events />}
//         {activeTab === "Activities" && <Activities />}
//         {activeTab === "HrSocial" && <HrSocial />}
//         {activeTab === "AllEmployees" && <AllEmployees />}
//         {activeTab === "PayRoll" && <PayRoll />}
//         {activeTab === "ReportInvoice" && <ReportInvoice />}
//         {activeTab === "UserList" && <UserList />}
//         {activeTab === "Authentication" && <Authentication />}
//         {activeTab === "AddProject" && <AddProject />}
//         {activeTab === "ProjectList" && <ProjectList />}
//         {activeTab === "ProjectGrid" && <ProjectGrid />}
//         {activeTab === "ProjectDetails" && <ProjectDetails />}
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import profile from "../assets/hr/employee/profile/profile.jpg";
import NavBar from "./NavBar";
import HolidayTab from "../components/hr/holiday/HolidayList";
import AllEmployees from "../components/hr/employe/AllEmployees";
import LeaveRequest from "../components/hr/employe/LeaveRequest";
import Attendance from "../components/hr/employe/Attendance";
import DepartmentList from "../components/hr/employe/DepartmentList";
import AccountPayments from "../components/hr/account/AccountPayments";
import AccountExpenses from "../components/hr/account/AccountExpenses";
import AccountInvoice from "../components/hr/account/AccountInvoice";
import ReportInvoice from "../components/hr/report/ReportInvoice";
import ReportExpenses from "../components/hr/report/ReportExpenses";
import { useSelector } from "react-redux";
import ForHrSidebar from "./ForHrSidebar";
import ForProjectSidebar from "./ForProjectSidebar";
import HrDashboard from "../components/hr/hr_dashboard/HRDashboard";
import Activities from "../components/hr/activities/Activities";
import Events from "../components/hr/events/Events";
import HrSocial from "../components/hr/hr_social/HrSocial";
import UserList from "../components/hr/user/UserList";
import Dashboard from "../components/project/projectDashboard/Dashboard";
import AddProject from "./project/projecttab/AddProject";
import ProjectGrid from "./project/projecttab/ProjectGrid";
import Tickets from "./project/tickets/Tickets";
import Teams from "./project/teams/Teams";
import Chat from "./project/chat/Chat";
import ProjectList from "./project/projecttab/ProjectList";
import ProjectDetails from "./project/projecttab/ProjectDetail";
import Inbox from "./project/inbox/Inbox";
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
  FaUsers,
  FaClipboardList,
  FaBuilding,
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import { GoProjectSymlink, GoProjectRoadmap } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";

const SideBar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("Hr");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const options = [
    { title: "HrDashboard", icon: <FaTachometerAlt /> },
    { title: "HolidayTab", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HrSocial", icon: <MdOutlineSocialDistance /> },
    { title: "Employee", icon: <FaUserFriends /> },
    { title: "PayRoll", icon: <FaMoneyCheckAlt /> },
    { title: "Reports", icon: <FaFileAlt /> },
    { title: "Accounts", icon: <FaMoneyCheckAlt /> },
    { title: "Authentication", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "AllEmployees", icon: <FaUsers /> },
    { title: "LeaveRequest", icon: <FaClipboardList /> },
    { title: "Attendance", icon: <FaCalendarCheck /> },
    { title: "DepartmentList", icon: <FaBuilding /> },
  ];

  const projectOptions = [
    { title: "Dashboard", icon: <FaTachometerAlt /> },
    { title: "Inbox", icon: <FaFileAlt /> },
    { title: "Chat", icon: <FaUser /> },
    { title: "Projects", icon: <FaTasks /> },
    { title: "Clients", icon: <FaUserFriends /> },
    { title: "Teams", icon: <FaUsers /> },
    { title: "Tickets", icon: <FaClipboardList /> },
  ];

  const projectDropdownOptions = [
    { title: "AddProject", icon: <GoProjectSymlink /> },
    { title: "ProjectList", icon: <GoProjectRoadmap /> },
    { title: "ProjectGrid", icon: <GrProjects /> },
    { title: "ProjectDetails", icon: <TbListDetails /> },
  ];

  const reportOptions = [
    { title: "ReportInvoice", icon: <FaFileAlt /> },
    { title: "ReportExpenses", icon: <FaFileAlt /> },
    { title: "ReportOption3", icon: <FaFileAlt /> },
    { title: "ReportOption4", icon: <FaFileAlt /> },
  ];

  const accountOptions = [
    { title: "AccountPayments", icon: <FaMoneyCheckAlt /> },
    { title: "AccountExpenses", icon: <FaMoneyCheckAlt /> },
    { title: "AccountInvoice", icon: <FaMoneyCheckAlt /> },
    { title: "AccountOption4", icon: <FaMoneyCheckAlt /> },
  ];

  const authOptions = [
    { title: "AuthOption1", icon: <FaLock /> },
    { title: "AuthOption2", icon: <FaLock /> },
    { title: "AuthOption3", icon: <FaLock /> },
    { title: "AuthOption4", icon: <FaLock /> },
  ];

  const handleOptionClick = (option) => {
    switch (option.title) {
      case "Employee":
        setShowEmployeeOptions(!showEmployeeOptions);
        break;
      case "Projects":
        setShowProjectOptions(!showProjectOptions);
        break;
      case "Reports":
        setShowReportOptions(!showReportOptions);
        break;
      case "Accounts":
        setShowAccountOptions(!showAccountOptions);
        break;
      case "Authentication":
        setShowAuthOptions(!showAuthOptions);
        break;
      default:
        setActiveTab(option.title);
        setShowEmployeeOptions(false);
        setShowProjectOptions(false);
        setShowReportOptions(false);
        setShowAccountOptions(false);
        setShowAuthOptions(false);
        break;
    }
  };

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
    setShowEmployeeOptions(false);
    setShowProjectOptions(false);
  };

  const handleEmployeeOptionClick = (option) => {
    setActiveTab(option.title);
    setShowEmployeeOptions(false);
  };

  const handleProjectOptionClick = (option) => {
    setActiveTab(option.title);
    setShowProjectOptions(false);
  };

  const handleReportOptionClick = (option) => {
    setActiveTab(option.title);
    setShowReportOptions(false);
  };

  const handleAccountOptionClick = (option) => {
    setActiveTab(option.title);
    setShowAccountOptions(false);
  };

  const handleAuthOptionClick = (option) => {
    setActiveTab(option.title);
    setShowAuthOptions(false);
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
            <div className="flex justify-between items-center">
              <IoMdMenu
                className="text-white h-[30px] ml-4 cursor-pointer"
                onClick={toggleSidebar}
              />
              {!isSidebarCollapsed && (
                <div className="flex items-center px-2 pb-5">
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
                    selectedHeader === "Project"
                      ? "underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                  onClick={() => handleHeaderClick("Project")}
                >
                  Project
                </span>
              </div>
            )}
            {selectedHeader === "Hr" && (
              <div>
                {options.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center ${
                        isSidebarCollapsed ? "justify-center" : ""
                      } py-2 px-4 text-[16px] text-white cursor-pointer ${
                        activeTab === option.title
                          ? "bg-[#90cdf4] rounded-[10px]"
                          : "hover:bg-[#90cdf4] rounded-[10px]"
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-4 text-[16px]">
                          {option.title}
                        </span>
                      )}
                      {!isSidebarCollapsed &&
                        (option.title === "Employee" ? (
                          showEmployeeOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : option.title === "Projects" ? (
                          showProjectOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : option.title === "Reports" ? (
                          showReportOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : option.title === "Accounts" ? (
                          showAccountOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : option.title === "Authentication" ? (
                          showAuthOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : null)}
                    </div>
                    {option.title === "Employee" && showEmployeeOptions && (
                      <div className="pl-8">
                        {employeeOptions.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center py-2 px-4 text-[16px] text-white cursor-pointer ${
                              activeTab === subOption.title
                                ? "bg-[#90cdf4] rounded-[10px]"
                                : "hover:bg-[#90cdf4] rounded-[10px]"
                            }`}
                            onClick={() => handleEmployeeOptionClick(subOption)}
                          >
                            {subOption.icon}
                            <span className="pl-4 text-[16px]">
                              {subOption.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {option.title === "Reports" && showReportOptions && (
                      <div className="pl-8">
                        {reportOptions.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center py-2 px-4 text-[16px] text-white cursor-pointer ${
                              activeTab === subOption.title
                                ? "bg-[#90cdf4] rounded-[10px]"
                                : "hover:bg-[#90cdf4] rounded-[10px]"
                            }`}
                            onClick={() => handleReportOptionClick(subOption)}
                          >
                            {subOption.icon}
                            <span className="pl-4 text-[16px]">
                              {subOption.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {option.title === "Accounts" && showAccountOptions && (
                      <div className="pl-8">
                        {accountOptions.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center py-2 px-4 text-[16px] text-white cursor-pointer ${
                              activeTab === subOption.title
                                ? "bg-[#90cdf4] rounded-[10px]"
                                : "hover:bg-[#90cdf4] rounded-[10px]"
                            }`}
                            onClick={() => handleAccountOptionClick(subOption)}
                          >
                            {subOption.icon}
                            <span className="pl-4 text-[16px]">
                              {subOption.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {option.title === "Authentication" && showAuthOptions && (
                      <div className="pl-8">
                        {authOptions.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center py-2 px-4 text-[16px] text-white cursor-pointer ${
                              activeTab === subOption.title
                                ? "bg-[#90cdf4] rounded-[10px]"
                                : "hover:bg-[#90cdf4] rounded-[10px]"
                            }`}
                            onClick={() => handleAuthOptionClick(subOption)}
                          >
                            {subOption.icon}
                            <span className="pl-4 text-[16px]">
                              {subOption.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            {selectedHeader === "Project" && (
              <div>
                {projectOptions.map((option, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center ${
                        isSidebarCollapsed ? "justify-center" : ""
                      } py-2 px-4 text-[16px] text-white cursor-pointer ${
                        activeTab === option.title
                          ? "bg-[#90cdf4] rounded-[10px]"
                          : "hover:bg-[#90cdf4] rounded-[10px]"
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.icon}
                      {!isSidebarCollapsed && (
                        <span className="pl-4 text-[16px]">
                          {option.title}
                        </span>
                      )}
                      {!isSidebarCollapsed &&
                        (option.title === "Projects" ? (
                          showProjectOptions ? (
                            <FaChevronUp className="ml-auto" />
                          ) : (
                            <FaChevronDown className="ml-auto" />
                          )
                        ) : null)}
                    </div>
                    {option.title === "Projects" && showProjectOptions && (
                      <div className="pl-8">
                        {projectDropdownOptions.map((subOption, subIndex) => (
                          <div
                            key={subIndex}
                            className={`flex items-center py-2 px-4 text-[16px] text-white cursor-pointer ${
                              activeTab === subOption.title
                                ? "bg-[#90cdf4] rounded-[10px]"
                                : "hover:bg-[#90cdf4] rounded-[10px]"
                            }`}
                            onClick={() => handleProjectOptionClick(subOption)}
                          >
                            {subOption.icon}
                            <span className="pl-4 text-[16px]">
                              {subOption.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pl-[245px] pt-[40px] pr-2">
        {activeTab === "HrDashboard" && <HrDashboard />}
        {activeTab === "HolidayTab" && <HolidayTab />}
        {activeTab === "Events" && <Events />}
        {activeTab === "Activities" && <Activities />}
        {activeTab === "HrSocial" && <HrSocial />}
        {activeTab === "AllEmployees" && <AllEmployees />}
        {activeTab === "LeaveRequest" && <LeaveRequest />}
        {activeTab === "Attendance" && <Attendance />}
        {activeTab === "DepartmentList" && <DepartmentList />}
        {activeTab === "ReportInvoice" && <ReportInvoice />}
        {activeTab === "ReportExpenses" && <ReportExpenses />}
        {activeTab === "AccountPayments" && <AccountPayments />}
        {activeTab === "AccountExpenses" && <AccountExpenses />}
        {activeTab === "AccountInvoice" && <AccountInvoice />}
        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Inbox" && <Inbox />}
        {activeTab === "Chat" && <Chat />}
        {activeTab === "AddProject" && <AddProject />}
        {activeTab === "ProjectList" && <ProjectList />}
        {activeTab === "ProjectGrid" && <ProjectGrid />}
        {activeTab === "ProjectDetails" && <ProjectDetails />}
        {activeTab === "Teams" && <Teams />}
        {activeTab === "Tickets" && <Tickets />}
      </div>
    </div>
  );
};

export default SideBar;
