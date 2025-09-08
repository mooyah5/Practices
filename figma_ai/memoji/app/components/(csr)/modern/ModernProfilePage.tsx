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
    Mail,
    Globe,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';

interface ModernProfilePageProps {
    isLoggedIn: boolean;
}

const userProfile = {
    username: 'johndoe',
    displayName: 'John Doe',
    bio: 'Full-stack developer passionate about creating beautiful, functional web applications. Always learning and sharing knowledge with the community.',
    joinDate: 'March 2023',
    location: 'San Francisco, CA',
    website: 'johndoe.dev',
    email: 'john@example.com',
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

const achievements = [
    {
        id: '1',
        name: 'First Post',
        description: 'Created your first post',
        icon: '📝',
        unlocked: true,
        category: 'Getting Started',
    },
    {
        id: '2',
        name: 'Popular Creator',
        description: 'Received 100+ upvotes on a post',
        icon: '👑',
        unlocked: true,
        category: 'Content',
    },
    {
        id: '3',
        name: 'Helpful Commenter',
        description: 'Left 50+ helpful comments',
        icon: '💬',
        unlocked: true,
        category: 'Community',
    },
    {
        id: '4',
        name: 'Community Builder',
        description: 'Created a community',
        icon: '🏆',
        unlocked: true,
        category: 'Leadership',
    },
    {
        id: '5',
        name: 'Veteran Member',
        description: 'Active for over 1 year',
        icon: '⭐',
        unlocked: false,
        category: 'Loyalty',
    },
    {
        id: '6',
        name: 'Influencer',
        description: 'Reached 1000+ followers',
        icon: '🌟',
        unlocked: true,
        category: 'Growth',
    },
];

const recentPosts = [
    {
        id: '1',
        title: 'The Future of Web Development: What to Expect in 2024',
        community: 'Technology',
        upvotes: 1247,
        comments: 184,
        timeAgo: '3h',
    },
    {
        id: '2',
        title: 'Building Accessible React Components: A Complete Guide',
        community: 'Technology',
        upvotes: 892,
        comments: 67,
        timeAgo: '1d',
    },
    {
        id: '3',
        title: 'My Experience with TypeScript in Large Projects',
        community: 'Programming',
        upvotes: 567,
        comments: 89,
        timeAgo: '3d',
    },
];

export function ModernProfilePage({ isLoggedIn }: ModernProfilePageProps) {
    const [selectedTab, setSelectedTab] = useState('overview');

    if (!isLoggedIn) {
        return (
            <div className="max-w-2xl mx-auto">
                <Card className="p-12 text-center border border-gray-200">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
                    </div>
                    <h2 className="text-xl text-gray-900 mb-2">Sign in required</h2>
                    <p className="text-gray-600 mb-6">You need to sign in to view your profile.</p>
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                        Sign In
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Header */}
            <Card className="p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=200&q=80" />
                            <AvatarFallback className="bg-gray-100 text-gray-600 text-4xl">
                                JD
                            </AvatarFallback>
                        </Avatar>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl text-gray-900 mb-1">
                                    {userProfile.displayName}
                                </h1>
                                <p className="text-gray-600">u/{userProfile.username}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="outline" className="border-gray-300">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Settings
                                </Button>
                                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </Button>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6">{userProfile.bio}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Joined {userProfile.joinDate}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {userProfile.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                <a href="#" className="text-blue-600 hover:underline">
                                    {userProfile.website}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {userProfile.email}
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-xl text-gray-900 mb-1">
                                    {userProfile.followers.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Followers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl text-gray-900 mb-1">
                                    {userProfile.following.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Following</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl text-gray-900 mb-1">
                                    {userProfile.karma.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Post Karma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Profile Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid w-full grid-cols-4 bg-gray-100 h-12">
                    <TabsTrigger
                        value="overview"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="posts"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    >
                        Posts
                    </TabsTrigger>
                    <TabsTrigger
                        value="comments"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    >
                        Comments
                    </TabsTrigger>
                    <TabsTrigger
                        value="achievements"
                        className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
                    >
                        Achievements
                    </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-6 text-center border border-gray-200">
                            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">{userStats.posts}</div>
                            <div className="text-sm text-gray-600">Posts</div>
                        </Card>
                        <Card className="p-6 text-center border border-gray-200">
                            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">{userStats.comments}</div>
                            <div className="text-sm text-gray-600">Comments</div>
                        </Card>
                        <Card className="p-6 text-center border border-gray-200">
                            <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">{userStats.upvotes}</div>
                            <div className="text-sm text-gray-600">Upvotes Received</div>
                        </Card>
                        <Card className="p-6 text-center border border-gray-200">
                            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">{userStats.awards}</div>
                            <div className="text-sm text-gray-600">Awards</div>
                        </Card>
                    </div>

                    {/* Recent Activity */}
                    <Card className="p-6 border border-gray-200">
                        <h3 className="text-lg text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                >
                                    <div>
                                        <h4 className="text-gray-900 mb-1">{post.title}</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Badge
                                                variant="outline"
                                                className="text-xs border-gray-300"
                                            >
                                                r/{post.community}
                                            </Badge>
                                            <span>{post.timeAgo} ago</span>
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
                    <Card className="p-6 border border-gray-200">
                        <h3 className="text-lg text-gray-900 mb-4">My Posts ({userStats.posts})</h3>
                        <div className="space-y-4">
                            {recentPosts.map(post => (
                                <div
                                    key={post.id}
                                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="text-gray-900 mb-2">{post.title}</h4>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs border-gray-300"
                                                >
                                                    r/{post.community}
                                                </Badge>
                                                <span>{post.timeAgo} ago</span>
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
                    <Card className="p-6 border border-gray-200">
                        <h3 className="text-lg text-gray-900 mb-4">
                            My Comments ({userStats.comments})
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 border border-gray-200 rounded-lg">
                                <p className="text-sm text-gray-600 mb-2">
                                    Comment on "The Future of Web Development"
                                </p>
                                <p className="text-gray-900 mb-2">
                                    "Great article! I particularly loved the section about AI
                                    integration. Looking forward to seeing how these technologies
                                    evolve."
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>2 hours ago</span>
                                    <Separator orientation="vertical" className="h-3" />
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-3 h-3 text-red-500" />
                                        12
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Achievements Tab */}
                <TabsContent value="achievements">
                    <Card className="p-6 border border-gray-200">
                        <h3 className="text-lg text-gray-900 mb-4">
                            Achievements ({achievements.filter(a => a.unlocked).length}/
                            {achievements.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {achievements.map(achievement => (
                                <div
                                    key={achievement.id}
                                    className={`p-4 rounded-lg border transition-all ${
                                        achievement.unlocked
                                            ? 'border-gray-200 bg-white hover:shadow-md'
                                            : 'border-gray-200 bg-gray-50 opacity-60'
                                    }`}
                                >
                                    <div
                                        className={`w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                                            achievement.unlocked ? '' : 'grayscale'
                                        }`}
                                    >
                                        <span className="text-2xl">{achievement.icon}</span>
                                    </div>
                                    <div className="text-center">
                                        <h4
                                            className={`mb-1 ${
                                                achievement.unlocked
                                                    ? 'text-gray-900'
                                                    : 'text-gray-500'
                                            }`}
                                        >
                                            {achievement.name}
                                        </h4>
                                        <p
                                            className={`text-sm mb-2 ${
                                                achievement.unlocked
                                                    ? 'text-gray-600'
                                                    : 'text-gray-400'
                                            }`}
                                        >
                                            {achievement.description}
                                        </p>
                                        <Badge
                                            variant="outline"
                                            className={`text-xs ${
                                                achievement.unlocked
                                                    ? 'border-green-300 text-green-700 bg-green-50'
                                                    : 'border-gray-300 text-gray-500'
                                            }`}
                                        >
                                            {achievement.unlocked ? 'Unlocked' : 'Locked'}
                                        </Badge>
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
