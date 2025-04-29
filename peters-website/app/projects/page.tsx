import NavBar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const dnsServer = {
  src: "images/recurse_dns_image.png",
  target_link: "https://github.com/jackmitchellNU/p6-4700-peterjack",
  target_name: "DNS Server",
  private_repo: true,
  descr:
    "Designed and implemented a secure recursive DNS server in Python, functioning as both an authoritative nameserver and a resolver for local clients. Focused on enforcing strict TTL management, glue record handling, and cache expiration to ensure DNS response integrity and mitigate security vulnerabilities.",
};
const proxmoxServer = {
  src: "images/virtualization_image.png",
  target_link:
    "https://cooing-homegrown-d0e.notion.site/Proxmox-Project-Public-1e45a45f557480799a83c68748bc36d4?pvs=4",
  target_name: "Proxmox Virtualization",
  private_repo: false,
  descr:
    "Repurposed an old laptop by installing Proxmox to create a full virtualization environment hosting multiple VMs, including Immich (photo storage), Jellyfin (media server), Kali (security testing), and Fedora (secure enclave simulation). Set up SSH access for terminal management alongside the web UI and developed a custom Bash script for battery monitoring and uptime protection.",
};
const miniShell = {
  src: "images/shell_image.png",
  target_link: "https://github.khoury.northeastern.edu/pmoise/Project1-p-an",
  target_name: "Mini Shell",
  private_repo: true,
  descr:
    "Built a lightweight mini shell in C, supporting basic command-line functionality along with built-in commands like cd, help, source, and prev. Added support for command sequencing using semicolons to allow multiple commands in a single input line.",
};
const charityBoard = {
  src: "images/charity.png",
  target_link: "https://github.com/RajinCoder/Charity-Board-Revamped-",
  target_name: "Charity Board",
  private_repo: false,
  descr:
    "Developed a web platform aimed at improving communication between charities and donors, allowing charities to post specific needs and avoid unnecessary donations. Built using Next.js, Tailwind CSS, React, TypeScript, and PostgreSQL for a scalable and responsive experience.",
};
const zone = {
  src: "images/zone.png",
  target_link:
    "https://chromewebstore.google.com/detail/zone/lehhdgfjlffdogjabdjiphokobkcacmg",
  target_name: "Zone Extension",
  private_repo: false,
  descr:
    "Developed a Chrome extension that displays over 30 selectable time zones, preserving user preferences across sessions using local storage. The extension maintains a consistent 5-star rating on the Chrome Web Store with over a 50% user retention rate.",
};
const bgpRouter = {
  src: "images/bgp_router_image.png",
  target_link: "https://github.com/RajinCoder/bgp-router_peter_jack",
  target_name: "BGP Router Simulator",
  private_repo: true,
  descr:
    "Developed a simplified BGP router in Python to simulate core internet routing within a custom network environment. Built forwarding tables with longest-prefix matching and route aggregation for efficient packet forwarding. Implemented route selection based on localpref, ASPath, and origin attributes, with dynamic table updates. Handled route updates, packet forwarding, and table dumps using non-blocking sockets and select(). Gained hands-on experience in IP subnetting, routing policies, and BGP fundamentals.",
};
const fairShare = {
  src: "images/fairshare.png",
  target_link: "https://github.com/Oasis-NEU/f23-group04#readme",
  target_name: "FairShare App",
  private_repo: false,
  descr:
    "Collaborating within a team of four, I contributed to crafting a bill-splitting app, streamlining payments after social outings. My primary focus involved shaping the app's design and refining its route navigation for enhanced usability.",
};
const projects_list = [
  proxmoxServer,
  dnsServer,
  bgpRouter,
  charityBoard,
  miniShell,
  zone,
  fairShare,
];
export default function page() {
  return (
    <main className="flex flex-col h-screen space-y-40">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <div className="h-4/5 px-10 space-y-4">
        <h1 className="text-3xl">Projects</h1>
        <div className="flex flex-wrap gap-6 lg:justify-between justify-center">
          {projects_list.map((project) => (
            <ProjectCard
              key={project.target_name}
              imageSrc={project.src}
              targetSection={project.target_link}
              targetName={project.target_name}
              message={project.descr}
              privateRepo={project.private_repo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
