import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Scan, Brain, Monitor, Code, Database, Cpu, Network, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import processFlow from "@/assets/process-flow.jpg";

const HowItWorksPage = () => {
  const pipeline = [
    {
      step: "01",
      icon: <Camera className="h-8 w-8" />,
      title: "Video Capture",
      description: "OpenCV captures live video frames from webcam at 30 FPS with automatic resolution optimization for best performance.",
      details: [
        "Real-time video stream processing",
        "Automatic frame rate optimization", 
        "Multi-camera support capability",
        "Frame buffering for smooth processing"
      ],
      color: "emotion-happy"
    },
    {
      step: "02", 
      icon: <Scan className="h-8 w-8" />,
      title: "Face Detection",
      description: "Haar Cascade Classifier identifies faces in each frame and extracts facial regions for emotion analysis.",
      details: [
        "Haar Cascade frontal face detection",
        "Multi-face detection support",
        "Face region extraction and cropping",
        "Angle and lighting compensation"
      ],
      color: "emotion-surprise"
    },
    {
      step: "03",
      icon: <Brain className="h-8 w-8" />,
      title: "Preprocessing",
      description: "Face images are converted to grayscale, resized to 48x48 pixels, and normalized for optimal CNN input.",
      details: [
        "Grayscale conversion for efficiency",
        "Standard 48x48 pixel resize",
        "Pixel value normalization (0-1)",
        "Noise reduction and enhancement"
      ],
      color: "emotion-angry"
    },
    {
      step: "04",
      icon: <Cpu className="h-8 w-8" />,
      title: "CNN Classification",
      description: "Deep learning model processes facial features and predicts emotion probabilities across 7 emotion categories.",
      details: [
        "Convolutional neural network inference",
        "Feature extraction and pattern recognition",
        "Softmax probability distribution",
        "Confidence score calculation"
      ],
      color: "emotion-sad"
    },
    {
      step: "05",
      icon: <Monitor className="h-8 w-8" />,
      title: "Real-time Display",
      description: "Emotion predictions are overlayed on video feed with confidence scores and visual emotion indicators.",
      details: [
        "Live emotion label overlay",
        "Confidence percentage display",
        "Color-coded emotion indicators",
        "Bounding box visualization"
      ],
      color: "primary"
    }
  ];

  const technicalSpecs = [
    { label: "Model Accuracy", value: "99.2%", icon: <Brain className="h-4 w-4" /> },
    { label: "Processing Speed", value: "30+ FPS", icon: <Zap className="h-4 w-4" /> },
    { label: "Latency", value: "< 50ms", icon: <Network className="h-4 w-4" /> },
    { label: "Emotion Classes", value: "7 Types", icon: <Database className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              How It Works
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Dive deep into the technical architecture and processing pipeline that powers 
              our real-time emotion detection system. From video capture to AI inference.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center gap-3">
                <div className="text-white/80">
                  {spec.icon}
                </div>
                <div>
                  <div className="text-white font-bold">{spec.value}</div>
                  <div className="text-white/70 text-sm">{spec.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Visualization */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Processing Pipeline
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our emotion detection system follows a sophisticated 5-step pipeline 
              optimized for real-time performance and accuracy.
            </p>
          </div>

          <div className="mb-16">
            <img 
              src={processFlow} 
              alt="AI Process Flow Visualization" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-12">
            {pipeline.map((step, index) => (
              <Card key={index} className="overflow-hidden bg-card-gradient border-border/50 hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  
                  {/* Step Header */}
                  <div className={`bg-${step.color}/5 p-8 flex flex-col justify-center`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 text-${step.color} flex items-center justify-center`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className={`text-${step.color} font-bold text-lg`}>STEP {step.step}</div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {index < 2 ? 'Computer Vision' : index < 4 ? 'Deep Learning' : 'Visualization'}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Technical Details */}
                  <div className="p-8 bg-muted/20">
                    <h4 className="font-semibold mb-4 text-foreground">Technical Details</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 bg-${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                CNN Architecture
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our emotion detection model uses a sophisticated Convolutional Neural Network 
                architecture specifically designed for facial expression recognition.
              </p>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Code className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Input Layer</h3>
                      <p className="text-muted-foreground text-sm">48×48 grayscale images normalized to [0,1] range</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Brain className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Convolutional Layers</h3>
                      <p className="text-muted-foreground text-sm">Multiple Conv2D layers with ReLU activation and MaxPooling</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Database className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Output Layer</h3>
                      <p className="text-muted-foreground text-sm">7-class Softmax for emotion probability distribution</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="p-8 bg-card-gradient">
                <h3 className="text-2xl font-bold mb-6 text-center">Model Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Overall Accuracy</span>
                      <span className="font-bold text-emotion-happy">99.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="h-2 rounded-full bg-emotion-happy" style={{ width: '99.2%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Training Dataset</span>
                      <span className="font-bold">35,887 images</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Inference Speed</span>
                      <span className="font-bold text-emotion-surprise">30+ FPS</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="h-2 rounded-full bg-emotion-surprise" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Experience It?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See our emotion detection system in action. Try the live demo 
              and experience real-time AI-powered emotion recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/demo">Try Live Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;