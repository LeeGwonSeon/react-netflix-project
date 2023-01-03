import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listenner = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listenner);
    document.addEventListener("touchstart", listenner);
    return () => {
      document.removeEventListener("mousedown", listenner);
      document.removeEventListener("touchstart", listenner);
    };
  }, []);
};

export default useOnClickOutside;
