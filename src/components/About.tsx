import { Award, Users, Target } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'GCP', icon: '🌐' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'GitLab CI', icon: '🦊' },
    { name: 'GitHub Actions', icon: '⚡' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Prometheus', icon: '📊' },
    { name: 'Grafana', icon: '📈' },
    { name: 'ArgoCD', icon: '🚀' },
  ];

  const stats = [
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
    { icon: Users, value: '50+', label: 'Projetos Entregues' },
    { icon: Target, value: '98%', label: 'Satisfação Cliente' },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre a <span className="gradient-text">CloudVops</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos especialistas em DevOps com foco em resultados. Nossa missão é transformar 
            a forma como empresas desenvolvem e entregam software, implementando práticas de 
            automação, monitoramento e infraestrutura escalável.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-effect rounded-2xl p-8 hover-lift"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Tecnologias que <span className="gradient-text">Dominamos</span>
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-4 text-center hover-lift group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
