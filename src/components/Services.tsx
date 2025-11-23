import { GitBranch, Box, FileCode, Cloud, Activity, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD & Pipelines',
      description: 'Automação completa de deploy, integração contínua e esteiras de entrega. GitLab CI, Jenkins, GitHub Actions.',
      features: ['Automação de Testes', 'Deploy Automatizado', 'Rollback Instantâneo'],
    },
    {
      icon: Box,
      title: 'Kubernetes',
      description: 'Orquestração de containers, escalabilidade automática e alta disponibilidade para suas aplicações.',
      features: ['Auto-scaling', 'Service Mesh', 'Helm Charts'],
    },
    {
      icon: FileCode,
      title: 'Terraform & IaC',
      description: 'Infraestrutura como código, provisionamento automatizado e gestão de recursos cloud.',
      features: ['Multi-Cloud', 'State Management', 'Módulos Reutilizáveis'],
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Arquiteturas escaláveis em AWS, Azure e GCP. Design resiliente e cost-effective.',
      features: ['Serverless', 'Microserviços', 'CDN & Edge'],
    },
    {
      icon: Activity,
      title: 'Monitoring & Observability',
      description: 'Prometheus, Grafana, alertas inteligentes e dashboards customizados para visibilidade total.',
      features: ['Métricas em Tempo Real', 'Logs Centralizados', 'Alertas Inteligentes'],
    },
    {
      icon: Shield,
      title: 'Security & DevSecOps',
      description: 'Segurança integrada ao pipeline. Scan de vulnerabilidades, compliance e políticas automatizadas.',
      features: ['SAST/DAST', 'Compliance', 'Secret Management'],
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Serviços <span className="gradient-text">DevOps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas de automação e infraestrutura para acelerar seu desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass-effect hover-lift border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
