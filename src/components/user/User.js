import "../user/user.css";
export default function User({ props }) {
  //const { gender } = props;

  return (
    <div className="user--details" id={props.id.value}>
      <img className="user--image-large" src={props.picture.large} alt="User" />
      <p className="user--details--name">
        <span className="user--details--title">{props.name.title}</span>
        <span className="user--details--first-name">{props.name.first}</span>
        <span className="user--details--last-name">{props.name.last}</span>
      </p>
      <p className="user--details--detail">
        <span className="user--details--detail--label">Gender:</span>
        <span className="user--details--detail--value">{props.gender}</span>
      </p>
    </div>
  );
}
