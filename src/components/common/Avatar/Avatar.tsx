import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showOnline?: boolean;
  isOnline?: boolean;
  className?: string;
}

export function Avatar({
  src,
  name,
  size = 'md',
  showOnline = false,
  isOnline = false,
  className,
}: AvatarProps) {
  return (
    <div className={`${styles.wrapper} ${styles[size]} ${className ?? ''}`}>
      <img
        src={src}
        alt={name}
        className={styles.image}
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`;
        }}
      />
      {showOnline && isOnline && <span className={styles.onlineDot} aria-label="En línea" />}
    </div>
  );
}
