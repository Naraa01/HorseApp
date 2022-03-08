import { useState, useEffect } from "react";
import axios from "axios";

export default (genderId, searchValue) => {
  //genderId horse ees awna,, searchValue bs awna,, end local serverees orj irdgv uchir uuruur nerlej bolno

  const [horses, setHorses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBook = (searchValue) => {
    console.log(searchValue + " onSearch duudlaa begin horse");
  };

  useEffect(() => {
    //ene func n neg l udaa render hiigdeh ystoi uchir

    let limit = 3;
    let search = "";

    if (searchValue) {
      limit = 50;
      search = `&search=${searchValue}`;
    }

    setLoading(true);
    axios
      .get(`http://192.168.1.94:5000/horsesM`)
      .then((res) => {
        setHorses(res.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        let message = err.message; //const bwal unshij chadahgu uchir
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back-End holbodog ymu ydag ym";

        setErrorMessage(message);
        setLoading(false);
      });
  }, [genderId, searchValue]);
  return [horses, errorMessage, searchBook, loading];
};