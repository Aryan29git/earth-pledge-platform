import { useState } from 'react';
import { Users, School, Building2, Mail, Lock, ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  userType: string;
}

const LoginForm = ({ title, subtitle, icon, userType }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log(`${userType} login attempt:`, { email, password });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-3xl font-poppins font-bold">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <Card className="card-eco">
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="btn-hero w-full group">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="text-center space-y-4">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot your password?
                </button>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    Don't have an account?
                  </p>
                  <Button className="btn-secondary w-full">
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export const StudentLoginPage = () => (
  <LoginForm
    title="Student Portal"
    subtitle="Access your eco-learning dashboard and track your progress"
    icon={<Users className="w-8 h-8 text-primary-foreground" />}
    userType="student"
  />
);

export const SchoolLoginPage = () => (
  <LoginForm
    title="School Portal"
    subtitle="Manage students, track engagement, and access curriculum resources"
    icon={<School className="w-8 h-8 text-primary-foreground" />}
    userType="school"
  />
);

export const NGOLoginPage = () => (
  <LoginForm
    title="NGO Portal"
    subtitle="Volunteer for environmental initiatives and contribute to education"
    icon={<Building2 className="w-8 h-8 text-primary-foreground" />}
    userType="ngo"
  />
);