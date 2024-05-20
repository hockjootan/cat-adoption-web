import Image from "next/image";

import Header from "src/components/Header";
import CatList from "src/components/Cat/List";
import ApplicationStatus from "src/components/ApplicationStatus";

const applications = [
  { catName: "Elsa", status: "Reviewing" },
  // Add more applications as needed
];

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="my-12">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold mb-4">Welcome back, user name!</h1>
          <CatList
            pageSectionClassName="!bg-white"
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
          <ApplicationStatus applications={applications} />
        </div>
      </div>
    </>
  );
}
