import { useState, useEffect } from "react";
import axios from "axios";

export default (horseId) => {
  const [horse, setHorse] = useState([]);
  const [error, setError] = useState(null);

  const loadHorse = async () => {
    try {
      const result = await axios.get(
        `http://192.168.1.94:5000/horsesM/${horseId}`
      );
      console.log(result.data.data);
      setHorse(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadHorse();
  }, []);

  return [horse, error];
};
