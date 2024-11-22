import Button from "../Buttons/Button";

const ContactUsForm = () => {
  return (
    <>
      <section
        aria-label="contact form"
        className="flex flex-col p-8 gap-4 items-center"
      >
        <div className="flex flex-col gap-4 text-center mb-8">
            <h1 className="text-lg text-secondary uppercase font-bold">Contact Us</h1>
            <h1 className="text-2xl text-secondary uppercase font-bold">Let's Start a Conversation</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque facilis sed dicta maiores molestias nulla id!</p>
        </div>
        {/* Contact Information Section */}
        <div className="bg-special p-8 flex flex-col md:flex-row gap-12 w-full max-w-[580px] min-w-[340px]">
          <div className="flex flex-col gap-2">
            <div className="text-white/60">Working hours</div>
            <hr className="border-paragraph" />
            <h1 className="text-xl text-white">
              Monday to Friday <br /> 9:00 AM to 8:00 PM
            </h1>
            <div className="text-white/60">
              Our support team is available 24/7
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-white/60">Contact Us</div>
            <hr className="border-paragraph" />
            <h1 className="text-xl text-white">02043413215351</h1>
            <div className="text-white/60">hello@gmail.com</div>
          </div>
        </div>

        {/* Form Section */}
        <form action="" className="flex flex-col gap-4 items-center w-full">
          <input
            id="namae"
            type="text"
            required
            aria-required="true"
            aria-invalid="false"
            aria-describedby="name-helper"
            className="border-2 p-2 text-paragraph focus:outline-none w-full max-w-[580px] min-w-[340px]"
            placeholder="Full Name"
          />
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            aria-invalid="false"
            aria-describedby="email-helper"
            className="border-2 p-2 text-paragraph focus:outline-none w-full max-w-[580px] min-w-[340px]"
            placeholder="Enter your email"
          />

          <select
            id="query-type"
            required
            className="border-2 p-2 text-paragraph text-sm focus:outline-none w-full max-w-[580px] min-w-[340px]"
          >
            <option value="Query">Query</option>
            <option value="support">Support</option>
            <option value="sales">Sales</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <textarea
            id="message"
            required
            className="border-2 p-2 text-paragraph text-sm focus:outline-none w-full max-w-[580px] min-w-[340px] h-[120px] "
            placeholder="Write your message here..."
          ></textarea>

          <Button className="w-full max-w-[580px] min-w-[340px]">
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
};

export default ContactUsForm;
