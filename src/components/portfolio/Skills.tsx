import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Palette, 
  Layout, 
  Eye, 
  Code, 
  FileCode, 
  Users,
  Lightbulb,
  Wrench
} from 'lucide-react';

const skills = [
  { name: 'UI Design', icon: Layout, color: 'from-blue-500 to-cyan-500' },
  { name: 'Graphic Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Visual Design', icon: Eye, color: 'from-orange-500 to-yellow-500' },
  { name: 'HTML', icon: Code, color: 'from-red-500 to-orange-500' },
  { name: 'CSS', icon: FileCode, color: 'from-blue-600 to-blue-400' },
  { name: 'Basic UX', icon: Users, color: 'from-green-500 to-emerald-500' },
  { name: 'Design Thinking', icon: Lightbulb, color: 'from-yellow-500 to-amber-500' },
  { name: 'VS Code, Canva, Figma', icon: Wrench, color: 'from-indigo-500 to-purple-500' },
];

export function Skills() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <p className="font-medium text-sm text-foreground">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
