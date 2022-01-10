import "./Style.css";
type HandleButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const ButtonEvents = ({ handleClick }: HandleButtonProps) => {
  return (
    <div>
      <button className="btn" onClick={(event) => handleClick(event, 1 + 5)}>
        Button Events
      </button>
    </div>
  );
};
