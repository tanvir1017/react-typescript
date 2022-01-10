import React from "react";

type handleInputProps = {
  value: string;
  handleOnchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: handleInputProps) => {
  return (
    <div>
      This is input file
      <br />
      <input type="text" value={props.value} onChange={props.handleOnchange} />
    </div>
  );
};

export default Input;
