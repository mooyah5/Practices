import ChallengeListServer from '@features/challenges/ChallengeList.server';
import { Suspense } from 'react';

export default function ChallengesPage() {
    return (
        <main className="p-6">
            <h1 className="text-xl mb-4 font-bold">모든 도전</h1>
            <Suspense fallback={<div>로딩 중...</div>}>
                <ChallengeListServer limit={20} />
            </Suspense>
        </main>
    );
}
