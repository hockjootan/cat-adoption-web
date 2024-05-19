import Image from "next/image";

interface CatDetailsProps {
  details: CatDetails;
  ctaButton?: JSX.Element;
}

interface CatDetails {
  name: string;
  age: number;
  gender: string;
  breed: string;
  description: string;
  vaccinated: boolean;
  neutered: boolean;
  dewormed: boolean;
}

const CatDetails: React.FC<CatDetailsProps> = ({
  details,
  ctaButton = null,
}) => {
  const {
    name,
    age,
    gender,
    breed,
    description,
    vaccinated,
    neutered,
    dewormed,
  } = details;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="min-w-64 md:w-1/4  p-4">
        <div className="bg-gray-200 aspect-square relative mb-4">
          <Image
            src="/assets/images/cat-example.webp"
            alt="cat-example"
            layout="fill"
          />
        </div>
        <div className="w-full bg-emerald-500 text-white p-1 font-bold text-center rounded">
          For adoption
        </div>
      </div>
      <div className="flex flex-col p-4 gap-y-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Hi, my name is</h1>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-4">
              <span className="font-medium">Age</span>
              <span className="text-lg">{age}</span>
            </div>
            <div className="border border-r-1 border-solid border-gray-700 h-12" />
            <div className="flex flex-col items-center gap-4">
              <span className="font-medium">Gender</span>
              <span className="text-lg">{gender}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Breed</h3>
          <p>{breed}</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Description</h3>
          <p>{description}</p>
        </div>
        <div className="flex">
          <h3 className="font-bold w-32">Vaccinated</h3>
          <p>{vaccinated ? "Yes" : "No"}</p>
        </div>
        <div className="flex">
          <h3 className="font-bold w-32">Neutered</h3>
          <p>{neutered ? "Yes" : "No"}</p>
        </div>
        <div className="flex">
          <h3 className="font-bold w-32">Dewormed</h3>
          <p>{dewormed ? "Yes" : "No"}</p>
        </div>
        {ctaButton}
      </div>
    </div>
  );
};

export default CatDetails;
