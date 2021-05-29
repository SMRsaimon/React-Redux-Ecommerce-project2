import React from "react";
import help from "../../../images/servicesImg/headphones.png";
import safePayment from "../../../images/servicesImg/credit-card.png";
import returns from "../../../images/servicesImg/exchange.png";

const Service = () => {
  const services = [
    {
      img: help,
      name: "CUSTOMER SUPPORT",
      tittle: "Need Assistence?",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minima numquam velit asperiores voluptatum delectus.",
    },
    {
      img: safePayment,
      name: "SECURED PAYMENT",
      tittle: "Safe & Fast",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minima numquam velit asperiores voluptatum delectus.",
    },
    {
      img: returns,
      name: "RETURNS",
      tittle: "Easy & Free",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum minima numquam velit asperiores voluptatum delectus.",
    },
  ];
  return (
    <div className="mt-4 mb-5">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 ">
            <div className="text-center border p-3">
              <img style={{ height: "70px" }} src={service.img} alt="" />
              <h5>{service.name}</h5>
              <p>{service.tittle}</p>
              <p>{service.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
