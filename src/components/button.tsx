import { useState } from "react";
import Alert from "./alert";

interface Props {
  textButton: string;
}
const Button = ({ textButton }: Props) => {
  const [isClick, setClick] = useState(false);

  return (
    <div>
      {isClick && (
        <Alert
          textAleart="You should check in on some of those fields below"
          onClose={() => {
            setClick(false);
          }}
        ></Alert>
      )}
      <button
        onClick={() => {
          setClick(true);
        }}
        type="button"
        className="btn btn-primary"
      >
        {textButton}
      </button>
    </div>
  );
};

export default Button;
