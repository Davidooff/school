import { useEffect, useState } from "react";

interface Props {
  url: string;
  method: string;
  body: string | Object | Array<any>;
}

function useFetch(props: Props) {
  const [result, setResult] = useState<null | Object>(null);
  const [loading, setLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  const requestOptions = {
    method: props.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(props.body),
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(props.url, requestOptions);
      setCode(response.status);
      try {
        const text = await response.text();
        const data = JSON.parse(text);
        setResult(data);
      } catch (err) {
        setResult({});
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return [result, statusCode, loading, fetchData] as const;
}

export default useFetch;
