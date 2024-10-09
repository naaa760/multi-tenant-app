import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
