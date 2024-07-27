import emails from "../../emails.json"
import EmailListItem from "./EmailListItem"

// eslint-disable-next-line react/prop-types
const EmailList = ({ setOpenEmail }) => {

  return (
    <div className="relative overflow-y-auto grow-[1] scrollbar-custom dark:scrollbar-custom-dark">
      {emails.map(email => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  )
}

export default EmailList