"use client";

import { useState, ReactNode } from "react";
import SectionTitle from "./Common/SectionTitle";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between p-4 text-left text-gray-900 dark:text-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[17px]">{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700 dark:text-gray-300">{children}</div>
      )}
    </div>
  );
};

export default function AccordionTest() {
  return (
    <div>
      <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
        <div className="container mx-auto">
          <SectionTitle
            title="Asked Questions"
            paragraph="Inquired Questions are queries posed to obtain knowledge, understanding, or answers, usually in learning, work, or daily situations."
            center
          />
        </div>
        <div className="">
          <div className="mx-auto max-w-4xl p-2">
            <Accordion title="What products or services does Maurisys Software Company offer?">
              <p className="text-sm font-medium text-body-color">
                Maurisys crafts software for businesses, including ERP, CRM, and
                custom solutions
              </p>
            </Accordion>
            <Accordion title="How can I contact Maurisys Software Company for support?">
              <p className="text-sm font-medium text-body-color">
                Maurisys crafts custom software. For support, email
                info@maurisys.com.
              </p>
            </Accordion>
            <Accordion title="Can Maurisys customize their products for our specific business requirements?">
              <p className="text-sm font-medium text-body-color">
                We customize software to fit unique needs, driving business
                success.
              </p>
            </Accordion>
            <Accordion title="What security measures does XYZ Software Company use to safeguard client data?">
              <p className="text-sm font-medium text-body-color">
                We prioritize data security, employing robust measures for
                client protection.
              </p>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
