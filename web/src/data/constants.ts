import { CompanionType, CuisineType, BuildingCode } from '@/types';

export const COMPANION_OPTIONS: { value: CompanionType; label: string; emoji: string; description: string }[] = [
    { value: 'BOSS', label: '임원/대표님', emoji: '💼', description: '지갑은 안전, 입은 조심' },
    { value: 'TEAM_LEAD', label: '팀장님', emoji: '🫡', description: '검증된 맛집으로 모십니다' },
    { value: 'FRIEND', label: '동료/친구', emoji: '🙌', description: '스트레스 풀러 가자' },
    { value: 'JUNIOR', label: '후배', emoji: '🐣', description: '멋진 선배가 될 기회' },
    { value: 'ALONE', label: '혼밥', emoji: '🎧', description: '나만의 평화로운 시간' },
    { value: 'PARTNER', label: '연인/썸', emoji: '💕', description: '여의도 데이트' },
];

export const CUISINE_OPTIONS: { value: CuisineType; label: string }[] = [
    { value: 'KOREAN', label: '한식' },
    { value: 'WESTERN', label: '양식' },
    { value: 'CHINESE', label: '중식' },
    { value: 'JAPANESE', label: '일식' },
    { value: 'SNACK', label: '분식' },
    { value: 'OTHER', label: '기타' },
];

export const BUILDING_OPTIONS: { value: BuildingCode; label: string }[] = [
    { value: 'TP_TOWER', label: '🏢 TP 타워 (사학연금)' }, // 가장 많이 사용
    { value: 'KYOBO', label: '교보증권' },
    { value: 'O2_TOWER', label: '오투타워' },
    { value: 'ESTRENUE', label: '에스트레뉴' },
    { value: 'IFC', label: 'IFC 몰' },
    { value: 'THE_HYUNDAI', label: '더현대 서울' },
    { value: 'POST_OFFICE', label: '여의도 우체국' },
    { value: 'OTHER', label: '그 외 (여의도 전역)' },
];

// Fun comments based on selection
export const FUN_COMMENTS: Record<CompanionType, string[]> = {
    BOSS: [
        "비싼 거 드시겠죠? 법카 한도 체크하세요.",
        "조용하고 구워주는 곳이 최고입니다.",
        "맛없으면 큰일남. 검증된 곳으로 필터링 중..."
    ],
    TEAM_LEAD: [
        "팀장님 기분 어떠신가요? 눈치 챙겨서 추천합니다.",
        "적당한 가격에 생색내기 좋은 곳.",
        "부장님 픽 맛집은 제외했습니다 (아재입맛 방지)."
    ],
    FRIEND: [
        "야, 매운거? 아니면 해장?",
        "상사 뒷담화하기 좋은 시끄러운 곳 찾음.",
        "웨이팅 있어도 맛있는 곳 콜?"
    ],
    JUNIOR: [
        "선배님, 맛있는거 사주세요! (가성비 좋은 곳 찾는 중)",
        "요즘 애들이 좋아하는 힙한 곳.",
        "양 많고 배부른 곳으로 안내합니다."
    ],
    ALONE: [
        "이어폰 꽂고 넷플릭스 보기 좋은 곳.",
        "4인석 차지해도 눈치 안 보이는 곳.",
        "패스트푸드? 아니면 1인 정식?"
    ],
    PARTNER: [
        "분위기 깡패, 예약 필수.",
        "센스 있다는 소리 들을 수 있는 곳.",
        "창가 자리 있는지 확인해보세요."
    ]
};
