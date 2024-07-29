import React from "react";

const MessageDetailsPage = ({ message }) => {
  if (!message) {
    return <div>Select a message to view details</div>;
  }

  return (
    <div className="rounded-r-xl w-[850px] bg-[#E6F5FE] p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">{message.subject}</h1>
        <p className=" text-gray-600">{message.time}</p>
      </div>
      <p className="mt-3 break-words">{message.message}</p>
    </div>
  );
};

export default MessageDetailsPage;
