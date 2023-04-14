import dayjs from 'dayjs';
import 'dayjs/locale/es';

export function formatDate(dateString: string): string {
  const date = dayjs(dateString).locale('es');
  return date.format('D [de] MMMM[,] YYYY');
}
