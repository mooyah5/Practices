'use client';
import React, { useState } from 'react';
import {
    X,
    CheckCheck,
    Heart,
    MessageCircle,
    UserPlus,
    TrendingUp,
    Award,
    Bell,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

interface ModernNotificationPanelProps {
    onClose: () => void;
}

const notifications = [
    {
        id: '1',
        type: 'like',
        user: 'john_doe',
        userAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        content: 'liked your post "The Future of Web Development"',
        time: '5 min ago',
        isRead: false,
        icon: <Heart className="w-4 h-4 text-red-500" />,
    },
    {
        id: '2',
        type: 'comment',
        user: 'sarah_design',
        userAvatar:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        content:
            'commented on your post: "Great insights! I particularly loved the section about..."',
        time: '15 min ago',
        isRead: false,
        icon: <MessageCircle className="w-4 h-4 text-blue-500" />,
    },
    {
        id: '3',
        type: 'follow',
        user: 'alex_dev',
        userAvatar:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        content: 'started following you',
        time: '1 hour ago',
        isRead: false,
        icon: <UserPlus className="w-4 h-4 text-green-500" />,
    },
    {
        id: '4',
        type: 'mention',
        user: 'mike_code',
        userAvatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
        content:
            'mentioned you in a comment: "@currentuser what do you think about this approach?"',
        time: '2 hours ago',
        isRead: true,
        icon: <MessageCircle className="w-4 h-4 text-purple-500" />,
    },
    {
        id: '5',
        type: 'trending',
        user: 'system',
        userAvatar: '',
        content: "Your post is trending! It's currently #3 in r/Technology",
        time: '3 hours ago',
        isRead: true,
        icon: <TrendingUp className="w-4 h-4 text-orange-500" />,
    },
    {
        id: '6',
        type: 'award',
        user: 'system',
        userAvatar: '',
        content: 'You earned a new achievement: "Popular Post" (100+ upvotes)',
        time: '1 day ago',
        isRead: true,
        icon: <Award className="w-4 h-4 text-yellow-500" />,
    },
];

export function ModernNotificationPanel({ onClose }: ModernNotificationPanelProps) {
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
        <div className="fixed right-8 top-20 w-80 h-[calc(100vh-6rem)] bg-white border border-gray-200 shadow-2xl z-40 flex flex-col rounded-lg">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg text-gray-900">Notifications</h3>
                        {unreadCount > 0 && (
                            <Badge className="bg-red-600 text-white">{unreadCount}</Badge>
                        )}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {unreadCount > 0 && (
                    <Button
                        onClick={markAllAsRead}
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-200 text-gray-700 hover:bg-gray-100 h-9"
                    >
                        <CheckCheck className="w-4 h-4 mr-2" />
                        Mark all as read
                    </Button>
                )}
            </div>

            {/* Notifications */}
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-1">
                    {notificationList.map((notification, index) => (
                        <div key={notification.id}>
                            <button
                                onClick={() => markAsRead(notification.id)}
                                className={`w-full p-3 rounded-lg text-left transition-colors ${
                                    !notification.isRead
                                        ? 'bg-blue-50 hover:bg-blue-100 border border-blue-200'
                                        : 'hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex gap-3">
                                    {notification.user !== 'system' ? (
                                        <Avatar className="w-10 h-10 flex-shrink-0">
                                            <AvatarImage src={notification.userAvatar} />
                                            <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                                                {notification.user[0].toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    ) : (
                                        <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                                            <Bell className="w-5 h-5 text-gray-600" />
                                        </div>
                                    )}

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start gap-2">
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-900">
                                                    {notification.user !== 'system' && (
                                                        <span className="font-medium">
                                                            {notification.user}{' '}
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
                                                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </button>
                            {index < notificationList.length - 1 && <Separator className="my-1" />}
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
                <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50 h-9">
                    View all notifications
                </Button>
            </div>
        </div>
    );
}
