const CompanyMarquee = () => {
  const companies = [
    { name: "TechCorp", logo: " TechCorp" },
    { name: "ApexLabs", logo: "ApexLabs" },
    { name: "Quantum", logo: " Quantum" },
    { name: "CloudSync", logo: " CloudSync" },
    { name: "Vertex", logo: " Vertex" },
    { name: "DataFlow", logo: " DataFlow" },
  ];

  const dualCompanies = [...companies, ...companies];

  return (
    <section className="bg-[#031c36] py-26 px-25 overflow-hidden border-yrelative">
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-linear-to-r from-[#031c36] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#031c36] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-3xl font-bold text-[#de8f32] uppercase tracking-widest">
          Trusted Worldwide
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-400 mt-2">
          Powering infrastructure for industry leaders
        </h2>
      </div>

      {/* Marquee Wrapper Container */}
      <div className="flex w-full overflow-hidden select-none relative mask-image">
        <div className="flex gap-16 items-center justify-around min-w-full shrink-0 animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {dualCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-xl md:text-2xl font-black text-white/30 hover:text-[#de8f32] transition-colors duration-300 tracking-tight px-4"
            >
              {/* If you have image assets, use: <img src={company.logo} alt={company.name} className="h-8 opacity-40 hover:opacity-100 transition-opacity" /> */}
              <span>{company.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
