'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'WorkforceMax',
  brandTagline: 'Enterprise WM Solutions',
  ctaText: 'Get Started',
  ctaHref: '#contact',
  navigationItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
    setIsOpen(false);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg font-bold text-foreground leading-none"
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground leading-none"
                data-editable="brandTagline"
              >
                {config.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {config.navigationItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    data-editable-href={`navigationItems[${idx}].href`}
                    data-href={item.href}
                  >
                    <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background border-border w-[300px] sm:w-[400px]"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="text-lg font-bold text-foreground leading-none"
                          data-editable="brandName"
                        >
                          {config.brandName}
                        </span>
                        <span
                          className="text-xs text-muted-foreground leading-none"
                          data-editable="brandTagline"
                        >
                          {config.brandTagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <ul className="space-y-4">
                      {config.navigationItems.map((item, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className="w-full text-left py-3 px-4 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors duration-200 font-medium"
                            data-editable-href={`navigationItems[${idx}].href`}
                            data-href={item.href}
                          >
                            <span data-editable={`navigationItems[${idx}].label`}>
                              {item.label}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
