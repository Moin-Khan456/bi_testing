export default function SectionOne({ faqsType, setFaqsType }) {
  return (
    <div className="container pt-28">
      <h1 className="MonumentBold text-[2.25rem] leading-[4rem] lg:text-[3.75rem] text-center">
        Frequently Asked Questions (FAQ) | Brain Inventory
      </h1>

      <div className="flex justify-center sm:flex-row flex-col gap-4 pt-8 px-4">
        <button
          className={`px-6 py-2 font-bold text-lg border rounded-3xl border-gray-200 ${
            faqsType === "Development/Technologies/Services" &&
            "bg-gradient-to-r from-[#000076] to-[#7600EB]"
          }`}
          onClick={() => setFaqsType("Development/Technologies/Services")}
        >
          Development/Technologies/Services
        </button>
        <button
          className={`px-6 py-2 font-bold sm:text-lg text-[1rem] border rounded-3xl border-gray-200 ${
            faqsType === "On-Site" &&
            "bg-gradient-to-r from-[#000076] to-[#7600EB]"
          }`}
          onClick={() => setFaqsType("On-Site")}
        >
          On-Site
        </button>
        <button
          className={`px-6 py-2 font-bold text-lg border rounded-3xl border-gray-200 ${
            faqsType === "IT Staff Augmentation" &&
            "bg-gradient-to-r from-[#000076] to-[#7600EB]"
          }`}
          onClick={() => setFaqsType("IT Staff Augmentation")}
        >
          IT Staff Augmentation
        </button>
      </div>
    </div>
  );
}
