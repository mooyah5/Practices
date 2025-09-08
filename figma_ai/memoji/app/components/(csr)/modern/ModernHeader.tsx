'use client';
import React, { useState } from 'react';
import { Search, Bell, MessageCircle, User, LogOut, Moon, Sun, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

interface ModernHeaderProps {
    isLoggedIn: boolean;
    onLoginClick: () => void;
    onLogout: () => void;
    onNotificationClick: () => void;
    onChatClick: () => void;
}

export function ModernHeader({
    isLoggedIn,
    onLoginClick,
    onLogout,
    onNotificationClick,
    onChatClick,
}: ModernHeaderProps) {
    const [isDark, setIsDark] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <h1 className="text-xl text-gray-900 tracking-tight">Community</h1>
                    </div>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-lg mx-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                            placeholder="커뮤니티나 게시물 검색..."
                            className="pl-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-gray-300 h-12 rounded-lg"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDark(!isDark)}
                        className="w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>

                    {isLoggedIn ? (
                        <>
                            {/* Chat */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onChatClick}
                                className="relative w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-blue-600 text-xs border-2 border-white">
                                    3
                                </Badge>
                            </Button>

                            {/* Notifications */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onNotificationClick}
                                className="relative w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            >
                                <Bell className="w-5 h-5" />
                                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-red-600 text-xs border-2 border-white">
                                    5
                                </Badge>
                            </Button>

                            {/* Profile */}
                            <div className="flex items-center gap-3 ml-2 pl-3 border-l border-gray-200">
                                <Avatar className="w-10 h-10 border border-gray-200">
                                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80" />
                                    <AvatarFallback className="bg-gray-100 text-gray-600">
                                        <User className="w-5 h-5" />
                                    </AvatarFallback>
                                </Avatar>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onLogout}
                                    className="w-10 h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                >
                                    <LogOut className="w-4 h-4" />
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Button
                            onClick={onLoginClick}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 h-10"
                        >
                            로그인
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
