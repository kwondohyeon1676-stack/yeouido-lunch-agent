export type CuisineType = 'KOREAN' | 'CHINESE' | 'JAPANESE' | 'WESTERN' | 'SNACK' | 'CAFETERIA' | 'OTHER';

export type CompanionType = 'ALONE' | 'FRIEND' | 'BOSS' | 'JUNIOR' | 'TEAM_LEAD' | 'PARTNER';

export type BuildingCode = 'IFC' | 'THE_HYUNDAI' | 'TP_TOWER' | 'POST_OFFICE' | 'KYOBO' | 'MUKJA' | 'ESTRENUE' | 'FKI' | 'O2_TOWER' | 'OTHER';

export interface Restaurant {
    id: string;
    name: string;
    category: CuisineType;
    building: BuildingCode;
    price_range: 'CHEAP' | 'MODERATE' | 'EXPENSIVE' | 'LUXURY';
    rating: number; // 0-5
    tags: string[]; // e.g., 'Spicy', 'Quiet', 'View'
    description: string;
    recommended_for: CompanionType[];
    image_url?: string;
    map_url?: string; // Naver Map
}
