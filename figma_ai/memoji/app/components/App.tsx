import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainFeed } from './MainFeed';
import { ChatPanel } from './ChatPanel';
import { ProfilePage } from './ProfilePage';
import { LoginModal } from './LoginModal';
import { NotificationPanel } from './NotificationPanel';

export default function App() {
    const [currentView, setCurrentView] = useState<'home' | 'popular' | 'profile' | 'community'>(
        'home',
    );
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                isLoggedIn={isLoggedIn}
                onLoginClick={() => setShowLogin(true)}
                onLogout={handleLogout}
                onNotificationClick={() => setShowNotifications(!showNotifications)}
                onChatClick={() => setShowChat(!showChat)}
            />

            <div className="flex">
                <Sidebar
                    currentView={currentView}
                    onViewChange={setCurrentView}
                    selectedCommunity={selectedCommunity}
                    onCommunitySelect={setSelectedCommunity}
                />

                <main className="flex-1 p-8">
                    {currentView === 'profile' ? (
                        <ProfilePage isLoggedIn={isLoggedIn} />
                    ) : (
                        <MainFeed view={currentView} community={selectedCommunity} />
                    )}
                </main>

                {showNotifications && (
                    <NotificationPanel onClose={() => setShowNotifications(false)} />
                )}

                {showChat && <ChatPanel onClose={() => setShowChat(false)} />}
            </div>

            {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
        </div>
    );
}
