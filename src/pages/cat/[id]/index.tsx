import Header from "src/components/Header";
import CatDetails from "src/components/Cat/Details";

const cat = {
  name: "Cat Name",
  age: 4,
  gender: "Female",
  breed: "Domestic",
  description:
    "This is a long long description. Lorem ipsum sit amet. This is a long long description. Lorem ipsum sit amet. This is a long long description. Lorem ipsum sit amet.",
  vaccinated: true,
  neutered: true,
  dewormed: true,
};

const CatDetailsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-8">
        <div className="flex flex-col">
          <div className="container mx-auto">
            <CatDetails
              details={cat}
              ctaButton={
                <button className="w-fit px-8 py-2 shadow-md rounded-lg font-medium bg-teal-500 text-white hover:bg-teal-600">
                  Apply for adoption
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetailsPage;
