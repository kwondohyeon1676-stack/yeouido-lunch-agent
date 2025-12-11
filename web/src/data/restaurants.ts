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
    {
        id: 'tp-4',
        name: '유림면',
        category: 'KOREAN',
        building: 'TP_TOWER',
        price_range: 'MODERATE',
        rating: 4.4,
        tags: ['메밀국수', '냄비우동', '미슐랭'],
        description: '겨울엔 냄비우동 웨이팅 필수. 미슐랭 빕 그루망 3년 연속.',
        recommended_for: ['ALONE', 'FRIEND', 'TEAM_LEAD'],
        map_url: 'https://naver.me/yurim'
    },
    {
        id: 'tp-5',
        name: '오근내닭갈비',
        category: 'KOREAN',
        building: 'TP_TOWER',
        price_range: 'MODERATE',
        rating: 4.2,
        tags: ['닭갈비', '우동사리', '회식'],
        description: '회식으로 여전히 인기 많음. 우동사리 추가 필수.',
        recommended_for: ['TEAM_LEAD', 'FRIEND', 'JUNIOR'],
        map_url: 'https://naver.me/ogeunnae'
    },
    {
        id: 'tp-6',
        name: '키쿠카와',
        category: 'JAPANESE',
        building: 'TP_TOWER',
        price_range: 'EXPENSIVE',
        rating: 4.6,
        tags: ['장어덮밥', '룸', '고급'],
        description: '예약 전쟁인 장어 다이닝. 프라이빗 룸 완비.',
        recommended_for: ['BOSS', 'TEAM_LEAD', 'PARTNER'],
        map_url: 'https://naver.me/kikukawa'
    },
    {
        id: 'tp-7',
        name: '호시우보',
        category: 'KOREAN',
        building: 'TP_TOWER',
        price_range: 'LUXURY',
        rating: 4.5,
        tags: ['한우', '보양식', '접대'],
        description: '프라이빗한 접대 장소. 숙성 한우 전문.',
        recommended_for: ['BOSS', 'TEAM_LEAD'],
        map_url: 'https://naver.me/hoshiubo'
    },
    {
        id: 'tp-8',
        name: '심퍼티쿠시',
        category: 'WESTERN',
        building: 'TP_TOWER',
        price_range: 'EXPENSIVE',
        rating: 4.3,
        tags: ['와인', '파스타', '소개팅'],
        description: '소개팅 명소로 자리 잡음. 와인 리스트 훌륭.',
        recommended_for: ['PARTNER', 'FRIEND'],
        map_url: 'https://naver.me/simperti'
    },

    // --- FKI (전경련회관) ---
    {
        id: 'fki-5',
        name: '패티바이번',
        category: 'WESTERN',
        building: 'FKI',
        price_range: 'MODERATE',
        rating: 4.3,
        tags: ['수제버거', '치즈버거', '웨이팅'],
        description: '전경련 지하의 숨은 버거 강자. 점심 웨이팅 있음.',
        recommended_for: ['FRIEND', 'JUNIOR', 'ALONE'],
        map_url: 'https://naver.me/pattybybun'
    },
    {
        id: 'fki-6',
        name: '차이나플레인',
        category: 'CHINESE',
        building: 'FKI',
        price_range: 'EXPENSIVE',
        rating: 4.4,
        tags: ['차돌짬뽕', '코스요리', '룸'],
        description: '깔끔한 중식당. 룸이 많아서 팀 점심 회식으로 자주 감.',
        recommended_for: ['TEAM_LEAD', 'BOSS'],
        map_url: 'https://naver.me/chinaplain'
    },

    // --- MUKJA (여의도종합상가) ---
    {
        id: 'mj-1',
        name: '백년도담솥밥',
        category: 'KOREAN',
        building: 'MUKJA',
        price_range: 'MODERATE',
        rating: 4.2,
        tags: ['솥밥', '제육정식', '반찬'],
        description: '반찬 9가지에 솥밥 조합 인기. 든든한 한 끼.',
        recommended_for: ['ALONE', 'FRIEND', 'TEAM_LEAD'],
        map_url: 'https://naver.me/baeknyeon'
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

    // --- OTHER ---

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
