import {Dispatch, SetStateAction, useCallback, useState} from "react";

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggleState = useCallback(() => {
    setState((oldState) => !oldState);
  }, [setState]);

  return [state, toggleState, setState] as ReturnType;
};

export default useToggle;
