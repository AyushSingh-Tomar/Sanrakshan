import { useContext } from 'react'
import {ContextProvider} from '../../Context/Context.jsx'
import './PracticeList.css'
const PracticeList = () => {
    // const {practiceList}=useContext(ContextProvider)
  return (
    <div className='PracticeList' id="PracticeList">
        <h2>Practices you should follow</h2>
    </div>
  )
}

export {PracticeList}