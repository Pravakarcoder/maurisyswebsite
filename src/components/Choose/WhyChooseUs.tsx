import React from "react";
import Card from "./Card";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {" "}
          Why Choose Us
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <Card
            title="Innovation"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
          />
          <Card
            title="Quality-Focused"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
          />
          <Card
            title="Value For Money"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
