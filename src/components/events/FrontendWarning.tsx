

function FrontendWarning(props: EventModalPropInterface) {
  return (
    <div className="w-full h-14 bg-yellow-700 absolute top-0 z-50 text-white flex items-center justify-center">
      {props.message}

      {props.additionalButton && (
        <span
          className="underline text-black ml-1 cursor-pointer"
          onClick={props.onClickFunction}
        >
          close
        </span>
      )}
    </div>
  );
}

export default FrontendWarning;
