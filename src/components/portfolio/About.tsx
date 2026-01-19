import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profileImage from '../../assets/profile.jpeg';

export function About() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* PROFILE PHOTO */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full gradient-bg p-1">
                <img
                  src={profileImage}
                  alt="Meghavath Madhu Nandana"
                  className="w-full h-full rounded-full object-cover bg-card"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">✨</span>
              </div>
            </div>

            {/* Description */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Computer Science Student & Creative Designer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science student with strong skills in UI design, visual layout,
                documentation, and frontend basics (HTML/CSS). I'm passionate about creating
                clean, user-friendly interfaces that blend aesthetics with functionality.
                My approach combines design thinking with technical knowledge to deliver
                intuitive digital experiences.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
