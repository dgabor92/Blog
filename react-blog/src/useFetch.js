//custom hooks need to start with the word USE otherwise it wont work
import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); //creating a loading message for the users if they have to wait for the data
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        //handle the fetch error
        if (!response.ok) {
          throw Error('Could not fetch the data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false); //set the isPending state to FALSE when you get the data
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        //catch the fetch error
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
