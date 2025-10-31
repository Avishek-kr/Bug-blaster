export const sortBoard = (preference) => {
  const boards = [
    { id: 1, title: "Low", priority: "1", order: 1 },
    { id: 2, title: "Medium", priority: "2", order: 2 },
    { id: 3, title: "High", priority: "3", order: 3 },
  ];

  switch (preference) {
    case "High to Low":
      return [...boards].sort((a, b) => b.order - a.order);
    case "Low to High":
      return [...boards].sort((a, b) => a.order - b.order);
      default:
        return boards
  }
}