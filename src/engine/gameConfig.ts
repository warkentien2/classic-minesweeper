export const config = {
  difficulty: {
    beginner: {
      rows: 9,
      cols: 9,
      mines: 10,
    },
    intermediate: {
      rows: 16,
      cols: 16,
      mines: 40,
    },
    expert: {
      rows: 16,
      cols: 30,
      mines: 99,
    },
  },
  display: {
    zoomOptions: [100, 150, 200],
    position: ["center", "left"],
    modes: ["day", "night"],
  },
  controls: {
    reveal: ["leftClick"],
    flag: ["rightClick", "space"],
    start: ["F2"],
  },
};
