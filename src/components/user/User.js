import "../user/user.css";
export default function User({ props }) {
  const {
    gender,
    name: { title, first, last },
    location: {
      street,
      city,
      state,
      country,
      postcode,
      coordinates: { lattitude, longitude },
      timezone: { offset, description }
    },
    email,
    login: { uuid, username, password, salt, md5, sha1, sha256 },
    dob: { date, age },
    registered,
    phone,
    cell,
    id: { name, value },
    picture: { large, medium, thumbnail },
    nat
  } = props;

  return (
    <div className="user--details" id={uuid}>
      <img className="user--image-large" src={large} alt="User" />
      <p className="user--details--name">
        <span className="user--details--title">{title}</span>
        <span className="user--details--first-name">{first}</span>
        <span className="user--details--last-name">{last}</span>
      </p>
      <p className="user--details--detail">
        <span className="user--details--detail--label">Gender:</span>
        <span className="user--details--detail--value">{gender}</span>
      </p>
    </div>
  );
}
