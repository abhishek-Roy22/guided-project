import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import { useStep } from './context/StepContext';

function App() {
  const { step } = useStep();
  return (
    <main className="w-screen min-h-screen">
      {step === 0 && <Hero />}
      {step === 1 && <Profile />}
      {step === 2 && <Services />}
    </main>
  );
}

export default App;
