import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ScheduleSection } from "@/components/ScheduleSection"
import { PrizesSection } from "@/components/PrizesSection"
import { RegistrationSection } from "@/components/RegistrationSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <PrizesSection />
      <RegistrationSection />
    </div>
  );
};

export default Index;
