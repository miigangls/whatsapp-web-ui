export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageType = 'text' | 'image' | 'audio' | 'system';
export type Theme = 'light' | 'dark';

export interface User {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  about: string;
  isOnline: boolean;
  lastSeen?: string;
}

export interface Message {
  id: string;
  chatId: string;
  content: string;
  timestamp: string;
  senderId: string;
  status: MessageStatus;
  type: MessageType;
  isDeleted?: boolean;
}

export interface Chat {
  id: string;
  contact: User;
  messages: Message[];
  unreadCount: number;
  isPinned: boolean;
  isMuted: boolean;
  isGroup: boolean;
  groupName?: string;
  groupAvatar?: string;
}

export interface ChatStore {
  chats: Chat[];
  activeChatId: string | null;
  searchQuery: string;
  currentUser: User;
  setActiveChat: (chatId: string) => void;
  setSearchQuery: (query: string) => void;
  sendMessage: (chatId: string, content: string) => void;
  markAsRead: (chatId: string) => void;
}

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}
