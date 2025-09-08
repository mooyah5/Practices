import React, { useState } from 'react';
import { ModernHeader } from './(csr)/modern/ModernHeader';
import { ModernSidebar } from './(csr)/modern/ModernSideBar';
import { ModernMainFeed } from './(csr)/modern/ModernMainFeed';
import { ModernChatPanel } from './(csr)/modern/ModernChatPanel';
import { ModernProfilePage } from './(csr)/modern/ModernProfilePage';
import { ModernLoginModal } from './(csr)/modern/ModernLoginModal';
import { ModernNotificationPanel } from './(csr)/modern/ModernNotificationPanel';

export default function AppModern() {
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
            <ModernHeader
                isLoggedIn={isLoggedIn}
                onLoginClick={() => setShowLogin(true)}
                onLogout={handleLogout}
                onNotificationClick={() => setShowNotifications(!showNotifications)}
                onChatClick={() => setShowChat(!showChat)}
            />

            <div className="flex">
                <ModernSidebar
                    currentView={currentView}
                    onViewChange={setCurrentView}
                    selectedCommunity={selectedCommunity}
                    onCommunitySelect={setSelectedCommunity}
                />

                <main className="flex-1 p-8">
                    {currentView === 'profile' ? (
                        <ModernProfilePage isLoggedIn={isLoggedIn} />
                    ) : (
                        <ModernMainFeed view={currentView} community={selectedCommunity} />
                    )}
                </main>

                {showNotifications && (
                    <ModernNotificationPanel onClose={() => setShowNotifications(false)} />
                )}

                {showChat && <ModernChatPanel onClose={() => setShowChat(false)} />}
            </div>

            {showLogin && (
                <ModernLoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />
            )}
        </div>
    );
}
