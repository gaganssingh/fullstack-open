import React from "react";

const Notification = ({ message, messageClass }) => {
   if (!message) return null;

   return <div className={`message ${messageClass}`}>{message}</div>;
};

export default Notification;
