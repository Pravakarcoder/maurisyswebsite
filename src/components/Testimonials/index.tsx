import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import john from "../../../public/images/testimonials/john.webp";
import Samuel from "../../../public/images/testimonials/Samuel.webp";
import Jane from "../../../public/images/testimonials/Jane.webp";
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Founder",
    content:
      "Exceptional service! I highly recommend it to everyone. Don't miss out on this fantastic opportunity, give it a try!",
    image: john,
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "CTO",
    content:
      "This service is a game changer in the industry, offering exceptional support and services. Highly recommended to all!",
    image: Jane,
  },
  {
    id: 3,
    name: "Samuel Green",
    designation: "Co Founder",
    content:
      "An unparalleled experience, surpassing all others. Exceptional team behind it. Highly recommend this phenomenal service!",
    image: Samuel,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="This section typically features testimonials or feedback from previous clients, offering insights into their experiences working with the company or service."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
