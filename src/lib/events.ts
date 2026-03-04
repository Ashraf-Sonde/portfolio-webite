import posthog from 'posthog-js';
import { EVENT_NAMES } from '@/constants';

export type EventName = (typeof EVENT_NAMES)[number];

export type Event = {
  name: EventName;
  properties?: Record<string, string | number | boolean | null>;
};

export function trackEvent(input: Event) {
  posthog.capture(input.name, input.properties);
}
