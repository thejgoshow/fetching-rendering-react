import { useState } from "react";
import { User } from "../user/User";

export default function UserList(props) {
  const [users, setUser] = useState({ users: props });

  return (
    <ul>
      {users.map((user) => {
        return <User key={user.login.id} {...user} />;
      })}
    </ul>
  );
}
