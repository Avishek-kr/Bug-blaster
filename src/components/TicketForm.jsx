import { useState, useEffect } from 'react'

export default function TicketForm({ dispatch, scrollToSection, editingTicket }) {

  const priorities = [
    { id: "1", label: "Low", color: "green" },
    { id: "2", label: "Medium", color: "yellow" },
    { id: "3", label: "High", color: "red" },
  ];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1');

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('1');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && description) {
      const ticketData = {
        id: editingTicket ? editingTicket.id : new Date().toISOString(),
        title,
        description,
        priority
      }
      
      dispatch({
        type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
        payload: ticketData
      })

      if (editingTicket) {
        editingTicket = '';
      }
      
      clearForm();
    }; 
  }

  const handleCancel = () => {
    dispatch({ type: "CLEAR_EDITING_TICKET" })
    clearForm();
    scrollToSection()
  }

  return (
      <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-xl sm:mt-10">
        <div className="grid gap-x-8 gap-y-6 flex-column">
          <div className='sm:col-span-2'>
            <label htmlFor="title" className="block text-sm/6 font-semibold text-white">
              Title
            </label>
            <div className="mt-2.5">
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm/6 font-semibold text-white">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                id="description"
                name="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Priority</h3>     
          <div className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'> 
            <div className="flex flex-wrap gap-2 justify-center w-full priority-fields">
              {priorities.map(({ id, label, color }) => (
                    <div
                      key={id}
                      className="flex items-center ps-3 flex-1 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                    >
                      <input
                        id={`${id}`}
                        type="radio"
                        name="colored-radio"
                        value={id}
                        checked={priority === id}
                        onChange={(e) => setPriority(e.target.value)}
                        className={`
                          appearance-none w-[17px] h-[16px] border border-gray-300 rounded-full
                          checked:bg-${color}-600 checked:border-${color}-600
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500
                          bg-gray-100 dark:bg-gray-700 dark:border-gray-600
                          transition-colors duration-150
                        `}
                      />
                      <label
                        htmlFor={`${id}`}
                        className="px-2 text-sm w-full font-medium text-gray-900 dark:text-gray-300 py-3"
                      >
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
            </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block ${title && description ? '' : "opacity-50 cursor-not-allowed"} w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            onClick={scrollToSection}
            disabled={title && description ? false : true}
          >
            Submit
          </button>

        {editingTicket &&
          <button
          type="button"
          className={`mt-3 block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
          onClick={handleCancel}
          >
            Cancel Edit
          </button>
        }
        </div>
      </form>
  )
}
