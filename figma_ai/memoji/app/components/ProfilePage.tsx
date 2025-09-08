'use client';
import React, { useState } from 'react';
import {
    Calendar,
    MapPin,
    Link2,
    Edit,
    Settings,
    Trophy,
    MessageCircle,
    Heart,
    TrendingUp,
} from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Badge } from './(csr)/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './(csr)/ui/tabs';
import { Progress } from './(csr)/ui/progress';

interface ProfilePageProps {
    isLoggedIn: boolean;
}

const userProfile = {
    username: '떡볶이러버123',
    displayName: '떡볶이 마니아',
    bio: '맛있는 떡볶이를 찾아 헤매는 중 🍡 | 서울 거주 | 맛집 탐방이 취미',
    joinDate: '2023년 3월',
    location: '서울, 대한민국',
    website: 'tteokbokki-lover.blog.com',
    followers: 1247,
    following: 156,
    karma: 3847,
};

const userStats = {
    posts: 47,
    comments: 312,
    upvotes: 3847,
    awards: 12,
};

const trophies = [
    {
        id: '1',
        name: '첫 번째 게시물',
        description: '첫 게시물을 작성했습니다',
        icon: '📝',
        unlocked: true,
        color: 'from-yellow-400 to-orange-500',
    },
    {
        id: '2',
        name: '인기 작성자',
        description: '100개의 업보트를 받았습니다',
        icon: '👑',
        unlocked: true,
        color: 'from-purple-400 to-pink-500',
    },
    {
        id: '3',
        name: '댓글 마스터',
        description: '50개의 댓글을 작성했습니다',
        icon: '💬',
        unlocked: true,
        color: 'from-blue-400 to-indigo-500',
    },
    {
        id: '4',
        name: '커뮤니티 리더',
        description: '커뮤니티를 생성했습니다',
        icon: '🏆',
        unlocked: true,
        color: 'from-green-400 to-teal-500',
    },
    {
        id: '5',
        name: '베테랑 멤버',
        description: '1년 이상 활동했습니다',
        icon: '⭐',
        unlocked: false,
        color: 'from-gray-300 to-gray-400',
    },
    {
        id: '6',
        name: '인플루언서',
        description: '1000명의 팔로워를 달성했습니다',
        icon: '🌟',
        unlocked: true,
        color: 'from-pink-400 to-purple-500',
    },
];

const recentPosts = [
    {
        id: '1',
        title: '신림동 떡볶이 맛집 발견했어요!',
        community: '🍡 떡볶이 매니아',
        upvotes: 124,
        comments: 28,
        timeAgo: '3시간 전',
    },
    {
        id: '2',
        title: '겨울에 먹기 좋은 따뜻한 떡볶이',
        community: '🍡 떡볶이 매니아',
        upvotes: 89,
        comments: 15,
        timeAgo: '1일 전',
    },
    {
        id: '3',
        title: '집에서 만든 떡볶이 레시피',
        community: '🍜 맛집 탐방',
        upvotes: 67,
        comments: 22,
        timeAgo: '3일 전',
    },
];

export function ProfilePage({ isLoggedIn }: ProfilePageProps) {
    const [selectedTab, setSelectedTab] = useState('overview');

    if (!isLoggedIn) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="p-12 text-center bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl text-white">🍡</span>
                    </div>
                    <h2 className="text-xl mb-2">로그인이 필요합니다</h2>
                    <p className="text-gray-600 mb-6">프로필 페이지를 보려면 로그인해주세요.</p>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-8">
                        로그인하기
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                            <AvatarImage src="https://images.unsplash.com/photo-1603248056857-ad25cc670e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwa29yZWFuJTIwcmljZSUyMGNha2UlMjBjaGFyYWN0ZXIlMjBrYXdhaWl8ZW58MXx8fHwxNzU3MzMzNzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                            <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-4xl">
                                🍡
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl font-bold">{userProfile.displayName}</h1>
                                <p className="text-gray-600">@{userProfile.username}</p>
                            </div>
                            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6">
                                <Edit className="w-4 h-4 mr-2" />
                                프로필 편집
                            </Button>
                        </div>

                        <p className="text-gray-700 mb-4">{userProfile.bio}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {userProfile.joinDate} 가입
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {userProfile.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Link2 className="w-4 h-4" />
                                <a href="#" className="text-pink-600 hover:underline">
                                    {userProfile.website}
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="text-center">
                                <div className="text-xl font-bold text-pink-600">
                                    {userProfile.followers.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">팔로워</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-purple-600">
                                    {userProfile.following.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">팔로잉</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-orange-600">
                                    {userProfile.karma.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">카르마</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Profile Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid w-full grid-cols-4 bg-pink-100 rounded-2xl">
                    <TabsTrigger
                        value="overview"
                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                    >
                        개요
                    </TabsTrigger>
                    <TabsTrigger
                        value="posts"
                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                    >
                        게시물
                    </TabsTrigger>
                    <TabsTrigger
                        value="comments"
                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                    >
                        댓글
                    </TabsTrigger>
                    <TabsTrigger
                        value="trophies"
                        className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                    >
                        트로피
                    </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4 text-center bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                            <MessageCircle className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-pink-700">
                                {userStats.posts}
                            </div>
                            <div className="text-sm text-pink-600">게시물</div>
                        </Card>
                        <Card className="p-4 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                            <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-purple-700">
                                {userStats.comments}
                            </div>
                            <div className="text-sm text-purple-600">댓글</div>
                        </Card>
                        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                            <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-orange-700">
                                {userStats.upvotes}
                            </div>
                            <div className="text-sm text-orange-600">받은 좋아요</div>
                        </Card>
                        <Card className="p-4 text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-yellow-700">
                                {userStats.awards}
                            </div>
                            <div className="text-sm text-yellow-600">어워드</div>
                        </Card>
                    </div>

                    {/* Recent Activity */}
                    <Card className="p-6">
                        <h3 className="text-lg mb-4">최근 활동</h3>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="flex items-center justify-between p-3 bg-pink-50 rounded-xl"
                                >
                                    <div>
                                        <h4 className="font-medium">{post.title}</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                            <Badge className="text-xs">{post.community}</Badge>
                                            <span>{post.timeAgo}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                            {post.upvotes}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="w-4 h-4" />
                                            {post.comments}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </TabsContent>

                {/* Posts Tab */}
                <TabsContent value="posts">
                    <Card className="p-6">
                        <h3 className="text-lg mb-4">내가 쓴 게시물 ({userStats.posts})</h3>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="p-4 border border-pink-100 rounded-xl hover:bg-pink-50 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="font-medium mb-2">{post.title}</h4>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Badge className="text-xs">{post.community}</Badge>
                                                <span>{post.timeAgo}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Heart className="w-4 h-4 text-red-500" />
                                                {post.upvotes}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MessageCircle className="w-4 h-4 text-blue-500" />
                                                {post.comments}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </TabsContent>

                {/* Comments Tab */}
                <TabsContent value="comments">
                    <Card className="p-6">
                        <h3 className="text-lg mb-4">내가 쓴 댓글 ({userStats.comments})</h3>
                        <div className="space-y-4">
                            <div className="p-4 border border-pink-100 rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">
                                    신림동 떡볶이 맛집 발견했어요! 게시물에 댓글
                                </p>
                                <p className="mb-2">
                                    "와 정말 맛있어 보여요! 저도 가보고 싶네요 ㅎㅎ"
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>2시간 전</span>
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-3 h-3 text-red-500" />
                                        12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Trophies Tab */}
                <TabsContent value="trophies">
                    <Card className="p-6">
                        <h3 className="text-lg mb-4">
                            트로피 컬렉션 ({trophies.filter(t => t.unlocked).length}/
                            {trophies.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {trophies.map(trophy => (
                                <div
                                    key={trophy.id}
                                    className={`p-4 rounded-2xl border transition-all ${
                                        trophy.unlocked
                                            ? 'bg-gradient-to-br from-white to-gray-50 border-pink-200 hover:shadow-md'
                                            : 'bg-gray-50 border-gray-200 opacity-60'
                                    }`}
                                >
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${
                                            trophy.color
                                        } rounded-2xl flex items-center justify-center mx-auto mb-3 ${
                                            trophy.unlocked ? 'shadow-lg' : 'grayscale'
                                        }`}
                                    >
                                        <span className="text-2xl text-white">{trophy.icon}</span>
                                    </div>
                                    <div className="text-center">
                                        <h4
                                            className={`font-medium mb-1 ${
                                                trophy.unlocked ? 'text-gray-900' : 'text-gray-500'
                                            }`}
                                        >
                                            {trophy.name}
                                        </h4>
                                        <p
                                            className={`text-sm ${
                                                trophy.unlocked ? 'text-gray-600' : 'text-gray-400'
                                            }`}
                                        >
                                            {trophy.description}
                                        </p>
                                        {!trophy.unlocked && (
                                            <Badge className="mt-2 bg-gray-200 text-gray-600">
                                                잠금
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
