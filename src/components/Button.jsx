function Button ({ text, action, className, icon }) {
  const defaultClick = () => {
    window.alert('click')
  }
  return <button className={className} onClick={action || defaultClick}>{icon} {text}</button>
}

export default Button
