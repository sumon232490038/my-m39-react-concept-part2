export default function UserIt({ user }) {
  console.log(user);
  return (
    <div className="read">
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}
