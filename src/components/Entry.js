import "./Entry.scss";

export const Entry = ({ title, description }) => {
  return (
    <div className="entry">
      <div className="entry-left">
        <div className="icon"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
