import CatCard from "src/components/CatCard";
import type { CatCardProps } from "src/components/CatCard";

export interface CatListProps {
  data: CatCardProps[];
  isPageSection?: boolean;
}

const CatList: React.FC<CatListProps> = ({ isPageSection = true, data }) => {
  if (isPageSection) {
    return (
      <div className="flex flex-col bg-zinc-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Feature Cats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((cat) => (
              <CatCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((cat) => (
        <CatCard key={cat.name} {...cat} />
      ))}
    </div>
  );
};

export default CatList;
