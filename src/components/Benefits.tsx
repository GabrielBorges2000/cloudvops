import { Clock, TrendingUp, Layers, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Redução de Tempo de Deploy',
      description: 'De horas para minutos. Implemente mudanças rapidamente com pipelines automatizados.',
      metric: '90%',
      metricLabel: 'mais rápido',
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Confiabilidade',
      description: 'Testes automatizados, rollback instantâneo e infraestrutura resiliente.',
      metric: '99.9%',
      metricLabel: 'uptime',
    },
    {
      icon: Layers,
      title: 'Escalabilidade Automatizada',
      description: 'Auto-scaling inteligente que se adapta à demanda em tempo real.',
      metric: '10x',
      metricLabel: 'capacidade',
    },
    {
      icon: DollarSign,
      title: 'Redução de Custos',
      description: 'Otimização de recursos cloud e automação reduzem despesas operacionais.',
      metric: '40%',
      metricLabel: 'economia',
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Benefícios <span className="gradient-text">Comprovados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados tangíveis que impactam diretamente seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="glass-effect hover-lift border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold gradient-text">
                    {benefit.metric}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {benefit.metricLabel}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
