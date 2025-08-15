import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Link href="/">도전 홈</Link>
            <Link href="/challenges">모든 도전</Link>
            <button className="ml-auto">시작하기</button>
        </nav>
    );
}
