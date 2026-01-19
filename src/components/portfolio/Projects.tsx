import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'HappyPath',
    description:
      'Designed clean, user-friendly UI layouts and structured documentation explaining user flow and features.',
    tags: ['UI Design', 'Documentation', 'User Flow'],
    links: {
      demo: 'https://www.figma.com',
      code: null,
    },
  },
  {
    title: 'Disaster Management & Prediction System',
    description:
      'Designed visual components and created structured documentation for communicating system features and flow.',
    tags: ['Visual Design', 'System Design', 'Documentation'],
    links: {
      demo: 'https://india-safe-zone-sync-26-git-main-madhus-projects-599baa0c.vercel.app',
      code: null,
    },
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing my design work and projects. Built with modern web technologies.',
    tags: ['Web Design', 'HTML/CSS', 'Responsive'],
    links: {
      demo: null,
      code: 'https://github.com',
    },
  },
];

export function Projects() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const isValidLink = (link?: string | null) =>
    typeof link === 'string' && link.length > 0;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Folder className="w-16 h-16 text-muted-foreground" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" disabled={!isValidLink(project.links.code)}>
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>

                  <Button variant="ghost" size="sm" disabled={!isValidLink(project.links.demo)}>
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
