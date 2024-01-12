const Button = (props) => {
  const { text } = props
  return (
    <button
      type="submit"
      className="w-full focus:text-indigo-100  bg-indigo-950 text-white py-3 text-lg rounded-md shadow-sm focus:drop-shadow-lg"
    >
      {text}
    </button>
  )
}
export default Button
