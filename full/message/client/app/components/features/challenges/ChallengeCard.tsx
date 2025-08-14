import Link from 'next/link';
import { Challenge } from '@libs/types';

type Props = { data: Challenge };

export default function ChallengeCard({ data }: Props) {
    return (
        <li className="border p-3 rounded">
            <Link href={`/challenges/${data.id}`}>
                <div className="font-medium">{data.title}</div>
                <div className="text-sm opacity-70">
                    {data.creatorName} · 참가 {data.participants}명
                </div>
            </Link>
        </li>
    );
}
