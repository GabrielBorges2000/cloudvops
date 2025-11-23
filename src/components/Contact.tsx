import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    console.log({ data: formData });

    // Here you would typically send the data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    { icon: Phone, label: "Telefone", value: "+55 (11) 98623-7504" },
    { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforme sua infraestrutura hoje. Solicite um orçamento sem
            compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Por que escolher a CloudVops?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Equipe especializada em DevOps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Soluções customizadas para seu negócio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Suporte contínuo e monitoramento 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Resultados mensuráveis e comprovados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome *</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Seu nome"
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seu@email.com"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Sua empresa"
                  className="bg-background/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="(11) 99999-9999"
                  className="bg-background/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Serviço de Interesse
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cicd">CI/CD & Pipelines</SelectItem>
                  <SelectItem value="kubernetes">Kubernetes</SelectItem>
                  <SelectItem value="terraform">Terraform & IaC</SelectItem>
                  <SelectItem value="cloud">Cloud Architecture</SelectItem>
                  <SelectItem value="monitoring">
                    Monitoring & Observability
                  </SelectItem>
                  <SelectItem value="security">Security & DevSecOps</SelectItem>
                  <SelectItem value="consultoria">Consultoria Geral</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mensagem *
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Conte-nos sobre seu projeto..."
                rows={5}
                required
                className="bg-background/50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Enviar Mensagem
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
