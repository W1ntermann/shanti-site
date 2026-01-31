import { useMutation } from "@tanstack/react-query";
import { contactSchema, type ContactData, type ApiResponse } from "@/types/api";

export function useCreateContact() {
  return useMutation({
    mutationFn: async (data: ContactData): Promise<ApiResponse> => {
      // Validate the data
      const validated = contactSchema.parse(data);
      
      // For demo purposes, simulate API call
      // In a real app, you would replace this with your actual API endpoint
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate success
          console.log('Contact message sent:', validated);
          resolve({
            success: true,
            data: { id: Date.now(), ...validated, createdAt: new Date().toISOString() },
            message: 'Message sent successfully!'
          });
          
          // Uncomment to simulate error:
          // reject(new Error('Failed to send message'));
        }, 1000);
      });
    },
  });
}
