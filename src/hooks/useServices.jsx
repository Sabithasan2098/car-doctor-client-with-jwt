import { useEffect, useState } from "react";

const useServices = (asc, serch) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?sort=${
        asc ? "asc" : "dsc"
      }&serch=${serch}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, serch]);

  return services;
};

export default useServices;
