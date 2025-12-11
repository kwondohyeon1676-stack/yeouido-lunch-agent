'use client';

import { CUISINE_OPTIONS } from '@/data/constants';
import { CuisineType } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';

interface StepCuisineProps {
    selected: CuisineType[];
    onSelect: (value: CuisineType[]) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function StepCuisine({ selected, onSelect, onNext, onBack }: StepCuisineProps) {
    const toggleSelection = (value: CuisineType) => {
        if (selected.includes(value)) {
            onSelect(selected.filter((item) => item !== value));
        } else {
            onSelect([...selected, value]);
        }
    };

    return (
        <Card className="w-full shadow-lg border-2 border-primary/10">
            <CardHeader className="text-center relative">
                <Button variant="ghost" size="sm" onClick={onBack} className="absolute left-0 top-0">
                    ← 뒤로
                </Button>
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2 pt-6">
                    <Utensils className="w-6 h-6 text-primary" />
                    어떤 메뉴가 땡기세요?
                </CardTitle>
                <p className="text-muted-foreground text-sm">여러 개 선택 가능해요 (안 고르면 전체)</p>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
                {CUISINE_OPTIONS.map((option) => (
                    <Button
                        key={option.value}
                        variant={selected.includes(option.value) ? 'default' : 'outline'}
                        className={`h-16 text-lg transition-all ${selected.includes(option.value) ? 'ring-2 ring-primary ring-offset-2' : ''
                            }`}
                        onClick={() => toggleSelection(option.value)}
                    >
                        {option.label}
                    </Button>
                ))}
            </CardContent>
            <CardFooter>
                <Button className="w-full h-12 text-lg font-bold" onClick={onNext} size="lg">
                    결과 보기 두둥탁! 🥁
                </Button>
            </CardFooter>
        </Card>
    );
}
