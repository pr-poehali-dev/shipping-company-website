import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Anchor" className="text-white" size={32} />
            <h1 className="text-2xl font-bold text-white">SeaWay Shipping</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-accent transition-colors capitalize font-semibold"
              >
                {item === 'home' ? 'Home' : item === 'about' ? 'About Us' : item === 'services' ? 'Services' : 'Contact'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.7), rgba(10, 37, 64, 0.7)), url('https://cdn.poehali.dev/projects/03cd9110-39ff-4688-a7bc-321464d359c4/files/8c1dd12c-1e42-42fc-9930-458d110e094c.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Global Maritime Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Your trusted partner in worldwide shipping solutions
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
          >
            Get a Quote <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/03cd9110-39ff-4688-a7bc-321464d359c4/files/845c111d-8b2f-4f9a-9965-eecc20c95418.jpg"
                alt="Maritime Port"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Leading the Way in Maritime Transport</h3>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                With over 25 years of experience in the shipping industry, SeaWay Shipping has established itself as a reliable partner for businesses worldwide. We pride ourselves on delivering cargo safely, efficiently, and on time.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us one of the most trusted names in maritime logistics.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Vessels</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Ship',
                title: 'Container Shipping',
                description: 'Reliable container transport services across all major trade routes with full tracking capabilities.',
              },
              {
                icon: 'Anchor',
                title: 'Bulk Cargo',
                description: 'Specialized handling of dry and liquid bulk cargo with modern fleet and expert crew.',
              },
              {
                icon: 'Package',
                title: 'Break Bulk',
                description: 'Safe transportation of oversized and heavy cargo that cannot fit in standard containers.',
              },
              {
                icon: 'Truck',
                title: 'Logistics Solutions',
                description: 'End-to-end supply chain management including warehousing and distribution services.',
              },
              {
                icon: 'Clock',
                title: 'Express Shipping',
                description: 'Time-critical shipping solutions with guaranteed delivery schedules.',
              },
              {
                icon: 'Shield',
                title: 'Cargo Insurance',
                description: 'Comprehensive insurance coverage to protect your valuable cargo during transit.',
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg mb-8 opacity-90">
                Have questions or need a quote? Our team is ready to assist you with all your shipping needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="opacity-90">123 Harbor Drive, Maritime District<br />London, UK EC1A 1BB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="opacity-90">+44 20 7946 0958<br />+44 20 7946 0959</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="opacity-90">info@seawayshipping.com<br />sales@seawayshipping.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-lg py-6"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="text-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Icon name="Anchor" size={28} />
            <p className="text-lg font-semibold">SeaWay Shipping</p>
          </div>
          <p className="opacity-75">© 2024 SeaWay Shipping. All rights reserved.</p>
          <p className="opacity-75 mt-2">Navigating your success across the seven seas</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;