interface Props {
  textAleart: string;
  onClose: () => void;
}

const Alert: React.FC<Props> = ({ textAleart, onClose }) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {textAleart}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
