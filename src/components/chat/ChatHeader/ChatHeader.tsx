import { Search, Phone, MoreVertical, ChevronLeft } from 'lucide-react';
import { Chat } from '@/types';
import { Avatar } from '@/components/common/Avatar';
import { IconButton } from '@/components/common/IconButton';
import { formatLastSeen } from '@/utils/formatTime';
import styles from './ChatHeader.module.css';

interface ChatHeaderProps {
  chat: Chat;
  onBack?: () => void;
}

export function ChatHeader({ chat, onBack }: ChatHeaderProps) {
  const displayName = chat.isGroup ? chat.groupName ?? 'Grupo' : chat.contact.name;
  const avatar = chat.isGroup ? chat.groupAvatar ?? chat.contact.avatar : chat.contact.avatar;

  const statusText = chat.isGroup
    ? `${chat.messages.length} mensajes`
    : chat.contact.isOnline
    ? 'En línea'
    : chat.contact.lastSeen
    ? `Visto ${formatLastSeen(chat.contact.lastSeen)}`
    : 'Visto hace mucho tiempo';

  return (
    <header className={styles.header}>
      {onBack && (
        <IconButton label="Volver" onClick={onBack} className={styles.backButton}>
          <ChevronLeft size={22} />
        </IconButton>
      )}

      <div className={styles.info}>
        <Avatar
          src={avatar}
          name={displayName}
          size="md"
          showOnline={!chat.isGroup}
          isOnline={chat.contact.isOnline}
          className={styles.avatar}
        />
        <div className={styles.text}>
          <span className={styles.name}>{displayName}</span>
          <span className={`${styles.status} ${chat.contact.isOnline && !chat.isGroup ? styles.online : ''}`}>
            {statusText}
          </span>
        </div>
      </div>

      <div className={styles.actions}>
        <IconButton label="Buscar en el chat" size="md">
          <Search size={20} />
        </IconButton>
        <IconButton label="Llamada de voz" size="md">
          <Phone size={20} />
        </IconButton>
        <IconButton label="Más opciones" size="md">
          <MoreVertical size={20} />
        </IconButton>
      </div>
    </header>
  );
}
