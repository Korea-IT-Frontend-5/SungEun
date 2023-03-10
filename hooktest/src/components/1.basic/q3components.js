import { useEffect, useRef } from "react";

function Q3components({setCount, isAction}) {
  const TimerRef = useRef();
  useEffect(() => {
    TimerRef.current = setInterval(() => {
      setCount((prev) => prev+1);
    }, 2000);

    return () => {
      clearInterval(TimerRef.current);
      setCount(0);
    }
  }, [isAction]);

  return <div> πββοΈ μ€λκΈ° ... ing</div>;
}
export default Q3components;
