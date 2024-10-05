"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function WhatsAppButtons() {
  const phoneNumber = "+971505040045"; // Replace with your WhatsApp number

  const handleMessage = () => {
    const customMessage = "Hello, I would like to inquire about your services.";
    const encodedMessage = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };
  return (
    <>
      <Button
        variant="secondary"
        size="default"
        className="fixed z-10 hover:bg-transparent  bg-transparent left-2 md:bottom-16  bottom-8 rounded-full "
        onClick={handleMessage}
        aria-label="WhatsApp Message"
      >
        {/* <MessageCircle className="md:h-24  md:w-24 " /> */}
        <img src="/whatsApp.png" className="md:w-14 w-12 hover:drop-shadow-md drop-shadow-md rounded-full"/>
      </Button>

      <Button
        variant="secondary"
        size="default"
        className="fixed z-10 hover:bg-transparent  bg-transparent md:right-6 right-2 md:bottom-16 bottom-8 rounded-full"
        onClick={handleCall}
        aria-label="Call"
      >
    <img src="/Phone.png" className="md:w-14 w-12 hover:drop-shadow-md drop-shadow-md rounded-full"/>
      </Button>
    </>
  );
}
