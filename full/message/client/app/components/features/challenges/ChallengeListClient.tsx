'use client';
import { useState } from 'react';
import type { Challenge } from '@libs/types';
import { fetchChallenges } from '@libs/api';
import ChallengeCard from './ChallengeCard';

type Props = {
    initialItems?: Challenge[];
    initialCursor?: string | null;
    limit?: number;
};

export default function ChallengeListClient({
    initialItems = [], // ← 기본값
    initialCursor = null, // ← 기본값
    limit = 20, // ← 기본값
}: Props) {
    const [items, setItems] = useState<Challenge[]>(initialItems);
    const [cursor, setCursor] = useState<string | null>(initialCursor);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(!initialCursor);

    async function loadMore() {
        if (loading || done) return;
        setLoading(true);
        const res = await fetchChallenges(cursor || undefined, limit);
        setItems(prev => {
            const seen = new Set(prev.map(p => p.id));
            const next = res.items.filter(x => !seen.has(x.id));
            return [...prev, ...next];
        });
        setCursor(res.nextCursor);
        if (!res.nextCursor) setDone(true);
        setLoading(false);
    }

    return (
        <div>
            <ul className="space-y-2">
                {items.map(c => (
                    <ChallengeCard key={c.id} data={c} />
                ))}
            </ul>
            {!done && (
                <button
                    onClick={loadMore}
                    disabled={loading}
                    className="mt-3 px-4 py-2 border rounded"
                >
                    {loading ? '로딩…' : '더 보기'}
                </button>
            )}
        </div>
    );
}
