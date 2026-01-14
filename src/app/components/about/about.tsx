import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceInfo {
  jobTitle: string;
  dates: string;
  jobInfo: string[];
}

const experienceData: ExperienceInfo[] = [
  {
    jobTitle: "Trainee Software Developer @ _nology",
    dates: "Jan 2026 - Present",
    jobInfo: [
      "Completed 8 weeks, in an industry led bootcamp focused on JavaScript and building a strong foundation with HTML, CSS, TypeScript, JavaScript, Java.",
      "Experienced with industry standard practices such as Test-Driven development, paired programming and Model-View-Controller design.",
      "Effectively developed projects in solo, paired and group environments.",
    ],
  },
  {
    jobTitle: "AI-first Software Engineer Intern @ Risidio",
    dates: "Sep 2025 - Dec 2025",
    jobInfo: [
      "Developed and shipped front-end and full-stack features using React and Next.js, applying TypeScript for type safety.",
      "Implemented content workflows and editable pages using Prismic CMS to enable efficient editorial updates.",
      "Rapidly prototyped and refined solutions with AI-assisted tools, improving development speed and reducing rework.",
    ],
  },
  {
    jobTitle: "FrontEnd Developer Intern @ hybytes",
    dates: "Oct 2024 - Apr 2025",
    jobInfo: [
      "Built reusable React / Next.js UI components and integrated them with RESTful APIs.",
      "Ensured responsive, cross-browser functionality for a consistent user experience.",
      "Worked in Agile teams, collaborating with designers and backend developers using Git workflows",
    ],
  },
];

export default function About() {
  return (
    <section
      aria-labelledby="my-journey"
      className="py-20 bg-(--smart-blue) relative about-wrapper"
    >
      <div className="absolute w-6/12 md:w-4/12 rotate-45 left-5 aspect-square top-0 bg-(--graphite-light)"></div>
      <div className="absolute w-3/12 md:w-2/12 rotate-45 left-10 aspect-square top-30 bg-(--ivory-light) about-inner-div"></div>
      <div className="max-w-(--max-width) mx-auto px-4 flex justify-around flex-col gap-10 md:flex-row md:gap-0">
        <div>
          <h2 id="my-journey">My Journey</h2>
        </div>
        <div className="max-w-[60ch]">
          <p className="mb-18">
            Hey there👋, I&apos;m Andy. My coding journey began during my
            university days when I embarked on a &apos;Year in Computing&apos;
            as part of my Criminology and Sociology degree around 2022/23. Since
            then, I have become passionate about all things coding and
            programming, and I&apos;m excited to see where this journey takes me
            in the world of technology and innovation.
          </p>
          <div>
            <h3 className="mb-5">Experience</h3>
            <Accordion type="single" collapsible className="details-wrapper">
              {experienceData.map((item, idx) => {
                return <Experience key={idx} item={item} />;
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ item }: { item: ExperienceInfo }) {
  return (
    <AccordionItem value={item.jobTitle}>
      <AccordionTrigger className="cursor-pointer">
        <strong>{item.jobTitle}</strong>
      </AccordionTrigger>
      <AccordionContent>
        <span className="experience-dates italic text-[0.8rem]">
          {item.dates}
        </span>
        <ul className="mt-6">
          {item.jobInfo.map((jobInfo, idx2) => {
            return <li key={idx2}>{jobInfo}</li>;
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

// function Experience({ item }) {
//   return (
//     <details className="mb-4 last:mb-0-b py-4" name="experience">
//       <summary>{item.jobTitle}</summary>
//       <span className="text-sm">{item.dates}</span>
//       <ul className="mt-6">
//         {item.jobInfo.map((jobInfo, idx2) => {
//           return <li key={idx2}>{jobInfo}</li>;
//         })}
//       </ul>
//     </details>
//   );
// }
