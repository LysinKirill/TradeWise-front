const debounce = (callback: (...args: any) => void, ms: number) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => { callback(args); }, ms);
  };
};

export default debounce;
