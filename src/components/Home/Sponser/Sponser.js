import React from "react";
import newBrand1 from "../../../images/sponser/newbrand1.png";

const Sponser = () => {
  const brandName = [
    {
      img: newBrand1,
    },
    {
      img: newBrand1,
    },
    {
      img: newBrand1,
    },
    {
      img: newBrand1,
    },
  ];
  return (
    <div className='mt-4'>
      <div className="row">
        {brandName.map((brand) => (
          <div className="col-md-3 col-6 border-top border-bottom d-flex justify-content-center">
            <img className='py-5' src={brand.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponser;
