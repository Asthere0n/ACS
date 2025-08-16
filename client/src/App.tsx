import './App.css'
import ChildrenDisplay from './components/ChildrenDisplay';
import ChildrenCreator from './components/ChildrenCreator';

function App() {
  return (
    <div className='flex w-full justify-around'>
      <ChildrenCreator />
      <ChildrenDisplay />
    </div>
  )
}

export default App
