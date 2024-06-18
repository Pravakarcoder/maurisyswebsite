import { Feature } from "@/types/keyfeatures";
import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";

const KeyFeatures = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <SectionTitle
          title="key features"
          paragraph="Key features are the main attributes or characteristics that define or distinguish a product, service, or concept"
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { name } = feature;

  return (
    <div className="flex w-1/2 items-center justify-center  px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
      <span className="rounded-md border-r-2 border-t-2 border-gray-900 px-3 py-5 hover:bg-white dark:border-white dark:hover:bg-gray-600">
        {name}
      </span>
    </div>
  );
};
