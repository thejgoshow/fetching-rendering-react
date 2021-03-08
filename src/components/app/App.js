import { useEffect, useState } from "react";
import FetchRandomUser from "../fetch-random-user/FetchRandomUser";
import FetchData from "../util/FetchData";
import UserList from "../user-list/UserList";

export default function App() {
  const [url, setUrl] = useState("https://api.randomuser.me");
  const [update, setUpdate] = useState(false);

  function fetchNewData(e) {
    setUpdate(!update);
  }

  return (
    <>
      <header>
        <div className="logo--square">
          <img src="" alt="Site Logo" />
        </div>
        <h1 className="heading--primary">This is the header</h1>
        <nav>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </nav>
      </header>
      <main>
        <button onClick={fetchNewData}>Fetch New Data</button>
        <FetchRandomUser update={update} />
        {/*<FetchData url={url} update={update} />*/}
      </main>
    </>
  );
}
