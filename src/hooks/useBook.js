import { useState, useEffect } from "react";
import axios from "axios";

export default (bookId) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const loadBook = async () => {
    try {
      const result = await axios.get(
        `http://192.168.1.94:8000/api/v1/books/${bookId}`
      ); //await n eniig unshij duustal hulee,, await orj irwel async oruulj irne bainga tsug ywna
      // console.log(result.data.data);
      setBook(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadBook();
  }, []);

  return [book, error];
};
