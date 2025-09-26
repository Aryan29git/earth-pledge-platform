import { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Award, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const DemoQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What percentage of the Earth's water is freshwater available for human use?",
      options: ["10%", "3%", "1%", "0.3%"],
      correct: 3,
      explanation: "Only about 0.3% of Earth's water is accessible freshwater for human use."
    },
    {
      question: "Which renewable energy source is the fastest growing globally?",
      options: ["Wind power", "Solar power", "Hydroelectric", "Geothermal"],
      correct: 1,
      explanation: "Solar power is currently the fastest-growing renewable energy source worldwide."
    },
    {
      question: "How many years does it take for a plastic bottle to decompose?",
      options: ["50 years", "100 years", "450 years", "1000 years"],
      correct: 2,
      explanation: "Plastic bottles take approximately 450 years to fully decompose in nature."
    },
    {
      question: "What is the main cause of ocean acidification?",
      options: ["Plastic pollution", "Oil spills", "CO₂ absorption", "Overfishing"],
      correct: 2,
      explanation: "Ocean acidification is primarily caused by the ocean absorbing CO₂ from the atmosphere."
    },
    {
      question: "Which activity saves the most water?",
      options: ["Taking shorter showers", "Fixing leaky faucets", "Using efficient appliances", "All equally important"],
      correct: 3,
      explanation: "All these activities are equally important for water conservation and should be practiced together."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100;

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const ecoPoints = score * 10;
    
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="card-eco text-center">
            <CardContent className="p-12 space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center">
                <Award className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-poppins font-bold">Quiz Completed!</h1>
                <p className="text-xl text-muted-foreground">
                  Great job on completing the EcoLearn demo quiz!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{score}/{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Correct Answers</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">{percentage}%</div>
                  <div className="text-sm text-muted-foreground">Score</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">{ecoPoints}</div>
                  <div className="text-sm text-muted-foreground">Eco Points</div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {percentage >= 80 ? "Excellent! You're an eco-champion!" :
                   percentage >= 60 ? "Good job! Keep learning about sustainability!" :
                   "Great start! There's always more to learn about our environment."}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero" onClick={resetQuiz}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button className="btn-secondary">
                    Join EcoLearn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <TreePine className="w-4 h-4 mr-2" />
            Demo Quiz
          </div>
          <h1 className="text-3xl lg:text-4xl font-poppins font-bold">
            Test Your <span className="gradient-text">Eco Knowledge</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Challenge yourself with these environmental awareness questions!
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Quiz Card */}
        <Card className="card-eco">
          <CardHeader>
            <CardTitle className="text-xl font-poppins">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Answer Options */}
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? 'border-primary bg-primary/10 text-primary'
                        : index === selectedAnswer && index !== questions[currentQuestion].correct
                        ? 'border-destructive bg-destructive/10 text-destructive'
                        : 'border-border bg-card text-muted-foreground'
                      : selectedAnswer === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      showResult && index === questions[currentQuestion].correct
                        ? 'border-primary bg-primary text-primary-foreground'
                        : showResult && index === selectedAnswer && index !== questions[currentQuestion].correct
                        ? 'border-destructive bg-destructive text-destructive-foreground'
                        : selectedAnswer === index
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground text-muted-foreground'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                    {showResult && index === questions[currentQuestion].correct && (
                      <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                      <XCircle className="w-5 h-5 text-destructive ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">Explanation:</h4>
                <p className="text-muted-foreground">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            {/* Next Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null || showResult}
                className="btn-hero"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Score Display */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-primary/10">
            <div className="text-sm text-muted-foreground">Current Score:</div>
            <div className="text-lg font-bold text-primary">{score}/{currentQuestion + (showResult ? 1 : 0)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoQuizPage;