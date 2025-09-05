import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Zap, Users, Stethoscope, GraduationCap, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const technologies = [
    { name: "Python", category: "Language" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "Keras", category: "Neural Networks" },
    { name: "Flask", category: "Backend" },
    { name: "NumPy", category: "Data Processing" },
    { name: "FER-2013", category: "Dataset" },
    { name: "CNN", category: "Algorithm" },
  ];

  const applications = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare & Therapy",
      description: "Monitor patient emotional states during treatment sessions, assess mental health conditions, and provide objective emotional analytics for therapeutic interventions.",
      color: "emotion-happy"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education & E-Learning",
      description: "Analyze student engagement levels, detect confusion or frustration during online learning, and adapt educational content based on emotional feedback.",
      color: "emotion-surprise"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Customer Experience",
      description: "Measure customer satisfaction in real-time during interactions, improve service quality through emotion analytics, and enhance user experience design.",
      color: "emotion-neutral"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Human Resources",
      description: "Assess employee engagement and wellbeing, conduct objective interview evaluations, and monitor workplace emotional climate for better management decisions.",
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                About EmotionAI
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                A cutting-edge emotion detection system that bridges the gap between 
                human emotions and artificial intelligence, enabling real-time emotional 
                awareness in digital interactions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Computer Vision</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Brain className="h-4 w-4" />
                  <span className="text-sm">Deep Learning</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Real-Time</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutTeam} 
                alt="AI Research Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Purpose */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Project Purpose
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EmotionAI was developed to create a bridge between human emotional intelligence 
              and machine learning capabilities. Our goal is to provide accurate, real-time 
              emotion recognition that can enhance human-computer interactions across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advanced AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leveraging state-of-the-art CNN architectures trained on comprehensive 
                  emotion datasets to achieve 99.2% accuracy in emotion classification.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Real-Time Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized pipeline processing at 30+ FPS with minimal latency, 
                  enabling seamless integration into live applications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All emotion detection processing happens locally, ensuring 
                  user privacy and data security without external data transmission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with industry-leading technologies and frameworks for optimal 
              performance and reliability in emotion detection applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                {tech.name}
                <span className="ml-2 text-xs text-muted-foreground">({tech.category})</span>
              </Badge>
            ))}
          </div>

          <Card className="bg-card-gradient border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Dataset & Training</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>FER-2013 Dataset:</strong> 35,887+ labeled facial expressions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>7 Emotion Classes:</strong> Happy, Sad, Angry, Fear, Surprise, Disgust, Neutral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Image Format:</strong> 48x48 grayscale preprocessed images</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Model Architecture</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>CNN Layers:</strong> Multiple convolutional and pooling layers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Activation:</strong> ReLU for hidden layers, Softmax for output</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Optimization:</strong> Adam optimizer with categorical crossentropy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how emotion detection technology is transforming various 
              industries and creating new possibilities for human-AI interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${app.color}/10 text-${app.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {app.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;