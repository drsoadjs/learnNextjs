import { useRouter } from "next/router";
import Link from "next/link";
import Usecalls from "@/components/useCalls";

const Products = ({ tours, error }) => {
  if (error) {
    <div>{error}</div>;
  }
  return (
    <div>
      {tours.map((tour) => {
        return (
          <div key={tour._id}>
            <Link href={`/product/${tour._id}`} replace>
              <h1>{tour.name}</h1>
              <p>{tour.description}</p>
              <hr />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/api/v1/tours");
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
}

// export async function getStaticProps() {
//   return Usecalls("http://localhost:4000/api/v1/tours");
// }
