import { Brand } from "@/types/brand";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <SectionTitle
          title="key features"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus nesciunt quos voluptatem."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center  px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 ">
      <span className="rounded-md border-r-2 border-t-2 border-gray-900 px-3 py-5 hover:bg-white dark:border-white dark:hover:bg-gray-600">
        {name}
      </span>
    </div>
  );
};
