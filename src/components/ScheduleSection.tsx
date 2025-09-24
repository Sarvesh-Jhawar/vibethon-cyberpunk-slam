import { Calendar, Clock, MapPin, Users } from "lucide-react"

export const ScheduleSection = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        { time: "09:00", title: "Registration & Check-in", icon: Users, type: "primary" },
        { time: "10:00", title: "Opening Ceremony", icon: Calendar, type: "secondary" },
        { time: "11:00", title: "Team Formation & Networking", icon: Users, type: "accent" },
        { time: "12:00", title: "Hacking Begins!", icon: Clock, type: "primary" },
      ]
    },
    {
      day: "Day 2", 
      date: "March 16, 2025",
      events: [
        { time: "09:00", title: "Morning Standup", icon: Users, type: "secondary" },
        { time: "12:00", title: "Mentor Office Hours", icon: MapPin, type: "accent" },
        { time: "18:00", title: "Tech Talks & Workshops", icon: Calendar, type: "primary" },
        { time: "20:00", title: "Mid-Hack Showcase", icon: Clock, type: "secondary" },
      ]
    },
    {
      day: "Day 3",
      date: "March 17, 2025", 
      events: [
        { time: "09:00", title: "Final Sprint", icon: Clock, type: "accent" },
        { time: "12:00", title: "Project Submission", icon: MapPin, type: "primary" },
        { time: "14:00", title: "Final Presentations", icon: Calendar, type: "secondary" },
        { time: "17:00", title: "Awards Ceremony", icon: Users, type: "accent" },
      ]
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-audiowide text-sm uppercase tracking-widest">
              Event Schedule
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-audiowide font-bold mb-6">
            48 Hours of{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pure Innovation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-orbitron">
            A carefully crafted timeline designed to maximize creativity, collaboration, and groundbreaking results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: `${dayIndex * 0.2}s` }}
            >
              {/* Day Header */}
              <div className="glass p-6 rounded-xl text-center">
                <h3 className="text-2xl font-audiowide font-bold text-primary mb-2">
                  {day.day}
                </h3>
                <p className="text-muted-foreground font-orbitron">
                  {day.date}
                </p>
              </div>

              {/* Events Timeline */}
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => {
                  const Icon = event.icon
                  return (
                    <div
                      key={eventIndex}
                      className={`group glass p-4 rounded-lg hover:border-${event.type}/50 transition-all duration-300 cursor-pointer animate-slide-in-left`}
                      style={{ animationDelay: `${dayIndex * 0.2 + eventIndex * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 bg-gradient-to-r from-${event.type} to-${event.type}-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-${event.type}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className={`text-sm font-orbitron text-${event.type} font-bold mb-1`}>
                            {event.time}
                          </div>
                          <div className="font-audiowide text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated Timeline Line */}
                      {eventIndex < day.events.length - 1 && (
                        <div className="ml-5 mt-4 h-8 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-audiowide font-bold mb-4">
              Ready to Code the Future?
            </h3>
            <p className="text-muted-foreground font-orbitron mb-6">
              Join us for an unforgettable journey through the cyberpunk landscape of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-cyberpunk px-8 py-3 rounded-lg font-audiowide text-white hover:scale-105 transition-transform">
                Register Your Team
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-orbitron font-bold transition-all glow-primary">
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}