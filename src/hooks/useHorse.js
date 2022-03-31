import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../Constants";

export default (horseId) => {
  const [horse, setHorse] = useState(null);
  const [error, setError] = useState(null);

  const loadHorse = async () => {
    try {
      const result = await axios.get(
        `/horsesM/${horseId}`
        // `http://192.168.1.94:5001//horsesM/${horseId}`
      );
      // const result = await axios.get(`${url}/horsesM/${horseId}`);

      console.log(result.data.data, "result.data.data");
      setHorse(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteHorse = async () => {
    return axios.delete(`${url}/horsesM/${horseId}`);

    // try {
    //   const result = await
    //   console.log(result, "---- delete horse enee tererr ---");
    //   // console.log(result.data.data);
    //   // setHorse(result.data.data);
    //   setError(null);
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  useEffect(() => {
    loadHorse();
  }, []);

  return [horse, error, deleteHorse];
};
