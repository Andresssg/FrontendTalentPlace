function Button ({ text, action, className }) {
  const defaultClick = () => {
    window.alert('click')
  }
  return <button className={className} onClick={action || defaultClick}>{text}</button>
}

export default Button
