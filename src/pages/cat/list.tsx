import Image from "next/image";

import Header from "src/components/Header";
import Filter from "src/components/Filter";
import CatListComponent from "src/components/cat/CatList";

export default function CatList() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-8 ">
        <div className="flex flex-col">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold px-4 mb-4">Browse Cats</h2>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                <Filter />
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4 p-4">
                <CatListComponent
                  isPageSection={false}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
