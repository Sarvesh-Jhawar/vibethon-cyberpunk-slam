import { Code, Users, Trophy, Rocket } from "lucide-react"

export const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Innovative Coding",
      description: "Push the boundaries of technology with cutting-edge development challenges and next-gen tools.",
    },
    {
      icon: Users,
      title: "Epic Community",
      description: "Connect with brilliant minds from universities worldwide in our vibrant tech ecosystem.",
    },
    {
      icon: Trophy,
      title: "Massive Rewards",
      description: "Compete for substantial prizes, internship opportunities, and exclusive tech partnerships.",
    },
    {
      icon: Rocket,
      title: "Future Focus",
      description: "Build tomorrow's solutions today with AI, blockchain, AR/VR, and emerging technologies.",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-audiowide text-sm uppercase tracking-widest">
              About VibeThon
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-audiowide font-bold mb-6">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-orbitron leading-relaxed">
            VibeThon 2025 isn't just another hackathon – it's a cyberpunk celebration where 
            the most brilliant minds converge to create revolutionary technology that will 
            shape our digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-audiowide font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground font-orbitron leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2000+", label: "Participants" },
              { number: "48", label: "Hours of Coding" },
              { number: "$50K+", label: "Prize Pool" },
              { number: "100+", label: "Mentors & Judges" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-audiowide font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-orbitron uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}