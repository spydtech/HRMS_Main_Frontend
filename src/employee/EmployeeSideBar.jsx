

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
// import profile from "../../../assets/hr/profile/man.png";
import profile from "../assets/hr/profile/man.png";
import EmployeeNavBar from "./EmployeeNavBar";
import ApplyLeave from "./options/applyLeave/ApplyLeave";
import PayrollDashboard from "../components/payroll/PayrollDashboard";

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
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiHdfcbank } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import AttendancePage from "./attendence/Attendencepage";
import Payslips from "./options/payslips/Payslip";
import AllEmployees from "./options/allEmployees/AllEmployees";
import Events from "./options/events/Events";
const EmployeeSideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const options = [
    { title: "All Employees", icon: <FaUsers /> },
    { title: "Holidays", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      subOptions: [
        { name: "Run payroll", icon: <GiPayMoney /> },
        // { name: "Payroll Summary", icon: <GiPayMoney /> },
        { name: "Payroll settings", icon: <GiPayMoney /> },
        { name: "Advances/loans", icon: <GiPayMoney /> },
        { name: "Payslips", icon: <GiPayMoney /> },
        { name: "Settlements", icon: <GiPayMoney /> },
        { name: "Payroll Forms", icon: <GiPayMoney /> },
        { name: "Direct deposits", icon: <GiPayMoney /> },
        { name: "YTD important", icon: <GiPayMoney /> },
        { name: "Gratuity Calculator", icon: <GiPayMoney /> },
        { name: "Estimated tax sheet", icon: <GiPayMoney /> },
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
    if (option.subOptions) {
      setOpenDropdown(openDropdown === option.title ? "" : option.title);
    } else {
      setActiveTab(option.title);
      setOpenDropdown(""); // Close any open dropdowns
    }
  };

  const handleSubOptionClick = (event, subOption) => {
    event.stopPropagation(); // Prevent event propagation to avoid closing dropdown
    setActiveTab(subOption.name);
    // Dropdown remains open
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Payslips":
        return <Payslips />;
      case "All Employees":
        return <AllEmployees />;
      case "Tickets":
        return <PayrollDashboard />;
      // Add cases for other tabs/sub-options here
      case "Attendance":
        return <AttendancePage />;
      case "hebd":
        return <Events />;
      default:
        return (
          <div className="text-2xl mt-[100px] font-bold">
            Selected Option: {activeTab || "None"}
          </div>
        );
    }
  };

  return (
    <div className="relative bg-[#e65f2b] h-full  bg-opacity-10">
      <EmployeeNavBar />
      <div
        className={`flex flex-col h-screen fixed bg-[#e65f2b] mr-20 transition-all duration-300 ${
          isSidebarCollapsed ? "w-16" : "w-[240px]"
        } pb-10 h-screen fixed z-10 top-0 overflow-y-auto bg-[#e65f2b] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent`}
      >
        <div className="flex flex-col pr-3 text-white">
          <div className="flex justify-between items-center pt-10 pb-5 pl-5">
            <IoMdMenu
              className="text-white h-[30px] cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div>
            {!isSidebarCollapsed && (
              <div className="flex items-center pb-4 px-2">
                <img
                  src={profile}
                  className="rounded-full w-[50px] h-[50px]"
                  alt="Profile"
                />
                <p className="text-[16px] text-white pl-2">Welcome! User</p>
              </div>
            )}
          </div>
          <div className="flex flex-col rounded-r-[20px]">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex flex-col transition-all my-1 duration-500 hover:bg-white hover:text-[#e65f2b] rounded-r-[20px]  cursor-pointer ${
                  activeTab === option.title ||
                  (option.subOptions && openDropdown === option.title)
                    ? "bg-white text-[#e65f2b] rounded-r-[20px] "
                    : "rounded-r-[20px] "
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="p-3 pl-4 text-[16px] flex items-center rounded-r-[20px] ">
                  {option.icon}
                  {!isSidebarCollapsed && (
                    <span className="ml-3">{option.title}</span>
                  )}
                  {option.subOptions && (
                    <span className="ml-auto rounded-r-[20px] ">
                      {openDropdown === option.title ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  )}
                </div>
                {option.subOptions && openDropdown === option.title && (
                  <div className="pl-3 bg-[#e65f2b] text-white transition-all duration-300 ">
                    {option.subOptions.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className={`p-3 flex items-center my-1 cursor-pointer rounded-r-[20px]  ${
                          activeTab === subOption.name
                            ? "bg-white rounded-r-[10px] text-[#ef5f2b]"
                            : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-[10px]"
                        }`}
                        onClick={(event) =>
                          handleSubOptionClick(event, subOption)
                        }
                      >
                        {subOption.icon}
                        <span className="ml-3">{subOption.name}</span>
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
        <div className="text-2xl font-bold">{renderContent()}</div>
      </div>
    </div>
  );
};

export default EmployeeSideBar;
