import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useToast } from "@/hooks/use-toast";
import { Send, Twitter, Github, Bot } from "lucide-react";
import { CyberButton } from "./CyberButton";

export function Footer() {
  const { toast } = useToast();
  const { mutate, isPending } = useCreateSubscriber();
  
  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Access Granted",
          description: "You have been added to the secure channel.",
          className: "bg-black border-primary text-primary font-mono",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Access Denied",
          description: error.message,
        });
      }
    });
  };

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-6">
              STAY <span className="text-primary text-glow-cyan">CONNECTED</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-md font-mono">
              Follow our updates and be part of the journey. Join the resistance against inefficient markets.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://t.me/shantiAIwealth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:border-primary hover:bg-primary/10 transition-all group clip-corner-br"
              >
                <div className="p-2 bg-primary/20 rounded-sm">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Join Channel</div>
                  <div className="text-white font-bold group-hover:text-primary transition-colors">Telegram</div>
                </div>
              </a>

              <a 
                href="https://t.me/sshanti_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 hover:border-accent hover:bg-accent/10 transition-all group clip-corner-br"
              >
                <div className="p-2 bg-accent/20 rounded-sm">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono uppercase">Start Bot</div>
                  <div className="text-white font-bold group-hover:text-accent transition-colors">@sshanti_bot</div>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-12">
            <div className="bg-white/5 border border-white/10 p-8 clip-corner-tl-br">
              <h4 className="text-xl font-display font-bold text-white mb-2">System Updates</h4>
              <p className="text-sm text-gray-400 mb-6 font-mono">Subscribe to receive high-priority signals.</p>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all font-mono text-sm"
                  />
                </div>
                <CyberButton 
                  type="submit" 
                  className="w-full" 
                  isLoading={isPending}
                >
                  Subscribe
                </CyberButton>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-gray-600">
            © 2024 SHANTI.AI // SYSTEM_ONLINE
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
