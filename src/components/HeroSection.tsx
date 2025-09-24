import { Button } from "@/components/ui/cyberpunk-button"
import { ArrowRight, Zap } from "lucide-react"
import robotMascot from "@/assets/robot-mascot.png"

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 cyberpunk-grid opacity-30"></div>
      
      {/* Floating Binary Code */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-xs font-mono animate-binary-rain"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '1' : '0'}
                {Math.random() > 0.5 ? '1' : '0'}
                <br />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-audiowide text-sm uppercase tracking-widest animate-glow-pulse">
                  <Zap className="inline w-4 h-4 mr-2" />
                  Hackathon 2025
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-audiowide font-bold leading-tight">
                Join{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
                  VibeThon
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                  Where Innovation Meets the Future!
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-orbitron">
                The ultimate cyberpunk hackathon where students and tech enthusiasts 
                create revolutionary solutions in a high-energy, neon-fueled environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="neon" 
                size="xl"
              >
                Learn More
              </Button>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { label: "Date", value: "March 15-17, 2025" },
                { label: "Duration", value: "48 Hours" },
                { label: "Prize Pool", value: "$50,000+" },
              ].map((item, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-sm text-muted-foreground font-orbitron uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-lg font-audiowide text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Robot Mascot */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={robotMascot}
                alt="VibeThon Robot Mascot"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float glow-primary"
              />
              
              {/* Floating Holographic Elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 border border-primary/30 rounded-lg glass animate-rotate-slow"></div>
              <div className="absolute bottom-10 -left-10 w-16 h-16 border border-accent/30 rounded-full glass animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-20 w-12 h-12 border border-secondary/30 glass animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}