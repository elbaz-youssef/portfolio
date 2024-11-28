import "./Button.css";

const Button = ({handleMouseEnter, handleMouseLeave, children}) => {
  return (
    /* From Uiverse.io by MuhammadHasann */ 
    <button className="px-4 py-2 border-2 border-[var(--primary-color)] rounded-3xl text-[var(--primary-color)]">
      {children}
    </button>

  )
}

export default Button
