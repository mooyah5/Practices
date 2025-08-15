import type { Challenge, PageResp } from './types';

const base = Date.now();
const ALL = Array.from({ length: 45 }).map((_, i) => ({
    id: `c${i + 1}`,
    title: `도전 ${i + 1}`,
    creatorName: i % 2 ? 'hanna' : 'guest',
    participants: (i * 3) % 17,
    startsAt: new Date(base - i * 86400000).toISOString(),
    endsAt: new Date(base - i * 86400000 + 2 * 86400000).toISOString(),
}));

export const fetchChallenges = async (
    cursor?: string,
    limit = 20,
): Promise<PageResp<Challenge>> => {
    const startIdx = cursor ? parseInt(cursor.replace('c', ''), 10) : 0;
    const items = ALL.slice(startIdx, startIdx + limit);
    const nextCursor = startIdx + limit < ALL.length ? `c${startIdx + limit}` : null;

    // 네트워크 지연 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));

    return Promise.resolve({
        items,
        nextCursor,
        total: ALL.length,
    });
};
