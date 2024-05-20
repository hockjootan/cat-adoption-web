import { useState } from "react";

import Select from "src/components/common/Select";
import Checkbox from "src/components/common/Checkbox";
import Button from "src/components/common/Button";

import type { OptionType } from "src/components/common/Select";

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
          <Checkbox
            id={ageGroup.value}
            className="mr-2"
            label={ageGroup.label}
            checked={age.includes(ageGroup.value)}
            onChange={() => handleAgeChange(ageGroup.value)}
          />
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Gender</h3>
        {catGender.map((genderType) => (
          <Checkbox
            id={genderType.value}
            className="mr-2"
            label={genderType.label}
            checked={gender.includes(genderType.value)}
            onChange={() => handleGenderChange(genderType.value)}
          />
        ))}
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Breed</h3>
        <Select
          options={catBreed}
          onChange={(option) => setBreed((option as OptionType)?.value || "")}
          value={catBreed.find((b) => b.value === breed)}
          placeholder="Select Breed"
          isClearable
        />
      </div>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Location</h3>
        <Select
          options={catLocation}
          onChange={(option) => {
            setLocation((option as OptionType)?.value || "");
          }}
          value={catLocation.find((l) => l.value === location)}
          placeholder="Select Location"
          isClearable
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="!py-1.5 text-sm" variant="secondary">
          Filter
        </Button>
        <Button className="!py-1.5 text-sm" variant="tertiary">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filter;
