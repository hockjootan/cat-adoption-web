import Image from "next/image";

import Header from "src/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container flex mx-auto my-16 justify-between">
        <Image
          src="/assets/images/cat-orange.png"
          alt="cat-orange"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">
            Discover the joy of cat adoption!
          </h1>
          <p className="text-lg text-center font-medium">
            Join our mission to provide loving homes for cats in need.
            <br /> Start your adoption journey today!
          </p>
          <button className="px-4 py-2 rounded-lg font-medium bg-rose-300 text-rose-800">
            Browse Now
          </button>
        </div>
        <Image
          src="/assets/images/cat-grey.png"
          alt="cat-grey"
          width={200}
          height={200}
        />
      </div>
    </>
  );
}
