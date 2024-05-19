import { useState } from "react";

import Select from "src/components/common/Select";
import { catAgeGroup, catGender, catBreed, catLocation } from "src/config";

const Filter: React.FC = () => {
  const [age, setAge] = useState<string[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [breed, setBreed] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleAgeChange = (ageGroup: string) => {
    setAge((prevAge) =>
      prevAge.includes(ageGroup)
        ? prevAge.filter((a) => a !== ageGroup)
        : [...prevAge, ageGroup]
    );
  };

  const handleGenderChange = (genderType: string) => {
    setGender((prevGender) =>
      prevGender.includes(genderType)
        ? prevGender.filter((g) => g !== genderType)
        : [...prevGender, genderType]
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Age</h3>
        {catAgeGroup.map((ageGroup) => (
          <div key={ageGroup.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={ageGroup.value}
              className="mr-2"
              checked={age.includes(ageGroup.value)}
              onChange={() => handleAgeChange(ageGroup.value)}
            />
            <label htmlFor={ageGroup.value} className="text-sm text-gray-700">
              {ageGroup.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Gender</h3>
        {catGender.map((genderType) => (
          <div key={genderType.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={genderType.value}
              className="mr-2"
              checked={gender.includes(genderType.value)}
              onChange={() => handleGenderChange(genderType.value)}
            />
            <label htmlFor={genderType.value} className="text-sm text-gray-700">
              {genderType.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Breed</h3>
        <Select
          options={catBreed}
          onChange={(option) => setBreed(option?.value || "")}
          value={catBreed.find((b) => b.value === breed)}
          placeholder="Select Breed"
          isClearable
        />
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Location</h3>
        <Select
          options={catLocation}
          onChange={(option) => setLocation(option?.value || "")}
          value={catLocation.find((l) => l.value === location)}
          placeholder="Select Location"
          isClearable
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-teal-300 text-teal-800 text-sm py-1.5 px-4 rounded hover:bg-teal-400">
          Filter
        </button>
        <button className="bg-gray-300 text-gray-900 text-sm py-1.5 px-4 rounded hover:bg-gray-400">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Filter;
