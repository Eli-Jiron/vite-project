const Input = (props) => {
  return (
    <div>
      <label htmlFor="user">{props.txt}</label>
      <input ref={props.inputRef} placeholder={props.txt} type="text" />
    </div>
  );
};

export default Input;
