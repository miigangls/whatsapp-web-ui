import { Search, X } from 'lucide-react';
import { useChatStore } from '@/store/chatStore';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useChatStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar o empezar un nuevo chat"
          className={styles.input}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Buscar chats"
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={() => setSearchQuery('')}
            aria-label="Limpiar búsqueda"
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
