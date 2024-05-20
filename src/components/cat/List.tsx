import clsx from "clsx";
import CatCard from "src/components/Cat/Card";
import type { CatCardProps } from "src/components/Cat/Card";

export interface CatListProps {
  data: CatCardProps[];
  isPageSection?: boolean;
  pageSectionClassName?: string;
}

const CatList: React.FC<CatListProps> = ({
  isPageSection = true,
  pageSectionClassName = "",
  data,
}) => {
  if (isPageSection) {
    return (
      <div
        className={clsx("flex flex-col bg-zinc-100 py-8", pageSectionClassName)}
      >
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
