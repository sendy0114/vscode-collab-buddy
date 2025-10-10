import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg opacity-90">
              Get in touch with us to discuss your project requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@whitestoneinfotech.com" className="text-primary hover:underline">
                        info@whitestoneinfotech.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919978809533" className="text-primary hover:underline">
                        +91 99788 09533
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Global Presence</h3>
                      <p className="text-muted-foreground">Serving clients across USA, Europe, Asia & Middle East</p>
                      <p className="text-sm text-muted-foreground mt-1">Remote-first, timezone-friendly teams</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium mb-2 block">First Name</label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone</label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
                    <Input id="subject" placeholder="Project Inquiry" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
