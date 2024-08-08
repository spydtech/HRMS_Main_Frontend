
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCalendarCheck,
  FaTasks,
  FaUserFriends,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaBuilding, 
  FaCog, FaUserTie, FaSitemap
} from "react-icons/fa";

import { GiPayMoney } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineSocialDistance } from "react-icons/md";
import { logout } from "../State/Auth/Action";
import { useDispatch } from "react-redux";

const ForHrSidebar = ({ isSidebarCollapsed, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [showEmployeeOptions, setShowEmployeeOptions] = useState(false);
  const [showReportOptions, setShowReportOptions] = useState(false);
  const [showPayrollOptions, setShowPayrollOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showHrManagementOptions1, setShowHrManagementOptions1] = useState(false);
  const [showHrManagementOptions2, setShowHrManagementOptions2] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  const options = [
    { title: "Hr Dashboard", icon: <FaTachometerAlt /> },
    { title: "Holiday", icon: <FaCalendarAlt /> },
    { title: "Events", icon: <FaCalendarCheck /> },
    { title: "Activities", icon: <FaTasks /> },
    { title: "HR Social", icon: <MdOutlineSocialDistance /> },
    {
      title: "HR Management 1",
      icon: <FaUserFriends />,
      hasSubOptions: true,
    },
    {
      title: "Payroll1",
      icon: <FaUserFriends />,
      hasSubOptions: true,
    },
    { title: "PayRoll", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Reports", icon: <FaFileAlt />, hasSubOptions: true },
    { title: "Accounts", icon: <FaMoneyCheckAlt />, hasSubOptions: true },
    { title: "Authentication", icon: <FaLock />, hasSubOptions: true },
  ];

  const employeeOptions = [
    { title: "Payroll Settings", icon: <FaCog /> },
    { title: "Assign Structure", icon: <FaUserTie /> },
    { title: "Create Structure", icon: <FaSitemap /> },
    
  ];

  const reportOptions = [
    { title: "Report Invoice", icon: <FaFileAlt /> },
    { title: "Report Expenses", icon: <FaFileAlt /> },
  ];

  const accountOptions = [
    { title: "Account Payment", icon: <FaMoneyCheckAlt /> },
    { title: "Account Expenses", icon: <FaMoneyCheckAlt /> },
    { title: "Account Invoice", icon: <FaMoneyCheckAlt /> },
  ];

  const payrollOptions = [
    { title: "DashBoard", icon: <TbMoneybag /> },
    { title: "Run payroll", icon: <GiPayMoney /> },
    { title: "Payroll Summary", icon: <MdOutlinePayment /> },
    { title: "Payroll settings", icon: <MdAdminPanelSettings /> },
    { title: "Payslips", icon: <RiMoneyRupeeCircleFill /> },
    { title: "Settlements", icon: <FaMoneyBillTransfer /> },
    { title: "Payroll Forms", icon: <GiTakeMyMoney /> },
  ];

  const authOptions = [
    { title: "Logout", link: "/login", icon: <FaBuilding /> },
    { title: "Register", link: "/register", icon: <FaBuilding /> },
    {
      title: "Forgot Password",
      link: "/forget-password",
      icon: <FaBuilding />,
    },
    { title: "Page 404", link: "/404", icon: <FaBuilding /> },
  ];

  const handleOptionClick = (option) => {
    switch (option.title) {
      case "HR Management 1":
        setShowHrManagementOptions1(!showHrManagementOptions1);
        break;
      case "Payroll1":
        setShowHrManagementOptions2(!showHrManagementOptions2);
        break;
      case "Employee":
        setShowEmployeeOptions(!showEmployeeOptions);
        break;
      case "Reports":
        setShowReportOptions(!showReportOptions);
        break;
      case "PayRoll":
        setShowPayrollOptions(!showPayrollOptions);
        break;
      case "Accounts":
        setShowAccountOptions(!showAccountOptions);
        break;
      case "Authentication":
        setShowAuthOptions(!showAuthOptions);
        break;
      default:
        setActiveTab(option.title);
        break;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
    navigate("/option");
  };

  const handleOptionClickNavigate = (authOption) => {
    navigate(authOption.link);
  };

  return (
    <div className="pr-2">
      <ul className="pt-3 pr-1">
        {options.map((option) => (
          <React.Fragment key={option.title}>
            <li
              className={`flex justify-between text-[16px] pl-5 py-3 mb-1 items-center cursor-pointer ${
                activeTab === option.title
                  ? "bg-white rounded-r-full text-[#ef5f2b]"
                  : "hover:bg-white hover:text-[#ef5f2b] hover:rounded-r-full"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <div className="flex items-center">
                {option.icon}
                <span
                  className={`pl-2 ${isSidebarCollapsed ? "hidden" : "inline"}`}
                >
                  {option.title}
                </span>
              </div>
              {!isSidebarCollapsed && option.hasSubOptions && (
                <span className="pr-5">
                  {option.title === "HR Management 1" && showHrManagementOptions1 ? (
                    <FaChevronUp />
                  ) : option.title === "Payroll1" && showHrManagementOptions2 ? (
                    <FaChevronUp />
                  ) : option.title === "Reports" && showReportOptions ? (
                    <FaChevronUp />
                  ) : option.title === "PayRoll" && showPayrollOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Accounts" && showAccountOptions ? (
                    <FaChevronUp />
                  ) : option.title === "Authentication" && showAuthOptions ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              )}
            </li>
            {!isSidebarCollapsed && option.title === "HR Management 1" && showHrManagementOptions1 && (
              <ul className="">
                <li
                  className={`flex justify-between text-[16px] bg-opacity-50 pl-8 py-3 mb-1 cursor-pointer ${
                    activeTab === showHrManagementOptions1.title
                      ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                      : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                  }`}
                  onClick={() => handleOptionClick({ title: "Employee" })}
                >
                  <div className="flex items-center ">
                    <span className="text-[20px]">
                      <FaUserFriends />
                    </span>
                    {!isSidebarCollapsed && (
                      <span className="pl-2">Employee</span>
                    )}
                  </div>
                  {showEmployeeOptions && !isSidebarCollapsed ? (
                    <span className="pr-5">
                      <FaChevronUp />
                    </span>
                  ) : (
                    <span className=" pr-5">
                      <FaChevronDown />
                    </span>
                  )}
                </li>
                {!isSidebarCollapsed && showEmployeeOptions && (
                  <ul className="">
                    {employeeOptions.map((employeeOption) => (
                      <li
                        key={employeeOption.title}
                        className={`text-[16px] pl-12 py-3 mb-1 cursor-pointer ${
                          activeTab === employeeOption.title
                            ? "bg-white bg-opacity-30 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-30 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => setActiveTab(employeeOption.title)}
                      >
                        <div className="flex items-center">
                          <span className="">{employeeOption.icon}</span>
                          <span
                            className={`pl-2 ${
                              isSidebarCollapsed ? "hidden" : "inline"
                            }`}
                          >
                            {employeeOption.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            )}
            {!isSidebarCollapsed && option.title === "Payroll1" && showHrManagementOptions2 && (
              <ul className="">
                <li
                  className={`flex justify-between text-[16px] bg-opacity-50 pl-8 py-3 mb-1 cursor-pointer ${
                    activeTab === showHrManagementOptions2.title
                      ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                      : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                  }`}
                  onClick={() => handleOptionClick({ title: "Employee" })}
                >
                  <div className="flex items-center ">
                    <span className="text-[20px]">
                      <FaUserFriends />
                    </span>
                    {!isSidebarCollapsed && (
                      <span className="pl-2">Setuppayroll</span>
                    )}
                  </div>
                  {showEmployeeOptions && !isSidebarCollapsed ? (
                    <span className="pr-5">
                      <FaChevronUp />
                    </span>
                  ) : (
                    <span className=" pr-5">
                      <FaChevronDown />
                    </span>
                  )}
                </li>
                {!isSidebarCollapsed && showEmployeeOptions && (
                  <ul className="">
                    {employeeOptions.map((employeeOption) => (
                      <li
                        key={employeeOption.title}
                        className={`text-[16px] pl-12 py-3 mb-1 cursor-pointer ${
                          activeTab === employeeOption.title
                            ? "bg-white bg-opacity-30 rounded-r-full text-[#ef5f2b]"
                            : "hover:bg-white hover:bg-opacity-30 hover:text-[#ef5f2b] hover:rounded-r-full"
                        }`}
                        onClick={() => setActiveTab(employeeOption.title)}
                      >
                        <div className="flex items-center">
                          <span className="">{employeeOption.icon}</span>
                          <span
                            className={`pl-2 ${
                              isSidebarCollapsed ? "hidden" : "inline"
                            }`}
                          >
                            {employeeOption.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            )}
            {!isSidebarCollapsed && option.title === "Reports" && showReportOptions && (
              <ul className="">
                {reportOptions.map((reportOption) => (
                  <li
                    key={reportOption.title}
                    className={`text-[16px] pl-8 py-3 mb-1 cursor-pointer ${
                      activeTab === reportOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(reportOption.title)}
                  >
                    <div className="flex items-center">
                      <span className="">{reportOption.icon}</span>
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {reportOption.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isSidebarCollapsed && option.title === "Accounts" && showAccountOptions && (
              <ul className="">
                {accountOptions.map((accountOption) => (
                  <li
                    key={accountOption.title}
                    className={`text-[16px] pl-8 py-3 mb-1 cursor-pointer ${
                      activeTab === accountOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(accountOption.title)}
                  >
                    <div className="flex items-center">
                      <span className="">{accountOption.icon}</span>
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {accountOption.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isSidebarCollapsed && option.title === "PayRoll" && showPayrollOptions && (
              <ul className="">
                {payrollOptions.map((payrollOption) => (
                  <li
                    key={payrollOption.title}
                    className={`text-[16px] pl-8 py-3 mb-1 cursor-pointer ${
                      activeTab === payrollOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={() => setActiveTab(payrollOption.title)}
                  >
                    <div className="flex items-center">
                      <span className="">{payrollOption.icon}</span>
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {payrollOption.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isSidebarCollapsed && option.title === "Authentication" && showAuthOptions && (
              <ul className="">
                {authOptions.map((authOption) => (
                  <li
                    key={authOption.title}
                    className={`text-[16px] pl-8 py-3 mb-1 cursor-pointer ${
                      activeTab === authOption.title
                        ? "bg-white bg-opacity-50 rounded-r-full text-[#ef5f2b]"
                        : "hover:bg-white hover:bg-opacity-50 hover:text-[#ef5f2b] hover:rounded-r-full"
                    }`}
                    onClick={
                      authOption.title === "Logout"
                        ? handleLogout
                        : () => handleOptionClickNavigate(authOption)
                    }
                  >
                    <div className="flex items-center">
                      <span className="">{authOption.icon}</span>
                      <span
                        className={`pl-2 ${
                          isSidebarCollapsed ? "hidden" : "inline"
                        }`}
                      >
                        {authOption.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
      
    </div>
  );
};

export default ForHrSidebar;



