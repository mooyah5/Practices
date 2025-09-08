'use client';
import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';

interface ModernLoginModalProps {
    onClose: () => void;
    onLogin: () => void;
}

export function ModernLoginModal({ onClose, onLogin }: ModernLoginModalProps) {
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
            <Card className="w-full max-w-md bg-white border border-gray-200 shadow-2xl">
                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl text-gray-900 mb-1">Welcome back</h2>
                            <p className="text-gray-600 text-sm">
                                Sign in to your account to continue
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3 mb-6">
                        <Button
                            variant="outline"
                            className="w-full h-12 border-gray-200 hover:bg-gray-50"
                            onClick={onLogin}
                        >
                            <div className="w-5 h-5 mr-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded text-white flex items-center justify-center text-xs font-bold">
                                G
                            </div>
                            Continue with Google
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full h-12 border-gray-200 hover:bg-gray-50"
                            onClick={onLogin}
                        >
                            <Github className="w-5 h-5 mr-3" />
                            Continue with GitHub
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <Separator />
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                            or
                        </span>
                    </div>

                    {/* Login/Register Tabs */}
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 h-12">
                            <TabsTrigger
                                value="login"
                                className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                            >
                                Sign In
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                            >
                                Sign Up
                            </TabsTrigger>
                        </TabsList>

                        {/* Login Form */}
                        <TabsContent value="login">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="login-email" className="text-gray-700">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="login-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="pl-12 h-12 border-gray-200 focus:border-gray-300"
                                            value={formData.email}
                                            onChange={e =>
                                                handleInputChange('email', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="login-password" className="text-gray-700">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="login-password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            className="pl-12 pr-12 h-12 border-gray-200 focus:border-gray-300"
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
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 p-0 hover:bg-transparent text-gray-400"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-5 h-5" />
                                            ) : (
                                                <Eye className="w-5 h-5" />
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2 text-gray-600">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300"
                                        />
                                        Remember me
                                    </label>
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12"
                                >
                                    Sign In
                                </Button>
                            </form>
                        </TabsContent>

                        {/* Register Form */}
                        <TabsContent value="register">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="register-username" className="text-gray-700">
                                        Username
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="register-username"
                                            type="text"
                                            placeholder="Choose a username"
                                            className="pl-12 h-12 border-gray-200 focus:border-gray-300"
                                            value={formData.username}
                                            onChange={e =>
                                                handleInputChange('username', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="register-email" className="text-gray-700">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="register-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="pl-12 h-12 border-gray-200 focus:border-gray-300"
                                            value={formData.email}
                                            onChange={e =>
                                                handleInputChange('email', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="register-password" className="text-gray-700">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="register-password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Create a password"
                                            className="pl-12 h-12 border-gray-200 focus:border-gray-300"
                                            value={formData.password}
                                            onChange={e =>
                                                handleInputChange('password', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="register-confirm" className="text-gray-700">
                                        Confirm Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <Input
                                            id="register-confirm"
                                            type="password"
                                            placeholder="Confirm your password"
                                            className="pl-12 h-12 border-gray-200 focus:border-gray-300"
                                            value={formData.confirmPassword}
                                            onChange={e =>
                                                handleInputChange('confirmPassword', e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="text-xs text-gray-500">
                                    By creating an account, you agree to our{' '}
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        Terms of Service
                                    </button>{' '}
                                    and{' '}
                                    <button
                                        type="button"
                                        className="text-blue-600 hover:text-blue-700"
                                    >
                                        Privacy Policy
                                    </button>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12"
                                >
                                    Create Account
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    );
}
