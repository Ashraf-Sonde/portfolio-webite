import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/lib/data';

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