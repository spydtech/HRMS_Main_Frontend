




// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { FaChevronDown } from "react-icons/fa";
// // import profile from "../../../assets/hr/profile/man.png";
// import profile from "../assets/hr/profile/man.png";
// import EmployeeNavBar from "./EmployeeNavBar";
// import AttendancePage from "../components/hr/attendence/Attendencepage";
// import {
//   FaUsers,
//   FaCalendarAlt,
//   FaCalendarCheck,
//   FaTasks,
//   FaMoneyCheckAlt,
//   FaUser,
//   FaSignOutAlt,
//   FaProjectDiagram,
//   FaInbox,
//   FaComments,
//   FaClipboardList,
//   FaGavel,
//   FaTicketAlt,
// } from "react-icons/fa";
// import { SiHdfcbank } from "react-icons/si";

// const EmployeeSideBar = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);

//   const options = [
//     { title: "All Employees", icon: <FaUsers /> },
//     { title: "Holidays", icon: <FaCalendarAlt /> },
//     { title: "Events", icon: <FaCalendarCheck /> },
//     { title: "Activities", icon: <FaTasks /> },
//     {
//       title: "Payroll",
//       icon: <FaMoneyCheckAlt />,
//       subOptions: [
//         "Run payroll",
//         "Payroll Summary",
//         "Payroll settings",
//         "Advances/loans",
//         "payslips",
//         "settlements",
//         "PayrollForms",
//         "Direct deposits",
//         "YTD important",
//         "Gratuity Calculator",
//         "Estimated tax sheet",
//       ],
//     },
//     { title: "Profile", icon: <FaUser /> },
//     { title: "Bank Account Details", icon: <SiHdfcbank /> },
//     { title: "Apply Leave", icon: <FaSignOutAlt /> },
//     { title: "Projects", icon: <FaProjectDiagram /> },
//     { title: "Inbox", icon: <FaInbox /> },
//     { title: "Chats", icon: <FaComments /> },
//     { title: "Attendance", icon: <FaClipboardList /> },
//     { title: "Rules", icon: <FaGavel /> },
//     { title: "Tickets", icon: <FaTicketAlt /> },
//   ];

//   const handleOptionClick = (option) => {
//     if (option.title === "Payroll") {
//       setIsPayrollDropdownOpen(!isPayrollDropdownOpen);
//     } else {
//       setActiveTab(option.title);
//     }
//   };

//   const handleSubOptionClick = (subOption) => {
//     setActiveTab(subOption);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Attendance":
//         return <AttendancePage />;
//       // Add cases for other tabs here
//       default:
//         return (
//           <div className="text-2xl pt-20 font-bold">
//             Selected Option: {activeTab || "None"}
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex mt-5">
//       <div
//         className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${
//           isSidebarCollapsed ? "w-16" : "w-[240px]"
//         } overflow-y-hidden`}
//       >
//         <div className="flex flex-col text-white overflow-y-scroll hide-scrollbar">
//           <div className="flex justify-between items-center p-4">
//             <IoMdMenu
//               className="text-white h-[30px] cursor-pointer"
//               onClick={toggleSidebar}
//             />
//             {!isSidebarCollapsed && (
//               <div className="flex items-center ml-3 px-2">
//                 <img
//                   src={profile}
//                   className="rounded-full w-[50px] h-[50px]"
//                   alt="Profile"
//                 />
//                 <p className="text-[14px] text-white pl-2">Welcome! User</p>
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col">
//             {options.map((option, index) => (
//               <div key={index}>
//                 <div
//                   className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                     activeTab === option.title ? "bg-white text-[#e65f2b]" : ""
//                   }`}
//                   onClick={() => handleOptionClick(option)}
//                 >
//                   <div className="p-3 pl-4 text-[16px] flex items-center">
//                     {option.icon}
//                     {!isSidebarCollapsed && (
//                       <>
//                         <span className="ml-3">{option.title}</span>
//                         {option.title === "Payroll" && (
//                           <FaChevronDown
//                             className={`ml-20 transform transition-transform ${
//                               isPayrollDropdownOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         )}
//                       </>
//                     )}
//                   </div>
//                 </div>
//                 {option.subOptions && isPayrollDropdownOpen && (
//                   <div className="ml-8 mt-1">
//                     {option.subOptions.map((subOption, subIndex) => (
//                       <div
//                         key={subIndex}
//                         className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
//                           activeTab === subOption
//                             ? "bg-white text-[#e65f2b]"
//                             : ""
//                         }`}
//                         onClick={() => handleSubOptionClick(subOption)}
//                       >
//                         <div className="p-3 text-[14px]">{subOption}</div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex-1 p-4 transition-all duration-300 ${
//           isSidebarCollapsed ? "ml-16" : "ml-[240px]"
//         }`}
//       >
//         <EmployeeNavBar />
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default EmployeeSideBar;


import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
// import profile from "../../../assets/hr/profile/man.png";
import profile from "../assets/hr/profile/man.png";
import EmployeeNavBar from "./EmployeeNavBar";
import AttendancePage from "../components/hr/attendence/Attendencepage";
import {
  FaUsers,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaMoneyCheckAlt,
  FaUser,
  FaSignOutAlt,
  FaProjectDiagram,
  FaInbox,
  FaComments,
  FaClipboardList,
  FaGavel,
  FaTicketAlt,
} from "react-icons/fa";
import { SiHdfcbank } from "react-icons/si";

const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isPayrollDropdownOpen, setIsPayrollDropdownOpen] = useState(false);

  const options = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        "Run payroll",
        "Payroll Summary",
        "Payroll settings",
        "Advances/loans",
        "payslips",
        "settlements",
        "PayrollForms",
        "Direct deposits",
        "YTD important",
        "Gratuity Calculator",
        "Estimated tax sheet",
      ],
    },
    { title: "Profile", icon: <FaUser /> },
    { title: "Bank Account Details", icon: <SiHdfcbank /> },
    { title: "Apply Leave", icon: <FaSignOutAlt /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Inbox", icon: <FaInbox /> },
    { title: "Chats", icon: <FaComments /> },
    { title: "Attendance", icon: <FaClipboardList /> },
    { title: "Rules", icon: <FaGavel /> },
    { title: "Tickets", icon: <FaTicketAlt /> },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Payroll") {
      setIsPayrollDropdownOpen(!isPayrollDropdownOpen);
    } else {
      setActiveTab(option.title);
    }
  };

  const handleSubOptionClick = (subOption) => {
    setActiveTab(subOption);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Attendance":
        return <AttendancePage />;
      // Add cases for other tabs here
      default:
        return (
          <div className="text-2xl pt-20 font-bold">
            Selected Option: {activeTab || "None"}
          </div>
        );
    }
  };

  return (
    <div className="flex mt-5">
      <div
        className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } overflow-y-hidden`}
      >
        <div className="flex flex-col text-white overflow-y-scroll sidebar-hide-scrollbar">
          <div className="flex justify-between items-center p-4">
            <IoMdMenu
              className="text-white h-[30px] cursor-pointer"
              onClick={toggleSidebar}
            />
            {!isSidebarCollapsed && (
              <div className="flex items-center ml-3 px-2">
                <img
                  src={profile}
                  className="rounded-full w-[50px] h-[50px]"
                  alt="Profile"
                />
                <p className="text-[14px] text-white pl-2">Welcome! User</p>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div key={index}>
                <div
                  className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                    activeTab === option.title ? "bg-white text-[#e65f2b]" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <div className="p-3 pl-4 text-[16px] flex items-center">
                    {option.icon}
                    {!isSidebarCollapsed && (
                      <>
                        <span className="ml-3">{option.title}</span>
                        {option.title === "Payroll" && (
                          <FaChevronDown
                            className={`ml-20 transform transition-transform ${
                              isPayrollDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
                {option.subOptions && isPayrollDropdownOpen && (
                  <div className="ml-8 mt-1">
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                          activeTab === subOption
                            ? "bg-white text-[#e65f2b]"
                            : ""
                        }`}
                        onClick={() => handleSubOptionClick(subOption)}
                      >
                        <div className="p-3 text-[14px]">{subOption}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-[240px]"
        }`}
      >
        <EmployeeNavBar />
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeSideBar;

