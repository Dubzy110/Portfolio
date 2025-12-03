export const Button = ({
  text = 'click me',
  className = '',
  onSubmit,
  onClick,
}: {
  text?: string
  className?: string
  onSubmit?: () => void
  onClick?: () => void
}) => {
  return (
    <div>
      <button
        type="button"
        className={`${className}`}
        onClick={() => onClick}
        onSubmit={() => onSubmit}
      >
        {text}
      </button>
    </div>
  )
}
