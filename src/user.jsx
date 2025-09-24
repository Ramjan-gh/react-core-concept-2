import { use } from "react"
    export default function User({ fetchUsers }) {
      const users = use(fetchUsers);
      console.log(users);
      return (
        <div className="users-card">
          <h3>Users: {users.length}</h3>
        </div>
      );
    }