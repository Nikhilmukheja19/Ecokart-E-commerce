import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]} // Access the first image in the array
          alt={name} // Use name as alt text for better accessibility
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

// Adding propTypes for validation
ProductItem.propTypes = {
  id: PropTypes.string.isRequired, // `id` must be a string and is required
  image: PropTypes.arrayOf(PropTypes.string).isRequired, // `image` must be an array of strings and is required
  name: PropTypes.string.isRequired, // `name` must be a string and is required
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // `price` can be a number or a string and is required
};

export default ProductItem;
