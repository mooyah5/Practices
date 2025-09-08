'use client';
import React, { useState } from 'react';
import { Image, Link, Smile, Send, X } from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Textarea } from './(csr)/ui/textarea';
import { Input } from './(csr)/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { Badge } from './(csr)/ui/badge';

export function CreatePost() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedCommunity, setSelectedCommunity] = useState('🍡 떡볶이 매니아');

    const communities = [
        '🍡 떡볶이 매니아',
        '🎮 게임 이야기',
        '🎵 음악 감상실',
        '📸 일상 사진',
        '🍜 맛집 탐방',
        '💻 개발 이야기',
    ];

    const handleSubmit = () => {
        if (title.trim() && content.trim()) {
            // Handle post creation
            console.log({ title, content, community: selectedCommunity });
            setTitle('');
            setContent('');
            setIsExpanded(false);
        }
    };

    return (
        <Card className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-sm">
            <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10 border-2 border-pink-200">
                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                        🍡
                    </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                    {!isExpanded ? (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="w-full text-left p-3 bg-white/70 rounded-2xl border border-pink-200 hover:bg-white transition-colors"
                        >
                            <span className="text-gray-500">무엇을 공유하고 싶나요? ✨</span>
                        </button>
                    ) : (
                        <div className="space-y-4">
                            {/* Community Selector */}
                            <div className="flex items-center gap-2 flex-wrap">
                                {communities.map(community => (
                                    <Badge
                                        key={community}
                                        variant={
                                            selectedCommunity === community ? 'default' : 'outline'
                                        }
                                        className={`cursor-pointer transition-colors ${
                                            selectedCommunity === community
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                                : 'hover:bg-pink-100'
                                        }`}
                                        onClick={() => setSelectedCommunity(community)}
                                    >
                                        {community}
                                    </Badge>
                                ))}
                            </div>

                            {/* Title */}
                            <Input
                                placeholder="제목을 입력하세요..."
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="bg-white/70 border-pink-200 rounded-xl focus:bg-white"
                            />

                            {/* Content */}
                            <Textarea
                                placeholder="내용을 입력하세요..."
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                rows={4}
                                className="bg-white/70 border-pink-200 rounded-xl focus:bg-white resize-none"
                            />

                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full hover:bg-pink-100"
                                    >
                                        <Image className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full hover:bg-pink-100"
                                    >
                                        <Link className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full hover:bg-pink-100"
                                    >
                                        <Smile className="w-4 h-4" />
                                    </Button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            setIsExpanded(false);
                                            setTitle('');
                                            setContent('');
                                        }}
                                        className="rounded-full hover:bg-red-100 hover:text-red-600"
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!title.trim() || !content.trim()}
                                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        게시
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
