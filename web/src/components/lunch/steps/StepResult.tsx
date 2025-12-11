'use client';

import { useEffect, useState } from 'react';
import { LunchState } from '../LunchWizard';
import { getRecommendations } from '@/lib/recommendation';
import { getAIComment, getAIRating } from '@/lib/openai';
import { PRICE_LABELS, BUILDING_LABELS, COMPANION_LABELS } from '@/lib/labels';
import { Restaurant } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { AddPlaceDialog } from '../AddPlaceDialog';

interface StepResultProps {
    state: LunchState;
    onReset: () => void;
}

interface RestaurantWithAIRating extends Restaurant {
    aiRating?: number;
}

export default function StepResult({ state, onReset }: StepResultProps) {
    const [results, setResults] = useState<RestaurantWithAIRating[]>([]);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('');

    useEffect(() => {
        async function loadResults() {
            if (!state.companion) return;

            setLoading(true);

            // Get recommendations
            const recs = getRecommendations({
                companion: state.companion,
                cuisines: state.cuisines,
                building: state.building || undefined
            });

            // Get AI comment
            const aiComment = await getAIComment(COMPANION_LABELS[state.companion]);
            setComment(aiComment);

            // Get AI ratings for each restaurant
            const recsWithAI = await Promise.all(
                recs.map(async (restaurant) => {
                    const aiRating = await getAIRating({
                        restaurantName: restaurant.name,
                        description: restaurant.description,
                        tags: restaurant.tags,
                        priceRange: PRICE_LABELS[restaurant.price_range],
                        companion: COMPANION_LABELS[state.companion!],
                        baseRating: restaurant.rating // 실제 평점 전달
                    });
                    return { ...restaurant, aiRating };
                })
            );

            setResults(recsWithAI);
            setLoading(false);
        }

        loadResults();
    }, [state]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                <div className="animate-spin text-4xl">🤖</div>
                <h2 className="text-2xl font-bold animate-pulse">AI가 분석 중...</h2>
                <p className="text-sm text-gray-500">상황에 맞는 평점을 계산하고 있어요</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* AI Comment */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg text-center"
            >
                <p className="text-lg font-bold">🤖 AI의 한마디</p>
                <p className="text-xl mt-2">{comment}</p>
            </motion.div>

            {/* Results */}
            <div className="space-y-4">
                {results.map((place, idx) => (
                    <motion.div
                        key={place.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2">
                            <CardHeader className="p-4 pb-2 bg-gradient-to-r from-gray-50 to-white">
                                <div className="flex justify-between items-start">
                                    <div className="w-full">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            <span className="text-2xl text-blue-600">{idx + 1}.</span>
                                            {place.name}
                                            <Badge variant="secondary" className="text-xs">{place.category}</Badge>
                                        </h3>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-3 space-y-3">
                                <p className="text-sm text-gray-700">{place.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                    {place.tags.map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Price & Location */}
                                <div className="flex gap-4 text-sm font-medium text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <DollarSign className="w-4 h-4" />
                                        <span>{PRICE_LABELS[place.price_range]}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{BUILDING_LABELS[place.building]}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={onReset}>
                    <RefreshCw className="w-4 h-4 mr-2" /> 처음으로
                </Button>
                <AddPlaceDialog />
            </div>
        </div>
    );
}
