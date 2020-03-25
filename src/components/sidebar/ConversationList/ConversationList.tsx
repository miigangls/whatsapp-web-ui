import { MessageSquareOff } from 'lucide-react';
import { useChatStore } from '@/store/chatStore';
import { useSearch } from '@/hooks/useSearch';
import { ConversationItem } from '@/components/sidebar/ConversationItem';
import styles from './ConversationList.module.css';

export function ConversationList() {
  const { chats, activeChatId, searchQuery, setActiveChat } = useChatStore();

  const pinnedChats = chats.filter((c) => c.isPinned);
  const unpinnedChats = chats.filter((c) => !c.isPinned);

  const filteredPinned = useSearch(pinnedChats, searchQuery);
  const filteredUnpinned = useSearch(unpinnedChats, searchQuery);
  const allFiltered = [...filteredPinned, ...filteredUnpinned];

  const isEmpty = allFiltered.length === 0;

  return (
    <div className={styles.list} role="list" aria-label="Conversaciones">
      {isEmpty ? (
        <div className={styles.empty}>
          <MessageSquareOff size={40} className={styles.emptyIcon} />
          <p className={styles.emptyTitle}>
            {searchQuery ? 'Sin resultados' : 'No hay conversaciones'}
          </p>
          <p className={styles.emptySubtitle}>
            {searchQuery
              ? `No se encontró "${searchQuery}"`
              : 'Tus chats aparecerán aquí'}
          </p>
        </div>
      ) : (
        <>
          {filteredPinned.length > 0 && !searchQuery && (
            <div className={styles.section}>
              <span className={styles.sectionLabel}>Fijados</span>
              {filteredPinned.map((chat) => (
                <ConversationItem
                  key={chat.id}
                  chat={chat}
                  isActive={chat.id === activeChatId}
                  onClick={() => setActiveChat(chat.id)}
                />
              ))}
            </div>
          )}

          {filteredUnpinned.length > 0 && !searchQuery && filteredPinned.length > 0 && (
            <div className={styles.section}>
              <span className={styles.sectionLabel}>Todos los chats</span>
              {filteredUnpinned.map((chat) => (
                <ConversationItem
                  key={chat.id}
                  chat={chat}
                  isActive={chat.id === activeChatId}
                  onClick={() => setActiveChat(chat.id)}
                />
              ))}
            </div>
          )}

          {(searchQuery || filteredPinned.length === 0) &&
            allFiltered.map((chat) => (
              <ConversationItem
                key={chat.id}
                chat={chat}
                isActive={chat.id === activeChatId}
                onClick={() => setActiveChat(chat.id)}
              />
            ))}
        </>
      )}
    </div>
  );
}
