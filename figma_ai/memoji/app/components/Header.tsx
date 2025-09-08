'use client';
import React, { useState } from 'react';
import { Search, Bell, MessageCircle, User, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Input } from './(csr)/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { Badge } from './(csr)/ui/badge';

interface HeaderProps {
    isLoggedIn: boolean;
    onLoginClick: () => void;
    onLogout: () => void;
    onNotificationClick: () => void;
    onChatClick: () => void;
}

export function Header({
    isLoggedIn,
    onLoginClick,
    onLogout,
    onNotificationClick,
    onChatClick,
}: HeaderProps) {
    const [isDark, setIsDark] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white">🍡</span>
                    </div>
                    <h1 className="text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        떡메모지
                    </h1>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                            placeholder="커뮤니티나 게시물 검색..."
                            className="pl-10 bg-pink-50/50 border-pink-200 rounded-full focus:bg-white transition-colors"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDark(!isDark)}
                        className="w-10 h-10 rounded-full hover:bg-pink-100"
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
                                className="relative w-10 h-10 rounded-full hover:bg-pink-100"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-white">
                                    3
                                </Badge>
                            </Button>

                            {/* Notifications */}
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onNotificationClick}
                                className="relative w-10 h-10 rounded-full hover:bg-pink-100"
                            >
                                <Bell className="w-5 h-5" />
                                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-white">
                                    5
                                </Badge>
                            </Button>

                            {/* Profile */}
                            <div className="flex items-center gap-2">
                                <Avatar className="w-10 h-10 border-2 border-pink-200">
                                    <AvatarImage src="https://images.unsplash.com/photo-1603248056857-ad25cc670e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwa29yZWFuJTIwcmljZSUyMGNha2UlMjBjaGFyYWN0ZXIlMjBrYXdhaWl8ZW58MXx8fHwxNzU3MzMzNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                                        🍡
                                    </AvatarFallback>
                                </Avatar>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={onLogout}
                                    className="w-10 h-10 rounded-full hover:bg-pink-100"
                                >
                                    <LogOut className="w-4 h-4" />
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Button
                            onClick={onLoginClick}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6 shadow-lg"
                        >
                            로그인
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
