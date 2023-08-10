import { useRouter } from "next/router";
const ProductDetails = ({ tour }) => {
  const router = useRouter();

  const product = router.query.productid;
  return (
    <div>
      <h1>{tour.name}</h1>
      <p>{tour.description}</p>
      new tour
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths(context) {
  const response = await fetch("http://localhost:4000/api/v1/tours");
  const res = await response.json();
  const tours = res.data.data;

  const paths = tours.map((tour) => {
    return {
      params: {
        productid: `${tour._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/api/v1/tours/${params.productid}`
  );
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
      tour: res.data.data,
    },
  };
}
