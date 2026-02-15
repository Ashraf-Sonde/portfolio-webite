'use client';

import { useEffect, useState, useCallback } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Dialog, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  caption: string;
}

interface LightboxProps {
  isOpen: boolean;
  title: string;
  images: LightboxImage[];
  onClose: () => void;
}

export function Lightbox({ isOpen, title, images, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(1);

  const goTo = useCallback((i: number) => {
    setImgOpacity(0);
    setTimeout(() => {
      setIndex(i);
      setImgOpacity(1);
    }, 120);
  }, []);

  const prev = useCallback(() => {
    if (index > 0) goTo(index - 1);
  }, [index, goTo]);
  const next = useCallback(() => {
    if (index < images.length - 1) goTo(index + 1);
  }, [index, images.length, goTo]);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
    setImgOpacity(1);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen || images.length === 0) return null;

  const current = images[index];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPortal>
        <DialogOverlay
          className="bg-black/88 backdrop-blur-sm cursor-default"
          onClick={onClose}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-[50%] top-[50%] z-50 flex flex-col w-full max-w-[820px] max-h-[90vh]',
            'translate-x-[-50%] translate-y-[-50%] rounded-lg border border-border bg-card overflow-hidden',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="flex items-center justify-between px-[18px] py-[14px] flex-shrink-0 border-b border-border">
            <span className="font-mono-tight text-[12px] text-muted-foreground tracking-wide">
              {title}
              <span className="text-muted-foreground/80 ml-2">
                — {current.caption}
              </span>
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-md"
              onClick={onClose}
            >
              ✕
            </Button>
          </div>

          <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-background min-h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.caption}
              className="max-w-full max-h-full object-contain transition-opacity duration-150"
              style={{ opacity: imgOpacity }}
            />

            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              disabled={index === 0}
              className={cn(
                'absolute left-3 top-1/2 -translate-y-1/2 h-[34px] w-[34px] rounded-md z-10 cursor-pointer',
                index === 0 && 'opacity-25 pointer-events-none'
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              disabled={index === images.length - 1}
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 h-[34px] w-[34px] rounded-md z-10 cursor-pointer',
                index === images.length - 1 && 'opacity-25 pointer-events-none'
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <span className="absolute bottom-3 right-[14px] font-mono-tight text-[10px] text-muted-foreground px-2 py-[3px] rounded-full border border-border bg-card">
              {index + 1} / {images.length}
            </span>
          </div>

          <div className="flex gap-2 px-[18px] py-3 border-t border-border overflow-x-auto flex-shrink-0">
            {images.map((img, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={img.src}
                alt={img.caption}
                onClick={() => goTo(i)}
                className={cn(
                  'w-[60px] h-[42px] object-cover rounded-md cursor-pointer flex-shrink-0 transition-all border-2',
                  i === index
                    ? 'border-muted-foreground opacity-100'
                    : 'border-transparent opacity-55 hover:opacity-85'
                )}
              />
            ))}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
