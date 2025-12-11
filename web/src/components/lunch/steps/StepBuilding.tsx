'use client';

import { BUILDING_OPTIONS } from '@/data/constants';
import { BuildingCode } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface StepBuildingProps {
    value: BuildingCode | null;
    onSelect: (value: BuildingCode) => void;
}

export default function StepBuilding({ onSelect }: StepBuildingProps) {
    return (
        <Card className="w-full shadow-lg border-2 border-primary/10">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    어디서 출발하세요?
                </CardTitle>
                <p className="text-muted-foreground text-sm">가까운 맛집을 찾아드릴게요 (5-10분 컷)</p>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-3">
                {BUILDING_OPTIONS.map((option) => (
                    <Button
                        key={option.value}
                        variant="outline"
                        className="h-14 text-lg justify-start px-6 hover:border-primary hover:bg-primary/5 transition-all text-left"
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </Button>
                ))}
            </CardContent>
        </Card>
    );
}
