import { useMemo } from 'react';
import { Chat } from '@/types';

export function useSearch(chats: Chat[], query: string): Chat[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return chats;

    return chats.filter((chat) => {
      const name = (chat.isGroup ? chat.groupName : chat.contact.name) ?? '';
      const lastMessage = chat.messages.at(-1)?.content ?? '';
      return (
        name.toLowerCase().includes(q) ||
        lastMessage.toLowerCase().includes(q)
      );
    });
  }, [chats, query]);
}
