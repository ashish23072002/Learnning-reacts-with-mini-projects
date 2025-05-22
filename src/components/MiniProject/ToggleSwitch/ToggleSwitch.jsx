import { useState } from "react";
import "./ToggleSwitch.css";
import { ImSwitch } from "react-icons/im";
import { TiWeatherSunny } from "react-icons/ti";
import { GoMoon } from "react-icons/go";
export const ToggleSwitch = () => {
  const [isOn, setInON] = useState(false);

  const handleToggleSwitch = () => {
    setInON(!isOn);
  };

  return (
    <>
      <h1 style={{color:"white"}}><TiWeatherSunny /> Toggle Switch<ImSwitch /></h1>
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
