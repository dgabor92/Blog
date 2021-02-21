//CUSTOM HOOK
//custom hooks need to start with the word USE otherwise it wont work
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); //creating a loading message for the users if they have to wait for the data
  const [error, setError] = useState(null);

  useEffect(() => {
    const abourtCont = new AbortController(); //associate it with a specific fetch request and use to stop the fetch

    fetch(url, { signal: abourtCont.signal })
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
        if (err.name === 'AbortError') {
          //catch the aborterror here
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          //catch the fetch error
          setError(err.message);
        }
      });

    return () => abourtCont.abort(); //this will pause the fetch but it will trhow an error
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
