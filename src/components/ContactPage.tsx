import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about EcoLearn? Want to partner with us? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-poppins font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@ecolearn.org</p>
                    <p className="text-sm text-muted-foreground">partnerships@ecolearn.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Green Street<br />
                      Sustainability City, SC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <Card className="card-eco">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Quick Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium text-foreground">Student Support</div>
                    <div className="text-sm text-muted-foreground">Help with quizzes and progress tracking</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium text-foreground">School Partnerships</div>
                    <div className="text-sm text-muted-foreground">Integrate EcoLearn in your curriculum</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="font-medium text-foreground">CSR Opportunities</div>
                    <div className="text-sm text-muted-foreground">Corporate partnership inquiries</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-eco">
              <CardHeader>
                <CardTitle className="text-xl font-poppins">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        placeholder="School, Company, or NGO name"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="student">Student Support</SelectItem>
                          <SelectItem value="school">School Partnership</SelectItem>
                          <SelectItem value="csr">CSR Partnership</SelectItem>
                          <SelectItem value="ngo">NGO Collaboration</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full group">
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20">
          <Card className="card-eco">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting environmental education initiatives worldwide
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl mx-auto flex items-center justify-center">
                    <Clock className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-poppins font-semibold">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Our community and support resources are always available
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to inquiries within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;