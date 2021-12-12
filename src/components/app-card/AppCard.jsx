import "./AppCard.css";

const AppCard = ({ title, description, icon }) => {
  return (
    <div className="AppCard">
      <img src={icon} alt="icon" className="mb30" />
      <h2 className="heading2 mb10">{title}</h2>
      <p className="paragraph2">{description}</p>
    </div>
  );
};

export default AppCard;
