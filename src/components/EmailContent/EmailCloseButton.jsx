import { FiX } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const EmailCloseButton = ({ onClick }) => (
  <button
    className="
    absolute top-2 right-2 px-2 pb-1 rounded
    text-red-500 hover:text-red-600
    dark:text-red-300 dark:hover:text-red-400
    transition-colors"
    onClick={onClick}
  >
    <FiX className="inline sm:mr-1 mb-[1px]" />
    <span className="hidden sm:inline">Fechar</span>
  </button>
)

export default EmailCloseButton