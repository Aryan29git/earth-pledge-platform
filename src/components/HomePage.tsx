import { Link } from 'react-router-dom';
import { ArrowRight, Users, School, Building2, TreePine, Target, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-eco-learning.jpg';
import floatingLeaves from '@/assets/floating-leaves.png';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Floating Leaves Animation */}
        <div 
          className="absolute inset-0 opacity-30 floating-leaf"
          style={{
            backgroundImage: `url(${floatingLeaves})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '300px',
            backgroundPosition: '80% 20%',
          }}
        />

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Learning Green, Living Green
                </div>
                <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                  Sustainable
                  <span className="gradient-text block">Education</span>
                  for Tomorrow
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our eco-learning platform where students, schools, NGOs, and corporate partners 
                  collaborate to build environmental awareness and create lasting impact for our planet.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/student-login">
                  <Button className="btn-hero w-full sm:w-auto group">
                    Join as Student
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/csr-partners">
                  <Button className="btn-secondary w-full sm:w-auto">
                    Partner with Us
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Partners</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="card-eco p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center growing-tree">
                  <TreePine className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Eco Impact Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">2.5M</div>
                    <div className="text-sm text-muted-foreground">CO₂ Reduced (kg)</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">150K</div>
                    <div className="text-sm text-muted-foreground">Trees Planted</div>
                  </div>
                </div>
                <div className="w-full bg-secondary/50 rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-sm text-muted-foreground">75% to next milestone</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              One Platform, <span className="gradient-text">Multiple Roles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a student, educator, NGO, or corporation, EcoLearn provides 
              tailored experiences for everyone committed to environmental education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Student Card */}
            <Card className="card-eco group cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold">Students</h3>
                <p className="text-sm text-muted-foreground">
                  Learn through interactive quizzes and earn eco-points for sustainable actions.
                </p>
                <Link to="/student-login">
                  <Button variant="outline" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* School Card */}
            <Card className="card-eco group cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <School className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold">Schools</h3>
                <p className="text-sm text-muted-foreground">
                  Integrate eco-learning into curriculum and track student engagement.
                </p>
                <Link to="/school-login">
                  <Button variant="outline" size="sm" className="w-full">
                    Join Schools
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* NGO Card */}
            <Card className="card-eco group cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold">NGOs</h3>
                <p className="text-sm text-muted-foreground">
                  Volunteer and contribute to environmental education initiatives.
                </p>
                <Link to="/ngo-login">
                  <Button variant="outline" size="sm" className="w-full">
                    Volunteer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* CSR Card */}
            <Card className="card-eco group cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl mx-auto flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold">CSR Partners</h3>
                <p className="text-sm text-muted-foreground">
                  Sponsor eco-learning initiatives and showcase corporate responsibility.
                </p>
                <Link to="/csr-partners">
                  <Button variant="outline" size="sm" className="w-full">
                    Partner Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe education is the key to environmental change. Our platform connects 
                learners with knowledge, schools with resources, NGOs with opportunities, and 
                corporations with meaningful impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Interactive eco-learning experiences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Real-world environmental impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">Collaborative sustainability initiatives</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="btn-secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="card-eco">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Quiz Questions Answered</div>
                </CardContent>
              </Card>
              <Card className="card-eco">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-3xl font-bold text-accent">85%</div>
                  <div className="text-sm text-muted-foreground">Student Engagement Rate</div>
                </CardContent>
              </Card>
              <Card className="card-eco">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Eco Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="card-eco">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-3xl font-bold text-accent">50K</div>
                  <div className="text-sm text-muted-foreground">Total Eco Points Earned</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;