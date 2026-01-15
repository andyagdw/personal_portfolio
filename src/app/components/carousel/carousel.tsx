// Shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Images
import PrizeHuntFrencyImg from "@/src/app/assets/prize_hunt_frenzy.png";
import WordWizardsImg from "@/src/app/assets/word_wizards.png";
import LinkedInLandingPageCloneImg from "@/src/app/assets/linkedin.png";
import InanceWebLocalisationImg from "@/src/app/assets/localisation.png";
// Next
import { StaticImageData } from "next/image";
import Link from "next/link";
// Components
import ProjectTags from "../project-tags/project-tags";

interface Project {
  name: string;
  link: string;
  projectDescription: string;
  tags: string[];
  image: StaticImageData;
}

const projects: Project[] = [
  {
    name: "Prize Hunt Frenzy",
    link: "https://prize-hunt-frenzy.netlify.app/",
    projectDescription:
      "A web-based game developed using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: PrizeHuntFrencyImg,
  },
  {
    name: "Word Wizards",
    link: "https://github.com/andyagdw/word_wizards",
    projectDescription:
      "A learning platform that helps users expand their vocabulary using the WordsAPI.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "Bootstrap"],
    image: WordWizardsImg,
  },
  {
    name: "LinkedIn Landing Page Clone",
    link: "https://github.com/andyagdw/linkedin_landing_page",
    projectDescription:
      "A learning platform that helps users expand their vocabulary using the WordsAPI.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "Bootstrap"],
    image: LinkedInLandingPageCloneImg,
  },
  {
    name: "Inance Web Localisation",
    link: "https://github.com/andyagdw/inance_web_localisation",
    tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    projectDescription:
      "Demo React app with English, French & Arabic (RTL) localisation, plus optional Firebase contact form and Google Analytics.",
    image: InanceWebLocalisationImg,
  },
];

const buttonStyle = "cursor-pointer size-14 relative";

export default function ProjectCarousel() {
  return (
    <Carousel className="flex flex-col rounded-2xl overflow-hidden">
      <CarouselContent>
        {projects?.map((projectData, idx) => (
          <CarouselItem key={idx}>
            <div
              style={{
                backgroundImage: `url(${projectData.image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="h-130 grid items-end rounded-2xl overflow-hidden"
            >
              <div className="p-5 bg-white/90">
                <h4 className="mb-2">{projectData.name}</h4>
                <p className="mb-5">{projectData.projectDescription}</p>
                <ul className="list-none flex flex-wrap gap-2 md:gap-4 mb-10">
                  {projectData.tags.map((tag, idx) => (
                    <ProjectTags key={idx} tag={tag} />
                  ))}
                </ul>
                <Link
                  href={projectData.link}
                  target="_blank"
                  className="underline underline-offset-6 hover:text-(--navy-electric) transition-colors duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Button styling */}
      <div className="flex justify-center">
        <div className="relative p-10">
          <CarouselPrevious className={`left-0 ${buttonStyle} `} />
        </div>
        <div className="relative p-10">
          <CarouselNext className={`right-0 ${buttonStyle}`} />
        </div>
      </div>
      {/* End Button styling */}
    </Carousel>
  );
}
