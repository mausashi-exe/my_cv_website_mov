import React from "react";
import { motion } from "framer-motion";

// Assets
import bgTexture from "../assets/images/black_background_04.png";

const BlueprintView = ({ setMode }) => {
  // Función auxiliar para renderizar líneas de código con estilo
  const CodeLine = ({ num, content, indent = 0 }) => (
    <div className="flex font-mono text-sm md:text-base hover:bg-white/5 leading-relaxed">
      {/* Line Number */}
      <span className="select-none text-gray-600 text-right w-8 md:w-12 mr-4 md:mr-6 flex-shrink-0 text-xs py-1">
        {num}
      </span>
      {/* Code Content */}
      <div
        className={`py-1 font-medium ${indent ? `pl-${indent * 4}` : ""} w-full break-words whitespace-pre-wrap`}
      >
        {content}
      </div>
    </div>
  );

  // Estilos de texto (Syntax Highlighting)
  const Keyword = ({ children }) => (
    <span className="text-matte-red font-bold">{children}</span>
  );
  const StringVal = ({ children }) => (
    <span className="text-[#98C379]">{children}</span>
  ); // Verde suave VS Code
  const Prop = ({ children }) => (
    <span className="text-matte-blue">{children}</span>
  ); // Azul suave
  const Comment = ({ children }) => (
    <span className="text-gray-500 italic">// {children}</span>
  );
  const Bracket = ({ children }) => (
    <span className="text-yellow-500">{children}</span>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full relative bg-[#1e1e1e] text-[#abb2bf] overflow-y-auto"
      style={{ fontFamily: '"JetBrains Mono", monospace' }} // Forzar fuente tipo máquina de escribir
    >
      {/* Fondo Sutil */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />

      {/* VS Code Header (Tabs) */}
      <div className="sticky top-0 z-20 bg-[#1e1e1e] border-b border-black flex items-center px-4 py-2 text-xs font-mono select-none">
        <div className="flex gap-2 items-center bg-[#282c34] px-4 py-2 rounded-t-sm border-t-2 border-matte-red">
          <span className="text-matte-blue">JS</span>
          <span className="text-white font-bold">MAURICIO_OLVERA_CV.sys</span>
          <button
            onClick={() => setMode("terminal")}
            className="ml-4 hover:text-white text-gray-500"
          >
            x
          </button>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="relative z-10 p-4 md:p-8 max-w-5xl mx-auto pb-24">
        {/* HEADER BLOCK */}
        <CodeLine
          num={1}
          content={<Comment>@file: MAURICIO_OLVERA_CV.sys</Comment>}
        />
        <CodeLine num={2} content={<Comment>@version: 2.0.26</Comment>} />
        <CodeLine
          num={3}
          content={<Comment>@identity: UX_UI_ARCHITECT / ENGINEER</Comment>}
        />
        <CodeLine
          num={4}
          content={<Comment>@location: SALTILLO, MEXICO (25.43° N)</Comment>}
        />
        <CodeLine num={5} content="" />

        {/* IDENTITY PROTOCOL */}
        <CodeLine num={6} content={<Keyword>[IDENTITY_PROTOCOL]</Keyword>} />
        <CodeLine
          num={7}
          content={
            <span>
              <Prop>const</Prop> <Keyword>User</Keyword> ={" "}
              <Bracket>{"{"}</Bracket>
            </span>
          }
        />
        <CodeLine
          num={8}
          indent={4}
          content={
            <span>
              <Prop>NAME</Prop>:{" "}
              <StringVal>"Mauricio Olvera Valenzuela"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={9}
          indent={4}
          content={
            <span>
              <Prop>STATUS</Prop>:{" "}
              <StringVal>"Open_for_Opportunities"</StringVal>,{" "}
              <Comment>Junior_UX_UI_Developer</Comment>
            </span>
          }
        />
        <CodeLine
          num={10}
          indent={4}
          content={
            <span>
              <Prop>LANGUAGES</Prop>: <Bracket>[</Bracket>{" "}
              <StringVal>"English (Native/Professional)"</StringVal>,{" "}
              <StringVal>"Spanish (Native)"</StringVal> <Bracket>]</Bracket>
            </span>
          }
        />
        <CodeLine num={11} content={<Bracket>{"};"}</Bracket>} />
        <CodeLine num={12} content="" />

        {/* CORE LOGIC (SKILLS) */}
        <CodeLine num={13} content={<Keyword>[CORE_LOGIC] (Skills)</Keyword>} />
        <CodeLine
          num={14}
          content={
            <span>
              <Prop>const</Prop> <Keyword>Stack</Keyword> ={" "}
              <Bracket>{"{"}</Bracket>
            </span>
          }
        />

        <CodeLine
          num={15}
          indent={4}
          content={<Comment>Frontend Architecture</Comment>}
        />
        <CodeLine
          num={16}
          indent={4}
          content={
            <span>
              <Prop>"FrontEnd"</Prop>: <Bracket>[</Bracket>
            </span>
          }
        />
        <CodeLine
          num={17}
          indent={8}
          content={
            <span>
              <StringVal>"React.js"</StringVal>, <StringVal>"Vite"</StringVal>,{" "}
              <StringVal>"Tailwind_CSS_v4"</StringVal>,{" "}
              <StringVal>"Framer_Motion"</StringVal>
            </span>
          }
        />
        <CodeLine
          num={18}
          indent={4}
          content={
            <span>
              <Bracket>],</Bracket>
            </span>
          }
        />

        <CodeLine
          num={19}
          indent={4}
          content={<Comment>Visual & System Design</Comment>}
        />
        <CodeLine
          num={20}
          indent={4}
          content={
            <span>
              <Prop>"Design_Systems"</Prop>: <Bracket>[</Bracket>
            </span>
          }
        />
        <CodeLine
          num={21}
          indent={8}
          content={
            <span>
              <StringVal>"Photoshop_Expert"</StringVal>,{" "}
              <StringVal>"Illustrator_Prolific"</StringVal>,{" "}
              <StringVal>"Industrial_Brutalism"</StringVal>
            </span>
          }
        />
        <CodeLine
          num={22}
          indent={4}
          content={
            <span>
              <Bracket>],</Bracket>
            </span>
          }
        />

        <CodeLine
          num={23}
          indent={4}
          content={<Comment>Engineering Background</Comment>}
        />
        <CodeLine
          num={24}
          indent={4}
          content={
            <span>
              <Prop>"Engineering_Logic"</Prop>: <Bracket>[</Bracket>
            </span>
          }
        />
        <CodeLine
          num={25}
          indent={8}
          content={
            <span>
              <StringVal>"Sustainable_Energy_Architecture"</StringVal>,{" "}
              <StringVal>"System_Efficiency"</StringVal>,{" "}
              <StringVal>"Logical_Problem_Solving"</StringVal>
            </span>
          }
        />
        <CodeLine
          num={26}
          indent={4}
          content={
            <span>
              <Bracket>],</Bracket>
            </span>
          }
        />

        <CodeLine
          num={27}
          indent={4}
          content={
            <span>
              <Prop>"Tools"</Prop>: <Bracket>[</Bracket>{" "}
              <StringVal>"Git/Bash"</StringVal>,{" "}
              <StringVal>"Linux_Server_Mgmt"</StringVal>,{" "}
              <StringVal>"Adobe_Creative_Cloud"</StringVal> <Bracket>]</Bracket>
            </span>
          }
        />
        <CodeLine num={28} content={<Bracket>{"};"}</Bracket>} />
        <CodeLine num={29} content="" />

        {/* WORK HISTORY */}
        <CodeLine
          num={30}
          content={<Keyword>[SYSTEM_EXPERIENCE] (Work History)</Keyword>}
        />
        <CodeLine
          num={31}
          content={
            <span>
              <Prop>function</Prop> <Keyword>getExperience</Keyword>(){" "}
              <Bracket>{"{"}</Bracket>
            </span>
          }
        />

        <CodeLine
          num={32}
          indent={4}
          content={
            <span>
              <Keyword>return</Keyword> <Bracket>[</Bracket>
            </span>
          }
        />

        {/* Job 1 */}
        <CodeLine num={33} indent={8} content={<Bracket>{"{"}</Bracket>} />
        <CodeLine
          num={34}
          indent={12}
          content={
            <span>
              <Prop>role</Prop>:{" "}
              <StringVal>"Technical Support Specialist"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={35}
          indent={12}
          content={
            <span>
              <Prop>company</Prop>: <StringVal>"Verizon"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={36}
          indent={12}
          content={
            <span>
              <Prop>tasks</Prop>:{" "}
              <StringVal>
                "Diagnóstico avanzado de hardware/software (100% Inglés).
                Resolución bajo alta presión."
              </StringVal>
            </span>
          }
        />
        <CodeLine num={37} indent={8} content={<Bracket>{"},"}</Bracket>} />

        {/* Job 2 */}
        <CodeLine num={38} indent={8} content={<Bracket>{"{"}</Bracket>} />
        <CodeLine
          num={39}
          indent={12}
          content={
            <span>
              <Prop>role</Prop>:{" "}
              <StringVal>"Infrastructure & Property Mgmt"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={40}
          indent={12}
          content={
            <span>
              <Prop>company</Prop>: <StringVal>"Valenzuela Rentals"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={41}
          indent={12}
          content={
            <span>
              <Prop>tasks</Prop>:{" "}
              <StringVal>
                "Gestión logística de activos. Optimización de recursos con
                lógica de ingeniería."
              </StringVal>
            </span>
          }
        />
        <CodeLine num={42} indent={8} content={<Bracket>{"},"}</Bracket>} />

        {/* Job 3 */}
        <CodeLine num={43} indent={8} content={<Bracket>{"{"}</Bracket>} />
        <CodeLine
          num={44}
          indent={12}
          content={
            <span>
              <Prop>role</Prop>: <StringVal>"Art Assistant"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={45}
          indent={12}
          content={
            <span>
              <Prop>company</Prop>: <StringVal>"Cine & Media"</StringVal>,
            </span>
          }
        />
        <CodeLine
          num={46}
          indent={12}
          content={
            <span>
              <Prop>tasks</Prop>:{" "}
              <StringVal>
                "Ejecución visual y asistencia estética en sets profesionales."
              </StringVal>
            </span>
          }
        />
        <CodeLine num={47} indent={8} content={<Bracket>{"}"}</Bracket>} />

        <CodeLine
          num={48}
          indent={4}
          content={
            <span>
              <Bracket>];</Bracket>
            </span>
          }
        />
        <CodeLine num={49} content={<Bracket>{"}"}</Bracket>} />
        <CodeLine num={50} content="" />

        {/* PROJECTS */}
        <CodeLine num={51} content={<Keyword>[PROJECTS_VAULT]</Keyword>} />
        <CodeLine
          num={52}
          content={
            <span>
              <Comment>/* Nomos_Saga_Project (v0.5) */</Comment>
            </span>
          }
        />
        <CodeLine
          num={53}
          content={
            <span>
              <Prop>const</Prop> <Keyword>LatestProject</Keyword> ={" "}
              <Bracket>{"{"}</Bracket>
            </span>
          }
        />
        <CodeLine
          num={54}
          indent={4}
          content={
            <span>
              <Prop>desc</Prop>:{" "}
              <StringVal>
                "Sistema de world-building de 28 páginas. Fusión de lenguajes
                visuales y lógica."
              </StringVal>
              ,
            </span>
          }
        />
        <CodeLine
          num={55}
          indent={4}
          content={
            <span>
              <Prop>link</Prop>:{" "}
              <StringVal>"github.com/mausashi-exe/my_cv_website_mov"</StringVal>
            </span>
          }
        />
        <CodeLine num={56} content={<Bracket>{"};"}</Bracket>} />
        <CodeLine num={57} content="" />

        {/* EDUCATION */}
        <CodeLine num={58} content={<Keyword>[ACADEMIC_ARCHIVE]</Keyword>} />
        <CodeLine
          num={59}
          content={
            <span>
              <Prop>const</Prop> <Keyword>Education</Keyword> ={" "}
              <StringVal>
                "UDLAP // B.S. Sustainable Energy Engineering (6to Sem)"
              </StringVal>
              ;
            </span>
          }
        />
        <CodeLine
          num={60}
          content={
            <Comment>// Enfoque: Eficiencia y Sistemas Lógicos.</Comment>
          }
        />
        <CodeLine num={61} content="" />
        <CodeLine num={62} content={<Keyword>[EOF]</Keyword>} />

        {/* Cursor Intermitente al final */}
        <CodeLine
          num={63}
          content={
            <span className="inline-block w-2.5 h-5 bg-matte-red animate-pulse align-middle"></span>
          }
        />
      </div>
    </motion.div>
  );
};

export default BlueprintView;
