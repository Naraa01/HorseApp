import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../Constants";

export default (genderId, searchValue, refresh, setRefresh) => {
  //genderId horse ees awna,, searchValue bs awna,, end local serverees orj irdgv uchir uuruur nerlej bolno

  const [horses, setHorses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBook = (searchValue) => {
    console.log(searchValue + " onSearch duudlaa begin horse");
  };

  useEffect(() => {
    //ene func n neg l udaa render hiigdeh ystoi uchir

    let limit = 30;
    let search = "";

    if (searchValue) {
      limit = 50;
      search = `&search=${searchValue}`;
    }

    // GET {{url}}/gender/622326eef252dca60a8e32a2/horses
    setLoading(true);
    axios
      .get(`${url}/gender/${genderId}/horses`)
      // .get(`http://192.168.1.94:5001/gender/${genderId}/horses`)
      .then((res) => {
        setHorses(res.data.data);
        setErrorMessage(null);
        setLoading(false);
        setRefresh(false);
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
  }, [genderId, searchValue, refresh]);
  return [horses, errorMessage, searchBook, loading];
};
