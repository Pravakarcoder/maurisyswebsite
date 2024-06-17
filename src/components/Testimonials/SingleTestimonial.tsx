import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="p-8 duration-300 bg-white rounded-r-2xl shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <p className="pb-8 mb-8 text-base leading-relaxed border-b border-body-color border-opacity-10 text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
