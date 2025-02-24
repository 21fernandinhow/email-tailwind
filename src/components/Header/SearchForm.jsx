import { FiSearch } from "react-icons/fi";

const SearchForm = () => (
  <form className="min-w-0 md:w-full flex-grow flex" onSubmit={(ev) => ev.preventDefault()}>
    <input
      className="
        min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
        bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50
        focus:outline-none focus:border-primary-500 transition-colors"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
        min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
        bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50
        focus:outline-none focus:border-primary-500 focus:text-primary-500
        hover:border-primary-500 hover:text-primary-500 transition-colors"
    >
      <FiSearch />
    </button>
  </form>
)

export default SearchForm