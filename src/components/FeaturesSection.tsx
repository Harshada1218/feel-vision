import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Camera, Zap, Target, Shield, BarChart3 } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Deep Learning CNN",
      description: "Advanced Convolutional Neural Network trained on comprehensive emotion datasets for accurate recognition.",
      color: "emotion-happy"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Live Video Processing",
      description: "Real-time face detection and emotion analysis from webcam feeds with minimal latency.",
      color: "emotion-surprise"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized algorithms for fast processing with 30+ FPS real-time emotion detection.",
      color: "emotion-angry"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "7 Emotion Types",
      description: "Detects Happy, Sad, Angry, Fear, Surprise, Disgust, and Neutral expressions accurately.",
      color: "emotion-sad"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy Focused",
      description: "All processing happens locally. No data is stored or transmitted to external servers.",
      color: "emotion-neutral"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive emotion analytics and insights with detailed reporting capabilities.",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology stack combining computer vision, deep learning, 
            and real-time processing for accurate emotion detection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}/10 text-${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};