const Card = (props) => {
  return (
    <article className="complaint-card">
      <div className="complaint-header">
        <h3 className="complaint-title">{props.UserName}</h3>
        <p className="complaint-email">{props.Email}</p>
      </div>
      <p className="complaint-description">{props.Description}</p>
      <div className="complaint-footer">
        <button className="delete-button" onClick={props.DeleteComplaint}>
          Panasz kezelve
        </button>
      </div>
    </article>
  );
};

export default Card;
