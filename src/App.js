
import { useState } from 'react';
import './App.css';

function App() {
const [value, setValue] = useState('');

// creating a function
const handleButtonClick = (btnValue)=> {
  if( btnValue === '='){
    try{
      setValue(eval(value).toString());
    }
    catch(error){
      setValue('Error');
    }
  }
  else if(btnValue === 'AC'){
    setValue('');
  }
  else if(btnValue=== 'DE'){
    setValue(value.slice(0,-1));
  }
  else{
    setValue(value + btnValue);
  }
};

  return (
   <div className='container'>
      <div className='calculator'>
        <form action="">
          <div className='display'>
            <input type="text" value={value} readOnly/>
          </div>
          <div className='btn'>
            <input type='button' value="AC" onClick={() => handleButtonClick('AC')}/>
            <input type='button' value="DE" onClick={() => handleButtonClick('DE')}/>
            <input type='button' value="." onClick={() => handleButtonClick('.')}/>
            <input type='button' value="/" onClick={() => handleButtonClick('/')}/>
          </div >
          <div className='btn'>
          <input type='button' value='7' onClick={() => handleButtonClick('7')} />
          <input type='button' value='8' onClick={() => handleButtonClick('8')} />
          <input type='button' value='9' onClick={() => handleButtonClick('9')} />
          <input type='button' value='*' onClick={() => handleButtonClick('*')} />
        </div>
        <div className='btn'>
          <input type='button' value='4' onClick={() => handleButtonClick('4')} />
          <input type='button' value='5' onClick={() => handleButtonClick('5')} />
          <input type='button' value='6' onClick={() => handleButtonClick('6')} />
          <input type='button' value='+' onClick={() => handleButtonClick('+')} />
        </div>
        <div className='btn'>
          <input type='button' value='1' onClick={() => handleButtonClick('1')} />
          <input type='button' value='2' onClick={() => handleButtonClick('2')} />
          <input type='button' value='3' onClick={() => handleButtonClick('3')} />
          <input type='button' value='-' onClick={() => handleButtonClick('-')} />
        </div>
        <div className='btn'>
          <input type='button' value='00' onClick={() => handleButtonClick('00')} />
          <input type='button' value='0' onClick={() => handleButtonClick('0')} />
          <input type='button' value='=' onClick={() => handleButtonClick('=')} />
        </div>
        </form>
      </div>
   </div>
  );
}

export default App;
