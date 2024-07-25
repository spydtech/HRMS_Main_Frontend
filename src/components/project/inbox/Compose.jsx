import React, { useRef, useState } from "react";
import { GoBold } from "react-icons/go";
import { RiItalic } from "react-icons/ri";
import { FiUnderline } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";
import { LuCode2 } from "react-icons/lu";
import { PiCaretUpDownFill } from "react-icons/pi";
import { PiTextAUnderlineBold } from "react-icons/pi";
import { MdFontDownload } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatAlignRight } from "react-icons/md";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { TbSubscript } from "react-icons/tb";
import { PiTextSuperscriptBold } from "react-icons/pi";

const Compose = ({ onSendMessage }) => {
  const [moveDown, setMoveDown] = useState(false);
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [inputMesg, setInputMesg] = useState("");

  const handleDropdown = () => {
    setMoveDown(!moveDown);
  };

  const handleSendButton = (e) => {
    e.preventDefault();
    if (!to || !cc || !subject || !inputMesg) {
      alert("All fields must be filled!");
    } else {
      const newMessage = {
        to: to,
        cc: cc,
        subject: subject,
        message: inputMesg,
      };
      onSendMessage(newMessage);
      setTo("");
      setCc("");
      setSubject("");
      setInputMesg("");
    }
  };

  return (
    <div className="rounded-r-xl min-w-[850px] bg-[#E6F5FE]">
      <div className="m-5">
        <h1 className="text-xl font-semibold">Compose</h1>
        <form
          action=""
          className="bg-white p-4 my-3 rounded-lg shadow-sm flex flex-col gap-4"
        >
          <input
            type="text"
            className="bg-gray-100 w-full outline-none p-[6px] px-3 border border-gray-300 text-sm rounded-md"
            placeholder="To"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          />
          <input
            type="text"
            className="bg-gray-100 w-full outline-none p-[6px] px-3 border border-gray-300 text-sm rounded-md"
            placeholder="CC"
            onChange={(e) => setCc(e.target.value)}
            value={cc}
          />
          <input
            type="text"
            className="bg-gray-100 w-full outline-none p-[6px] px-3 border border-gray-300 text-sm rounded-md"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <hr className="bg-gray-300 border-0 h-px" />
          <div className="bg-gray-100 w-full border border-gray-300">
            <div className="flex items-center gap-5">
              <div className=" m-[6px] flex gap-2">
                <button
                  onClick={() => formatText("b")}
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <GoBold />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <RiItalic />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FiUnderline />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <AiOutlineStrikethrough />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <RiDoubleQuotesR />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <LuCode2 />
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xs flex gap-4 items-center"
                >
                  Normal <PiCaretUpDownFill />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 "
                >
                  <PiTextAUnderlineBold />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 "
                >
                  <MdFontDownload />
                </button>
              </div>
              <div className={`${moveDown ? "bg-white border-2" : ""}`}>
                <button
                  type="button"
                  className={`text-gray-600 hover:text-blue-600`}
                  onClick={handleDropdown}
                >
                  <IoMenuOutline />
                </button>
                {moveDown ? (
                  <div className="flex flex-col absolute z-1 bg-white gap-1">
                    <button type="button" className=" hover:text-blue-600 ">
                      <IoMenuOutline />
                    </button>
                    <button type="button" className=" hover:text-blue-600 ">
                      <MdOutlineFormatAlignLeft />
                    </button>
                    <button type="button" className=" hover:text-blue-600 ">
                      <MdOutlineFormatAlignRight />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <MdOutlineFormatListNumbered />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <MdOutlineFormatListBulleted />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <BiLink />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <HiOutlinePhotograph />
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <TbSubscript />
                </button>
                <button
                  type="button"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <PiTextSuperscriptBold />
                </button>
              </div>
            </div>
            <hr className="bg-gray-300 border-0 h-px" />
            <div className="min-h-36">
              <input
                type="text"
                className="bg-gray-100 w-full outline-none p-3 text-xs resize-y"
                placeholder="Message"
                onChange={(e) => setInputMesg(e.target.value)}
                value={inputMesg}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
              onClick={handleSendButton}
            >
              Send Message
            </button>
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
            >
              Draft
            </button>
            <button
              type="button"
              className="border-gray-400 border text-gray-400 px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;
