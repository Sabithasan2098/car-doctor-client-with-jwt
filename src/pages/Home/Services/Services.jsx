// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
  const [asc, setAsc] = useState(true);
  const [serch, setSerch] = useState("");
  const services = useServices(asc, serch);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:5000/services')
  //         .then(res => res.json())
  //         .then(data => setServices(data));
  // }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = e.target.product.value;
    setSerch(product);
    // console.log(product);
  };

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <input className="border" type="text" name="product" id="" />
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
        <button className="btn btn-secondary" onClick={() => setAsc(!asc)}>
          {asc ? "High to Low" : "Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
