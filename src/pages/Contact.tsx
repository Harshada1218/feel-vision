import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MessageSquare, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import contactBackground from "@/assets/contact-background.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${contactBackground})` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Have questions about EmotionAI? Want to collaborate or discuss implementation? 
              I'd love to hear from you. Let's connect and explore the possibilities together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <Card className="bg-card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll respond as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full gap-2" size="lg">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Links */}
            <div className="space-y-8">
              
              {/* Professional Links */}
              <Card className="bg-card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Links</CardTitle>
                  <p className="text-muted-foreground">
                    Connect with me on professional platforms and explore my work.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href="https://github.com/yourusername/emotion-detection" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">GitHub Repository</h3>
                      <p className="text-sm text-muted-foreground">View the complete source code</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">LinkedIn Profile</h3>
                      <p className="text-sm text-muted-foreground">Professional background & experience</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                  
                  <a 
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Direct Email</h3>
                      <p className="text-sm text-muted-foreground">your.email@example.com</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Project Stats */}
              <Card className="bg-card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Project Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">99.2%</div>
                      <div className="text-sm text-muted-foreground">Model Accuracy</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">30+</div>
                      <div className="text-sm text-muted-foreground">FPS Processing</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">7</div>
                      <div className="text-sm text-muted-foreground">Emotion Types</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">Real-Time</div>
                      <div className="text-sm text-muted-foreground">Detection</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Collaboration Areas */}
              <Card className="bg-card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Collaboration Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI/ML Research</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">Healthcare Tech</Badge>
                    <Badge variant="secondary">EdTech Solutions</Badge>
                    <Badge variant="secondary">Open Source</Badge>
                    <Badge variant="secondary">Consulting</Badge>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    Interested in collaborating on AI projects, discussing implementation strategies, 
                    or exploring commercial applications? Let's connect and create something amazing together.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Response Promise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I typically respond to all inquiries within 24-48 hours. For urgent matters 
              or time-sensitive opportunities, please mention it in your message subject line.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;