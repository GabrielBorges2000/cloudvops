import { Search, Calendar, Rocket, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Análise',
      description: 'Avaliamos sua infraestrutura atual, identificamos gargalos e oportunidades de melhoria.',
    },
    {
      icon: Calendar,
      title: 'Planejamento',
      description: 'Desenhamos a arquitetura ideal, definimos tecnologias e criamos roadmap detalhado.',
    },
    {
      icon: Rocket,
      title: 'Implementação',
      description: 'Desenvolvemos pipelines, configuramos infraestrutura e migramos aplicações com zero downtime.',
    },
    {
      icon: BarChart3,
      title: 'Monitoramento',
      description: 'Acompanhamos métricas, otimizamos performance e garantimos disponibilidade 24/7.',
    },
  ];

  return (
    <section id="processo" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Processo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Metodologia ágil e comprovada para transformação DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0"></div>
              )}

              <div className="relative text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">Etapa {index + 1}</div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
