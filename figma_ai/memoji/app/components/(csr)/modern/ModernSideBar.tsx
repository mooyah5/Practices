import React from 'react';
import {
    Home,
    TrendingUp,
    User,
    Plus,
    Hash,
    Users,
    Gamepad2,
    Music,
    Camera,
    Coffee,
    Code,
    BookOpen,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';

interface ModernSidebarProps {
    currentView: string;
    onViewChange: (view: 'home' | 'popular' | 'profile' | 'community') => void;
    selectedCommunity: string | null;
    onCommunitySelect: (community: string | null) => void;
}

const communities = [
    { name: 'Technology', members: '125k', icon: Code, color: 'bg-blue-100 text-blue-700' },
    { name: 'Gaming', members: '82k', icon: Gamepad2, color: 'bg-purple-100 text-purple-700' },
    { name: 'Music', members: '153k', icon: Music, color: 'bg-green-100 text-green-700' },
    { name: 'Photography', members: '221k', icon: Camera, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Food & Drink', members: '187k', icon: Coffee, color: 'bg-orange-100 text-orange-700' },
    { name: 'Books', members: '64k', icon: BookOpen, color: 'bg-indigo-100 text-indigo-700' },
];

export function ModernSidebar({
    currentView,
    onViewChange,
    selectedCommunity,
    onCommunitySelect,
}: ModernSidebarProps) {
    return (
        <aside className="w-80 h-screen sticky top-16 bg-white border-r border-gray-200">
            <div className="p-6 space-y-6">
                {/* Main Navigation */}
                <div className="space-y-2">
                    <Button
                        variant={currentView === 'home' ? 'default' : 'ghost'}
                        className={`w-full justify-start h-12 ${
                            currentView === 'home'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                            onViewChange('home');
                            onCommunitySelect(null);
                        }}
                    >
                        <Home className="w-5 h-5 mr-3" />홈 피드
                    </Button>

                    <Button
                        variant={currentView === 'popular' ? 'default' : 'ghost'}
                        className={`w-full justify-start h-12 ${
                            currentView === 'popular'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                            onViewChange('popular');
                            onCommunitySelect(null);
                        }}
                    >
                        <TrendingUp className="w-5 h-5 mr-3" />
                        인기 피드
                    </Button>

                    <Button
                        variant={currentView === 'profile' ? 'default' : 'ghost'}
                        className={`w-full justify-start h-12 ${
                            currentView === 'profile'
                                ? 'bg-gray-900 text-white hover:bg-gray-800'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                            onViewChange('profile');
                            onCommunitySelect(null);
                        }}
                    >
                        <User className="w-5 h-5 mr-3" />
                        프로필
                    </Button>
                </div>

                <Separator />

                {/* Create Community */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
                    <Plus className="w-5 h-5 mr-2" />
                    커뮤니티 만들기
                </Button>

                <Separator />

                {/* Communities */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider">커뮤니티</h3>
                    </div>
                    <div className="space-y-1">
                        {communities.map((community, index) => {
                            const IconComponent = community.icon;
                            return (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    className={`w-full justify-start h-12 ${
                                        selectedCommunity === community.name
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    onClick={() => {
                                        onCommunitySelect(community.name);
                                        onViewChange('community');
                                    }}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${community.color}`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">{community.name}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-gray-500">
                                                    {community.members}
                                                </span>
                                                {index < 3 && (
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            );
                        })}
                    </div>
                </div>

                <Separator />

                {/* Trending Topics */}
                <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">트렌딩</h3>
                    <div className="space-y-3">
                        {[
                            { tag: '#webdevelopment', posts: '12k posts' },
                            { tag: '#javascript', posts: '8.5k posts' },
                            { tag: '#design', posts: '7.4k posts' },
                        ].map((topic, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-900">{topic.tag}</div>
                                    <div className="text-xs text-gray-500">{topic.posts}</div>
                                </div>
                                <Hash className="w-4 h-4 text-gray-400" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
