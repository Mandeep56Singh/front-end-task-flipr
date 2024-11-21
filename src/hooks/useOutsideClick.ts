import { RefObject, useEffect } from "react";

type Props = {
  ref: RefObject<HTMLElement>;
  handler: () => void;
};

export function useOutsideClick({ ref, handler }: Props): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(); // Trigger the provided handler
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, ref]);
}
