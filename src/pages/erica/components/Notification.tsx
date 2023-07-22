import React from "react";

interface NotificationProps {
  showNotification: boolean;
}

const Notification: React.FC<NotificationProps> = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
