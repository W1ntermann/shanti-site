import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Імпорт файлу конфігурації i18n
import "./lib/i18n"; 
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n"; // Імпортуйте ваш сконфігурований i18n інстанс


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const updateDocumentDirection = (lng: string) => {
      document.documentElement.dir = i18n.dir(lng);
      document.documentElement.lang = lng;
    };

    updateDocumentDirection(i18n.language);
    i18n.on("languageChanged", updateDocumentDirection);

    return () => {
      i18n.off("languageChanged", updateDocumentDirection);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}> {/* Оберніть додаток в I18nextProvider */}
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}

export default App;
