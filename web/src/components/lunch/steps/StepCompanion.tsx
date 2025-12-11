'use client';

import { COMPANION_OPTIONS } from '@/data/constants';
import { CompanionType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

interface StepCompanionProps {
    value: CompanionType | null;
    onSelect: (value: CompanionType) => void;
    onBack: () => void;
}

export default function StepCompanion({ onSelect, onBack }: StepCompanionProps) {
    return (
        <Card className="w-full shadow-lg border-2 border-primary/10">
            <CardHeader className="text-center relative">
                <Button variant="ghost" size="sm" onClick={onBack} className="absolute left-0 top-0">
                    ← 뒤로
                </Button>
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2 pt-6">
                    <Users className="w-6 h-6 text-primary" />
                    누구랑 드시나요?
                </CardTitle>
                <p className="text-muted-foreground text-sm">상황에 딱 맞는 곳으로 골라드릴게요</p>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
                {COMPANION_OPTIONS.map((option) => (
                    <Button
                        key={option.value}
                        variant="outline"
                        className="h-24 flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary/5 transition-all whitespace-normal text-center p-2"
                        onClick={() => onSelect(option.value)}
                    >
                        <span className="text-2xl">{option.emoji}</span>
                        <span className="font-semibold text-sm">{option.label}</span>
                    </Button>
                ))}
            </CardContent>
        </Card>
    );
}
