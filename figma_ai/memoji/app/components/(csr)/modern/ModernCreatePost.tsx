'use client';
import React, { useState } from 'react';
import { Image, Link, Type, Plus, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function ModernCreatePost() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [postType, setPostType] = useState<'text' | 'link' | 'image'>('text');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const [selectedCommunity, setSelectedCommunity] = useState('Technology');

    const communities = ['Technology', 'Gaming', 'Music', 'Photography', 'Food & Drink', 'Books'];

    const handleSubmit = () => {
        if (title.trim() && (content.trim() || url.trim())) {
            console.log({ title, content, url, community: selectedCommunity, type: postType });
            setTitle('');
            setContent('');
            setUrl('');
            setIsExpanded(false);
        }
    };

    return (
        <Card className="bg-white border border-gray-200">
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=100&q=80" />
                        <AvatarFallback className="bg-gray-100 text-gray-600">U</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                        {!isExpanded ? (
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors text-gray-600"
                            >
                                Create a post...
                            </button>
                        ) : (
                            <div className="space-y-4">
                                {/* Community Selector */}
                                <div>
                                    <Select
                                        value={selectedCommunity}
                                        onValueChange={setSelectedCommunity}
                                    >
                                        <SelectTrigger className="w-48 h-10 border-gray-200">
                                            <SelectValue placeholder="Choose a community" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {communities.map(community => (
                                                <SelectItem key={community} value={community}>
                                                    r/{community}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Post Type Tabs */}
                                <Tabs
                                    value={postType}
                                    onValueChange={(value: string) =>
                                        setPostType(value as 'text' | 'link' | 'image')
                                    }
                                >
                                    <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                                        <TabsTrigger
                                            value="text"
                                            className="data-[state=active]:bg-white"
                                        >
                                            <Type className="w-4 h-4 mr-2" />
                                            Text
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="image"
                                            className="data-[state=active]:bg-white"
                                        >
                                            <Image className="w-4 h-4 mr-2" />
                                            Image
                                        </TabsTrigger>
                                        <TabsTrigger
                                            value="link"
                                            className="data-[state=active]:bg-white"
                                        >
                                            <Link className="w-4 h-4 mr-2" />
                                            Link
                                        </TabsTrigger>
                                    </TabsList>

                                    <div className="mt-4 space-y-4">
                                        {/* Title */}
                                        <Input
                                            placeholder="Title"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            className="border-gray-200 focus:border-gray-300 h-12"
                                        />

                                        {/* Content based on type */}
                                        <TabsContent value="text" className="mt-0">
                                            <Textarea
                                                placeholder="Text (optional)"
                                                value={content}
                                                onChange={e => setContent(e.target.value)}
                                                rows={6}
                                                className="border-gray-200 focus:border-gray-300 resize-none"
                                            />
                                        </TabsContent>

                                        <TabsContent value="image" className="mt-0">
                                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                                <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-600 mb-2">
                                                    Upload an image or drag and drop
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    className="border-gray-300"
                                                >
                                                    Choose File
                                                </Button>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="link" className="mt-0">
                                            <Input
                                                placeholder="URL"
                                                value={url}
                                                onChange={e => setUrl(e.target.value)}
                                                className="border-gray-200 focus:border-gray-300 h-12"
                                            />
                                        </TabsContent>
                                    </div>
                                </Tabs>

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="text-xs text-gray-500">
                                        Remember the human and follow the community guidelines
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="ghost"
                                            onClick={() => {
                                                setIsExpanded(false);
                                                setTitle('');
                                                setContent('');
                                                setUrl('');
                                            }}
                                            className="text-gray-600 hover:bg-gray-100"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={
                                                !title.trim() ||
                                                (postType === 'text' && !content.trim()) ||
                                                (postType === 'link' && !url.trim())
                                            }
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                                        >
                                            Post
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
