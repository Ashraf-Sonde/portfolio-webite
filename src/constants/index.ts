export const EVENT_NAMES = [
  'contact_email_clicked',
  'contact_social_clicked',
  'contact_form_submitted',
  'hero_cta_clicked',
  'theme_toggled',
  'nav_section_clicked',
  'project_expanded',
  'project_website_clicked',
  'project_github_clicked',
  'project_screenshots_viewed',
] as const;

export const navItems = [
  { label: 'About', id: '#about', section: 'about' },
  { label: 'Work', id: '#experience', section: 'experience' },
  { label: 'Projects', id: '#projects', section: 'projects' },
  { label: 'Skills', id: '#skills', section: 'skills' },
  { label: 'Contact', id: '#contact', section: 'contact' },
] as const;
