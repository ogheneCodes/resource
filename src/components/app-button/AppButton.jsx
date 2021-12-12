import "./AppButton.css";

const AppButton = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="AppButton">
      {children}
    </button>
  );
};

export default AppButton;
