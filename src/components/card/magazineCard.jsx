/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MagazineCard = ({ image }) => {
  const slug = "Voejfe3";
  return (
    <Link
      to={`/magazin-${slug}`}
      className="w-96 duration-300 hover:scale-105 cursor-pointer rounded-b-none transition ease-in-out object-fill h-full border hover:border-2 hover:border-gray-400"
    >
      <img src={image} alt={`magazin-img`} />
    </Link>
  );
};

export default MagazineCard;
