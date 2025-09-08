'use client';
import React, { useState } from 'react';
import {
    X,
    Check,
    CheckCheck,
    Heart,
    MessageCircle,
    UserPlus,
    TrendingUp,
    Award,
} from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { Badge } from './(csr)/ui/badge';
import { ScrollArea } from './(csr)/ui/scroll-area';

interface NotificationPanelProps {
    onClose: () => void;
}

const notifications = [
    {
        id: '1',
        type: 'like',
        user: '떡볶이러버',
        userAvatar: '🍡',
        content: '님이 회원님의 게시물을 좋아합니다: "신림동 떡볶이 맛집 발견했어요!"',
        time: '5분 전',
        isRead: false,
        icon: <Heart className="w-4 h-4 text-red-500" />,
    },
    {
        id: '2',
        type: 'comment',
        user: '맛집탐험가',
        userAvatar: '🍜',
        content: '님이 회원님의 게시물에 댓글을 달았습니다: "저도 가보고 싶네요!"',
        time: '15분 전',
        isRead: false,
        icon: <MessageCircle className="w-4 h-4 text-blue-500" />,
    },
    {
        id: '3',
        type: 'follow',
        user: '사진작가지망생',
        userAvatar: '📸',
        content: '님이 회원님을 팔로우하기 시작했습니다.',
        time: '1시간 전',
        isRead: false,
        icon: <UserPlus className="w-4 h-4 text-green-500" />,
    },
    {
        id: '4',
        type: 'mention',
        user: '게임마니아',
        userAvatar: '🎮',
        content: '님이 댓글에서 회원님을 언급했습니다: "@현재사용자 이 게임 어떻게 생각해요?"',
        time: '2시간 전',
        isRead: true,
        icon: <MessageCircle className="w-4 h-4 text-purple-500" />,
    },
    {
        id: '5',
        type: 'trending',
        user: 'system',
        userAvatar: '🔥',
        content: '회원님의 게시물이 인기 피드에 올라갔습니다!',
        time: '3시간 전',
        isRead: true,
        icon: <TrendingUp className="w-4 h-4 text-orange-500" />,
    },
    {
        id: '6',
        type: 'award',
        user: 'system',
        userAvatar: '🏆',
        content: '새로운 트로피를 획득했습니다: "첫 번째 게시물"',
        time: '1일 전',
        isRead: true,
        icon: <Award className="w-4 h-4 text-yellow-500" />,
    },
];

export function NotificationPanel({ onClose }: NotificationPanelProps) {
    const [notificationList, setNotificationList] = useState(notifications);

    const markAllAsRead = () => {
        setNotificationList(prev => prev.map(notification => ({ ...notification, isRead: true })));
    };

    const markAsRead = (id: string) => {
        setNotificationList(prev =>
            prev.map(notification =>
                notification.id === id ? { ...notification, isRead: true } : notification,
            ),
        );
    };

    const unreadCount = notificationList.filter(n => !n.isRead).length;

    return (
        <div className="fixed right-6 top-20 w-80 h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-lg rounded-2xl border border-pink-200 shadow-2xl z-40 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-pink-100">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            🔔 알림
                        </h3>
                        {unreadCount > 0 && (
                            <Badge className="bg-gradient-to-r from-pink-500 to-purple-500">
                                {unreadCount}
                            </Badge>
                        )}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="w-8 h-8 rounded-full hover:bg-pink-100"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {unreadCount > 0 && (
                    <Button
                        onClick={markAllAsRead}
                        variant="outline"
                        size="sm"
                        className="w-full border-pink-200 rounded-xl hover:bg-pink-50"
                    >
                        <CheckCheck className="w-4 h-4 mr-2" />
                        모두 읽음으로 표시
                    </Button>
                )}
            </div>

            {/* Notifications */}
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-3">
                    {notificationList.map(notification => (
                        <Card
                            key={notification.id}
                            className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                                !notification.isRead
                                    ? 'bg-gradient-to-r from-pink-50 to-purple-50 border-pink-300'
                                    : 'bg-white/70 border-pink-100 hover:bg-pink-50'
                            }`}
                            onClick={() => markAsRead(notification.id)}
                        >
                            <div className="flex gap-3">
                                {notification.user !== 'system' ? (
                                    <Avatar className="w-10 h-10 flex-shrink-0 border-2 border-pink-200">
                                        <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                                            {notification.userAvatar}
                                        </AvatarFallback>
                                    </Avatar>
                                ) : (
                                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white">
                                            {notification.userAvatar}
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <p className="text-sm">
                                                {notification.user !== 'system' && (
                                                    <span className="font-medium">
                                                        {notification.user}
                                                    </span>
                                                )}
                                                {notification.content}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                {notification.icon}
                                                <span className="text-xs text-gray-500">
                                                    {notification.time}
                                                </span>
                                            </div>
                                        </div>

                                        {!notification.isRead && (
                                            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex-shrink-0 mt-1" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t border-pink-100">
                <Button
                    variant="ghost"
                    className="w-full text-pink-600 hover:bg-pink-50 rounded-xl"
                >
                    모든 알림 보기
                </Button>
            </div>
        </div>
    );
}
