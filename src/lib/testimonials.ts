import type { Testimonial } from './types';
import { testimonials } from './content/testimonials';

export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  return typeof limit === 'number' ? testimonials.slice(0, limit) : testimonials;
}
