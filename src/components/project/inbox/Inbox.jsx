import React, { useState } from "react";
import InboxSidebar from "./InboxSidebar";
import InboxPage from "./InboxPage";
import SentPage from "./SentPage";
import Compose from "./Compose";
import Draft from "./Draft";
import Outbox from "./Outbox";
import Starred from "./Starred";
import Trash from "./Trash";

const Inbox = () => {
    const [activePage, setActivePage] = useState("Inbox")
    const [sentMessage, setSentMessage] = useState([])

    const handleItemClick = (item) =>{
      setActivePage(item)
    } 

    const handleSendMessage = (message) =>{
      setSentMessage([...sentMessage, message])
    }

    const handleDeleteMessage = (index) =>{
      const filteredMessages = sentMessage.filter((item, i) =>i !== index);
      setSentMessage(filteredMessages)
    }

  return (
    <div className="pt-24 pl-6">
      <h1 className="text-[#E65F2B] px-2">Inbox</h1>
      <div className="flex gap-2 px-2 mt-5">
        <InboxSidebar onItemClick={handleItemClick} />
        {activePage === "Compose" && <Compose onSendMessage={handleSendMessage} />}
        {activePage === "Inbox" && <InboxPage />}
        {activePage === "Sent" && <SentPage  sentMessage={sentMessage} onDeleteMessage={handleDeleteMessage}/>}
        {activePage === "Draft" && <Draft />}
        {activePage === "Outbox" && <Outbox />}
        {activePage === "Starred" && <Starred />}
        {activePage === "Trash" && <Trash />}
      </div>
    </div>
  );
};

export default Inbox;
