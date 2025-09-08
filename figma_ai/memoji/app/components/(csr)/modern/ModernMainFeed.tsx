'use client';
import React, { useState } from 'react';
import { ModernPostCard } from './ModernPostCard';
import { ModernCreatePost } from './ModernCreatePost';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Filter, SortDesc, Clock, Flame, Crown } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ModernMainFeedProps {
    view: 'home' | 'popular' | 'community';
    community?: string | null;
}

const mockPosts = [
    {
        id: '1',
        author: 'johndoe',
        authorAvatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        community: 'Technology',
        title: 'The Future of Web Development: What to Expect in 2024',
        content:
            'As we move into 2024, the web development landscape continues to evolve rapidly. Here are the key trends and technologies that are shaping the future of how we build for the web.',
        image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc1NzI0NDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        upvotes: 1247,
        downvotes: 23,
        comments: 184,
        timeAgo: '3h',
        awards: 5,
    },
    {
        id: '2',
        author: 'gamedev_pro',
        authorAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        community: 'Gaming',
        title: 'Indie Game Development: Lessons from 3 Years of Solo Development',
        content:
            'After spending 3 years developing my first indie game, I wanted to share some key insights and mistakes I made along the way. Hopefully this helps other aspiring indie developers.',
        upvotes: 892,
        downvotes: 12,
        comments: 67,
        timeAgo: '5h',
        awards: 3,
    },
    {
        id: '3',
        author: 'photographer_jane',
        authorAvatar:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        community: 'Photography',
        title: 'Minimalist Photography: Finding Beauty in Simplicity',
        content:
            "In a world full of visual noise, minimalist photography offers a refreshing perspective. Here's how to master the art of saying more with less.",
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
        upvotes: 2031,
        downvotes: 18,
        comments: 156,
        timeAgo: '1d',
        awards: 8,
    },
    {
        id: '4',
        author: 'music_theory',
        authorAvatar:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        community: 'Music',
        title: "Understanding Jazz Harmony: A Beginner's Guide",
        content:
            "Jazz harmony can seem intimidating at first, but with the right approach, anyone can start to understand and appreciate its complexity. Let's break it down step by step.",
        upvotes: 567,
        downvotes: 8,
        comments: 89,
        timeAgo: '2d',
        awards: 2,
    },
];

export function ModernMainFeed({ view, community }: ModernMainFeedProps) {
    const [sortBy, setSortBy] = useState<'hot' | 'new' | 'top'>('hot');

    const getTitle = () => {
        switch (view) {
            case 'home':
                return '홈 피드';
            case 'popular':
                return '인기 피드';
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
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl text-gray-900 mb-1">{getTitle()}</h1>
                    {community && (
                        <p className="text-gray-600">
                            Discover and discuss everything about {community.toLowerCase()}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant={sortBy === 'hot' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('hot')}
                        className={`${
                            sortBy === 'hot'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Flame className="w-4 h-4 mr-2" />
                        Hot
                    </Button>
                    <Button
                        variant={sortBy === 'new' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('new')}
                        className={`${
                            sortBy === 'new'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Clock className="w-4 h-4 mr-2" />
                        New
                    </Button>
                    <Button
                        variant={sortBy === 'top' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSortBy('top')}
                        className={`${
                            sortBy === 'top'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Crown className="w-4 h-4 mr-2" />
                        Top
                    </Button>
                </div>
            </div>

            {/* Create Post */}
            <ModernCreatePost />

            {/* Community Info */}
            {community && (
                <Card className="p-6 bg-gray-50 border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-blue-700 text-2xl">📖</div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg text-gray-900 mb-2">About r/{community}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                A community for discussing and sharing everything related to{' '}
                                {community.toLowerCase()}. Please read the rules before posting and
                                be respectful to other members.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div>
                                    <span className="text-gray-900">125k</span> members
                                </div>
                                <div>
                                    <span className="text-gray-900">2.3k</span> online
                                </div>
                                <div>
                                    Created <span className="text-gray-900">Jan 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            )}

            {/* Posts */}
            <div className="space-y-4">
                {filteredPosts.map(post => (
                    <ModernPostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-8">
                <Button
                    variant="outline"
                    className="px-8 py-3 border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                    Load More Posts
                </Button>
            </div>
        </div>
    );
}
