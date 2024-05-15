import { useCallback, useState, useEffect } from "react";

function keyActions(key) {
  const keyMap = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
    Digit1: "wood",
    Digit2: "dirt",
    Digit3: "ground",
    Digit4: "wood",
    Digit5: "dirt",
    Digit6: "ground",
  };
  return keyMap[key];
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
    texture6: false,
  });

  const handleKeyDown = useCallback((e) => {
    const action = keyActions(e.code);
    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: true,
      }));
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    const action = keyActions(e.code);
    if (action) {
      setActions((prev) => ({
        ...prev,
        [action]: false,
      }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
  return actions;
};
