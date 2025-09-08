'use client';
import React, { useState } from 'react';
import { PostCard } from './PostCard';
import { CreatePost } from './CreatePost';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Filter, SortAsc } from 'lucide-react';

interface MainFeedProps {
    view: 'home' | 'popular' | 'community';
    community?: string | null;
}

const mockPosts = [
    {
        id: '1',
        author: '떡볶이러버',
        authorAvatar: '🍡',
        community: '🍡 떡볶이 매니아',
        title: '신림동 떡볶이 맛집 발견했어요!',
        content:
            '오늘 친구랑 신림역 근처에서 떡볶이 먹었는데 진짜 맛있었어요! 떡이 쫄깃하고 소스가 달콤하면서 매콤해서 계속 손이 가더라구요. 사진 올려봅니다 ㅎㅎ',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
        upvotes: 124,
        downvotes: 3,
        comments: 28,
        timeAgo: '3시간 전',
        awards: ['🔥', '😋'],
    },
    {
        id: '2',
        author: '겜마니아',
        authorAvatar: '🎮',
        community: '🎮 게임 이야기',
        title: '요즘 하고 있는 인디게임 추천',
        content:
            '최근에 스팀에서 발견한 인디게임인데 정말 재밌어요! 픽셀아트도 예쁘고 스토리도 흥미진진합니다. 혹시 비슷한 게임 아시는 분 있나요?',
        upvotes: 89,
        downvotes: 1,
        comments: 15,
        timeAgo: '5시간 전',
        awards: ['👍'],
    },
    {
        id: '3',
        author: '사진작가지망생',
        authorAvatar: '📸',
        community: '📸 일상 사진',
        title: '오늘 촬영한 겨울 풍경',
        content: '한강에서 찍은 겨울 풍경입니다. 날씨가 추웠지만 정말 예쁜 사진이 나온 것 같아요!',
        image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
        upvotes: 203,
        downvotes: 2,
        comments: 42,
        timeAgo: '1일 전',
        awards: ['📸', '❄️', '🏆'],
    },
    {
        id: '4',
        author: '음악덕후',
        authorAvatar: '🎵',
        community: '🎵 음악 감상실',
        title: '겨울에 듣기 좋은 플레이리스트',
        content:
            '겨울 감성에 맞는 노래들로 플레이리스트를 만들어봤어요. 아이유, 볼빨간사춘기, 폴킴 등등... 다들 어떤 겨울 노래 좋아하시나요?',
        upvotes: 156,
        downvotes: 5,
        comments: 63,
        timeAgo: '2일 전',
        awards: ['🎵', '❄️'],
    },
];

export function MainFeed({ view, community }: MainFeedProps) {
    const [sortBy, setSortBy] = useState<'hot' | 'new' | 'top'>('hot');

    const getTitle = () => {
        switch (view) {
            case 'home':
                return '🏠 홈 피드';
            case 'popular':
                return '🔥 인기 피드';
            case 'community':
                return community || '커뮤니티';
            default:
                return '피드';
        }
    };

    const filteredPosts = community
        ? mockPosts.filter(post => post.community === community)
        : mockPosts;

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {getTitle()}
                </h2>

                <div className="flex items-center gap-2">
                    <Button
                        variant={sortBy === 'hot' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('hot')}
                        className={
                            sortBy === 'hot'
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'hover:bg-pink-50'
                        }
                    >
                        🔥 인기
                    </Button>
                    <Button
                        variant={sortBy === 'new' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('new')}
                        className={
                            sortBy === 'new'
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'hover:bg-pink-50'
                        }
                    >
                        🆕 최신
                    </Button>
                    <Button
                        variant={sortBy === 'top' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('top')}
                        className={
                            sortBy === 'top'
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                : 'hover:bg-pink-50'
                        }
                    >
                        👑 베스트
                    </Button>
                </div>
            </div>

            {/* Create Post */}
            <CreatePost />

            {/* Feed Rules (for communities) */}
            {community && (
                <Card className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                    <h3 className="mb-3 text-pink-800">📋 커뮤니티 규칙</h3>
                    <div className="space-y-2 text-sm text-pink-700">
                        <p>• 서로 존중하며 예의있게 대화해주세요</p>
                        <p>• 스팸이나 광고성 게시물은 삭제될 수 있습니다</p>
                        <p>• 주제와 관련된 내용으로 게시해주세요</p>
                    </div>
                </Card>
            )}

            {/* Posts */}
            <div className="space-y-6">
                {filteredPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
                <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 border-pink-200"
                >
                    더 보기
                </Button>
            </div>
        </div>
    );
}
