import { Heart, Users, Target, Globe, Award, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                About EcoLearn
              </div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Building a <span className="gradient-text">Sustainable Future</span>
                Through Education
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're on a mission to transform environmental education and create lasting 
                impact through collaborative learning, innovation, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-eco">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-poppins font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize environmental education by creating an inclusive platform where 
                  students, educators, NGOs, and corporations collaborate to build environmental 
                  awareness and drive sustainable action. We believe that informed individuals 
                  become empowered changemakers.
                </p>
              </CardContent>
            </Card>

            <Card className="card-eco">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-poppins font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every learner has access to quality environmental education, 
                  every institution contributes to sustainability goals, and every corporation 
                  demonstrates meaningful environmental responsibility through measurable impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to environmental education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-eco group text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Sustainability First</h3>
                <p className="text-muted-foreground">
                  Every decision we make prioritizes environmental impact and long-term sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="card-eco group text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Inclusive Community</h3>
                <p className="text-muted-foreground">
                  We welcome learners from all backgrounds and create opportunities for everyone to contribute.
                </p>
              </CardContent>
            </Card>

            <Card className="card-eco group text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  We track and report real environmental outcomes to ensure our efforts create lasting change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                How EcoLearn came to life and our journey toward environmental education excellence.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <Card className="card-eco">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-poppins font-semibold mb-4">The Beginning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded in 2023 by a team of educators, environmental scientists, and technology 
                      innovators who recognized the urgent need for accessible, engaging environmental 
                      education. We saw that traditional educational approaches weren't keeping pace 
                      with environmental challenges.
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2023</div>
                    <div className="text-sm text-muted-foreground">Platform Launch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Founding Schools</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10,000+</div>
                    <div className="text-sm text-muted-foreground">Students Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">25+</div>
                    <div className="text-sm text-muted-foreground">CSR Partners</div>
                  </div>
                </div>

                <Card className="card-eco order-1 lg:order-2">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-poppins font-semibold mb-4">Growing Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Today, EcoLearn serves thousands of students across hundreds of schools, 
                      partnering with leading corporations and NGOs to create measurable environmental 
                      impact. Our community continues to grow as more institutions recognize the value 
                      of collaborative environmental education.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming environmental education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Green', role: 'Founder & CEO', specialty: 'Environmental Science' },
              { name: 'Michael Chen', role: 'CTO', specialty: 'Educational Technology' },
              { name: 'Emma Rodriguez', role: 'Head of Partnerships', specialty: 'Corporate Relations' },
              { name: 'David Kumar', role: 'Lead Educator', specialty: 'Curriculum Development' },
              { name: 'Lisa Thompson', role: 'Community Manager', specialty: 'Student Engagement' },
              { name: 'Alex Johnson', role: 'Sustainability Director', specialty: 'Impact Measurement' }
            ].map((member, index) => (
              <Card key={index} className="card-eco group text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-poppins font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;