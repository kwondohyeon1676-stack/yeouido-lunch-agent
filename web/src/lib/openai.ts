import OpenAI from 'openai';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

// OpenAI 클라이언트 (키 없으면 null)
export const openai = apiKey ? new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // 클라이언트 사이드에서 사용
}) : null;

interface AIRatingRequest {
    restaurantName: string;
    description: string;
    tags: string[];
    priceRange: string;
    companion: string;
    baseRating: number; // 실제 평점 (3.5~5.0)
}

export async function getAIRating(restaurant: AIRatingRequest): Promise<number> {
    if (!openai) {
        // API 키 없으면 베이스 평점 그대로 반환
        return restaurant.baseRating;
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `당신은 여의도 직장인 맛집 평가 전문가입니다. 
실제 평점을 기준으로, 누구랑 먹는지에 따라 가감점을 부여합니다.

평가 기준:
- 임원/대표님: 고급스러움(+0.3), 프라이빗(+0.2), 저렴함(-0.3)
- 팀장님: 적당한 가격(+0.2), 검증된 맛집(+0.1), 너무 비쌈(-0.2)
- 동료/친구: 분위기 좋음(+0.2), 가성비(+0.2), 격식(−0.1)
- 후배: 가성비(+0.3), 양 많음(+0.2), 비쌈(-0.3)
- 혼밥: 조용함(+0.3), 빠른 서빙(+0.2), 시끄러움(-0.3)
- 연인/썸: 분위기(+0.3), 프라이빗(+0.2), 시끄러움(-0.3)

최종 평점 = 실제 평점 + 상황 가감점 (최소 0, 최대 5)`
                },
                {
                    role: 'user',
                    content: `식당: ${restaurant.restaurantName}
실제 평점: ${restaurant.baseRating}점
설명: ${restaurant.description}
태그: ${restaurant.tags.join(', ')}
가격대: ${restaurant.priceRange}
동행인: ${restaurant.companion}

위 평가 기준에 따라 가감점을 계산하고, 최종 평점을 숫자 하나만 답변해주세요.
(예: 4.2)`
                }
            ],
            temperature: 0.3, // 일관성을 위해 낮춤
            max_tokens: 10
        });

        const rating = parseFloat(response.choices[0].message.content?.trim() || restaurant.baseRating.toString());
        return Math.min(5, Math.max(0, rating));
    } catch (error) {
        console.error('AI rating error:', error);
        return restaurant.baseRating; // 에러시 베이스 평점 반환
    }
}

export async function getAIComment(companion: string): Promise<string> {
    if (!openai) {
        const fallbacks: Record<string, string[]> = {
            BOSS: ['법카 한도 체크하세요 💳', '조용한 곳으로 골랐습니다'],
            TEAM_LEAD: ['적당한 가격에 생색내기 좋은 곳', '팀장님 기분 좋아지실 겁니다'],
            FRIEND: ['야, 매운거? 아니면 해장?', '상사 뒷담화하기 좋은 곳'],
            JUNIOR: ['선배님, 맛있는거 사주세요!', '요즘 애들이 좋아하는 힙한 곳'],
            ALONE: ['이어폰 꽂고 넷플릭스 보기 좋은 곳', '혼밥 천국'],
            PARTNER: ['분위기 깡패, 예약 필수', '센스 있다는 소리 들을 수 있는 곳']
        };
        const comments = fallbacks[companion] || ['맛있는 점심 되세요!'];
        return comments[Math.floor(Math.random() * comments.length)];
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: '당신은 여의도 직장인들의 점심 고민을 해결해주는 재치있고 유머러스한 AI입니다. 상황에 맞는 센스있고 웃긴 한마디를 해주세요. 이모지를 적절히 활용하고, 직장인 공감 포인트를 찔러주세요.'
                },
                {
                    role: 'user',
                    content: `동행인: ${companion}
          
이 상황에 딱 맞는 재치있고 웃긴 한마디를 해주세요. 
- 20~30자 정도
- 이모지 1~2개 포함
- 직장인 공감 포인트나 상황별 드립 환영
- 예시: "법카 한도 체크하세요 💳", "후배 앞에서 선배 위엄 보여줄 시간 😎", "혼밥 천국, 아무도 날 신경 안 씀 🎧"`
                }
            ],
            temperature: 1.0,
            max_tokens: 100
        });

        return response.choices[0].message.content?.trim() || '맛있는 점심 되세요!';
    } catch (error) {
        console.error('AI comment error:', error);
        return '맛있는 점심 되세요!';
    }
}
