import { useEffect, useState } from "react";
import User from "../../components/user/User";

export default function FetchRandomUser({ update }) {
  // creating and setting state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState();

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
    setLoading(false);
    setUsers(data.results[0]);
    console.log(data.results);
  };

  function handleErrors(response) {
    if (!response.ok) {
      setError(true);
      throw Error(response.statusText);
    }
    return response;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!users) {
    return <div>Something wrong, didn't get a user...</div>;
  }

  return <User props={users} />;
}
