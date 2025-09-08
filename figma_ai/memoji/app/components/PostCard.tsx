'use client';
import React, { useState } from 'react';
import {
    ArrowUp,
    ArrowDown,
    MessageCircle,
    Share2,
    Flag,
    Bookmark,
    MoreHorizontal,
} from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Badge } from './(csr)/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { ImageWithFallback } from './(csr)/figma/ImageWithFallback';

interface Post {
    id: string;
    author: string;
    authorAvatar: string;
    community: string;
    title: string;
    content: string;
    image?: string;
    upvotes: number;
    downvotes: number;
    comments: number;
    timeAgo: string;
    awards: string[];
}

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const handleVote = (type: 'up' | 'down') => {
        if (userVote === type) {
            setUserVote(null);
        } else {
            setUserVote(type);
        }
    };

    const netVotes =
        post.upvotes - post.downvotes + (userVote === 'up' ? 1 : userVote === 'down' ? -1 : 0);

    return (
        <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-pink-100 shadow-sm hover:shadow-md transition-all">
            {/* Header */}
            <div className="p-4 border-b border-pink-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-pink-200">
                            <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                                {post.authorAvatar}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{post.author}</span>
                                <Badge className="text-xs bg-pink-100 text-pink-700 hover:bg-pink-200">
                                    {post.community}
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-500">{post.timeAgo}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full">
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.content}</p>

                {post.image && (
                    <div className="mb-4 rounded-2xl overflow-hidden">
                        <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                )}

                {/* Awards */}
                {post.awards.length > 0 && (
                    <div className="flex items-center gap-1 mb-4">
                        {post.awards.map((award, index) => (
                            <Badge
                                key={index}
                                className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            >
                                {award}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                    {/* Vote buttons */}
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleVote('up')}
                            className={`rounded-full ${
                                userVote === 'up'
                                    ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                    : 'hover:bg-pink-100'
                            }`}
                        >
                            <ArrowUp className="w-4 h-4" />
                        </Button>
                        <span
                            className={`text-sm font-medium px-2 ${
                                netVotes > 0
                                    ? 'text-orange-600'
                                    : netVotes < 0
                                    ? 'text-blue-600'
                                    : 'text-gray-500'
                            }`}
                        >
                            {netVotes}
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleVote('down')}
                            className={`rounded-full ${
                                userVote === 'down'
                                    ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                    : 'hover:bg-pink-100'
                            }`}
                        >
                            <ArrowDown className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Other actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowComments(!showComments)}
                            className="rounded-full hover:bg-pink-100"
                        >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full hover:bg-pink-100"
                        >
                            <Share2 className="w-4 h-4" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsBookmarked(!isBookmarked)}
                            className={`rounded-full ${
                                isBookmarked
                                    ? 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                    : 'hover:bg-pink-100'
                            }`}
                        >
                            <Bookmark className="w-4 h-4" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full hover:bg-red-100 hover:text-red-600"
                        >
                            <Flag className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Comments Section */}
                {showComments && (
                    <div className="mt-4 pt-4 border-t border-pink-50">
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xs">
                                        🍡
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 bg-pink-50 rounded-2xl p-3">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium">댓글러버</span>
                                        <span className="text-xs text-gray-500">2시간 전</span>
                                    </div>
                                    <p className="text-sm">
                                        와 정말 맛있어 보여요! 저도 가보고 싶네요 ㅎㅎ
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs h-6 px-2 rounded-full hover:bg-pink-100"
                                        >
                                            <ArrowUp className="w-3 h-3 mr-1" />5
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs h-6 px-2 rounded-full hover:bg-pink-100"
                                        >
                                            답글
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-xs">
                                        🎮
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 bg-pink-50 rounded-2xl p-3">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium">맛집탐험가</span>
                                        <span className="text-xs text-gray-500">1시간 전</span>
                                    </div>
                                    <p className="text-sm">
                                        신림동은 진짜 맛집이 많아요! 추천 감사합니다 👍
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs h-6 px-2 rounded-full hover:bg-pink-100"
                                        >
                                            <ArrowUp className="w-3 h-3 mr-1" />
                                            12
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-xs h-6 px-2 rounded-full hover:bg-pink-100"
                                        >
                                            답글
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {post.comments > 2 && (
                            <Button
                                variant="ghost"
                                className="w-full mt-3 text-pink-600 hover:bg-pink-50 rounded-xl"
                            >
                                댓글 {post.comments - 2}개 더 보기
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Card>
    );
}
