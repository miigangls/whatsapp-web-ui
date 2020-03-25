import { Message } from '@/types';
import { MessageStatusIcon } from '@/components/common/MessageStatusIcon';
import { formatMessageTime } from '@/utils/formatTime';
import { CURRENT_USER } from '@/data/mockData';
import styles from './MessageBubble.module.css';

interface MessageBubbleProps {
  message: Message;
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
}

export function MessageBubble({ message, isFirstInGroup, isLastInGroup }: MessageBubbleProps) {
  const isMine = message.senderId === CURRENT_USER.id;

  return (
    <div
      className={`
        ${styles.wrapper}
        ${isMine ? styles.sent : styles.received}
        ${isFirstInGroup ? styles.firstInGroup : ''}
        ${isLastInGroup ? styles.lastInGroup : ''}
      `}
    >
      <div className={`${styles.bubble} ${isMine ? styles.bubbleSent : styles.bubbleReceived}`}>
        <span className={styles.text}>{message.content}</span>
        <div className={styles.meta}>
          <span className={styles.time}>{formatMessageTime(message.timestamp)}</span>
          {isMine && <MessageStatusIcon status={message.status} />}
        </div>
      </div>
    </div>
  );
}
