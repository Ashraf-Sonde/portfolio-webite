import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/lib/data';

// Icon imports
import { CodeXml, GraduationCap, DraftingCompass } from 'lucide-react';

// Function to get the icon based on the icon name
export function getIcon(icon: string): React.ReactNode {
  if (icon === 'CodeXml') return React.createElement(CodeXml, { className: 'h-4 w-4' });
  if (icon === 'GraduationCap') return React.createElement(GraduationCap, { className: 'h-4 w-4' });
  if (icon === 'DraftingCompass') return React.createElement(DraftingCompass, { className: 'h-4 w-4' });
  return icon;
}

// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Decode base64-encoded email for display and mailto links. */
export function getEmail(): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(siteConfig.email, 'base64').toString('utf-8');
  }
  return atob(siteConfig.email);
}
