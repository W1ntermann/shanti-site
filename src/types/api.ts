import { z } from 'zod';

// Schemas for form validation
export const subscriberSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required'),
});

// Types
export type SubscriberData = z.infer<typeof subscriberSchema>;
export type ContactData = z.infer<typeof contactSchema>;

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  field?: string;
}