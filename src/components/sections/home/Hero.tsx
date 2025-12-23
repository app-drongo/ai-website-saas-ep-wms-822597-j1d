'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Transform Your Enterprise Workforce Management',
  subheadline:
    'Streamline operations, optimize productivity, and reduce costs with our AI-powered EP WMs platform designed for modern enterprises.',
  ctaText: 'Start Free Trial',
  ctaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
  heroImageAlt: 'Modern enterprise dashboard preview showing workforce analytics',
  socialProofText: 'Trusted by 500+ enterprise clients worldwide',
  keyBenefits: [
    '40% reduction in operational overhead',
    'Real-time workforce analytics',
    'Enterprise-grade security & compliance',
  ],
  statsLabel: 'Enterprise Ready',
  features: [
    { icon: 'TrendingUp', title: 'AI-Powered Analytics', description: 'Real-time insights' },
    { icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 compliant' },
    { icon: 'Users', title: 'Scalable Platform', description: 'Grows with you' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryCTA = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCTA = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    const icons = {
      TrendingUp: TrendingUp,
      Shield: Shield,
      Users: Users,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || TrendingUp;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <span data-editable="statsLabel">{config.statsLabel}</span>
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="headline">{config.headline}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {config.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground" data-editable={`keyBenefits[${idx}]`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
                onClick={handlePrimaryCTA}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                onClick={handleSecondaryCTA}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span data-editable="socialProofText">{config.socialProofText}</span>
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <Card className="bg-card border-border shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-editable-src="heroImageUrl"
                    priority
                  />
                </CardContent>
              </Card>

              {/* Floating Feature Cards */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block">
                <Card className="bg-card border-border shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      {getIcon(config.features[0].icon)}
                      <div>
                        <p className="font-semibold text-sm">
                          <span data-editable="features[0].title">{config.features[0].title}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <span data-editable="features[0].description">
                            {config.features[0].description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -top-6 -right-6 hidden lg:block">
                <Card className="bg-card border-border shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      {getIcon(config.features[1].icon)}
                      <div>
                        <p className="font-semibold text-sm">
                          <span data-editable="features[1].title">{config.features[1].title}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <span data-editable="features[1].description">
                            {config.features[1].description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Row - Mobile Visible */}
        <div className="mt-16 lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {config.features.map((feature, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    {getIcon(feature.icon)}
                    <div>
                      <p className="font-semibold text-sm">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span data-editable={`features[${idx}].description`}>
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
