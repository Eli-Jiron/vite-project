const Button = (props) => {
  return (
    <>
      <button onClick={props.foo}>{props.txt}</button>
    </>
  );
};

export default Button;
