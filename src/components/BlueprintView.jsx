export default function BlueprintView() {
  return (
    <div className="p-4 md:p-10 space-y-10">
      <div className="grid grid-cols-12 gap-0 border-2 border-black">
        {/* Technical Column */}
        <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r-2 border-black p-8 bg-black/[0.02]">
          <h3 className="font-bold text-xs uppercase tracking-widest mb-10 underline decoration-2">
            System_Experience
          </h3>

          <div className="space-y-12">
            <Experience
              role="Technical_Support"
              company="Verizon"
              desc="Troubleshooting hardware/software in a native English environment."
            />
            <Experience
              role="Property_Manager"
              company="Valenzuela_Rentals"
              desc="Infrastructure logic and logistical management."
            />
            <Experience
              role="Engineering_Core"
              company="UDLAP"
              desc="Sustainable Energy Engineering background focused on system logic."
            />
          </div>
        </div>

        {/* Manifest Column */}
        <div className="col-span-12 md:col-span-8 p-8 md:p-16">
          <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-10">
            Logic.
          </h2>
          <div className="grid grid-cols-2 gap-8 border-t border-black/20 pt-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase mb-4">
                Technical_Stack
              </h4>
              <ul className="text-xs space-y-1 font-mono uppercase opacity-70">
                <li>React_Vite</li>
                <li>Tailwind_V4</li>
                <li>Linux_Systems</li>
                <li>Git_Bash</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase mb-4">
                Design_Core
              </h4>
              <ul className="text-xs space-y-1 font-mono uppercase opacity-70">
                <li>Photoshop_Expert</li>
                <li>Illustrator_Prolific</li>
                <li>UI_UX_Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({ role, company, desc }) {
  return (
    <div className="space-y-1">
      <h4 className="text-sm font-bold uppercase">{role}</h4>
      <p className="text-[10px] font-mono uppercase text-dynamic-accent">
        {company}
      </p>
      <p className="text-xs opacity-60 leading-tight">{desc}</p>
    </div>
  );
}
