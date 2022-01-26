import './App.css';

function App() {
  return (
    <div className='w-3/4 border border-dotted border-red-300 flex flex-col flex-center items-center px-16 py-12 text-center space-y-3 md:space-y-0 md:flex-row '>
      <p className='w-1/2 border border-solid border-black bg-blue-200 hover:bg-yellow-100'>Box 1</p>
      <p className='w-1/2 border border-solid border-black bg-blue-200 hover:bg-yellow-100'>Box 2</p>
      <p className='w-1/2 border border-solid border-black bg-blue-200 hover:bg-yellow-100'>Box 3</p>
    </div>
  );
}

export default App;
