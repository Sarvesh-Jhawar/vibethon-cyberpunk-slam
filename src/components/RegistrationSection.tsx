import { useState } from "react"
import { Button } from "@/components/ui/cyberpunk-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, School, Users, Code, Send } from "lucide-react"

export const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    university: "",
    experience: "",
    teamSize: "",
    skills: "",
    idea: "",
    terms: false,
    updates: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="cyberpunk-grid absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent font-audiowide text-sm uppercase tracking-widest">
              <Send className="inline w-4 h-4 mr-2" />
              Join the Revolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-audiowide font-bold mb-6">
            Register for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              VibeThon 2025
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-orbitron">
            Secure your spot in the most electrifying hackathon of the year. 
            Limited seats available for this cyberpunk coding adventure.
          </p>
        </div>

        {/* Registration Form */}
        <div className="glass p-8 md:p-12 rounded-3xl animate-slide-in-left">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-orbitron font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="glass border-primary/30 focus:border-primary focus:ring-primary bg-card/50 text-foreground placeholder:text-muted-foreground font-orbitron"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-orbitron font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="glass border-primary/30 focus:border-primary focus:ring-primary bg-card/50 text-foreground placeholder:text-muted-foreground font-orbitron"
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="university" className="text-foreground font-orbitron font-bold flex items-center gap-2">
                  <School className="w-4 h-4 text-secondary" />
                  University/Institution
                </Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => handleChange('university', e.target.value)}
                  className="glass border-primary/30 focus:border-secondary focus:ring-secondary bg-card/50 text-foreground placeholder:text-muted-foreground font-orbitron"
                  placeholder="Your university name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-orbitron font-bold flex items-center gap-2">
                  <Code className="w-4 h-4 text-secondary" />
                  Experience Level
                </Label>
                <Select value={formData.experience} onValueChange={(value) => handleChange('experience', value)}>
                  <SelectTrigger className="glass border-primary/30 focus:border-secondary focus:ring-secondary bg-card/50 text-foreground font-orbitron">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent className="glass border-primary/30 bg-card text-foreground">
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-3 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (4+ years)</SelectItem>
                    <SelectItem value="expert">Expert (Professional)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-orbitron font-bold flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                Team Preference
              </Label>
              <Select value={formData.teamSize} onValueChange={(value) => handleChange('teamSize', value)}>
                <SelectTrigger className="glass border-primary/30 focus:border-accent focus:ring-accent bg-card/50 text-foreground font-orbitron">
                  <SelectValue placeholder="How do you want to participate?" />
                </SelectTrigger>
                <SelectContent className="glass border-primary/30 bg-card text-foreground">
                  <SelectItem value="solo">Solo Hacker</SelectItem>
                  <SelectItem value="duo">Duo Team (2 people)</SelectItem>
                  <SelectItem value="small">Small Team (3-4 people)</SelectItem>
                  <SelectItem value="large">Large Team (5+ people)</SelectItem>
                  <SelectItem value="find">Help me find a team</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className="text-foreground font-orbitron font-bold">
                Technical Skills & Interests
              </Label>
              <Textarea
                id="skills"
                value={formData.skills}
                onChange={(e) => handleChange('skills', e.target.value)}
                className="glass border-primary/30 focus:border-primary focus:ring-primary bg-card/50 text-foreground placeholder:text-muted-foreground font-orbitron min-h-20"
                placeholder="e.g., React, Python, AI/ML, Blockchain, UI/UX, Mobile Development..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idea" className="text-foreground font-orbitron font-bold">
                Project Ideas (Optional)
              </Label>
              <Textarea
                id="idea"
                value={formData.idea}
                onChange={(e) => handleChange('idea', e.target.value)}
                className="glass border-primary/30 focus:border-accent focus:ring-accent bg-card/50 text-foreground placeholder:text-muted-foreground font-orbitron min-h-24"
                placeholder="Share any project ideas you're excited about or problems you want to solve..."
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) => handleChange('terms', checked)}
                  className="border-primary/50 text-primary focus:ring-primary"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground font-orbitron leading-relaxed">
                  I agree to the{" "}
                  <span className="text-primary hover:text-primary-glow cursor-pointer underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-primary hover:text-primary-glow cursor-pointer underline">
                    Code of Conduct
                  </span>
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="updates"
                  checked={formData.updates}
                  onCheckedChange={(checked) => handleChange('updates', checked)}
                  className="border-primary/50 text-primary focus:ring-primary"
                />
                <Label htmlFor="updates" className="text-sm text-muted-foreground font-orbitron">
                  Subscribe to VibeThon updates and future hackathon announcements
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="min-w-64 group"
                disabled={!formData.terms}
              >
                Secure My Spot
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground font-orbitron mt-4">
                Registration closes March 10, 2025 or when capacity is reached
              </p>
            </div>
          </form>
        </div>

        {/* Registration Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {[
            { number: "1,847", label: "Registered", color: "primary" },
            { number: "153", label: "Spots Left", color: "accent" },
            { number: "72%", label: "Capacity", color: "secondary" },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <div className={`text-3xl font-audiowide font-bold bg-gradient-to-r from-${stat.color} to-${stat.color}-glow bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-orbitron text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}