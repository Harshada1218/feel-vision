import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Camera, Brain, Activity } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import demoBackground from "@/assets/demo-background.jpg";

const Demo = () => {
  const [isActive, setIsActive] = useState(false);

  const emotions = [
    { name: "Happy", confidence: 85, color: "emotion-happy" },
    { name: "Neutral", confidence: 12, color: "emotion-neutral" },
    { name: "Surprise", confidence: 3, color: "emotion-surprise" },
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
              Live Emotion Detection Demo
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience real-time emotion recognition powered by advanced AI. 
              Click start to begin detecting emotions from your webcam feed.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Video Feed */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Live Video Feed
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted/30 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-20"
                      style={{ backgroundImage: `url(${demoBackground})` }}
                    />
                    <div className="relative z-10 text-center">
                      {!isActive ? (
                        <div className="space-y-4">
                          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                            <Camera className="h-10 w-10 text-primary" />
                          </div>
                          <p className="text-muted-foreground">Click start to begin emotion detection</p>
                          <Button 
                            onClick={() => setIsActive(!isActive)}
                            className="gap-2"
                            size="lg"
                          >
                            <Play className="h-4 w-4" />
                            Start Demo
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                            <Activity className="h-10 w-10 text-primary" />
                          </div>
                          <p className="text-primary font-medium">Demo Active - Detecting Emotions</p>
                          <Button 
                            onClick={() => setIsActive(!isActive)}
                            variant="destructive"
                            className="gap-2"
                            size="lg"
                          >
                            <Square className="h-4 w-4" />
                            Stop Demo
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Emotion Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Detected Emotions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isActive ? (
                    <div className="space-y-4">
                      {emotions.map((emotion, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{emotion.name}</span>
                            <Badge variant="secondary">{emotion.confidence}%</Badge>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-${emotion.color} transition-all duration-300`}
                              style={{ width: `${emotion.confidence}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      Start the demo to see emotion detection results
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>FPS:</span>
                      <span className="font-mono">{isActive ? '30' : '--'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Latency:</span>
                      <span className="font-mono">{isActive ? '45ms' : '--'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Faces Detected:</span>
                      <span className="font-mono">{isActive ? '1' : '--'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle>Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>1. Allow camera access when prompted</p>
                    <p>2. Position your face clearly in view</p>
                    <p>3. Try different facial expressions</p>
                    <p>4. Watch real-time emotion detection</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Tech Note */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Backend Integration Ready</h3>
            <p className="text-muted-foreground">
              This demo interface is prepared for integration with your Flask backend. 
              The emotion detection model will process webcam feed and return real-time results 
              through WebSocket connections for seamless user experience.
            </p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Demo;