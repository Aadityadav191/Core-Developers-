import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, MessageSquare, Globe, Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser"; // 1. Imported EmailJS

const Contact = () => {
  const formRef = useRef(); // 2. Created a reference to the form
  const [isSending, setIsSending] = useState(false); // State to handle loading text
  const [status, setStatus] = useState({ type: "", message: "" }); // State for success/error alerts

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // 3. Email Submission Logic
  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    // IMPORTANT: Change these values to your real credentials
    const SERVICE_ID = "service_iev9lwe";
    const TEMPLATE_ID = "template_yi2ntsj";
    const PUBLIC_KEY = "k-9vzVnYe8dohFdMS";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll reply soon.",
        });
        formRef.current.reset(); // Clears form inputs on success
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
        console.error("EmailJS Error details:", error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const stats = [
    { value: "24/7", label: "WhatsApp Support" },
    { value: "1 hr", label: "Response Time" },
    { value: "100%", label: "Support Rate" },
    { value: "6 days", label: "Business Week" },
  ];

  return (
    <>
      <Helmet>
        <title>Core Developers - Contact</title>
        <meta
          name="description"
          content="Get in touch with Core Developers for your web development needs. Contact us for inquiries, project discussions, and support."
        />
        <meta
          name="keywords"
          content="Core Developers, Contact, Web Development, Inquiries, Support"
        />
        <meta name="author" content="Core Developers Team" />
      </Helmet>

      <div className="min-h-screen bg-[#031c36] text-white pt-20 pb-20 selection:bg-[#de8f32] selection:text-[#031c36]">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#015aae] blur-[120px] opacity-20"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#de8f32] blur-[120px] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-[#de8f32] font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Get In Touch
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Let's Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#015aae] to-[#de8f32]">
                Next Big Idea
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question or a project in mind? Reach out to our core team
              and let's start engineering your digital future.
            </p>
          </motion.div>

          <div className=" flex justify-center items-center max-w-xl mx-auto px-10 mb-20">
            <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
              <Send size={15} /> Get Started Today
            </button>

            <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
              <Phone size={15} />
              Contact info
            </button>

            <button className="mx-auto mt-10  border-2 hover:bg-gray-100 text-[#606b7a] px-3 py-2 rounded-xl  text-md  transition-all active:scale-95 flex items-center gap-2">
              <MapPin size={15} />
              Visits Us
            </button>
          </div>
          <hr></hr>
          <section className="max-w-7xl mx-auto px-4 -mt-10 relative  mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 1.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  }}
                  className="bg-[#2c62a7] border-2 border-[#2c62a7] rounded-[20px] p-5 flex flex-col items-center justify-center text-center transition-all"
                >
                  <h3 className="text-[25px] font-extrabold text-white mb-1 leading-none">
                    {stat.value}
                  </h3>
                  <p className="text-white text-sm  uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Column 1 & 2: The Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
            >
              {/* 4. Added form Ref, onSubmit handler */}
              <form
                ref={formRef}
                onSubmit={handleSendEmail}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">
                    Full Name
                  </label>
                  {/* 5. Added required and name attribute */}
                  <input
                    required
                    name="user_name"
                    type="text"
                    placeholder="Your Name "
                    className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">
                    Email Address
                  </label>
                  {/* 5. Added required and name attribute */}
                  <input
                    required
                    name="user_email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">
                    Subject
                  </label>
                  {/* 5. Added name attribute and explicit values */}
                  <select
                    name="subject"
                    className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all appearance-none"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#015aae]">
                    Message
                  </label>
                  {/* 5. Added required and name attribute */}
                  <textarea
                    required
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#031c36]/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#de8f32] transition-all resize-none"
                  ></textarea>
                </div>

                {/* 6. Success/Error Toast Message display */}
                {status.message && (
                  <div
                    className={`md:col-span-2 p-4 rounded-xl text-sm border ${status.type === "success" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="md:col-span-2">
                  {/* 7. Added disabled state and loader switch for UX */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group w-full md:w-auto bg-[#de8f32] text-[#031c36] font-black px-12 py-5 rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-[#de8f32]/20 disabled:opacity-50 disabled:scale-100"
                  >
                    {isSending ? "SENDING..." : "SEND MESSAGE"}
                    {!isSending && (
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Column 3: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <ContactCard
                icon={<MessageSquare className="text-[#de8f32]" />}
                title="Chat with us"
                detail="+977 9821747900"
                sub="Online 24/7"
              />
              <ContactCard
                icon={<MapPin className="text-[#015aae]" />}
                title="Visit our Office "
                detail="New Baneshwor ,Kathmandu, Nepal"
                sub="Monday - Friday, 9am - 6pm"
              />
              <ContactCard
                icon={<Globe className="text-purple-400" />}
                title="Global Support"
                detail="info.coredevelopers@gmail.com"
                sub="For urgent technical help"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

// Sub-component for Info Cards
const ContactCard = ({ icon, title, detail, sub }) => (
  <>
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#de8f32]/50 transition-all group">
    <div className="bg-[#031c36] w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
      {title}
    </h3>
    <p className="text-xl font-bold mb-1">{detail}</p>
    <p className="text-xs text-gray-400">{sub}</p>
  </div>
  </>
);

export default Contact;
