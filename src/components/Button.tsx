export const Button = ({
  text = "click me",
  className,
  onSubmit,
  onClick,
}: {
  text?: string;
  className?: string;
  onSubmit?: () => void;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button className={``} onClick={() => onClick} onSubmit={() => onSubmit}>
        {text}
      </button>
    </div>
  );
};
