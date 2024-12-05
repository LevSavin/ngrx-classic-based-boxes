import { IOption } from '../types';

export const localStorageKey: string = 'NgrxClassicBasedBoxes';

export const options: readonly IOption[] = [
  {
    id: 0,
    label: 'A',
    value: 1,
  },
  {
    id: 1,
    label: 'B',
    value: 2,
  },
  {
    id: 2,
    label: 'C++',
    value: 0.7,
  },
  {
    id: 3,
    label: 'D',
    value: 0.4,
  },
  {
    id: 4,
    label: 'E',
    value: 3,
  },
  {
    id: 5,
    label: 'F',
    value: 5,
  },
  {
    id: 6,
    label: 'JS',
    value: 1.5,
  },
  {
    id: 7,
    label: '-3-',
    value: 1.1,
  },
  {
    id: 8,
    label: '*4*',
    value: 1.9,
  },
  {
    id: 9,
    label: '^5',
    value: 2.4,
  },
  {
    id: 10,
    label: 'K',
    value: 2.6,
  },
  {
    id: 11,
    label: 'BB',
    value: 3.1,
  },
  {
    id: 12,
    label: 'V',
    value: 4.3,
  },
  {
    id: 13,
    label: 'G++',
    value: 2.8,
  },
  {
    id: 14,
    label: 'H',
    value: 1.8,
  },
  {
    id: 15,
    label: 'D+',
    value: 0.9,
  },
  {
    id: 16,
    label: '/G',
    value: 1.6,
  },
  {
    id: 17,
    label: '--L',
    value: 2.6,
  },
  {
    id: 18,
    label: '=P',
    value: 2,
  },
  {
    id: 19,
    label: '#F',
    value: 3,
  },
];

export const defaultBox = Object.freeze({
  id: -1,
  option: null,
});

export const defaultOption = Object.freeze({
  id: -1,
  label: '',
  value: 0,
});
