function Button ({ text, action }) {
  const defaultClick = () => {
    window.alert('click')
  }
  return <button onClick={action || defaultClick}>{text}</button>
}

export default Button
