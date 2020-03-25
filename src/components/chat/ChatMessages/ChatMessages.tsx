import { Message } from '@/types';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { DateSeparator } from '@/components/chat/DateSeparator';
import { formatDateSeparator } from '@/utils/formatTime';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import styles from './ChatMessages.module.css';

interface ChatMessagesProps {
  messages: Message[];
}

function isSameDay(a: string, b: string) {
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

function isSameGroup(a: Message, b: Message) {
  return (
    a.senderId === b.senderId &&
    isSameDay(a.timestamp, b.timestamp) &&
    Math.abs(new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()) < 5 * 60 * 1000
  );
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const scrollRef = useAutoScroll(messages);

  return (
    <div className={styles.container} ref={scrollRef} aria-label="Mensajes">
      <div className={styles.inner}>
        {messages.map((msg, idx) => {
          const prev = messages[idx - 1];
          const next = messages[idx + 1];

          const showDateSep = !prev || !isSameDay(prev.timestamp, msg.timestamp);
          const isFirstInGroup = !prev || !isSameGroup(prev, msg);
          const isLastInGroup = !next || !isSameGroup(msg, next);

          return (
            <div key={msg.id}>
              {showDateSep && <DateSeparator label={formatDateSeparator(msg.timestamp)} />}
              <MessageBubble
                message={msg}
                isFirstInGroup={isFirstInGroup}
                isLastInGroup={isLastInGroup}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

