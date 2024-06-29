import { useEffect, useState } from "react";

export const useNow = (interval, enabled) => {
  const [now, setNow] = useState(undefined);

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }

    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now;
};

export const useInterval = (interval, enabled, callback) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      callback(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled, callback]);
};
