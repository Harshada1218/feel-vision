import { Button } from "@/components/ui/button";
import techImage from "@/assets/tech-showcase.jpg";
import emotionsGrid from "@/assets/emotions-grid.jpg";

export const TechShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Advanced Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our system combines cutting-edge computer vision algorithms with deep learning 
                to deliver real-time emotion recognition with unprecedented accuracy.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">OpenCV Face Detection</h3>
                  <p className="text-muted-foreground">
                    Haar Cascade Classifier for fast and accurate face detection in real-time video streams.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">TensorFlow + Keras CNN</h3>
                  <p className="text-muted-foreground">
                    Deep Convolutional Neural Network trained on FER-2013 dataset with 35,887+ labeled images.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real-Time Processing</h3>
                  <p className="text-muted-foreground">
                    Optimized pipeline processing 30+ FPS with minimal latency for seamless user experience.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="text-lg px-8" asChild>
              <a href="/how-it-works">View Technical Details</a>
            </Button>
          </div>
          
          {/* Right Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={techImage} 
                alt="AI Technology Visualization" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={emotionsGrid} 
                alt="Emotion Detection Examples" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};