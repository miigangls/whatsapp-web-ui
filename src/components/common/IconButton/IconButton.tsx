import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export function IconButton({
  children,
  label,
  variant = 'default',
  size = 'md',
  active = false,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${active ? styles.active : ''} ${className ?? ''}`}
      aria-label={label}
      title={label}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
