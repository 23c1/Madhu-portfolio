import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Code, FileCode, Trophy, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Programming in C',
    issuer: 'Cisco',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    certificateUrl: 'https://drive.google.com/file/d/1gyy0jVrRrDy4LtkhWyPUH1sMzVvt2LfK/view?usp=drive_link', // Replace with actual certificate URL
  },
  {
    title: 'Programming in C++',
    issuer: 'Cisco',
    icon: FileCode,
    color: 'from-purple-500 to-pink-500',
    certificateUrl: 'https://drive.google.com/file/d/1JPJFWNzo3omO-BJ7UEmp0NMDoeqGAFoL/view?usp=drive_link', // Replace with actual certificate URL
  },
  {
    title: 'Advanced HTML and CSS Training',
    issuer: 'Springboard',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    certificateUrl: 'https://drive.google.com/file/d/19_Y57XHpdgNeD-KOSvi_DiOQH2gvMfgb/view?usp=drive_link', // Replace with actual certificate URL
  },
  {
    title: 'District-level Martial Arts',
    issuer: 'Sports Certificate',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-500',
    certificateUrl: null, // No online certificate available
  },
];

export function Certifications() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const handleCertClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>

        <div
          ref={ref}
          className="space-y-4"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const isClickable = !!cert.certificateUrl;
            
            return (
              <div
                key={cert.title}
                onClick={() => handleCertClick(cert.certificateUrl)}
                className={`glass-card rounded-xl p-6 flex items-center gap-6 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } ${
                  isClickable 
                    ? 'cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:bg-white/10 dark:hover:bg-white/5' 
                    : 'cursor-default'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${cert.color} p-3`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                {isClickable && (
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8">
          Click on a certification to view the certificate
        </p>
      </div>
    </section>
  );
}
