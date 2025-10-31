import TicketForm from './components/TicketForm';
import { useEffect, useReducer, useRef, useState } from 'react';
import ticketReducer from './reducers/ticketReducer';
import './App.css';
import TicketItem from './components/Ticketitem';
import { sortBoard } from './utilities/sortingUtitlities';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';

function App() {

  const initialState = { tickets: [], editingTicket: null}
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const [sort, setSort] = useState('');

  const mySectionRef = useRef(null);

  const scrollToSection = () => {
    if (mySectionRef.current) {
      mySectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (state.tickets.length > 0 && mySectionRef.current) {
      mySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.tickets.length, state.editingTicket]);

  const handleSort = (e) => {
    setSort(e.target.value)
    sortBoard(sort);
  }

  const UserInfo = { username: 'Admin', isAdmin: false }

  return (
    <>
    <UserInfoContext.Provider value={UserInfo}>
      <BlogPage />
    </UserInfoContext.Provider>
    <div className="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Bug Blaster</h2>
      </div>
      <TicketForm dispatch={dispatch} scrollToSection={scrollToSection} editingTicket={state.editingTicket} />

      {state.tickets.length > 0 && (
        <div className="mt-8 flex justify-center items-center flex-col h-screen overflow-auto text-gray-700 all-tickets rounded-md" ref={mySectionRef}>
            <div className="px-10 mt-6 flex w-full items-center justify-center">
              <h1 className="text-2xl font-bold text-white">All Tickets</h1>              
              <select onChange={handleSort} className="block p-2 ml-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
            </div>
            <TicketItem tickets={state.tickets} dispatch={dispatch} sortedBoards={sortBoard(sort)}  />
        </div>
      )
    }
    </div>
    </>
  );
}

export default App;
