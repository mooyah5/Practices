import { fetchChallenges } from '@libs/api';
import ChallengeListClient from './ChallengeListClient';

export default async function ChallengeListServer({ limit = 20 }: { limit?: number }) {
    const res = await fetchChallenges(undefined, limit);
    return (
        <ChallengeListClient
            limit={limit}
            initialItems={res.items ?? []} // undefined 방지
            initialCursor={res.nextCursor ?? null}
        />
    );
}
