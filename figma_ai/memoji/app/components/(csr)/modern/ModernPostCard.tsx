'use client';
import React, { useState } from 'react';
import {
    ArrowUp,
    ArrowDown,
    MessageCircle,
    Share2,
    Bookmark,
    MoreHorizontal,
    Award,
    ExternalLink,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Separator } from '../ui/separator';

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
    awards: number;
}

interface ModernPostCardProps {
    post: Post;
}

export function ModernPostCard({ post }: ModernPostCardProps) {
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
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            {/* Voting sidebar */}
            <div className="flex">
                <div className="flex flex-col items-center justify-start p-4 bg-gray-50 border-r border-gray-200">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote('up')}
                        className={`w-8 h-8 p-0 mb-1 ${
                            userVote === 'up'
                                ? 'text-orange-600 bg-orange-50 hover:bg-orange-100'
                                : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                        }`}
                    >
                        <ArrowUp className="w-5 h-5" />
                    </Button>
                    <span
                        className={`text-sm mb-1 px-1 ${
                            netVotes > 0
                                ? 'text-orange-600'
                                : netVotes < 0
                                ? 'text-blue-600'
                                : 'text-gray-500'
                        }`}
                    >
                        {netVotes > 999 ? `${(netVotes / 1000).toFixed(1)}k` : netVotes}
                    </span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote('down')}
                        className={`w-8 h-8 p-0 ${
                            userVote === 'down'
                                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                                : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                        <ArrowDown className="w-5 h-5" />
                    </Button>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    {/* Header */}
                    <div className="p-4 pb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                            <Badge
                                variant="outline"
                                className="text-xs border-gray-300 text-gray-700"
                            >
                                r/{post.community}
                            </Badge>
                            <span>•</span>
                            <span>Posted by</span>
                            <span className="text-gray-900">u/{post.author}</span>
                            <span>•</span>
                            <span>{post.timeAgo} ago</span>
                            {post.awards > 0 && (
                                <>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Award className="w-4 h-4 text-yellow-500" />
                                        <span>{post.awards}</span>
                                    </div>
                                </>
                            )}
                        </div>

                        <h2 className="text-lg text-gray-900 mb-3 leading-tight hover:text-blue-600 cursor-pointer">
                            {post.title}
                        </h2>

                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.content}</p>

                        {post.image && (
                            <div className="mb-4">
                                <ImageWithFallback
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover rounded-lg border border-gray-200"
                                />
                            </div>
                        )}
                    </div>

                    <Separator />

                    {/* Actions */}
                    <div className="px-4 py-3">
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowComments(!showComments)}
                                className="text-gray-600 hover:bg-gray-100 h-8"
                            >
                                <MessageCircle className="w-4 h-4 mr-1.5" />
                                {post.comments} Comments
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:bg-gray-100 h-8"
                            >
                                <Share2 className="w-4 h-4 mr-1.5" />
                                Share
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className={`h-8 ${
                                    isBookmarked
                                        ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                <Bookmark className="w-4 h-4 mr-1.5" />
                                Save
                            </Button>

                            <div className="flex-1" />

                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:bg-gray-100 w-8 h-8 p-0"
                            >
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Comments Section */}
                        {showComments && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <Avatar className="w-8 h-8 flex-shrink-0">
                                            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80" />
                                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                                U
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-sm text-gray-900">
                                                    techuser123
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    2h ago
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-2">
                                                Great article! I've been following these trends as
                                                well and couldn't agree more with your insights
                                                about the future direction.
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs h-6 px-2 text-gray-600 hover:bg-gray-100"
                                                >
                                                    <ArrowUp className="w-3 h-3 mr-1" />
                                                    25
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs h-6 px-2 text-gray-600 hover:bg-gray-100"
                                                >
                                                    Reply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Avatar className="w-8 h-8 flex-shrink-0">
                                            <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80" />
                                            <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                                D
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-sm text-gray-900">
                                                    developer_jane
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    1h ago
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-2">
                                                Thanks for sharing this! Do you have any
                                                recommendations for resources to learn more about
                                                these emerging technologies?
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs h-6 px-2 text-gray-600 hover:bg-gray-100"
                                                >
                                                    <ArrowUp className="w-3 h-3 mr-1" />
                                                    12
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs h-6 px-2 text-gray-600 hover:bg-gray-100"
                                                >
                                                    Reply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {post.comments > 2 && (
                                    <Button
                                        variant="ghost"
                                        className="w-full mt-4 text-blue-600 hover:bg-blue-50 h-8"
                                    >
                                        View {post.comments - 2} more comments
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
