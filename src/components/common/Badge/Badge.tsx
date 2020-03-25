import styles from './Badge.module.css';

interface BadgeProps {
  count: number;
  muted?: boolean;
}

export function Badge({ count, muted = false }: BadgeProps) {
  if (count <= 0) return null;
  return (
    <span className={`${styles.badge} ${muted ? styles.muted : ''}`}>
      {count > 99 ? '99+' : count}
    </span>
  );
}
