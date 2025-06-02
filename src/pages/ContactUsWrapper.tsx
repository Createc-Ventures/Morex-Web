import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import ContactUs from "./Contact-us";
import ContactUsMobile from "./ContactUsMobile";

const ContactUsWrapper = () => {
  const isMobile = useIsMobile();

  // Prevent mismatched rendering during hydration
  if (isMobile === null) return null;

  return isMobile ? <ContactUsMobile /> : <ContactUs />;
};

export default ContactUsWrapper;
