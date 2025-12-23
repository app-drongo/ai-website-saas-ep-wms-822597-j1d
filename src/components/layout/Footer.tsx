'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'WorkforceMax',
  tagline: 'Enterprise-grade workforce management solutions that scale with your business growth',
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { platform: 'Twitter', href: 'https://twitter.com/workforcemax', icon: 'twitter' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/workforcemax', icon: 'linkedin' },
  ],
  copyright: '© 2024 WorkforceMax. All rights reserved.',
  description:
    'Streamline your workforce operations with our comprehensive SaaS platform designed for modern enterprises.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return <Twitter className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-md">
                <span data-editable="description">{config.description}</span>
              </p>
              <p className="text-xs text-muted-foreground/80 max-w-lg">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <nav className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <div key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <nav className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <div key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => handleLinkClick(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                  aria-label={`Follow us on ${social.platform}`}
                >
                  {renderSocialIcon(social.icon)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
