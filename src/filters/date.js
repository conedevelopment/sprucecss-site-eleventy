import { format, parseISO } from 'date-fns';
import { enUS, fr, es, de } from 'date-fns/locale';

const locales = { en: enUS, fr, es, de };

export default function formatDate(value, locale = 'en') {
  const date = parseISO(value);
  return format(date, 'PP', { locale: locales[locale] || enUS });
}
