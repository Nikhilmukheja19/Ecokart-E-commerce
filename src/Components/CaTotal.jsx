import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";

const CaTotal = () => {
  const { currency, delhiveryFee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SUBTOTAL:</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>SHIPPING FEE:</p>
          <p>
            {currency}
            {delhiveryFee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total  :   </b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delhiveryFee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CaTotal;
