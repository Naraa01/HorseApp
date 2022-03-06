import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [categories, setCategories] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCategory = () => {
    console.log("onSearch duudlaa begin");
  };

  useEffect(() => {
    //ene func n neg l udaa render hiigdeh ystoi uchir
    setLoading(true);
    axios
      .get("http://192.168.1.94:8000/api/v1/categories")
      .then((res) => {
        console.log("category huleej awlaa");
        // console.log(res.data.data);
        setCategories(res.data.data);
        setErrorMsg(null);
        setLoading(false);
      })
      .catch((err) => {
        //console.log(err.message)
        setLoading(false);
        let message = err.message; //const bwal unshij chadahgu uchir
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back-End holbodog ymu ydag ym";

        setErrorMsg(message);
      });
  }, []); //componentDidMount
  return [categories, errorMsg, loading];
};
