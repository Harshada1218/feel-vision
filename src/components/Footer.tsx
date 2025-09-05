import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">EmotionAI</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Advanced real-time emotion detection system powered by computer vision and deep learning. 
              Recognize human emotions with 99.2% accuracy.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Live Demo</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Research Paper</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60">
            © 2025 EmotionAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};