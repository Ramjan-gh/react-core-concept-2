import { Suspense } from "react";
import "./App.css";
import Batsman from "./batsman";
import Counter from "./counter";
import User from "./user";
import Friends from "./friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("3 clicked");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Loading...</h3>}>
        <User fetchUsers={fetchUsers}></User>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("btn 2 clicked");
        }}
      >
        Click me 2
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button
        onClick={() => {
          alert("Clicked 4");
        }}
      >
        Click me 4
      </button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
