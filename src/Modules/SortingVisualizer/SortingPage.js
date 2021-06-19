import './SortingPage.css';
import Visualizer from "./components/visualizer.js"
import Navbar from './components/navbar';
import { useRef } from 'react';

function SortingPage() {
  
  const ref = useRef(null);

  const handleReset = () => {
    ref.current.resetArray();
  }

  const handleSort = () => {
    ref.current.doSort();
  }

  return (
    <div className="sorting-container">
      <Navbar onclick={{
        'reset':handleReset,
        'sort': handleSort
      }}/>
      <Visualizer ref={ref}/>
    </div>
  );
}

export default SortingPage;
