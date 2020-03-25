import { BellOff, Pin } from 'lucide-react';
import { Chat } from '@/types';
import { Avatar } from '@/components/common/Avatar';
import { Badge } from '@/components/common/Badge';
import { MessageStatusIcon } from '@/components/common/MessageStatusIcon';
import { formatChatTime } from '@/utils/formatTime';
import { CURRENT_USER } from '@/data/mockData';
import styles from './ConversationItem.module.css';

interface ConversationItemProps {
  chat: Chat;
  isActive: boolean;
  onClick: () => void;
}

export function ConversationItem({ chat, isActive, onClick }: ConversationItemProps) {
  const lastMessage = chat.messages.at(-1);
  const displayName = chat.isGroup ? chat.groupName ?? 'Grupo' : chat.contact.name;
  const avatar = chat.isGroup ? chat.groupAvatar ?? chat.contact.avatar : chat.contact.avatar;
  const isMine = lastMessage?.senderId === CURRENT_USER.id;

  return (
    <button
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-selected={isActive}
      aria-label={`Chat con ${displayName}`}
      type="button"
    >
      <Avatar
        src={avatar}
        name={displayName}
        size="lg"
        showOnline={!chat.isGroup}
        isOnline={chat.contact.isOnline}
      />

      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.name}>{displayName}</span>
          <span className={`${styles.time} ${chat.unreadCount > 0 ? styles.timeUnread : ''}`}>
            {lastMessage ? formatChatTime(lastMessage.timestamp) : ''}
          </span>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.preview}>
            {isMine && lastMessage && (
              <span className={styles.statusIcon}>
                <MessageStatusIcon status={lastMessage.status} />
              </span>
            )}
            <span className={`${styles.lastMessage} ${chat.unreadCount > 0 ? styles.lastMessageUnread : ''}`}>
              {lastMessage ? lastMessage.content : 'No hay mensajes'}
            </span>
          </div>

          <div className={styles.indicators}>
            {chat.isMuted && <BellOff size={14} className={styles.mutedIcon} />}
            {chat.isPinned && !chat.unreadCount && <Pin size={13} className={styles.pinIcon} />}
            {chat.unreadCount > 0 && (
              <Badge count={chat.unreadCount} muted={chat.isMuted} />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
