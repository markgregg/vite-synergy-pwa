import React, { FC } from 'react'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import Greeting from '../../types/Greeting'
import { updateGreeting } from '../../store/slices/greetingSlice'
import '../../styles/greetingEntry.scss'
import ApplicationCommands from '../../types/ApplicationCommands'

const GreetingEntry: FC<ApplicationCommands> = ({ showMessage }) => {
  const greeting = useSelector((state: RootState) => state.greeting);

  const update = (greeting: Greeting) => {
    updateGreeting(greeting)
  }

  const sendMessage = () => {
    showMessage(greeting)
  }

  return (
    <div className='greetingEntry'>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="to">To:</label></td>
            <td>
              <input
                id="to"
                type="text"
                value={greeting.recipient}
                onChange={e => update({ ...greeting, recipient: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="message">Message:</label></td>
            <td>
              <textarea
                id="message"
                name="text"
                rows={5}
                value={greeting.message}
                onChange={e => update({ ...greeting, message: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <td><label htmlFor="from">From:</label></td>
            <td>
              <input
                id="from"
                type="text"
                value={greeting.sender}
                onChange={e => update({ ...greeting, sender: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default GreetingEntry