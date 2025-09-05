import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Scan, Brain, Monitor } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-12 w-12" />,
      title: "1. Video Capture",
      description: "Live webcam feed captures video frames in real-time using OpenCV for seamless video processing.",
      color: "emotion-happy"
    },
    {
      icon: <Scan className="h-12 w-12" />,
      title: "2. Face Detection", 
      description: "Haar Cascade Classifier detects faces in each frame and extracts the face region for analysis.",
      color: "emotion-surprise"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "3. AI Analysis",
      description: "CNN model processes the face image (48x48 grayscale) and predicts emotion probabilities.",
      color: "emotion-angry"
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "4. Real-Time Display",
      description: "Emotion predictions are overlayed on the video feed with confidence scores and visual indicators.",
      color: "emotion-sad"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our emotion detection system follows a sophisticated pipeline from video capture 
            to real-time emotion recognition and display.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-card-gradient border-border/50 hover:shadow-xl transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${step.color}/10 text-${step.color} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-4">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              
              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2 z-20"></div>
              )}
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
            <span>Processing Speed:</span>
            <span className="font-bold">30+ FPS</span>
            <span>•</span>
            <span>Latency:</span>
            <span className="font-bold">&lt; 50ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};