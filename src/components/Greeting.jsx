const name = "John Doe";
const date = new Date().getDate();

const Greeting = () => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Greeting;
