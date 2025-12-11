import { Restaurant, CompanionType, CuisineType, BuildingCode } from '@/types';
import { MOCK_RESTAURANTS } from '@/data/restaurants';

interface FilterCriteria {
    companion: CompanionType;
    cuisines: CuisineType[]; // Allow multiple
    building?: BuildingCode;
    maxDistanceMinutes?: number; // 5, 10, or undefined (any)
}

export function getRecommendations(criteria: FilterCriteria): Restaurant[] {
    let candidates = [...MOCK_RESTAURANTS];

    // 1. Filter by Cuisine (if selected)
    if (criteria.cuisines.length > 0) {
        candidates = candidates.filter(r => criteria.cuisines.includes(r.category));
    }

    // 2. Filter by Building/Distance (Mock Logic: Zone matching)
    // Real implementation: Calculate distance or map zones. 
    // For MVP: If building is selected, strictly prefer same building or 'NEARBY'.
    // Here we just skip strict filtering for MVP unless specified, relying on scoring.

    // 3. Scoring System
    const scored = candidates.map(restaurant => {
        let score = 0;

        // Base match: Companion preference
        if (restaurant.recommended_for.includes(criteria.companion)) {
            score += 10;
        }

        // Companion specific adjustments
        if (criteria.companion === 'BOSS') {
            if (restaurant.price_range === 'EXPENSIVE' || restaurant.price_range === 'LUXURY') score += 5;
            if (restaurant.rating >= 4.5) score += 5;
            if (restaurant.tags.includes('시끄러운')) score -= 10;
        }

        if (criteria.companion === 'JUNIOR') {
            if (restaurant.price_range === 'CHEAP' || restaurant.price_range === 'MODERATE') score += 5;
            if (restaurant.tags.includes('힙한')) score += 5;
        }

        if (criteria.companion === 'ALONE') {
            if (restaurant.tags.includes('빠른회전') || restaurant.category === 'SNACK') score += 5;
        }

        // Building Bonus
        if (criteria.building && restaurant.building === criteria.building) {
            score += 3; // Slight bonus for same building
        }

        // Random noise for variety (0-2 points)
        score += Math.random() * 2;

        return { ...restaurant, score };
    });

    // Sort by score desc
    scored.sort((a, b) => b.score - a.score);

    // Return top 3
    return scored.slice(0, 3);
}

export function getRandomComment(companion: CompanionType): string {
    // Import dynamically or pass in to avoid circular dep if needed, but constants is fine.
    // We'll move this logic to UI component or import FUN_COMMENTS here if needed.
    return "";
}
