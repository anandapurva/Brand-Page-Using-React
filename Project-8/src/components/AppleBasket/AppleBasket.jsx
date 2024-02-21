const AppleBasket = ({ applecount, basketname }) => {
  return (
    <div className=" flex items-center">
      <div>
        <p className="text-xl font-bold text-center p-4 border-2 border-gray-700 rounded-full">{applecount}  🍎</p>
        <p className="text-2xl font-bold">🧺{basketname} </p>
      </div>
    </div>
  );
};

export default AppleBasket;
