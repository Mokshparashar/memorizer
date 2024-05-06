import React from "react";

function Success(props: EventModalPropInterface) {
  return (
    <div className="w-full h-14 bg-green-500 absolute top-0 z-50 text-white flex items-center justify-center">
      {props.message}

      {props.additionalButton && (
        <span
          className="underline text-black ml-1 cursor-pointer"
          onClick={props.onClickFunction}
        >
          login
        </span>
      )}
    </div>
  );
}

export default Success;
