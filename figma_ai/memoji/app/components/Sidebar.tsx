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
    Utensils,
} from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Badge } from './(csr)/ui/badge';
import { Card } from './(csr)/ui/card';

interface SidebarProps {
    currentView: string;
    onViewChange: (view: 'home' | 'popular' | 'profile' | 'community') => void;
    selectedCommunity: string | null;
    onCommunitySelect: (community: string | null) => void;
}

const communities = [
    { name: '🍡 떡볶이 매니아', members: '12.5k', color: 'from-red-400 to-pink-500', icon: '🍡' },
    { name: '🎮 게임 이야기', members: '8.2k', color: 'from-blue-400 to-purple-500', icon: '🎮' },
    {
        name: '🎵 음악 감상실',
        members: '15.3k',
        color: 'from-purple-400 to-indigo-500',
        icon: '🎵',
    },
    { name: '📸 일상 사진', members: '22.1k', color: 'from-green-400 to-teal-500', icon: '📸' },
    { name: '🍜 맛집 탐방', members: '18.7k', color: 'from-orange-400 to-red-500', icon: '🍜' },
    { name: '💻 개발 이야기', members: '6.4k', color: 'from-gray-400 to-gray-600', icon: '💻' },
];

export function Sidebar({
    currentView,
    onViewChange,
    selectedCommunity,
    onCommunitySelect,
}: SidebarProps) {
    return (
        <aside className="w-80 h-screen sticky top-16 p-6 bg-white/50 backdrop-blur-sm border-r border-pink-100">
            <div className="space-y-6">
                {/* Main Navigation */}
                <Card className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-sm">
                    <div className="space-y-2">
                        <Button
                            variant={currentView === 'home' ? 'default' : 'ghost'}
                            className={`w-full justify-start rounded-xl ${
                                currentView === 'home'
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'hover:bg-pink-100'
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
                            className={`w-full justify-start rounded-xl ${
                                currentView === 'popular'
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'hover:bg-pink-100'
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
                            className={`w-full justify-start rounded-xl ${
                                currentView === 'profile'
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'hover:bg-pink-100'
                            }`}
                            onClick={() => {
                                onViewChange('profile');
                                onCommunitySelect(null);
                            }}
                        >
                            <User className="w-5 h-5 mr-3" />
                            마이페이지
                        </Button>
                    </div>
                </Card>

                {/* Create Community */}
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-2xl py-6 shadow-lg">
                    <Plus className="w-5 h-5 mr-2" />
                    커뮤니티 만들기
                </Button>

                {/* Communities */}
                <div>
                    <h3 className="px-4 mb-4 text-gray-600">내 커뮤니티</h3>
                    <div className="space-y-3">
                        {communities.map((community, index) => (
                            <Card
                                key={index}
                                className={`p-3 cursor-pointer transition-all hover:shadow-md ${
                                    selectedCommunity === community.name
                                        ? 'bg-gradient-to-r from-pink-100 to-purple-100 border-pink-300 shadow-md'
                                        : 'bg-white/70 border-pink-100 hover:bg-pink-50'
                                }`}
                                onClick={() => {
                                    onCommunitySelect(community.name);
                                    onViewChange('community');
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 bg-gradient-to-br ${community.color} rounded-xl flex items-center justify-center shadow-sm`}
                                    >
                                        <span className="text-white">{community.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="truncate">{community.name}</p>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-3 h-3 text-gray-500" />
                                            <span className="text-xs text-gray-500">
                                                {community.members}
                                            </span>
                                        </div>
                                    </div>
                                    {index < 3 && (
                                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-xs">
                                            {index + 2}
                                        </Badge>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Trending Topics */}
                <Card className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                    <h3 className="mb-3 text-purple-800">🔥 트렌딩 토픽</h3>
                    <div className="space-y-2">
                        {[
                            { tag: '#떡볶이맛집', posts: '1.2k' },
                            { tag: '#겨울간식', posts: '856' },
                            { tag: '#추천게임', posts: '743' },
                        ].map((topic, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <span className="text-purple-700">{topic.tag}</span>
                                <span className="text-purple-500">{topic.posts} 게시물</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </aside>
    );
}
