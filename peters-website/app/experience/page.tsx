import NavBar from "@/components/Navbar";
import JobEntries from "@/components/JobEntries";
import DownloadButton from "@/components/DownloadButton";
import Link from "next/link";

const ukg_exp = {
  company: "UKG",
  job_title: "Software Engineer Co-Op",
  duration: "September - December 2024",
  descr:
    "At UKG, I designed and enhanced performance tests for timekeeping accrual APIs, focusing on benchmarking complex employee- and position-level scenarios. I rewrote core test classes to eliminate hardcoded values, allowing flexible and scalable testing configurations. Additionally, I managed large test datasets, simulating a wide variety of employee and accrual combinations to ensure thorough and accurate performance evaluations.",
};
const seo_exp = {
  company: "SEO",
  job_title: "Tech Developer Intern",
  duration: "June - August 2024",
  descr:
    "Through SEO’s intensive summer program, I completed over 300 hours of training in computer science fundamentals, data structures, algorithms, and full-stack web development. As part of a SCRUM-style team, I developed full-stack applications using Python (Flask), MySQL, JavaScript, HTML, CSS, and external API integrations. Alongside technical work, I participated in professional development and mentorship programs to strengthen my career skills and industry readiness.",
};
const ner_exp = {
  company: "Northeastern Electric Racing",
  job_title: "Software Developer",
  duration: "September 2023 - April 2024",
  descr:
    "As a Full-Stack Developer for the Northeastern Electric Racing Club, I delivered new features and resolved critical bugs for the club’s website, serving a community of nearly 1,000 users. I redesigned key frontend components using React and Express to improve user experience and reduce maintenance issues. In parallel, I engineered QML-based interface elements for the team's electric race car, achieving a 15% reduction in rendering time. Active participation in weekly standups helped me address GUI challenges quickly and strengthened my problem-solving skills in a fast-paced environment.",
};
const oasis_exp = {
  company: "Oasis",
  job_title: "Mobile Developer",
  duration: "September - December 2023",
  descr:
    "At Oasis, I contributed to the foundation of a cross-platform mobile application by implementing modular React Native screens. Working closely with a team of four, I helped design detailed lo-fi and hi-fi mockups to align our development goals. By practicing agile methodologies through weekly sprints and standups, I directly supported improvements in project efficiency and team collaboration.",
};

const husky_exp = {
  company: "Northeastern University",
  job_title: "Student Ambassador",
  duration: "January - April 2023",
  descr:
    "As an Ambassador, I engaged with over 100 prospective students and their families, providing clear and effective communication during campus tours and events. This role strengthened my ability to remain calm under pressure and think quickly in stressful situations. I also collaborated with fellow ambassadors to organize a major welcome event for more than 200 students, honing my skills in teamwork, event planning, and public engagement.",
};

const experience_list = [ukg_exp, seo_exp, ner_exp, oasis_exp, husky_exp];

export default function page() {
  return (
    <main className="flex flex-col h-screen space-y-40">
      <div className="fixed top-0 h-1/5 w-full z-10">
        <NavBar />
      </div>
      <div className="h-4/5 px-10 space-y-4">
        <h1 className="text-3xl">Experience</h1>
        {experience_list.map((exp_dict) => (
          <JobEntries
            date={exp_dict.duration}
            jobTitle={exp_dict.job_title + " @ " + exp_dict.company}
            summary={exp_dict.descr}
          />
        ))}
        <Link
          href="/documents/myresume.pdf"
          target="_blank"
          className="inline-block bg-dark-blueish hover:bg-dark-dark-blueish p-4 rounded-md"
        >
          View Resume
        </Link>
      </div>
    </main>
  );
}
