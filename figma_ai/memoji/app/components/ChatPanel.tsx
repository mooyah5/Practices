'use client';
import React, { useState } from 'react';
import { X, Send, Search, Plus, MoreHorizontal, Smile, Paperclip } from 'lucide-react';
import { Button } from './(csr)/ui/button';
import { Card } from './(csr)/ui/card';
import { Input } from './(csr)/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './(csr)/ui/avatar';
import { Badge } from './(csr)/ui/badge';
import { ScrollArea } from './(csr)/ui/scroll-area';

interface ChatPanelProps {
    onClose: () => void;
}

const chatRooms = [
    {
        id: '1',
        name: '떡볶이 맛집 토론',
        members: 5,
        lastMessage: '신림동 추천 감사해요!',
        time: '5분 전',
        unread: 2,
        emoji: '🍡',
    },
    {
        id: '2',
        name: '게임 친구들',
        members: 8,
        lastMessage: '오늘 저녁에 같이 할 사람?',
        time: '1시간 전',
        unread: 0,
        emoji: '🎮',
    },
    {
        id: '3',
        name: '사진 공유방',
        members: 12,
        lastMessage: '오늘 찍은 사진 올려봤어요',
        time: '3시간 전',
        unread: 1,
        emoji: '📸',
    },
    {
        id: '4',
        name: '음악 추천방',
        members: 6,
        lastMessage: '겨울 감성 플레이리스트 완성!',
        time: '1일 전',
        unread: 0,
        emoji: '🎵',
    },
];

const messages = [
    {
        id: '1',
        sender: '떡볶이러버',
        content: '안녕하세요! 신림동 떡볶이 맛집 추천해주셔서 감사해요',
        time: '오후 2:30',
        isMe: false,
        avatar: '🍡',
    },
    {
        id: '2',
        sender: '나',
        content: '도움이 되었다니 다행이에요! 어떠셨나요?',
        time: '오후 2:32',
        isMe: true,
        avatar: '🍡',
    },
    {
        id: '3',
        sender: '맛집탐험가',
        content: '저도 어제 가봤는데 정말 맛있더라구요',
        time: '오후 2:35',
        isMe: false,
        avatar: '🍜',
    },
    {
        id: '4',
        sender: '떡볶이러버',
        content: '떡이 쫄깃하고 소스가 달콤매콤해서 좋았어요!',
        time: '오후 2:36',
        isMe: false,
        avatar: '🍡',
    },
    {
        id: '5',
        sender: '나',
        content: '맞아요! 그 집 소스가 정말 특별해요 ㅎㅎ',
        time: '오후 2:38',
        isMe: true,
        avatar: '🍡',
    },
];

export function ChatPanel({ onClose }: ChatPanelProps) {
    const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Handle sending message
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="fixed right-6 top-20 w-96 h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-lg rounded-2xl border border-pink-200 shadow-2xl z-40 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-pink-100 flex items-center justify-between">
                <h3 className="text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    💬 채팅
                </h3>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="w-8 h-8 rounded-full hover:bg-pink-100"
                >
                    <X className="w-4 h-4" />
                </Button>
            </div>

            <div className="flex-1 flex">
                {/* Chat Room List */}
                <div className="w-32 border-r border-pink-100">
                    <div className="p-3">
                        <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl mb-3"
                        >
                            <Plus className="w-4 h-4" />
                        </Button>

                        <div className="space-y-2">
                            {chatRooms.map(room => (
                                <button
                                    key={room.id}
                                    onClick={() => setSelectedRoom(room)}
                                    className={`w-full p-2 rounded-xl text-left transition-colors ${
                                        selectedRoom.id === room.id
                                            ? 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-300'
                                            : 'hover:bg-pink-50'
                                    }`}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-sm">
                                            {room.emoji}
                                        </div>
                                        <span className="text-xs text-center leading-tight">
                                            {room.name.split(' ')[0]}
                                        </span>
                                        {room.unread > 0 && (
                                            <Badge className="w-4 h-4 p-0 bg-gradient-to-r from-pink-500 to-purple-500 text-xs">
                                                {room.unread}
                                            </Badge>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-3 border-b border-pink-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-white">
                                    {selectedRoom.emoji}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">{selectedRoom.name}</h4>
                                    <p className="text-xs text-gray-500">
                                        {selectedRoom.members}명 참여
                                    </p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="w-6 h-6 rounded-full">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-3">
                        <div className="space-y-4">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`flex gap-2 ${
                                        message.isMe ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                                >
                                    <Avatar className="w-8 h-8 flex-shrink-0">
                                        <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xs">
                                            {message.avatar}
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
                                            className={`p-3 rounded-2xl ${
                                                message.isMe
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-br-md'
                                                    : 'bg-pink-50 text-gray-800 rounded-bl-md'
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
                    <div className="p-3 border-t border-pink-100">
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-8 h-8 rounded-full hover:bg-pink-100"
                            >
                                <Paperclip className="w-4 h-4" />
                            </Button>

                            <div className="flex-1 relative">
                                <Input
                                    placeholder="메시지를 입력하세요..."
                                    value={newMessage}
                                    onChange={e => setNewMessage(e.target.value)}
                                    onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                                    className="pr-10 bg-pink-50/50 border-pink-200 rounded-full focus:bg-white"
                                />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full hover:bg-pink-100"
                                >
                                    <Smile className="w-4 h-4" />
                                </Button>
                            </div>

                            <Button
                                onClick={handleSendMessage}
                                disabled={!newMessage.trim()}
                                size="sm"
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
