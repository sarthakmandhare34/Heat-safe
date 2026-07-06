import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navigation } from './components/Navigation';
import { ToastContainer } from './components/ToastContainer';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { HeatRiskChecker } from './components/HeatRiskChecker';
import { WaterCalculator } from './components/WaterCalculator';
import { SymptomChecker } from './components/SymptomChecker';
import { EmergencyGuide } from './components/EmergencyGuide';
import { DailyChecklist } from './components/DailyChecklist';
import { LearningCenter } from './components/LearningCenter';
import { ClimateQuiz } from './components/ClimateQuiz';
import { AIKnowledgeAssistant } from './components/AIKnowledgeAssistant';
import { Analytics } from './components/Analytics';
import { Achievements } from './components/Achievements';
import { Settings } from './components/Settings';

function AppContent() {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'risk-checker':
        return <HeatRiskChecker />;
      case 'hydration':
        return <WaterCalculator />;
      case 'symptom-checker':
        return <SymptomChecker />;
      case 'emergency-guide':
        return <EmergencyGuide />;
      case 'checklist':
        return <DailyChecklist />;
      case 'learning-center':
        return <LearningCenter />;
      case 'quiz':
        return <ClimateQuiz />;
      case 'chatbot':
        return <AIKnowledgeAssistant />;
      case 'analytics':
        return <Analytics />;
      case 'achievements':
        return <Achievements />;
      case 'settings':
        return <Settings />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <Navigation>
      {renderPage()}
      <ToastContainer />
    </Navigation>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
