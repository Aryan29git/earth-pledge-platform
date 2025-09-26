import { TrendingUp, Users, Globe, Award, Building2, Target, BarChart3, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import csrImage from '@/assets/csr-partnership.jpg';

const CSRPartnersPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/5 py-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${csrImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Building2 className="w-4 h-4 mr-2" />
                CSR Partners Program
              </div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Corporate Responsibility,
                <span className="gradient-text block">Real Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Partner with EcoLearn to amplify your corporate social responsibility initiatives 
                and create measurable environmental impact through education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Become a Partner
              </Button>
              <Button className="btn-secondary">
                View Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              Live <span className="gradient-text">Impact Dashboard</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the real-time environmental impact created by our CSR partners and the EcoLearn community.
            </p>
          </div>

          {/* Main Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="card-eco pulse-eco">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">2.5M kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Emissions Reduced</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-eco pulse-eco">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">150,000</div>
                  <div className="text-sm text-muted-foreground">Trees Planted</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-eco pulse-eco">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Students Engaged</div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-eco pulse-eco">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Schools Reached</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-eco">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Monthly Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Student Engagement</span>
                      <span className="font-semibold">+25%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Eco Points Earned</span>
                      <span className="font-semibold">+40%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CSR Partnerships</span>
                      <span className="font-semibold">+15%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-eco">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  <span>Impact Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-sm text-muted-foreground">Renewable Energy</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">30%</div>
                    <div className="text-sm text-muted-foreground">Waste Reduction</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">15%</div>
                    <div className="text-sm text-muted-foreground">Water Conservation</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">10%</div>
                    <div className="text-sm text-muted-foreground">Biodiversity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              Why Partner <span className="gradient-text">with EcoLearn?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our CSR partnership program offers multiple ways to demonstrate your company's 
              commitment to environmental responsibility and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-eco group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Track real environmental metrics and receive detailed impact reports 
                  showcasing your contribution to sustainability education.
                </p>
              </CardContent>
            </Card>

            <Card className="card-eco group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Community Engagement</h3>
                <p className="text-muted-foreground">
                  Connect with thousands of students, educators, and environmental 
                  advocates committed to creating positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="card-eco group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Brand Recognition</h3>
                <p className="text-muted-foreground">
                  Showcase your environmental leadership through our partner spotlight 
                  program and sustainability reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              Trusted <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading companies committed to environmental education and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['GreenTech Corp', 'EcoSolutions Ltd', 'Sustainable Systems', 'Future Earth Inc'].map((partner, index) => (
              <Card key={index} className="card-eco">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{partner}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hero">
              Join Our Partner Network
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRPartnersPage;