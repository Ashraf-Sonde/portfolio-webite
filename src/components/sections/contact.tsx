'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/data';
import { getEmail } from '@/lib/utils';
import { SectionLabel } from '@/components/ui/section-label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Github, Mail } from 'lucide-react';
import { trackEvent } from '@/lib/events';

function urlDisplay(url: string): string {
  try {
    const u = new URL(url);
    return `${u.host}${u.pathname.replace(/\/$/, '')}`;
  } catch {
    return url;
  }
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;
    const form = e.currentTarget;
    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      const body = new URLSearchParams(
        Array.from(formData.entries()) as [string, string][]
      ).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      });
      if (res.ok) {
        setIsSubmitted(true);
        trackEvent({ name: 'contact_form_submitted', properties: {} });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Contact</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[20px] font-semibold tracking-[-0.02em] mb-[10px] text-foreground">
              Let&apos;s work together
            </h3>
            <p className="text-[14px] text-justify text-muted-foreground mb-6">
              Open to senior/staff backend roles, platform engineering, and
              founding engineer opportunities. Remote-first. Drop me a line.
            </p>

            <div className="flex flex-col gap-2">
              <Button
                asChild
                className="justify-start h-auto py-2 px-3 font-mono-tight text-[13px] bg-card bg-amber-500 hover:bg-amber-500/90 text-black"
              >
                <a
                  href={`mailto:${getEmail()}`}
                  onClick={() =>
                    trackEvent({
                      name: 'contact_email_clicked',
                      properties: {
                        email: getEmail(),
                      },
                    })
                  }
                >
                  <span className="text-[15px] mr-2">
                    <Mail />
                  </span>
                  {getEmail()}
                </a>
              </Button>
              <Button
                asChild
                className="font-mono-tight text-[13px] h-11 w-full sm:h-9 sm:w-auto sm:px-4 rounded-md justify-start"
              >
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      name: 'contact_social_clicked',
                      properties: {
                        platform: 'github',
                        url: siteConfig.github,
                      },
                    })
                  }
                >
                  <Github className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                  <span className="truncate">
                    {urlDisplay(siteConfig.github)}
                  </span>
                </a>
              </Button>
              <Button
                className="justify-start h-auto py-2 px-3 font-mono-tight text-[13px] bg-[#0d65c3] text-white hover:bg-[#0a54a0]"
                asChild
              >
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      name: 'contact_social_clicked',
                      properties: {
                        platform: 'linkedin',
                        url: siteConfig.linkedin,
                      },
                    })
                  }
                >
                  <span className="text-[15px] mr-2">in</span>
                  {urlDisplay(siteConfig.linkedin)}
                </a>
              </Button>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col gap-[10px]"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="flex gap-[10px]">
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="contact-name"
                  className="font-mono-tight text-[12px] uppercase tracking-[0.06em] text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="font-mono-tight text-[13px] h-9 rounded-md bg-card"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label
                  htmlFor="contact-email"
                  className="font-mono-tight text-[12px] uppercase tracking-[0.06em] text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="font-mono-tight text-[13px] h-9 rounded-md bg-card"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="contact-message"
                className="font-mono-tight text-[12px] uppercase tracking-[0.06em] text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="What are you working on?"
                rows={4}
                required
                className="font-mono-tight text-[13px] min-h-[100px] rounded-md bg-card resize-y"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="self-start font-mono-tight text-[12px] h-9 px-4 rounded-md"
            >
              {isSubmitted ? (
                <>
                  <Check className="h-3.5 w-3.5 shrink-0" />
                  Submitted
                </>
              ) : isSubmitting ? (
                'Sending…'
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
