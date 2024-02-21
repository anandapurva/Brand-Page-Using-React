const Buttons = ({title, clickHandler, imageSrc}) => {
  return (
    <div className="w-20 ">
      <button title={title} onClick={clickHandler}>
        <img src={imageSrc} alt="button"  className="h-20 bg-gray-300 border-2 border-gray-400 rounded-lg"/></button>
    </div>
  )
}

export default Buttons
