import styles from './DateSeparator.module.css';

interface DateSeparatorProps {
  label: string;
}

export function DateSeparator({ label }: DateSeparatorProps) {
  return (
    <div className={styles.wrapper} role="separator">
      <span className={styles.label}>{label}</span>
    </div>
  );
}
