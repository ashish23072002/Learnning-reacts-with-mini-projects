import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setInON] = useState(false);

  const handleToggleSwitch = () => {
    setInON(!isOn);
  };

  return (
    <>
      <div
        className="toggle-switch"
        onClick={handleToggleSwitch}
        style={{ backgroundColor: isOn ? "green" : "red" }}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <sapn className="switch-state">{isOn ? "on" : "off"}</sapn>
        </div>
      </div>
    </>
  );
};
