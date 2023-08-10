import Image from "next/image";
// import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const route = useRouter();

  const buy = () => {
    console.log("placing order");
    setTimeout(() => {
      route.push("/product");
    }, 1500);
  };

  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/blog/firstBlog">clickme</Link>
      <button onClick={buy} className="ml-8 border-red-200 bg-orange-700 p-2">
        place order
      </button>
    </main>
  );
}
