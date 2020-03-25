import { useEffect, useState } from 'react';
import { useChatStore } from '@/store/chatStore';
import { SidebarHeader } from '@/components/sidebar/SidebarHeader';
import { SearchBar } from '@/components/sidebar/SearchBar';
import { ConversationList } from '@/components/sidebar/ConversationList';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatMessages } from '@/components/chat/ChatMessages';
import { ChatInput } from '@/components/chat/ChatInput';
import { EmptyChat } from '@/components/chat/EmptyChat';
import styles from './AppLayout.module.css';

export function AppLayout() {
  const { chats, activeChatId, sendMessage } = useChatStore();
  const [showChat, setShowChat] = useState(false);

  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;

  // On mobile: auto-navigate to chat when a conversation is selected
  useEffect(() => {
    if (activeChatId) setShowChat(true);
  }, [activeChatId]);

  return (
    <div className={styles.app}>
      <aside
        className={`${styles.sidebar} ${showChat ? styles.mobileHide : ''}`}
        aria-label="Lista de conversaciones"
      >
        <SidebarHeader />
        <SearchBar />
        <ConversationList />
      </aside>

      <main
        className={`${styles.main} ${!showChat ? styles.mobileHide : ''}`}
        aria-label="Área de conversación"
      >
        {activeChat ? (
          <div className={styles.chatContainer}>
            <ChatHeader
              chat={activeChat}
              onBack={() => setShowChat(false)}
            />
            <ChatMessages messages={activeChat.messages} />
            <ChatInput onSend={(content) => sendMessage(activeChat.id, content)} />
          </div>
        ) : (
          <EmptyChat />
        )}
      </main>
    </div>
  );
}
