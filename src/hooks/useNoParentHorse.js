import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../Constants";

export default () => {
  const [noPhorses, setNoPhorses] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchGender = () => {
    console.log("onSearch duudlaa begin");
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/noParent`)
      .then((res) => {
        console.log("no parent huleej awlaa", res.data.data);
        setNoPhorses(res.data.data);
        setErrorMsg(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Uuchlaarai iim ugugdul baihgu bn";
        else if (message === "Network Error")
          message = "Server ajillahgu bn Back aa shalgana uu";

        setErrorMsg(message);
      });
  }, []);
  return [noPhorses];
};
