import { useEffect, useState } from "react";
import axios from "axios";

function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    console.log("useEffect before");
    setBooks([]);
  }, [query]);

  useEffect(() => {
    console.log("useEffect after");
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: "GET",
      // url: "http://openlibrary.org/search.json",
      url: "https://api.openbrewerydb.org/breweries",
      params: { q: query, page: pageNumber },
      cancelToken: axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setBooks((prevBooks) => {
          return [...prevBooks, ...res.data.map((b) => b.name)];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        // nên bắt lỗi để không bị: Uncaught (in Promise) trong Console
        if (axios.isCancel(err)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);
  return { loading, error, books, hasMore };
}

export default useBookSearch;
