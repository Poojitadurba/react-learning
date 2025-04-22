const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1 style={{ color: "red", backgroundColor: "yellow", padding: "2rem" }}>
      Good morning!
    </h1>
  ) : (
    <h1 style={{ color: "green" }}>Good afternoon!</h1>
  );
};

export default Greeting;
