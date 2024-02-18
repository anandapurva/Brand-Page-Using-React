import React, { useEffect, useState } from "react";

// Designing custom hooks
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({}); // This data is coming from API

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
// here return the whole function itself , so we get the data by performing setData operation.
// As we see other hooks, they also return the whole function. so did we.
