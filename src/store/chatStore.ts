import { create } from 'zustand';
import { ChatStore, Message } from '@/types';
import { CURRENT_USER, MOCK_CHATS } from '@/data/mockData';

export const useChatStore = create<ChatStore>((set) => ({
  chats: MOCK_CHATS,
  activeChatId: null,
  searchQuery: '',
  currentUser: CURRENT_USER,

  setActiveChat: (chatId) => {
    set((state) => ({
      activeChatId: chatId,
      chats: state.chats.map((chat) =>
        chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
      ),
    }));
  },

  setSearchQuery: (query) => set({ searchQuery: query }),

  sendMessage: (chatId, content) => {
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      chatId,
      content: content.trim(),
      timestamp: new Date().toISOString(),
      senderId: CURRENT_USER.id,
      status: 'sent',
      type: 'text',
    };

    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      ),
    }));
  },

  markAsRead: (chatId) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
      ),
    }));
  },
}));
