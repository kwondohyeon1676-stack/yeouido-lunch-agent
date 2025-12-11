import { Restaurant } from '@/types';

export const MOCK_RESTAURANTS: Restaurant[] = [
    // --- KYOBO (교보증권) ---
    {
        id: 'kb-1',
        name: '니즈버거',
        category: 'WESTERN',
        building: 'KYOBO',
        price_range: 'MODERATE',
        rating: 4.5,
        tags: ['수제버거', '피넛버터', '힙한'],
        description: '피넛버터 버거가 유명한 수제버거 맛집. 분위기 힙함.',
        recommended_for: ['FRIEND', 'ALONE', 'JUNIOR'],
        map_url: 'https://naver.me/needs'
    },
    {
        id: 'kb-2',
        name: '최우영스시',
        category: 'JAPANESE',
        building: 'KYOBO',
        price_range: 'MODERATE',
        rating: 4.6,
        tags: ['초밥', '회전초밥', '가성비'],
        description: '균일가 회전초밥. 신선하고 두툼한 네타가 일품.',
        recommended_for: ['FRIEND', 'JUNIOR', 'ALONE'],
        map_url: 'https://naver.me/sushi'
    },

    // --- TP TOWER (사학연금) ---
    {
        id: 'tp-1',
        name: '이도곰탕',
        category: 'KOREAN',
        building: 'TP_TOWER',
        price_range: 'MODERATE',
        rating: 4.3,
        tags: ['곰탕', '맑은국물', '수육'],
        description: '수요미식회 나온 맑은 곰탕. 해장으로 깔끔함.',
        recommended_for: ['BOSS', 'TEAM_LEAD', 'ALONE'],
        map_url: 'https://naver.me/ido'
    },
    {
        id: 'tp-2',
        name: '청담동순도리',
        category: 'KOREAN',
        building: 'TP_TOWER',
        price_range: 'MODERATE',
        rating: 4.2,
        tags: ['순대국', '곱도리탕', '매운'],
        description: '얼큰한 국물의 순대국과 곱도리탕. 해장 필수 코스.',
        recommended_for: ['FRIEND', 'TEAM_LEAD', 'ALONE'],
        map_url: 'https://naver.me/sundori'
    },
    {
        id: 'tp-3',
        name: '무탄',
        category: 'CHINESE',
        building: 'TP_TOWER',
        price_range: 'LUXURY',
        rating: 4.5,
        tags: ['트러플', '마카롱멘보샤', '고급'],
        description: '트러플 자장면과 뚱카롱 멘보샤. 법카 긁는 날.',
        recommended_for: ['BOSS', 'TEAM_LEAD'],
        map_url: 'https://naver.me/mutan'
    },

    // --- ESTRENUE (에스트레뉴) ---
    {
        id: 'es-1',
        name: '어만두',
        category: 'KOREAN',
        building: 'ESTRENUE',
        price_range: 'EXPENSIVE',
        rating: 4.4,
        tags: ['만두', '평양냉면', '어복쟁반'],
        description: '미슐랭 가이드 선정. 슴슴한 평양 음식의 진수.',
        recommended_for: ['BOSS', 'TEAM_LEAD', 'PARTNER'],
        map_url: 'https://naver.me/eomandu'
    },
    {
        id: 'es-2',
        name: '미미쌀국수',
        category: 'WESTERN', // 분류상 동남아지만 양식/기타 카테고리 활용
        building: 'ESTRENUE',
        price_range: 'MODERATE',
        rating: 4.3,
        tags: ['쌀국수', '왕갈비', '해장'],
        description: '왕갈비가 통째로 들어간 쌀국수. 국물이 끝내줌.',
        recommended_for: ['FRIEND', 'ALONE', 'JUNIOR'],
        map_url: 'https://naver.me/mimi'
    },

    // --- O2 TOWER (오투타워) ---
    {
        id: 'o2-1',
        name: '미스터존슨탕',
        category: 'KOREAN',
        building: 'O2_TOWER',
        price_range: 'MODERATE',
        rating: 4.2,
        tags: ['부대찌개', '존슨탕', '치즈닭갈비'],
        description: '햄 가득한 진한 국물의 존슨탕. 치즈닭갈비도 별미.',
        recommended_for: ['FRIEND', 'JUNIOR', 'TEAM_LEAD'],
        map_url: 'https://naver.me/johnson'
    },
    {
        id: 'o2-2',
        name: '오한수우육면가',
        category: 'CHINESE',
        building: 'O2_TOWER',
        price_range: 'MODERATE',
        rating: 4.4,
        tags: ['우육면', '군만두', '무한리필'],
        description: '육즙 팡팡 군만두와 뜨끈한 우육면. 면/밥 리필 가능.',
        recommended_for: ['ALONE', 'FRIEND', 'JUNIOR'],
        map_url: 'https://naver.me/ohansu'
    },
    {
        id: 'o2-3',
        name: '제주산방식당',
        category: 'KOREAN',
        building: 'O2_TOWER',
        price_range: 'MODERATE',
        rating: 4.1,
        tags: ['밀면', '수육', '제주식'],
        description: '시원한 제주식 밀면과 쫄깃한 수육한접시.',
        recommended_for: ['ALONE', 'FRIEND', 'TEAM_LEAD'],
        map_url: 'https://naver.me/sanbang'
    },

    // --- IFC ---
    {
        id: 'ifc-1',
        name: '테이스팅룸',
        category: 'WESTERN',
        building: 'IFC',
        price_range: 'EXPENSIVE',
        rating: 4.3,
        tags: ['파스타', '퓨전', '분위기'],
        description: '시금치 플랫브레드가 유명한 퓨전 이탈리안.',
        recommended_for: ['PARTNER', 'FRIEND'],
        map_url: 'https://naver.me/tasting'
    },
    {
        id: 'ifc-2',
        name: '오복수산',
        category: 'JAPANESE',
        building: 'IFC',
        price_range: 'EXPENSIVE',
        rating: 4.5,
        tags: ['카이센동', '해산물', '깔끔'],
        description: '신선한 해산물이 듬뿍 올라간 카이센동 맛집.',
        recommended_for: ['PARTNER', 'BOSS', 'ALONE'],
        map_url: 'https://naver.me/obok'
    },

    // --- OTHER ---
    {
        id: 'ot-1',
        name: '진주집',
        category: 'KOREAN',
        building: 'MUKJA', // 먹자빌딩 (상가)
        price_range: 'MODERATE',
        rating: 4.6,
        tags: ['콩국수', '닭칼국수', '줄서는'],
        description: '여의도 레전드 콩국수. 여름엔 줄이 깁니다.',
        recommended_for: ['JUNIOR', 'FRIEND', 'PARTNER'],
        map_url: 'https://naver.me/jinju'
    },
    {
        id: 'ot-2',
        name: '가양칼국수',
        category: 'KOREAN',
        building: 'OTHER', // 홍우빌딩
        price_range: 'MODERATE',
        rating: 4.5,
        tags: ['버섯', '매운탕', '무한리필'],
        description: '버섯과 미나리가 무한리필. 볶음밥까지 풀코스.',
        recommended_for: ['FRIEND', 'TEAM_LEAD', 'ALONE'],
        map_url: 'https://naver.me/gayang'
    }
];
