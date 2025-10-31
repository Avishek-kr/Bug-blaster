export default function TicketItem({ tickets, dispatch, sortedBoards }) {
  // const boards = [
  //   { id: 1, title: "Low", priority: "1", order: 1 },
  //   { id: 2, title: "Medium", priority: "2", order: 2 },
  //   { id: 3, title: "High", priority: "3", order: 3 },
  // ];

  // // Example: sort ascending by order (you can reverse for descending)
  // const sortedBoards = [...boards].sort((a, b) => b.order - a.order);

  return (
    <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
      {sortedBoards.map((board) => {
        const boardTickets = tickets
          .filter((t) => t.priority === board.priority);
        return (
          <div
            key={board.id}
            className="flex flex-col flex-shrink-0 w-80 rounded-lg single-board"
            data-order={board.order}
          >
            {/* Board header */}
            <div className="flex items-center flex-shrink-0 h-10 px-2 text-white">
              <span className="block text-sm font-semibold">{board.title}</span>
              <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-white bg-white rounded bg-opacity-30">
                {boardTickets.length}
              </span>
            </div>

            {/* Tickets */}
            <div className="flex flex-col pb-2 overflow-auto">
              {boardTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                  draggable="true"
                >
                  <div>
                    <span className="flex items-center text-xs font-bold text-gray-400">Title</span>
                    <h3 className="text-sm font-medium">{ticket.title}</h3>
                  </div>
                  <div>
                    <span className="mt-3 flex items-center text-xs font-bold text-gray-400">Description</span>
                    <h4 className="text-sm font-medium">{ticket.description}</h4>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-full text-sm px-5 py-1.5 me-2 mb-2"
                      onClick={() => dispatch({ type: "SET_EDITING_TICKET", payload: ticket })}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="mt-3 text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-1.5 me-2 mb-2"
                      onClick={() => dispatch({ type: "DELETE_TICKET", payload: ticket })}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
