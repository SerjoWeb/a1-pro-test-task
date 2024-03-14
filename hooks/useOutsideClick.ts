import React from "react";

export const useOutsideClick = (callback: () => void): React.MutableRefObject<any> => {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
