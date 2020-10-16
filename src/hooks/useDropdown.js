import { useState, useEffect, useCallback, useRef } from "react";

const useDropdown = () => {
  const [toggle, setToggle] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const collapsingTimer = useRef(null);
  const toggleMenuRef = useRef(null);

  const handleToggle = useCallback((isToggled) => {
    if (isToggled) {
      setCollapsing(true);
      collapsingTimer.current = setTimeout(() => {
        setToggle(false);
        setCollapsing(false);
      }, 300);
    } else setToggle(true);
  }, []);

  useEffect(() => {
    return () => clearTimeout(collapsingTimer.current);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleMenuRef.current.contains(event.target)) return;
      handleToggle(true);
    };

    if (toggleMenuRef.current && toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle, handleToggle]);

  return {
    toggleMenuRef,
    toggle,
    collapsing,
    handleToggle,
  };
};

export default useDropdown;
