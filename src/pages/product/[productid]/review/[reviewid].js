import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();

  return (
    <div>
      <h2>review: {router.query.reviewid} </h2> of
      <h2>product: {router.query.productid}</h2>
    </div>
  );
};

export default Review;
