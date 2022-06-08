import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../Constants";

export default (genderId, searchValue, refresh, setRefresh) => {
  const [horses, setHorses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBook = (searchValue) => {
    console.log(searchValue + " onSearch duudlaa begin horse");
  };

  useEffect(() => {
    let limit = 30;
    let search = "";

    if (searchValue) {
      limit = 50;
      search = `&search=${searchValue}`;
    }

    setLoading(true);
    axios
      .get(`${url}/horsesM`)
      .then((res) => {
        setHorses(res.data.data);
        setErrorMessage(null);
        setLoading(false);
        setRefresh(false);
      })
      .catch((err) => {
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back-End holbodog ymu ydag ym";

        setErrorMessage(message);
        setLoading(false);
      });
  }, [genderId, searchValue, refresh]);
  return [horses, errorMessage, searchBook, loading];
};
