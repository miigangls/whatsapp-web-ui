import { useState, useRef, KeyboardEvent } from 'react';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';
import { IconButton } from '@/components/common/IconButton';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  onSend: (content: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSend = value.trim().length > 0;

  const handleSend = () => {
    if (!canSend) return;
    onSend(value);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.leftActions}>
          <IconButton label="Emoji" size="md">
            <Smile size={22} />
          </IconButton>
          <IconButton label="Adjuntar" size="md">
            <Paperclip size={20} />
          </IconButton>
        </div>

        <div className={styles.inputWrapper}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            placeholder="Escribe un mensaje"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            rows={1}
            aria-label="Escribe un mensaje"
          />
        </div>

        <div className={styles.rightAction}>
          {canSend ? (
            <IconButton label="Enviar mensaje" size="md" onClick={handleSend}>
              <Send size={20} />
            </IconButton>
          ) : (
            <IconButton label="Nota de voz" size="md">
              <Mic size={20} />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}
