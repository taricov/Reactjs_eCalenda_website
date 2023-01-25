export default function LongPane() {
  return (
    <>
      <div className="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
        <div className="space-y-4">
          <p className="text-5xl font-bold text-black tracking-tight">
            In unprecedented times, health and safety remain the priority.
          </p>
          <p className="text-xl text-black">
            From the moment the threat of COVID‑19 emerged, Apple took action.
            Working closely with medical experts and our suppliers, we put the
            health and safety of the people in our supply chain first. We
            implemented standard measures like personal protective equipment,
            deep‑cleaning protocols and health screenings. But we went much
            further, re‑imagining entire factory layouts and processes to ensure
            that people could practise proper social distancing. We continue to
            support our suppliers around the world and have shared our best
            practices and lessons learned with partners across the industry.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
          <div>
            <p className="text-4xl font-bold text-black">2M+</p>
            <p className="text-sm text-black">
              people in the Apple supply chain covered by our health and safety
              standards in 2020
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">170+</p>
            <p className="text-sm text-black">
              member companies of the Responsible Business Alliance given access
              to our COVID response tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
