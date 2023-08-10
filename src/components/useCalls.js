const Usecalls = (url) => {
  async () => {
    const response = await fetch(url);
    const res = await response.json();
    if (res.status === "fail") {
      console.log(res);
      return {
        props: {
          error: res.message,
        },
      };
    }
    console.log(res);
    return {
      props: {
        tours: res.data.data,
      },
    };
  };
};

export default Usecalls;
