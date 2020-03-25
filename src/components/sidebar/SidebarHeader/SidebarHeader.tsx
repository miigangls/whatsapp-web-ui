import { MessageSquarePlus, Sun, Moon, MoreVertical } from 'lucide-react';
import { Avatar } from '@/components/common/Avatar';
import { IconButton } from '@/components/common/IconButton';
import { useChatStore } from '@/store/chatStore';
import { useThemeStore } from '@/store/themeStore';
import styles from './SidebarHeader.module.css';

export function SidebarHeader() {
  const currentUser = useChatStore((s) => s.currentUser);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className={styles.header}>
      <Avatar
        src={currentUser.avatar}
        name={currentUser.name}
        size="md"
        showOnline
        isOnline
        className={styles.avatar}
      />

      <div className={styles.actions}>
        <IconButton label="Nueva conversación" size="md">
          <MessageSquarePlus size={20} />
        </IconButton>

        <IconButton
          label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          size="md"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </IconButton>

        <IconButton label="Menú" size="md">
          <MoreVertical size={20} />
        </IconButton>
      </div>
    </header>
  );
}
