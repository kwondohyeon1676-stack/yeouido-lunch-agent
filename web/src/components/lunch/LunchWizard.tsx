'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BuildingCode, CompanionType, CuisineType } from '@/types';
import StepBuilding from './steps/StepBuilding';
import StepCompanion from './steps/StepCompanion';
import StepCuisine from './steps/StepCuisine';
import StepResult from './steps/StepResult';

export interface LunchState {
    building: BuildingCode | null;
    companion: CompanionType | null;
    cuisines: CuisineType[];
}

export default function LunchWizard() {
    const [step, setStep] = useState(1);
    const [state, setState] = useState<LunchState>({
        building: null,
        companion: null,
        cuisines: [],
    });

    const nextStep = () => setStep((p) => p + 1);
    const prevStep = () => setStep((p) => Math.max(1, p - 1));

    const updateState = (update: Partial<LunchState>) => {
        setState((prev) => ({ ...prev, ...update }));
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 min-h-screen flex flex-col items-start pt-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                >
                    {step === 1 && (
                        <StepBuilding
                            value={state.building}
                            onSelect={(val) => { updateState({ building: val }); nextStep(); }}
                        />
                    )}
                    {step === 2 && (
                        <StepCompanion
                            value={state.companion}
                            onSelect={(val) => { updateState({ companion: val }); nextStep(); }}
                            onBack={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <StepCuisine
                            selected={state.cuisines}
                            onSelect={(val) => updateState({ cuisines: val })}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}
                    {step === 4 && (
                        <StepResult
                            state={state}
                            onReset={() => setStep(1)}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
