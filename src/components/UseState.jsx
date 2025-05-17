import { useState } from "react";

const UseState = () => {
  // const [count, setCount] = useState(10);
  // const increment = () => {
  //   setCount(count + 1);
  // };

  const [friends, setFriends] = useState(["Alex", "John", "Doe"]);

  const addOneFriend = () => {
    setFriends([...friends, "New Friend"]);
  };

  const removeOneFriend = () => {
    setFriends(friends.filter((f) => f !== "New Friend"));
  };

  const updateFriend = () => {
    setFriends(friends.map((f) => (f === "Alex" ? "Alexandra" : f)));
  };

  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      {/* <button onClick={increment}>UseStateButton</button> */}
      <button onClick={addOneFriend}>AddNewFriend</button>
      <button onClick={removeOneFriend}>RemoveFriend</button>
      <button onClick={updateFriend}>UpdateFriend</button>
    </section>
  );
};

export default UseState;
