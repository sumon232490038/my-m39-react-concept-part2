export default function Friend({ friend }) {
  const { id, username } = friend;
  return (
    <div className="box">
      <h3>Id: {id}</h3>
      <h3>Username: {username}</h3>
    </div>
  );
}
