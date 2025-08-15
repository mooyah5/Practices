import Link from 'next/link';
import ChallengeListServer from '@features/challenges/ChallengeList.server';
import { Suspense } from 'react';

export default function HomePage() {
    return (
        <main className="p-6 space-y-4">
            <h1 className="text-xl font-bold">최근 도전</h1>
            <Suspense fallback={<div>로딩 중...</div>}>
                <ChallengeListServer limit={3} />
            </Suspense>
            <Link href="/challenges" className="inline-block px-4 py-2 border rounded">
                전체 보기
            </Link>
        </main>
    );
}
