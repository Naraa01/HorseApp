import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [genders, setGenders] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchGender = () => {
    console.log("onSearch duudlaa begin");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://192.168.1.94:5000/gender")
      .then((res) => {
        console.log("gender huleej awlaa");
        // console.log(res.data.data);
        setGenders(res.data.data);
        setErrorMsg(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = err.message; //const bwal unshij chadahgu uchir
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back-End holbodog ymu ydag ym";

        setErrorMsg(message);
      });
  }, []);
  return [genders, errorMsg, loading];
};
