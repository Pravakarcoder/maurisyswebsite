import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate, view } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute left-6 top-6 z-20 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            {/* <Link
              href="/blog-details"
              className="block mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            > */}
            {title}
            {/* </Link> */}
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center justify-between ">
            <div className="dark: flex items-center border-body-color ">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block ">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                View
              </h4>
              <p className="text-xs text-body-color">{view}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
