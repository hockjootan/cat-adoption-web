import Image from "next/image";
import Button from "src/components/common/Button";

export interface CatCardProps {
  name: string;
  breed: string;
  age: string;
  gender: string;
}

const CatCard: React.FC<CatCardProps> = ({ name, breed, age, gender }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <div className="bg-gray-200 aspect-square relative mb-4">
        <Image src="/assets/images/cat-example.webp" alt="cat-example" fill />
      </div>
      <h2 className="text-gray-900 font-bold text-lg mb-2">{name}</h2>
      <div className="flex flex-wrap gap-2 text-gray-700 mb-4 text-xs">
        <span className="bg-gray-100 rounded-md px-2 py-1">{breed}</span>
        <span className="bg-gray-100 rounded-md px-2 py-1">
          {age} year{parseInt(age) > 1 ? "s" : ""} old
        </span>
        <span className="bg-gray-100 rounded-md px-2 py-1">{gender}</span>
      </div>
      <Button className="mt-auto !py-1 text-sm" variant="secondary">
        View Profile
      </Button>
    </div>
  );
};

export default CatCard;
