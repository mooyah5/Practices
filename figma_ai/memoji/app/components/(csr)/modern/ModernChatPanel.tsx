'use client';
import React, { useState } from 'react';
import {
    X,
    Send,
    Search,
    Plus,
    MoreHorizontal,
    Smile,
    Paperclip,
    Phone,
    Video,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

interface ModernChatPanelProps {
    onClose: () => void;
}

const chatRooms = [
    {
        id: '1',
        name: 'Tech Discussion',
        members: 15,
        lastMessage: 'Great article about React 19!',
        time: '5m',
        unread: 2,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '2',
        name: 'Gaming Community',
        members: 28,
        lastMessage: 'Anyone up for a game tonight?',
        time: '1h',
        unread: 0,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '3',
        name: 'Photography Tips',
        members: 12,
        lastMessage: 'Check out these sunset shots',
        time: '3h',
        unread: 1,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '4',
        name: 'Music Lovers',
        members: 6,
        lastMessage: 'This playlist is amazing',
        time: '1d',
        unread: 0,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
];

const messages = [
    {
        id: '1',
        sender: 'alex_dev',
        content: 'Hey everyone! Just read this amazing article about the future of web development',
        time: '2:30 PM',
        isMe: false,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '2',
        sender: 'You',
        content: 'Sounds interesting! Could you share the link?',
        time: '2:32 PM',
        isMe: true,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '3',
        sender: 'sarah_ui',
        content: 'I saw that one too! The section about AI integration was fascinating',
        time: '2:35 PM',
        isMe: false,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '4',
        sender: 'alex_dev',
        content: "Here's the link: https://example.com/future-web-dev",
        time: '2:36 PM',
        isMe: false,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
    {
        id: '5',
        sender: 'You',
        content: "Thanks! I'll check it out after work",
        time: '2:38 PM',
        isMe: true,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80',
    },
];

export function ModernChatPanel({ onClose }: ModernChatPanelProps) {
    const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="fixed right-8 top-20 w-96 h-[calc(100vh-6rem)] bg-white border border-gray-200 shadow-2xl z-40 flex flex-col rounded-lg">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50 rounded-t-lg">
                <h3 className="text-lg text-gray-900">Messages</h3>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClose}
                        className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            <div className="flex-1 flex">
                {/* Chat Room List */}
                <div className="w-full border-r border-gray-200">
                    <div className="p-3">
                        {/* Search */}
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search conversations..."
                                className="pl-10 h-9 text-sm border-gray-200"
                            />
                        </div>

                        <div className="space-y-1">
                            {chatRooms.map(room => (
                                <button
                                    key={room.id}
                                    onClick={() => setSelectedRoom(room)}
                                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                                        selectedRoom.id === room.id
                                            ? 'bg-blue-50 border border-blue-200'
                                            : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={room.avatar} />
                                                <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                                                    {room.name.split(' ')[0][0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="text-sm text-gray-900 truncate">
                                                    {room.name}
                                                </h4>
                                                <span className="text-xs text-gray-500">
                                                    {room.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-xs text-gray-600 truncate">
                                                    {room.lastMessage}
                                                </p>
                                                {room.unread > 0 && (
                                                    <Badge className="bg-blue-600 text-white text-xs h-5 w-5 p-0 flex items-center justify-center">
                                                        {room.unread}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Selected Chat View */}
            {selectedRoom && (
                <div className="absolute inset-0 bg-white rounded-lg flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedRoom(chatRooms[0])}
                                    className="w-8 h-8 text-gray-600 hover:bg-gray-200 md:hidden"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={selectedRoom.avatar} />
                                    <AvatarFallback className="bg-gray-100 text-gray-600">
                                        {selectedRoom.name.split(' ')[0][0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="text-sm text-gray-900">{selectedRoom.name}</h4>
                                    <p className="text-xs text-gray-500">
                                        {selectedRoom.members} members • 3 online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                                >
                                    <Phone className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                                >
                                    <Video className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-8 h-8 text-gray-600 hover:bg-gray-200"
                                >
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-4">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`flex gap-3 ${
                                        message.isMe ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                                >
                                    <Avatar className="w-8 h-8 flex-shrink-0">
                                        <AvatarImage src={message.avatar} />
                                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                                            {message.sender[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div
                                        className={`max-w-[70%] ${
                                            message.isMe ? 'text-right' : 'text-left'
                                        }`}
                                    >
                                        {!message.isMe && (
                                            <p className="text-xs text-gray-500 mb-1">
                                                {message.sender}
                                            </p>
                                        )}
                                        <div
                                            className={`p-3 rounded-lg ${
                                                message.isMe
                                                    ? 'bg-blue-600 text-white rounded-br-sm'
                                                    : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                                            }`}
                                        >
                                            <p className="text-sm">{message.content}</p>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 text-gray-600 hover:bg-gray-100"
                            >
                                <Paperclip className="w-4 h-4" />
                            </Button>

                            <div className="flex-1 relative">
                                <Input
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={e => setNewMessage(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                                    className="pr-10 border-gray-200 focus:border-gray-300"
                                />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 hover:bg-gray-100"
                                >
                                    <Smile className="w-4 h-4" />
                                </Button>
                            </div>

                            <Button
                                onClick={handleSendMessage}
                                disabled={!newMessage.trim()}
                                size="sm"
                                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white p-0"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
