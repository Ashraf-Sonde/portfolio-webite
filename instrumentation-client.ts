import posthog from 'posthog-js';

// Only initialize PostHog in production to avoid local development errors
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2026-01-30',
    capture_exceptions: true,
    debug: process.env.NODE_ENV === 'development', 
    // Add error handling
    on_request_error: (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[PostHog] Request failed:', error);
      }
    },
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('[PostHog] Initialized successfully');
      }
    },
  });
}
