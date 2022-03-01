const cards = [
  {
    id: 'card-1',
    content: 'Susitikimas su darbų vygdytoju',
  },
  {
    id: 'card-2',
    content: 'Pietus pas Martą',
  },
  {
    id: 'card-3',
    content: 'Penktadienio surprize vakarėlis',
  },
  {
    id: 'card-4',
    content: 'Išgerti vitaminus',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Darbeliai',
      cards,
      board: 'board-0',
    },
  },
  listIds: ['list-1'],
};

export default data;
