import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardDescription } from '@ui/Card';
import type { Challenge } from '@libs/types';

const MS_PER_DAY = 24 * 60 * 60 * 1000;
function ceilDays(ms: number) {
    return Math.max(0, Math.ceil(ms / MS_PER_DAY));
}

export default function ChallengeCard({ data }: { data: Challenge }) {
    const now = new Date();
    const start = new Date(data.startsAt); // ISO
    const end = new Date(data.endsAt); // ISO

    let status: '대기' | '진행중' | '종료';
    if (now < start) status = '대기';
    else if (now <= end) status = '진행중';
    else status = '종료';

    // 오른쪽 보조 정보: 대기면 D-day, 진행중이면 남은 일수, 종료면 '종료'
    const rightText =
        status === '대기'
            ? `D-${ceilDays(start.getTime() - now.getTime())}`
            : status === '진행중'
            ? `${ceilDays(end.getTime() - now.getTime())}일 남음`
            : '종료';

    return (
        <li>
            <Link href={`/challenges/${data.id}`}>
                <Card interactive>
                    <CardHeader className="flex items-center justify-between">
                        <div>
                            <CardTitle>{data.title}</CardTitle>
                            <CardDescription>
                                {data.creatorName} · 참가 {data.participants}명
                            </CardDescription>
                        </div>
                        <div className="text-right text-sm opacity-70">
                            {/* <div>{status}</div> */}
                            <div>{rightText}</div>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        </li>
    );
}
