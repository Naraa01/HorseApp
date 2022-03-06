import { useState, useEffect } from "react";
import axios from "axios";

export default (categoryId, searchValue) => {
  //categoryId book ees awna,, searchValue bs awna,, end local serverees orj irdgv uchir uuruur nerlej bolno

  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBook = (searchValue) => {
    console.log(searchValue + " onSearch duudlaa begin book");
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
      .get(
        `http://192.168.1.94:8000/api/v1/categories/${categoryId}/books?limit=${limit}${search}`
      ) //local aas awj bga heseg ymuda
      .then((res) => {
        console.log("Books success, huleej awlaa");
        // console.log(res.data.data);
        setBooks(res.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        //console.log(err.message)
        let message = err.message; //const bwal unshij chadahgu uchir
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back-End holbodog ymu ydag ym";

        setErrorMessage(message);
        setLoading(false);
      });
  }, [categoryId, searchValue]); //componentDidMount,, searchValue utga uurchlugdhud dahiad render hiij ajillana
  return [books, errorMessage, searchBook, loading];
};
