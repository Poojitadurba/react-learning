const ButtonEvents = () => {
  const handleClick = () => {
    alert("Mouse moved!");
  };
  return <p onMouseMove={handleClick}>Click me!</p>;
};

export default ButtonEvents;
