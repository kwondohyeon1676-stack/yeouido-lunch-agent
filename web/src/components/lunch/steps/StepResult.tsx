'use client';

import { useEffect, useState } from 'react';
import { LunchState } from '../LunchWizard';
import { getRecommendations } from '@/lib/recommendation';
import { FUN_COMMENTS } from '@/data/constants';
import { Restaurant } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, Map, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AddPlaceDialog } from '../AddPlaceDialog';

interface StepResultProps {
    state: LunchState;
    onReset: () => void;
}

export default function StepResult({ state, onReset }: StepResultProps) {
    const [results, setResults] = useState<Restaurant[]>([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('');

    useEffect(() => {
        // Simulate loading for suspense
        const timer = setTimeout(() => {
            if (state.companion) {
                const recs = getRecommendations({
                    companion: state.companion,
                    cuisines: state.cuisines,
                    building: state.building || undefined
                });
                setResults(recs);

                // Pick random comment
                const comments = FUN_COMMENTS[state.companion];
                setComment(comments[Math.floor(Math.random() * comments.length)]);
            }
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [state]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                <div className="animate-spin text-4xl">🥁</div>
                <h2 className="text-2xl font-bold animate-pulse">맛집 데이터 분석 중...</h2>
                <p className="text-muted-foreground">{state.companion ? '눈치 보는 중...' : '최적의 경로 계산 중...'}</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 w-full">
            <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6 text-center">
                    <p className="text-lg font-semibold mb-2">💡 AI의 한마디</p>
                    <p className="text-xl font-bold text-primary break-keep">"{comment}"</p>
                </CardContent>
            </Card>

            <div className="space-y-3">
                {results.map((place, idx) => (
                    <motion.div
                        key={place.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="overflow-hidden hover:shadow-md transition-shadow">
                            <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            {idx + 1}. {place.name}
                                            <Badge variant="secondary" className="text-xs">{place.category}</Badge>
                                        </h3>
                                    </div>
                                    <div className="flex items-center text-yellow-500 font-bold">
                                        <Star className="w-4 h-4 fill-current mr-1" />
                                        {place.rating}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2 text-sm text-gray-600 space-y-2">
                                <p>{place.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {place.tags.map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs text-gray-400">#{tag}</Badge>
                                    ))}
                                </div>
                                <div className="text-xs text-muted-foreground pt-1">
                                    {place.price_range} • {place.building}
                                </div>
                            </CardContent>
                            <CardFooter className="p-2 bg-gray-50 flex justify-between">
                                <Button variant="ghost" size="sm" asChild className="w-full">
                                    <a href={place.map_url || '#'} target="_blank" rel="noreferrer">
                                        <Map className="w-4 h-4 mr-2" /> 지도 보기
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="pt-4 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={onReset}>
                    <RefreshCw className="w-4 h-4 mr-2" /> 처음으로
                </Button>
                <AddPlaceDialog />
            </div>
        </div>
    );
}
