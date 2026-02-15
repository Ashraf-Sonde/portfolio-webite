'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { SectionLabel } from '@/components/ui/section-label';
import { ProjectCard, type Screenshot } from '@/components/ui/project-card';
import { Lightbox } from '@/components/ui/lightbox';

export function Projects() {
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    title: string;
    images: Screenshot[];
  }>({ open: false, title: '', images: [] });

  function openLightbox(title: string, images: Screenshot[]) {
    setLightbox({ open: true, title, images });
  }

  return (
    <section id="projects" className="py-[60px]">
      <div className="max-w-content mx-auto px-6">
        <SectionLabel>Projects ({projects.length})</SectionLabel>

        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              title={project.title}
              tagline={project.tagline}
              defaultOpen={project.defaultOpen}
              github={project.github}
              bullets={project.bullets}
              tags={project.tags}
              screenshots={project.screenshots}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightbox.open}
        title={lightbox.title}
        images={lightbox.images}
        onClose={() => setLightbox((lb) => ({ ...lb, open: false }))}
      />
    </section>
  );
}
