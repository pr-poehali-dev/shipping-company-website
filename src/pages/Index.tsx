
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Anchor" className="text-white" size={32} />
            <h1 className="text-2xl font-bold text-white">T-SHIPPING LIMITED</h1>
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
          backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.7), rgba(10, 37, 64, 0.7)), url('https://cdn.poehali.dev/files/96ac2399-5eb1-4fb4-85ca-ec3731d48650.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            T-SHIPPING LIMITED
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Technical and Commercial Management of All Types of Vessels
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/c4d75b44-f6ef-43e4-a7f5-efe5be5cb6c9.jpg"
                alt="Maritime Operations at Sunset"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">About T-SHIPPING LIMITED</h3>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                T-SHIPPING LIMITED was registered in Hong Kong on August 5, 2021. Our company has got extensive experience in managing vessels such as Tankers, Chemical Tankers and LPG tankers. Since 2022, we had been managing dry cargo vessels as well.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Director:</strong> Graduate of a Maritime Academy, Master's degree in Marine Transportation Economics and Fleet Management. Since 2010, had been working as a director with various shipping companies.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-primary">DPA:</strong> Vast experience in tanker operations worldwide, vessel master with US shipping companies engaged in container trade. Master of the Dynamically Positioned dive support and offshore construction vessels, drilling rigs. USCG certified Master Unlimited/Offshore Installation Manager with DPA certification from Quebec, Canada Maritime Academy. OCIMF certified OVID inspector and SOMWS (Society of Offshore Marine Warranty Surveyors) Associate Marine Surveyor. Marine and Technical Manager with various US Offshore Construction Companies.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Technical Manager:</strong> Graduate of a Maritime Academy, Master's degree in Marine Engineering. Senior Chief Engineer aboard VLCCs tankers for the past five years. Vast experience as technical manager with large shipping companies worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-background to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Professional Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Ship" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-3xl text-primary">Commercial Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  T-SHIPPING LIMITED's Commercial Management provides services of cargo transportation by its own ocean-going vessel as well as by the ocean-going and river vessels of our associates and business partners. We also provide commercial management including fleet chartering and operation.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Our chartering team identifies and assess opportunities for profitable charters, negotiates and arranges contracts for the cargoes marine transportation. Also, T-Shipping has got well established contacts with major oil companies and commodity traders around the world and arranges charter contracts on both spot market and long term charters.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our operations team is an expert in the vessels' operation support tasks, as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-4">
                  <li>24/7 support of the shipboard personnel to ensure safe and efficient voyage performance</li>
                  <li>monitoring vessels' port charges</li>
                  <li>ensuring vessels' bunkering with high quality bunkers at economical price</li>
                  <li>monitoring vessels' operation for thorough compliance with the charter parties' terms and conditions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Settings" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-3xl text-primary">Technical Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  T-SHIPPING LIMITED manages and provides technical supervision of the vessels in the safest and most efficient way possible to meet the requirements of the shipowner, as well as the registry societies and flag state regulations of the vessel. Also the rules of the port of loading and discharging, charterers and other interested parties in full compliance with the International Safety Management Code. Our team closely monitors compliance with the MLC regulations.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8 text-primary">Experience in Managing Vessels</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Ocean Bulkers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• DWT 24,000 / Draft 9.0 meters</li>
                      <li>• DWT 10,000 / Draft 8.3 meters</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Sea and River-Sea Tankers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Lenaneft DWT 3,300 / Draft 3.2 meters</li>
                      <li>• Volgoneft DWT 4,300 / Draft 3.6 meters</li>
                      <li>• Oil Tanker Built 1995 DWT 4,700 / Draft 4.2 meters</li>
                      <li>• Oil Tanker Built 2013 DWT 4,500 / Draft 4.2 meters</li>
                      <li>• ST-1321 Oil/Chemical tanker type 2 / Draft 4.2 meters</li>
                      <li>• Sea Tanker DWT 9,657 / Draft 6.2 meters</li>
                      <li>• LPG Tanker DWT 4,444 / Draft 5.8 meters</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Our Fleet</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/5eba32aa-4a9c-4134-a35b-10ea26c31a78.jpg"
                  alt="Ocean Bulker Vessel"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Ocean Bulkers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Modern bulk carriers designed for efficient cargo transportation across global routes.</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/381a31de-a2da-4a9c-a914-453de68e56a2.jpg"
                  alt="Oil & Chemical Tanker"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Oil & Chemical Tankers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Specialized vessels for safe transportation of petroleum products and chemicals.</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/006b0b91-4ce2-47d9-a1b1-071ebdef48e8.jpeg"
                  alt="LPG Tanker"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">LPG Tankers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced vessels equipped for liquefied petroleum gas transportation worldwide.</p>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Ship" className="text-primary" size={64} />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tankers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comprehensive tanker fleet for various liquid cargo transportation needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="max-w-3xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-center">Get in Touch</h3>
              <p className="text-lg mb-8 opacity-90 text-center">
                Have questions or need a quote? Our team is ready to assist you with all your shipping needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Registered Office</h4>
                    <p className="opacity-90">Flat/RM 38 BM/F 368-374 Lockhart Road<br />Wanchai, Hong Kong</p>
                    <p className="opacity-90 text-sm mt-1">Registered: August 5, 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="opacity-90">tshippinghk@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            

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