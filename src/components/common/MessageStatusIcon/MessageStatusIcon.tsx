import { Check, CheckCheck } from 'lucide-react';
import { MessageStatus } from '@/types';
import styles from './MessageStatusIcon.module.css';

interface MessageStatusIconProps {
  status: MessageStatus;
}

export function MessageStatusIcon({ status }: MessageStatusIconProps) {
  if (status === 'sent') {
    return <Check size={14} className={styles.icon} />;
  }
  if (status === 'delivered') {
    return <CheckCheck size={14} className={styles.icon} />;
  }
  // read
  return <CheckCheck size={14} className={`${styles.icon} ${styles.read}`} />;
}
