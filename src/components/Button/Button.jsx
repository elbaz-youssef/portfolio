import "./Button.css";

const Button = ({handleMouseEnter, handleMouseLeave, children}) => {
  return (
    /* From Uiverse.io by MuhammadHasann */ 
    <button id="button" className="btn px-8 py-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)]">
      {children}
    </button>

  )
}

export default Button
