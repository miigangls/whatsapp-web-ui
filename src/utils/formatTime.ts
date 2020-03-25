export function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function formatChatTime(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
  if (isYesterday) {
    return 'Ayer';
  }

  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 7) {
    return date.toLocaleDateString('es-MX', { weekday: 'short' });
  }

  return date.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

export function formatLastSeen(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'justo ahora';
  if (diffMins < 60) return `hace ${diffMins} min`;
  if (diffHours < 24) return `hoy a las ${formatMessageTime(isoString)}`;
  if (diffDays === 1) return `ayer a las ${formatMessageTime(isoString)}`;
  return `el ${date.toLocaleDateString('es-MX', { day: '2-digit', month: 'short' })}`;
}

export function formatDateSeparator(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (isToday) return 'Hoy';
  if (isYesterday) return 'Ayer';

  return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
}
