function Header({text ="Feedback UI", bgColor, textColor}) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }} >
        <div className="container">
            <h2>{ text }</h2>
        </div>
    </header>
  )
}

export default Header