import { useContext, useState } from 'react';
import { createContext } from 'react';

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const stepIncrement = () => {
    setStep((prev) => prev + 1);
  };

  const stepDecrease = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
    return;
  };

  return (
    <StepContext.Provider value={{ stepIncrement, stepDecrease, step }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  return useContext(StepContext);
};
