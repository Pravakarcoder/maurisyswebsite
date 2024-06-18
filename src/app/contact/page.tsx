import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Maurisys Web Design, Web Hosting",
  description: "Maurisys Web Design, Web Hosting",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us today through our contact page, and let's start a conversation about how we can assist you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
