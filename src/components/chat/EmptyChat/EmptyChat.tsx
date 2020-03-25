import { Lock } from 'lucide-react';
import styles from './EmptyChat.module.css';

export function EmptyChat() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.phoneIllustration}>
          <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
            <rect x="60" y="20" width="80" height="140" rx="12" fill="currentColor" opacity="0.08"/>
            <rect x="68" y="34" width="64" height="88" rx="4" fill="currentColor" opacity="0.12"/>
            <rect x="72" y="40" width="56" height="12" rx="3" fill="currentColor" opacity="0.3"/>
            <rect x="72" y="58" width="40" height="8" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="72" y="70" width="50" height="8" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="72" y="88" width="32" height="8" rx="3" fill="currentColor" opacity="0.3"/>
            <rect x="72" y="100" width="44" height="8" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="160" y="40" width="80" height="120" rx="10" fill="currentColor" opacity="0.08"/>
            <rect x="167" y="52" width="66" height="80" rx="4" fill="currentColor" opacity="0.12"/>
            <rect x="171" y="58" width="50" height="10" rx="3" fill="currentColor" opacity="0.25"/>
            <rect x="171" y="74" width="36" height="8" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="171" y="86" width="46" height="8" rx="3" fill="currentColor" opacity="0.2"/>
            <rect x="171" y="104" width="30" height="8" rx="3" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

        <h2 className={styles.title}>WhatsApp Web</h2>
        <p className={styles.subtitle}>
          Envía y recibe mensajes sin tener el teléfono en línea.<br />
          Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
        </p>

        <div className={styles.separator} />

        <div className={styles.encrypted}>
          <Lock size={13} />
          <span>Tus mensajes personales están cifrados de extremo a extremo</span>
        </div>
      </div>
    </div>
  );
}
