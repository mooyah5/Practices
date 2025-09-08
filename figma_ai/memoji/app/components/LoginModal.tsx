'use client';
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Input } from './(csr)/ui/input';
import { Label } from './(csr)/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './(csr)/ui/tabs';

interface LoginModalProps {
    onClose: () => void;
    onLogin: () => void;
}

export function LoginModal({ onClose, onLogin }: LoginModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg border-pink-200 shadow-2xl">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center">
                                <span className="text-white">🍡</span>
                            </div>
                            <h2 className="text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                떡메모지 로그인
                            </h2>
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

                    {/* Login/Register Tabs */}
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-pink-100">
                            <TabsTrigger
                                value="login"
                                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                            >
                                로그인
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                            >
                                회원가입
                            </TabsTrigger>
                        </TabsList>

                        {/* Login Form */}
                        <TabsContent value="login">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="login-email">이메일</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="login-email"
                                            type="email"
                                            placeholder="이메일을 입력하세요"
                                            className="pl-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.email}
                                            onChange={e =>
                                                handleInputChange('email', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="login-password">비밀번호</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="login-password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="비밀번호를 입력하세요"
                                            className="pl-10 pr-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.password}
                                            onChange={e =>
                                                handleInputChange('password', e.target.value)
                                            }
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 p-0 hover:bg-transparent"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl py-3"
                                >
                                    로그인
                                </Button>
                            </form>
                        </TabsContent>

                        {/* Register Form */}
                        <TabsContent value="register">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="register-username">사용자명</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="register-username"
                                            type="text"
                                            placeholder="사용자명을 입력하세요"
                                            className="pl-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.username}
                                            onChange={e =>
                                                handleInputChange('username', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="register-email">이메일</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="register-email"
                                            type="email"
                                            placeholder="이메일을 입력하세요"
                                            className="pl-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.email}
                                            onChange={e =>
                                                handleInputChange('email', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="register-password">비밀번호</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="register-password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="비밀번호를 입력하세요"
                                            className="pl-10 pr-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.password}
                                            onChange={e =>
                                                handleInputChange('password', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="register-confirm">비밀번호 확인</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <Input
                                            id="register-confirm"
                                            type="password"
                                            placeholder="비밀번호를 다시 입력하세요"
                                            className="pl-10 bg-pink-50/50 border-pink-200 rounded-xl focus:bg-white"
                                            value={formData.confirmPassword}
                                            onChange={e =>
                                                handleInputChange('confirmPassword', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl py-3"
                                >
                                    회원가입
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-pink-200" />
                        <span className="px-4 text-sm text-gray-500">또는</span>
                        <div className="flex-1 h-px bg-pink-200" />
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="w-full border-pink-200 rounded-xl hover:bg-pink-50"
                            onClick={onLogin}
                        >
                            <div className="w-5 h-5 mr-3 bg-red-500 rounded text-white flex items-center justify-center text-xs">
                                G
                            </div>
                            구글로 계속하기
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full border-pink-200 rounded-xl hover:bg-pink-50"
                            onClick={onLogin}
                        >
                            <div className="w-5 h-5 mr-3 bg-yellow-400 rounded text-black flex items-center justify-center text-xs">
                                K
                            </div>
                            카카오로 계속하기
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
