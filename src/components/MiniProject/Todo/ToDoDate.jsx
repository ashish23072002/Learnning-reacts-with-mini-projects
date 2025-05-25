import { useEffect, useState } from "react";

export const ToDoDate = () => {
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const intearval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(intearval);
  }, []);

  return (
    <>
      <h2 className="date-time">{dateTime}</h2>
    </>
  );
};
