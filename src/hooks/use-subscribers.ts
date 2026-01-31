import { useMutation } from "@tanstack/react-query";
import { subscriberSchema, type SubscriberData, type ApiResponse } from "@/types/api";

export function useCreateSubscriber() {
  return useMutation({
    mutationFn: async (data: SubscriberData): Promise<ApiResponse> => {
      // Validate the data
      const validated = subscriberSchema.parse(data);
      
      // For demo purposes, simulate API call
      // In a real app, you would replace this with your actual API endpoint
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulate success
          console.log('Subscriber created:', validated);
          resolve({
            success: true,
            data: { id: Date.now(), ...validated, createdAt: new Date().toISOString() },
            message: 'Successfully subscribed!'
          });
          
          // Uncomment to simulate error:
          // reject(new Error('Failed to subscribe'));
        }, 1000);
      });
    },
  });
}
