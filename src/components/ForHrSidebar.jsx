import React, { useState } from "react";
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
  FaBars, // Import menu icon
} from "react-icons/fa";
import { MdOutlineSocialDistance } from "react-icons/md";
import profile from "../assets/hr/employee/profile/profile.jpg";

import { useSelector } from "react-redux";
import ForProjectSidebar from "./ForProjectSidebar";

const ForHrSidebar = ({ setActiveTab, activeTab }) => {
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [isIconOnly, setIsIconOnly] = useState(false); // State for icon-only mode

  const jwt = localStorage.getItem("token1");
  const auth = useSelector((state) => state.auth.user?.email);
  const user = localStorage.setItem("user", auth);

  const options = [
    {
      title: "HR Dashboard",
      component: "HRDashboard",
      icon: <FaTachometerAlt />,
    },
    { title: "Holidays", component: "HolidayTab", icon: <FaCalendarAlt /> },
    { title: "Events", component: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", component: "Activities", icon: <FaTasks /> },
    {
      title: "HR Social",
      component: "HrSocial",
      icon: <MdOutlineSocialDistance />,
    },
    { title: "Employee", component: "", icon: <FaUserFriends /> },
    { title: "Account", component: "", icon: <FaUserFriends /> },
    { title: "PayRoll", component: "", icon: <FaMoneyCheckAlt /> },
    { title: "Report", component: "", icon: <FaFileAlt /> },
    { title: "User", component: "UserList", icon: <FaUser /> },
    { title: "Authentication", component: "", icon: <FaLock /> },
  ];

  const employeeOptions = [
    { title: "All Employees", component: "AllEmployees", icon: <FaUsers /> },
    {
      title: "Leave Requests",
      component: "LeaveRequest",
      icon: <FaClipboardList />,
    },
    {
      title: "Attendance",
      component: "Attendance",
      icon: <FaCalendarCheck />,
    },
    { title: "Department", component: "DepartmentList", icon: <FaBuilding /> },
  ];

  const accountOptions = [
    {
      title: "Payment",
      component: "PaymentsTab",
      icon: <FaCalendarCheck />,
    },
    { title: "Expenses", component: "ExpensesTab", icon: <FaBuilding /> },
    { title: "Invoice", component: "InvoiceTab", icon: <FaBuilding /> },
  ];

  const reportOptions = [
    {
      title: "Expenses Report",
      component: "ReportExpenses",
      icon: <FaBuilding />,
    },
    {
      title: "Invoice Report",
      component: "ReportInvoice",
      icon: <FaBuilding />,
    },
  ];

  const authOptions = [
    { title: "Login", link: "/login", icon: <FaBuilding /> },
    { title: "Register", link: "/register", icon: <FaBuilding /> },
    {
      title: "Forget Password",
      link: "/forget-password",
      icon: <FaBuilding />,
    },
    { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  ];

  const handleOptionClick = (option) => {
    if (option.title === "Employee") {
      setShowEmployeeOptions(!showEmployeeOptions);
    } else if (option.title === "Account") {
      setShowAccountOptions(!showAccountOptions);
    } else if (option.title === "Report") {
      setShowReportOptions(!showReportOptions);
    } else if (option.title === "Authentication") {
      setShowAuthOptions(!showAuthOptions);
    } else {
      setActiveTab(option.component);
      setShowEmployeeOptions(false);
      setShowAccountOptions(false);
      setShowReportOptions(false);
      setShowAuthOptions(false);
    }
  };

  const handleSubOptionClick = (option, setter) => {
    setActiveTab(option.component);
    setter(false); // Close the submenu after selection
  };

  const toggleSidebarMode = () => {
    setIsIconOnly(!isIconOnly);
  };

  return (
    <>
      {/* <div className="px-2 flex pb-5">
        <img src={profile} className="rounded-full w-[70px] h-[70px]" />
        <p className="text-[16px] pt-5 text-white pl-2">Welcome {auth}</p>
      </div> */}

      <div
        className="flex items-center p-3 cursor-pointer"
        onClick={toggleSidebarMode}
      >
        <FaBars size={24} />
      </div>
      <div
        className={`flex flex-col pr-3 text-white ${
          isIconOnly ? "w-20" : "w-64"
        } transition-all duration-500`}
      >
        {options.map((option, index) => (
          <div key={index}>
            <div
              className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                activeTab === option.component ? "bg-white text-[#e65f2b]" : ""
              }`}
              onClick={() => handleOptionClick(option)}
              aria-expanded={
                (option.title === "Employee" && showEmployeeOptions) ||
                (option.title === "Account" && showAccountOptions) ||
                (option.title === "Report" && showReportOptions) ||
                (option.title === "Authentication" && showAuthOptions)
              }
              role="button"
            >
              <div className="p-3 pl-4 text-[16px] flex items-center">
                {option.icon}
                {!isIconOnly && <span className="ml-3">{option.title}</span>}
              </div>
              {(option.title === "Employee" ||
                option.title === "Account" ||
                option.title === "Report" ||
                option.title === "Authentication") && (
                <div className="ml-auto pr-4">
                  {option.title === "Employee" && showEmployeeOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Employee" ? (
                    <FaChevronDown />
                  ) : option.title === "Account" && showAccountOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Account" ? (
                    <FaChevronDown />
                  ) : option.title === "Report" && showReportOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Report" ? (
                    <FaChevronDown />
                  ) : option.title === "Authentication" && showAuthOptions ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              )}
            </div>
            {(option.title === "Employee" && showEmployeeOptions && (
              <div className="transition-all duration-500 ml-8">
                {employeeOptions.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                      activeTab === item.component
                        ? "bg-white text-[#e65f2b]"
                        : ""
                    }`}
                    onClick={() =>
                      handleSubOptionClick(item, setShowEmployeeOptions)
                    }
                  >
                    <div className="p-3 pl-4 text-[16px] flex items-center">
                      {item.icon}
                      {!isIconOnly && (
                        <span className="ml-3">{item.title}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )) ||
              (option.title === "Account" && showAccountOptions && (
                <div className="transition-all duration-500 ml-8">
                  {accountOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === item.component
                          ? "bg-white text-[#e65f2b]"
                          : ""
                      }`}
                      onClick={() =>
                        handleSubOptionClick(item, setShowAccountOptions)
                      }
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {item.icon}
                        {!isIconOnly && (
                          <span className="ml-3">{item.title}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )) ||
              (option.title === "Report" && showReportOptions && (
                <div className="transition-all duration-500 ml-8">
                  {reportOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === item.component
                          ? "bg-white text-[#e65f2b]"
                          : ""
                      }`}
                      onClick={() =>
                        handleSubOptionClick(item, setShowReportOptions)
                      }
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {item.icon}
                        {!isIconOnly && (
                          <span className="ml-3">{item.title}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )) ||
              (option.title === "Authentication" && showAuthOptions && (
                <div className="transition-all duration-500 ml-8">
                  {authOptions.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center transition-all duration-500 hover:bg-white hover:text-[#e65f2b] rounded-tr-3xl rounded-br-3xl cursor-pointer ${
                        activeTab === item.link ? "bg-white text-[#e65f2b]" : ""
                      }`}
                      onClick={() =>
                        handleSubOptionClick(item, setShowAuthOptions)
                      }
                    >
                      <div className="p-3 pl-4 text-[16px] flex items-center">
                        {item.icon}
                        {!isIconOnly && (
                          <span className="ml-3">{item.title}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ForHrSidebar;
