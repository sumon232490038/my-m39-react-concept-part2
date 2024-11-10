import { useEffect, useState } from "react";
import UserIt from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="read">
      <h2>Users:{users.length}</h2>
      {users.map((user) => (
        <UserIt user={user}></UserIt>
      ))}
    </div>
  );
}
