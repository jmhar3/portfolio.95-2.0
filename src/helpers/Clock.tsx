import * as React from "react";
import dayjs from "dayjs";

export const Clock = () => {
  const [datetime, setDatetime] = React.useState(dayjs());

  const refreshClock = React.useCallback(() => {
    setDatetime(dayjs());
  }, [dayjs]);

  React.useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return dayjs(datetime).format("h:mmA");
};
