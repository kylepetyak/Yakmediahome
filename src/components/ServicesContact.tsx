import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ServicesContactProps {
  onContactClick?: () => void;
}

export function ServicesContact({ onContactClick }: ServicesContactProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's create something that works.
          </h2>
          <p className="text-xl text-gray-300">
            Ready to build content that drives real results? Let's talk.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-900 font-medium">
                  Name
                </Label>
                <Input 
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-50 border-gray-200 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-medium">
                  Email
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-50 border-gray-200 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-900 font-medium">
                Company
              </Label>
              <Input 
                id="company"
                placeholder="Your company"
                className="bg-gray-50 border-gray-200 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-900 font-medium">
                Message
              </Label>
              <Textarea 
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-gray-50 border-gray-200 focus:border-blue-500 resize-none"
              />
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-lg">
              Start a Conversation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}