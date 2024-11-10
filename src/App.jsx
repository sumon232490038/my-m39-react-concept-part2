import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import FriendIt from "./FriendIt";

function App() {
  function handleClick(num) {
    alert(5 + num);
  }
  const handleClick2 = () => {
    alert("Hello I am Button 2");
  };
  return (
    <>
      <div>
        <h1 className="read">Welcome To My React World</h1>
      </div>
      <div
        style={{
          border: "2px solid red",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <button onClick={() => handleClick(5)}>button-1</button>
        <button onClick={handleClick2}>button-2</button>
        <button onClick={() => alert("btn-3 clicked")}>button-3</button>
      </div>
      <Counter></Counter>
      <Users></Users>
      <FriendIt></FriendIt>
    </>
  );
}

export default App;
