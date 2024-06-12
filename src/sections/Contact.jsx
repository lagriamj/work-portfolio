import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true before sending

    try {
      const response = await emailjs.sendForm(
        "service_m29l4sr",
        "template_p7p1ydb",
        form.current,
        { publicKey: "uYpSv9gX6GneV5JJ9" }
      );

      toast({
        title: "Success!",
        description: "Email Sent Successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.log("SUCCESS!", response);
    } catch (error) {
      toast({
        title: "Error!",
        description: "There was an error processing your request.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      console.error("FAILED...", error.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="text-6xl lg:mt-20 mt-10 font-semibold font-sans-semi">
        Contact <span className="text-red-500">Me</span>
      </h1>
      <form
        className="lg:w-[80%] w-[90%] h-[85%]"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <input
            type="text"
            className="lg:w-[62%] w-[90%] h-14 bg-[#363c45] rounded-lg outline-none text-white px-3 py-2"
            placeholder="Full Name"
            name="user_name"
          />

          <input
            type="email"
            className="lg:w-[62%] w-[90%] h-14 bg-[#363c45] rounded-lg outline-none text-white px-3 py-2"
            placeholder="Email Address"
            name="user_email"
          />

          <textarea
            placeholder="Your Message"
            className="lg:w-[62%] w-[90%] outline-none bg-[#363c45] rounded-lg text-white px-3 py-2"
            rows="12"
            name="message"
          />
          <input
            type="submit"
            value={isLoading ? "Sending..." : "Send Message"}
            className="bg-red-500 rounded-md px-3 py-2 shadow-xl hover:opacity-90 cursor-pointer font-light text-lg"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
