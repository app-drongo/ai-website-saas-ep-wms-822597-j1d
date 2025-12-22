'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Ready to Optimize Your Workforce?',
  description:
    'Get in touch with our enterprise solutions team to discuss your specific EP WMs requirements.',
  formTitle: 'Contact Our Enterprise Team',
  formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
  contactMethods: [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'enterprise@epwms.com',
      description: 'Send us an email anytime',
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: 'MapPin',
      label: 'Office',
      value: 'San Francisco, CA',
      description: 'Schedule an in-person meeting',
    },
  ],
  features: [
    {
      icon: 'Clock',
      title: '24/7 Support',
      description: 'Round-the-clock enterprise support',
    },
    {
      icon: 'Users',
      title: 'Dedicated Team',
      description: 'Your own customer success manager',
    },
  ],
  submitText: 'Send Message',
  successMessage: "Thank you! We'll be in touch within 24 hours.",
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const getIcon = (iconName: string) => {
    const icons = {
      Mail: Mail,
      Phone: Phone,
      MapPin: MapPin,
      Clock: Clock,
      Users: Users,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Mail;
    return <IconComponent className="h-5 w-5" />;
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable="formDescription">{config.formDescription}</span>
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-primary/10 text-primary p-6 rounded-lg">
                    <Send className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">
                      <span data-editable="successMessage">{config.successMessage}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="6949dacd1126a36a8ce470d9"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="bg-background border-border resize-none"
                      placeholder="Tell us about your workforce management needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {config.contactMethods.map((method, idx) => (
                <Card key={idx} className="bg-muted/50 text-foreground border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        {getIcon(method.icon)}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          <span data-editable={`contactMethods[${idx}].label`}>{method.label}</span>
                        </h4>
                        <p className="text-lg font-medium mb-1">
                          <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span data-editable={`contactMethods[${idx}].description`}>
                            {method.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-accent/50 rounded-lg">
                  <div className="bg-accent text-accent-foreground p-2 rounded-md">
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
