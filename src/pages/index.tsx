import Image from "next/image";

import Header from "src/components/Header";
import CatList from "src/components/Cat/List";

export default function Home() {
  return (
    <>
      <Header />
      <div className="my-16">
        <div className="container mx-auto flex justify-between mb-16">
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
            <button className="px-4 py-2 rounded-lg font-medium bg-rose-300 hover:bg-rose-400 text-rose-800">
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
        <CatList
          data={[
            {
              name: "Kitty",
              breed: "Domestic Short Hair",
              age: "2",
              gender: "Male",
            },
            {
              name: "Luna",
              breed: "Domestic Short Hair",
              age: "3",
              gender: "Female",
            },
            {
              name: "Milo",
              breed: "Domestic Short Hair",
              age: "1",
              gender: "Male",
            },
            {
              name: "Bella",
              breed: "Domestic Short Hair",
              age: "2",
              gender: "Female",
            },
          ]}
        />
      </div>
    </>
  );
}
