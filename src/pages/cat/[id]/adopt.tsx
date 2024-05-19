import Header from "src/components/Header";
import AdoptionForm from "src/containers/AdoptionForm";

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

const AdoptPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-8">
        <div className="flex flex-col">
          <div className="container max-w-screen-lg mx-auto">
            <AdoptionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptPage;
