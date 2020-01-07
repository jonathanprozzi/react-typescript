import { useEffect } from "react";

const useClickOutside = (
  // at the hook level, we can be more generic and use HTMLElement
  ref: React.MutableRefObject<HTMLElement>,
  // the actual events aren't React MouseEvent/TouchEvents - they're DOM events
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};

export default useClickOutside;
