import { useEffect, useState } from "react";
import User from "../../components/user/User";
import UserList from "../user-list/UserList";

export default function FetchRandomUser({ update }) {
  // creating and setting state
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [users, setUsers] = useState();

  const [localState, setLocalState] = useState({
    loading: true,
    error: false,
    users: []
  });

  useEffect(() => {
    loadData();
  }, [update]);

  const loadData = async () => {
    const url = "https://api.randomuser.me/?results=4";
    //const response = await fetch(url).then((response)=> {console.log("ok"); return response}).catch(error => console.log(error));
    const response = await fetch(url)
      .then(handleErrors)
      .then((response) => {
        console.log("ok");
        return response;
      })
      .catch((error) => console.log(error));
    const data = await response.json();

    // setLoading(false);
    // setUsers(data.results[0]);

    setLocalState({ users: data.results });
    //console.log(localState.users);
  };

  function handleErrors(response) {
    if (!response.ok) {
      setLocalState({ error: true });
      throw Error(response.statusText);
    }
    return response;
  }

  if (localState.loading) {
    return <div>Loading...</div>;
  }

  if (localState.users.length < 1) {
    return <div>Something wrong, didn't get a user...</div>;
  }
  return (
    <>
      <p>Total Users - {localState.users.length}</p>
      <User props={localState.users[0]} />
      <UserList props={localState} />
    </>
  );
}
