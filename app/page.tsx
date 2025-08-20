// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
"use client";
// import React, { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   Users,
//   TrendingUp,
//   Heart,
//   Brain,
//   Hand,
//   Mail,
//   Phone,
//   MapPin,
//   CheckCircle,
//   Star,
// } from "lucide-react";

// export default function DanielsCohrLanding() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeService, setActiveService] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const services = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "Strategic Leadership Development",
//       description:
//         "Unlock potential through innovative leadership programs designed to transform mindsets and drive organizational excellence.",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Employee Engagement Solutions",
//       description:
//         "Create authentic connections that inspire teams to perform at their peak while fostering a culture of belonging.",
//       color: "from-yellow-500 to-orange-500",
//     },
//     {
//       icon: <Hand className="w-8 h-8" />,
//       title: "Performance Optimization",
//       description:
//         "Transform individual and team performance through data-driven insights and personalized development strategies.",
//       color: "from-red-500 to-orange-500",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Organizational Transformation",
//       description:
//         "Guide sustainable change initiatives that align culture, strategy, and operations for long-term success.",
//       color: "from-orange-400 to-yellow-500",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Mitchell",
//       role: "CEO, TechInnovate",
//       content:
//         "Daniels Cohr transformed our leadership approach. The results were immediate and sustainable.",
//       rating: 5,
//     },
//     {
//       name: "Marcus Chen",
//       role: "HR Director, GlobalCorp",
//       content:
//         "Their human-centered approach to consulting delivered exceptional organizational growth.",
//       rating: 5,
//     },
//     {
//       name: "Lisa Rodriguez",
//       role: "Founder, GrowthLab",
//       content:
//         "The team's expertise in unlocking human potential is unmatched in the industry.",
//       rating: 5,
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen text-white overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4500 100%)",
//         fontFamily:
//           "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
//       }}
//     >
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute w-96 h-96 rounded-full opacity-20"
//           style={{
//             background: "linear-gradient(45deg, #ff6b35, #f7931e)",
//             top: "-10%",
//             right: "-10%",
//             animation: "float 6s ease-in-out infinite",
//           }}
//         />
//         <div
//           className="absolute w-80 h-80 rounded-full opacity-15"
//           style={{
//             background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//             bottom: "-10%",
//             left: "-10%",
//             animation: "float 8s ease-in-out infinite reverse",
//           }}
//         />
//         <div
//           className="absolute w-64 h-64 rounded-full opacity-10"
//           style={{
//             background: "linear-gradient(45deg, #f7931e, #ffab00)",
//             top: "30%",
//             left: "70%",
//             animation: "float 10s ease-in-out infinite",
//           }}
//         />
//       </div>

//       {/* Navigation */}
//       <nav
//         className="fixed top-0 w-full z-50 py-4 px-6"
//         style={{
//           background: "rgba(255, 255, 255, 0.1)",
//           backdropFilter: "blur(20px)",
//           borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
//         }}
//       >
//         <div className="container mx-auto d-flex justify-content-between align-items-center">
//           <div
//             className="fw-bold fs-3 d-flex align-items-center gap-3"
//             style={{
//               background: "linear-gradient(45deg, #fff, #ffe0b8)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             <div
//               className="d-flex align-items-center justify-content-center"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                 borderRadius: "50%",
//                 boxShadow: "0 4px 15px rgba(255, 69, 0, 0.3)",
//               }}
//             >
//               <div
//                 style={{
//                   width: "20px",
//                   height: "24px",
//                   background: "white",
//                   clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//                   borderRadius: "0 0 50% 50%",
//                 }}
//               />
//             </div>
//             Daniels & Co
//           </div>
//           <div className="d-none d-md-flex gap-4">
//             {["Services", "About", "Testimonials", "Contact"].map(
//               (item, index) => (
//                 <a
//                   key={index}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-white text-decoration-none px-3 py-2 rounded-3"
//                   style={{
//                     transition: "all 0.3s ease",
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255, 255, 255, 0.2)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "rgba(255, 255, 255, 0.1)";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 pt-32 pb-20">
//         <div className="row align-items-center min-vh-100">
//           <div className="col-lg-6">
//             <div
//               className={`transition-all duration-1000 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-12"
//               }`}
//             >
//               <h1
//                 className="display-2 fw-bold mb-4"
//                 style={{
//                   background: "linear-gradient(45deg, #fff, #ffe0b8, #ffcc80)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                   lineHeight: "1.2",
//                 }}
//               >
//                 Inspire. Grow. Ignite.
//               </h1>
//               <p className="fs-4 mb-5 text-light" style={{ lineHeight: "1.6" }}>
//                 We unlock the potential within your people, transforming heads,
//                 hearts, and hands to create sustainable, thriving organizations
//                 that lead the future.
//               </p>
//               <div className="d-flex flex-column flex-md-row gap-3">
//                 <button
//                   className="btn btn-lg px-5 py-3 rounded-pill text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
//                   style={{
//                     background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                     border: "none",
//                     boxShadow: "0 8px 32px rgba(255, 69, 0, 0.3)",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = "translateY(-3px)";
//                     e.target.style.boxShadow =
//                       "0 12px 40px rgba(255, 69, 0, 0.4)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = "translateY(0)";
//                     e.target.style.boxShadow =
//                       "0 8px 32px rgba(255, 69, 0, 0.3)";
//                   }}
//                 >
//                   Start Your Transformation <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button
//                   className="btn btn-lg btn-outline-light px-5 py-3 rounded-pill fw-semibold"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255, 255, 255, 0.3)",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255, 255, 255, 0.2)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "rgba(255, 255, 255, 0.1)";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 mt-5 mt-lg-0">
//             <div
//               className="position-relative"
//               style={{
//                 transform: `translateY(${isVisible ? "0" : "50px"})`,
//                 opacity: isVisible ? 1 : 0,
//                 transition: "all 1s ease 0.3s",
//               }}
//             >
//               <div
//                 className="rounded-4 p-5 text-center"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.1)",
//                   backdropFilter: "blur(20px)",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <div className="row g-4">
//                   <div className="col-4">
//                     <div
//                       className="p-4 rounded-3 text-center"
//                       style={{
//                         background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                         boxShadow: "0 4px 20px rgba(255, 69, 0, 0.3)",
//                       }}
//                     >
//                       <Brain className="w-12 h-12 mx-auto mb-2" />
//                       <div className="fw-bold">Think</div>
//                     </div>
//                   </div>
//                   <div className="col-4">
//                     <div
//                       className="p-4 rounded-3 text-center"
//                       style={{
//                         background: "linear-gradient(45deg, #f7931e, #ffab00)",
//                         boxShadow: "0 4px 20px rgba(247, 147, 30, 0.3)",
//                       }}
//                     >
//                       <Heart className="w-12 h-12 mx-auto mb-2" />
//                       <div className="fw-bold">Feel</div>
//                     </div>
//                   </div>
//                   <div className="col-4">
//                     <div
//                       className="p-4 rounded-3 text-center"
//                       style={{
//                         background: "linear-gradient(45deg, #ff6b35, #f7931e)",
//                         boxShadow: "0 4px 20px rgba(255, 107, 53, 0.3)",
//                       }}
//                     >
//                       <Hand className="w-12 h-12 mx-auto mb-2" />
//                       <div className="fw-bold">Act</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2
//               className="display-4 fw-bold mb-4"
//               style={{
//                 background: "linear-gradient(45deg, #fff, #ffe0b8)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Our Services
//             </h2>
//             <p className="fs-5 text-light">
//               Comprehensive solutions to transform your organization
//             </p>
//           </div>

//           <div className="row g-4">
//             {services.map((service, index) => (
//               <div key={index} className="col-lg-6">
//                 <div
//                   className="h-100 p-5 rounded-4 position-relative overflow-hidden"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(20px)",
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                     transition: "all 0.3s ease",
//                     cursor: "pointer",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-8px)";
//                     e.currentTarget.style.boxShadow =
//                       "0 20px 60px rgba(0, 0, 0, 0.2)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow =
//                       "0 8px 32px rgba(0, 0, 0, 0.1)";
//                   }}
//                 >
//                   <div
//                     className="d-inline-flex p-3 rounded-3 mb-4"
//                     style={{
//                       background:
//                         index % 2 === 0
//                           ? "linear-gradient(45deg, #ff4500, #ff6b35)"
//                           : "linear-gradient(45deg, #f7931e, #ffab00)",
//                     }}
//                   >
//                     {service.icon}
//                   </div>
//                   <h4 className="fw-bold mb-3">{service.title}</h4>
//                   <p className="text-light mb-4" style={{ lineHeight: "1.6" }}>
//                     {service.description}
//                   </p>
//                   <button
//                     className="btn text-white fw-semibold d-flex align-items-center gap-2"
//                     style={{
//                       background: "rgba(255, 255, 255, 0.1)",
//                       border: "1px solid rgba(255, 255, 255, 0.3)",
//                       padding: "0.75rem 1.5rem",
//                       borderRadius: "2rem",
//                     }}
//                   >
//                     Learn More <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2
//               className="display-4 fw-bold mb-4"
//               style={{
//                 background: "linear-gradient(45deg, #fff, #ffe0b8)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Client Success Stories
//             </h2>
//           </div>

//           <div className="row g-4">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="col-lg-4">
//                 <div
//                   className="p-5 rounded-4 h-100"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(20px)",
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   <div className="d-flex mb-3">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-5 h-5"
//                         style={{ color: "#ffd700" }}
//                         fill="currentColor"
//                       />
//                     ))}
//                   </div>
//                   <p className="mb-4 text-light" style={{ lineHeight: "1.6" }}>
//                     "{testimonial.content}"
//                   </p>
//                   <div>
//                     <div className="fw-bold">{testimonial.name}</div>
//                     <div className="text-light small">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <h2
//                 className="display-4 fw-bold mb-4"
//                 style={{
//                   background: "linear-gradient(45deg, #fff, #ffe0b8)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Ready to Transform?
//               </h2>
//               <p className="fs-5 text-light mb-5">
//                 Let's discuss how we can unlock the potential within your
//                 organization and create sustainable growth together.
//               </p>
//               <div className="d-flex flex-column gap-3">
//                 <div className="d-flex align-items-center gap-3">
//                   <div
//                     className="p-3 rounded-3"
//                     style={{
//                       background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                     }}
//                   >
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <span>hello@danielscohr.co.za</span>
//                 </div>
//                 <div className="d-flex align-items-center gap-3">
//                   <div
//                     className="p-3 rounded-3"
//                     style={{
//                       background: "linear-gradient(45deg, #f7931e, #ffab00)",
//                     }}
//                   >
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <span>+27 (0) 11 123 4567</span>
//                 </div>
//                 <div className="d-flex align-items-center gap-3">
//                   <div
//                     className="p-3 rounded-3"
//                     style={{
//                       background: "linear-gradient(45deg, #ff6b35, #f7931e)",
//                     }}
//                   >
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <span>Johannesburg, South Africa</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 mt-5 mt-lg-0">
//               <div
//                 className="p-5 rounded-4"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.1)",
//                   backdropFilter: "blur(20px)",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <div>
//                   <div className="mb-3">
//                     <input
//                       type="text"
//                       className="form-control rounded-3 p-3"
//                       placeholder="Your Name"
//                       style={{
//                         background: "rgba(255, 255, 255, 0.1)",
//                         border: "1px solid rgba(255, 255, 255, 0.3)",
//                         color: "white",
//                       }}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <input
//                       type="email"
//                       className="form-control rounded-3 p-3"
//                       placeholder="Your Email"
//                       style={{
//                         background: "rgba(255, 255, 255, 0.1)",
//                         border: "1px solid rgba(255, 255, 255, 0.3)",
//                         color: "white",
//                       }}
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <textarea
//                       className="form-control rounded-3 p-3"
//                       rows="4"
//                       placeholder="Tell us about your organization's needs..."
//                       style={{
//                         background: "rgba(255, 255, 255, 0.1)",
//                         border: "1px solid rgba(255, 255, 255, 0.3)",
//                         color: "white",
//                         resize: "none",
//                       }}
//                     />
//                   </div>
//                   <button
//                     className="btn w-100 py-3 rounded-3 text-white fw-semibold"
//                     style={{
//                       background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                       border: "none",
//                       boxShadow: "0 8px 32px rgba(255, 69, 0, 0.3)",
//                     }}
//                     onClick={() => {
//                       // Handle form submission logic here
//                       alert(
//                         "Thank you for your interest! We will contact you soon."
//                       );
//                     }}
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 border-top border-light border-opacity-25">
//         <div className="container mx-auto px-6">
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <div
//                 className="fw-bold fs-4 mb-2 d-flex align-items-center gap-2"
//                 style={{
//                   background: "linear-gradient(45deg, #fff, #ffe0b8)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 <div
//                   className="d-flex align-items-center justify-content-center"
//                   style={{
//                     width: "32px",
//                     height: "32px",
//                     background: "linear-gradient(45deg, #ff4500, #ff6b35)",
//                     borderRadius: "50%",
//                     boxShadow: "0 4px 15px rgba(255, 69, 0, 0.2)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "16px",
//                       height: "20px",
//                       background: "white",
//                       clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//                       borderRadius: "0 0 50% 50%",
//                     }}
//                   />
//                 </div>
//                 Daniels & Co
//               </div>
//               <p className="text-light small">
//                 Human Capital Consulting • Inspiring Growth • Igniting Potential
//               </p>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <p className="text-light small mb-0">
//                 © 2024 Daniels Cohr. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }

//         .form-control::placeholder {
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .form-control:focus {
//           background: rgba(255, 255, 255, 0.15) !important;
//           border-color: rgba(255, 255, 255, 0.5) !important;
//           box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.1) !important;
//           color: white !important;
//         }

//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Heart,
  Brain,
  Hand,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function DanielsCohrLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Executive Search and Recruitment",
      description:
        "Find and attract top-tier executive talent through our comprehensive search process. We identify leaders who align with your culture and drive transformational growth.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human Capital Business Partnering Outsourcing",
      description:
        "Strategic HR partnership services that integrate seamlessly with your business operations, providing expert guidance and execution for all your human capital needs.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Leadership Development and Coaching",
      description:
        "Comprehensive leadership programs and personalized coaching that unlock potential, enhance performance, and create sustainable organizational impact.",
      color: "from-red-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechInnovate",
      content:
        "Daniels Cohr transformed our leadership approach. The results were immediate and sustainable.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "HR Director, GlobalCorp",
      content:
        "Their human-centered approach to consulting delivered exceptional organizational growth.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder, GrowthLab",
      content:
        "The team's expertise in unlocking human potential is unmatched in the industry.",
      rating: 5,
    },
  ];

  return (
    <div
      className="min-h-screen text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff4500 100%)",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "linear-gradient(45deg, #ff6b35, #f7931e)",
            top: "-10%",
            right: "-10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: "linear-gradient(45deg, #ff4500, #ff6b35)",
            bottom: "-10%",
            left: "-10%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: "linear-gradient(45deg, #f7931e, #ffab00)",
            top: "30%",
            left: "70%",
            animation: "float 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 py-4 px-6"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto d-flex justify-content-between align-items-center">
          <div
            className="fw-bold fs-3 d-flex align-items-center gap-3"
            style={{
              background: "linear-gradient(45deg, #fff, #ffe0b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <Image
              src="/logo-no-background.png" // Path relative to the public folder
              alt="Pointer"
              width={40}
              height={40}
            />
            Daniels & Co
          </div>
          <div className="d-none d-md-flex gap-4">
            {["Services", "Solutions", "Testimonials", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={
                    item === "Solutions"
                      ? "#services"
                      : `#${item.toLowerCase()}`
                  }
                  className="text-white text-decoration-none px-3 py-2 rounded-3"
                  style={{
                    transition: "all 0.3s ease",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h1
                className="display-2 fw-bold mb-4"
                style={{
                  background: "linear-gradient(45deg, #fff, #ffe0b8, #ffcc80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                Inspire. Grow. Ignite.
              </h1>
              <p className="fs-4 mb-5 text-light" style={{ lineHeight: "1.6" }}>
                We unlock the potential within your people, transforming heads,
                hearts, and hands to create sustainable, thriving organizations
                that lead the future.
              </p>
              <div className="d-flex flex-column flex-md-row gap-3">
                <button
                  className="btn btn-lg px-5 py-3 rounded-pill text-white fw-semibold d-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                    border: "none",
                    boxShadow: "0 8px 32px rgba(255, 69, 0, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 12px 40px rgba(255, 69, 0, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 8px 32px rgba(255, 69, 0, 0.3)";
                  }}
                >
                  Start Your Transformation <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="btn btn-lg btn-outline-light px-5 py-3 rounded-pill fw-semibold"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.2)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div
              className="position-relative"
              style={{
                transform: `translateY(${isVisible ? "0" : "50px"})`,
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease 0.3s",
              }}
            >
              <div
                className="rounded-4 p-5 text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="row g-4">
                  <div className="col-4">
                    <div
                      className="p-4 rounded-3 text-center"
                      style={{
                        background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                        boxShadow: "0 4px 20px rgba(255, 69, 0, 0.3)",
                      }}
                    >
                      <Brain className="w-12 h-12 mx-auto mb-2" />
                      <div className="fw-bold">Think</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="p-4 rounded-3 text-center"
                      style={{
                        background: "linear-gradient(45deg, #f7931e, #ffab00)",
                        boxShadow: "0 4px 20px rgba(247, 147, 30, 0.3)",
                      }}
                    >
                      <Heart className="w-12 h-12 mx-auto mb-2" />
                      <div className="fw-bold">Feel</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div
                      className="p-4 rounded-3 text-center"
                      style={{
                        background: "linear-gradient(45deg, #ff6b35, #f7931e)",
                        boxShadow: "0 4px 20px rgba(255, 107, 53, 0.3)",
                      }}
                    >
                      <Hand className="w-12 h-12 mx-auto mb-2" />
                      <div className="fw-bold">Act</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Highlight Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="display-4 fw-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #fff, #ffe0b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Core Services
            </h2>
            <p className="fs-5 text-light">
              Specialized solutions for your human capital needs
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-4">
              <div
                className="text-center p-6 rounded-4 h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 60px rgba(255, 69, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  className="d-inline-flex p-4 rounded-4 mb-4"
                  style={{
                    background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                    boxShadow: "0 8px 25px rgba(255, 69, 0, 0.3)",
                  }}
                >
                  <Users className="w-12 h-12" />
                </div>
                <h3
                  className="fw-bold mb-4 text-uppercase fs-5"
                  style={{ letterSpacing: "1px" }}
                >
                  Executive Search & Recruitment
                </h3>
                <p className="text-light mb-4" style={{ lineHeight: "1.7" }}>
                  Strategic talent acquisition for C-suite and senior leadership
                  positions. We identify and attract exceptional leaders who
                  drive organizational transformation and sustainable growth.
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-light px-4 py-2 rounded-pill"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(255, 69, 0, 0.2)";
                      e.target.style.borderColor = "#ff4500";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    Explore Service
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="text-center p-6 rounded-4 h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 60px rgba(247, 147, 30, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  className="d-inline-flex p-4 rounded-4 mb-4"
                  style={{
                    background: "linear-gradient(45deg, #f7931e, #ffab00)",
                    boxShadow: "0 8px 25px rgba(247, 147, 30, 0.3)",
                  }}
                >
                  <Heart className="w-12 h-12" />
                </div>
                <h3
                  className="fw-bold mb-4 text-uppercase fs-5"
                  style={{ letterSpacing: "1px" }}
                >
                  Human Capital Business Partnering Outsourcing
                </h3>
                <p className="text-light mb-4" style={{ lineHeight: "1.7" }}>
                  Comprehensive HR outsourcing solutions that integrate with
                  your business strategy. From talent management to
                  organizational development, we become your strategic HR
                  partner.
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-light px-4 py-2 rounded-pill"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(247, 147, 30, 0.2)";
                      e.target.style.borderColor = "#f7931e";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    Explore Service
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="text-center p-6 rounded-4 h-100"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 25px 60px rgba(255, 107, 53, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  className="d-inline-flex p-4 rounded-4 mb-4"
                  style={{
                    background: "linear-gradient(45deg, #ff6b35, #f7931e)",
                    boxShadow: "0 8px 25px rgba(255, 107, 53, 0.3)",
                  }}
                >
                  <TrendingUp className="w-12 h-12" />
                </div>
                <h3
                  className="fw-bold mb-4 text-uppercase fs-5"
                  style={{ letterSpacing: "1px" }}
                >
                  Leadership Development & Coaching
                </h3>
                <p className="text-light mb-4" style={{ lineHeight: "1.7" }}>
                  Personalized leadership development programs and executive
                  coaching that unlock potential, enhance performance, and
                  create lasting organizational impact through transformational
                  leadership.
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-light px-4 py-2 rounded-pill"
                    style={{
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(255, 107, 53, 0.2)";
                      e.target.style.borderColor = "#ff6b35";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    }}
                  >
                    Explore Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="display-4 fw-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #fff, #ffe0b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Services
            </h2>
            <p className="fs-5 text-light">
              Comprehensive solutions to transform your organization
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="h-100 p-5 rounded-4 position-relative overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 60px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    className="d-inline-flex p-3 rounded-3 mb-4"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(45deg, #ff4500, #ff6b35)"
                          : index === 1
                          ? "linear-gradient(45deg, #f7931e, #ffab00)"
                          : "linear-gradient(45deg, #ff6b35, #f7931e)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-light mb-4" style={{ lineHeight: "1.6" }}>
                    {service.description}
                  </p>
                  <button
                    className="btn text-white fw-semibold d-flex align-items-center gap-2"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "2rem",
                    }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="display-4 fw-bold mb-4"
              style={{
                background: "linear-gradient(45deg, #fff, #ffe0b8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Client Success Stories
            </h2>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4">
                <div
                  className="p-5 rounded-4 h-100"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5"
                        style={{ color: "#ffd700" }}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-light" style={{ lineHeight: "1.6" }}>
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="fw-bold">{testimonial.name}</div>
                    <div className="text-light small">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2
                className="display-4 fw-bold mb-4"
                style={{
                  background: "linear-gradient(45deg, #fff, #ffe0b8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready to Transform?
              </h2>
              <p className="fs-5 text-light mb-5">
                Let's discuss how we can unlock the potential within your
                organization and create sustainable growth together.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="p-3 rounded-3"
                    style={{
                      background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@danielscohr.co.za</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="p-3 rounded-3"
                    style={{
                      background: "linear-gradient(45deg, #f7931e, #ffab00)",
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+27 (0) 11 123 4567</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="p-3 rounded-3"
                    style={{
                      background: "linear-gradient(45deg, #ff6b35, #f7931e)",
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div
                className="p-5 rounded-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control rounded-3 p-3"
                      placeholder="Your Name"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control rounded-3 p-3"
                      placeholder="Your Email"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control rounded-3 p-3"
                      rows="4"
                      placeholder="Tell us about your organization's needs..."
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        color: "white",
                        resize: "none",
                      }}
                    />
                  </div>
                  <button
                    className="btn w-100 py-3 rounded-3 text-white fw-semibold"
                    style={{
                      background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                      border: "none",
                      boxShadow: "0 8px 32px rgba(255, 69, 0, 0.3)",
                    }}
                    onClick={() => {
                      // Handle form submission logic here
                      alert(
                        "Thank you for your interest! We will contact you soon."
                      );
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-top border-light border-opacity-25">
        <div className="container mx-auto px-6">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                className="fw-bold fs-4 mb-2 d-flex align-items-center gap-2"
                style={{
                  background: "linear-gradient(45deg, #fff, #ffe0b8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "linear-gradient(45deg, #ff4500, #ff6b35)",
                    borderRadius: "50%",
                    boxShadow: "0 4px 15px rgba(255, 69, 0, 0.2)",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "20px",
                      background: "white",
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      borderRadius: "0 0 50% 50%",
                    }}
                  />
                </div>
                Daniels & Co
              </div>
              <p className="text-light small">
                Human Capital Consulting • Inspiring Growth • Igniting Potential
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-light small mb-0">
                © 2024 Daniels Cohr. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
