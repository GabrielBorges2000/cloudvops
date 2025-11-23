import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-devops.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DevOps Infrastructure"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Transformação DevOps</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
            Acelere Seus Deploys com{' '}
            <span className="gradient-text">Automação Inteligente</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            A CloudVops transforma sua infraestrutura com CI/CD, Kubernetes e Terraform. 
            Reduzimos tempo de deploy em até 90% com pipelines automatizados e arquitetura cloud escalável.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '90%', label: 'Redução de Deploy' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'Projetos' },
              { value: '24/7', label: 'Suporte' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
