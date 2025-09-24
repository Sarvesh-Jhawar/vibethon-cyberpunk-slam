import { Trophy, Star, Gift, Zap } from "lucide-react"

export const PrizesSection = () => {
  const prizes = [
    {
      rank: "1st Place",
      title: "Grand Prize",
      amount: "$25,000",
      icon: Trophy,
      color: "primary",
      perks: [
        "Cash Prize: $25,000",
        "Exclusive Internship Opportunities", 
        "Mentorship Program Access",
        "Tech Conference Speaking Slot"
      ]
    },
    {
      rank: "2nd Place", 
      title: "Runner Up",
      amount: "$15,000",
      icon: Star,
      color: "secondary",
      perks: [
        "Cash Prize: $15,000",
        "Premium Tech Gear Package",
        "Industry Networking Event Access",
        "Open Source Project Sponsorship"
      ]
    },
    {
      rank: "3rd Place",
      title: "Third Place", 
      amount: "$10,000",
      icon: Gift,
      color: "accent",
      perks: [
        "Cash Prize: $10,000",
        "Latest Development Tools",
        "Career Development Workshop",
        "GitHub Pro Account (1 Year)"
      ]
    }
  ]

  const specialPrizes = [
    { title: "Best AI Innovation", amount: "$5,000", icon: "🤖" },
    { title: "Most Creative Design", amount: "$3,000", icon: "🎨" },
    { title: "People's Choice", amount: "$2,000", icon: "❤️" },
    { title: "Best Beginner Project", amount: "$1,000", icon: "🌟" }
  ]

  const sponsors = [
    "TechCorp", "InnovateLabs", "CyberSoft", "FutureCode", 
    "NextGen Solutions", "AI Dynamics", "CloudVerse", "CodeForge"
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-audiowide text-sm uppercase tracking-widest">
              <Zap className="inline w-4 h-4 mr-2" />
              Prizes & Rewards
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-audiowide font-bold mb-6">
            Epic{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Rewards
            </span>{" "}
            Await
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-orbitron">
            Compete for substantial cash prizes, exclusive opportunities, and cutting-edge tech gear 
            that will accelerate your journey into the future of technology.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => {
            const Icon = prize.icon
            return (
              <div
                key={index}
                className={`relative group glass p-8 rounded-2xl hover:border-${prize.color}/50 transition-all duration-500 animate-fade-in glow-${prize.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Floating Treasure Effect */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-${prize.color} to-${prize.color}-glow rounded-full animate-float`} style={{ animationDelay: `${index * 0.3}s` }}></div>
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${prize.color} to-${prize.color}-glow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-${prize.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-sm font-orbitron text-${prize.color} uppercase tracking-widest mb-2`}>
                    {prize.rank}
                  </h3>
                  
                  <h4 className="text-2xl font-audiowide font-bold mb-2">
                    {prize.title}
                  </h4>
                  
                  <div className={`text-4xl font-audiowide font-bold bg-gradient-to-r from-${prize.color} to-${prize.color}-glow bg-clip-text text-transparent`}>
                    {prize.amount}
                  </div>
                </div>

                <div className="space-y-3">
                  {prize.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-${prize.color} rounded-full animate-pulse`}></div>
                      <span className="text-muted-foreground font-orbitron text-sm">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Special Category Prizes */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-audiowide font-bold text-center mb-8">
            Special Category{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Awards
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((prize, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover:border-accent/50 transition-all duration-300 text-center animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{prize.icon}</div>
                <h4 className="font-audiowide font-bold mb-2">{prize.title}</h4>
                <div className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-audiowide font-bold text-center mb-8">
            Powered by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Innovation Leaders
            </span>
          </h3>
          
          <div className="glass p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="text-center font-orbitron font-bold text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}