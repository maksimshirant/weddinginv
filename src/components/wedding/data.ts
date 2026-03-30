export const timelineItems = [
  {
    time: '9:00',
    title: 'Сбор гостей',
    description:
      'Время трепетного ожидания. Вы можете выбрать бокал игристого или пару таблеток валерьянки.',
  },
  {
    time: '10:00',
    title: 'Церемония',
    description:
      'Вы станете свидетелями создания нашей семьи, приготовьте платочки.',
  },
  {
    time: '11:30',
    title: 'Фотосессия',
    description:
      'После церемонии вы можете присоединиться к нам или насладиться свободным временем.',
  },
  {
    time: 'Финал',
    title: '',
    description:
      'Этот день закончился, но в сердцах он останется навсегда.',
  },
] as const


export const wishes = [
  {
    title: 'Вместо цветов',
    description:
      'Приятным комплиментом для нас вместо цветов будет бутылка красного полусладкого вина, чтобы спустя время мы могли распивать напитки и вспоминать этот замечательный день и людей, которые были с нами рядом.',
  },
  {
    title: 'Подарки',
    description:
      'Чтобы наши руки были свободны для объятий, будем рады большим подаркам в маленьких конвертах.',
  },
] as const

export const firstDayToastOptions = [
  { value: 'before-ceremony', label: 'Да, до церемонии' },
  { value: 'after-ceremony', label: 'Да, после церемонии' },
  { value: 'no-second-day', label: 'Нет, оставлю силы на второй день' },
] as const

export const drinkOptions = [
  { value: 'red-wine', label: 'Вино красное' },
  { value: 'white-wine', label: 'Вино белое' },
  { value: 'champagne', label: 'Шампанское' },
  { value: 'cognac', label: 'Коньяк' },
  { value: 'whiskey', label: 'Виски' },
  { value: 'vodka', label: 'Водка' },
  { value: 'non-alcoholic', label: 'Безалкогольные напитки' },
  { value: 'other', label: 'Свой вариант' },
] as const
