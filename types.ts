export type RiskLevel = 'Safe' | 'Moderate' | 'High' | 'Extreme';

export interface UserSettings {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
  temperatureUnit: 'C' | 'F';
}

export interface ChecklistItem {
  id: string;
  task: string;
  category: 'hydration' | 'apparel' | 'protection' | 'planning';
  completed: boolean;
}

export interface HydrationLog {
  id: string;
  amountMl: number;
  timestamp: string; // ISO String
}

export interface HeatRiskInput {
  temperature: number; // always stored as Celsius internally, converted on display
  humidity: number; // percentage
  age: number;
  occupation: 'indoor' | 'outdoor' | 'heavy-manual';
  healthConditions: string[]; // e.g. ["heart_disease", "diabetes", "none"]
}

export interface HeatRiskResult {
  id: string;
  timestamp: string;
  input: HeatRiskInput;
  riskLevel: RiskLevel;
  score: number; // 0 to 100
  recommendations: string[];
  alertTriggered: boolean;
}

export interface SymptomAssessment {
  id: string;
  timestamp: string;
  symptoms: string[]; // headache, dizziness, weakness, confusion, high_temp, etc.
  riskLevel: 'Mild' | 'Moderate' | 'Severe' | 'Emergency';
  suspectedCondition: 'Dehydration' | 'Heat Exhaustion' | 'Heatstroke' | 'Healthy / Normal Fatigue';
  immediateActions: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  selectedOptionIndex: number | null;
  showExplanation: boolean;
  isCompleted: boolean;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  date: string;
  isUser?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon identifier
  unlocked: boolean;
  unlockedAt?: string;
  category: 'Hero' | 'Citizen' | 'Hydration' | 'Warrior' | 'Explorer' | 'Champion';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'Climate' | 'Safety' | 'Hydration' | 'FirstAid';
  summary: string;
  content: string;
  readTimeMin: number;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: 'Myths' | 'Facts' | 'Emergency';
}

export interface AppState {
  settings: UserSettings;
  checklist: ChecklistItem[];
  waterLogs: HydrationLog[];
  waterTargetMl: number;
  riskHistory: HeatRiskResult[];
  symptomAssessments: SymptomAssessment[];
  quizHighScore: number;
  quizLeaderboard: LeaderboardEntry[];
  unlockedAchievements: string[];
}
