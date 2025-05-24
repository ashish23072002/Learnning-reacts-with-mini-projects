import { useState } from "react";

export const ToggleSwitchPractice = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  if(isOn ? `${document.body.style.backgroundColor = 'white'}`:`${document.body.style.backgroundColor = '#162238'}`)
  
  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          className="block"
          onClick={handleToggle}
          style={{
            background: "#ccc",
            width: "80px",
            height: "40px",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            transition: "background 0.3s ease",
            justifyContent: isOn ? "flex-end" : "flex-start",
          }}
        >
          <div
            className="circle"
            style={{
              width: "30px",
              height: "30px",
              background: isOn ? "green" : "red",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              transition: "background 0.3s ease",
            }}
          >
            {isOn ? "ON" : "Off"}
          </div>
        </div>
      </section>
    </>
  );
};
