import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> anjing.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     <a>
    //       This is my button
    //     </a>
    //     <a>

    //     </a>

    //     <MyButton/>
    //   </header>
    // </div>
    <div data-layer="FrontPageWaitTime" className="Frontpagewaittime" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
      <div data-layer="Current Wait Time:" className="CurrentWaitTime" style={{left: 391, top: 181, position: 'absolute', color: 'black', fontSize: 96, fontFamily: 'Jaro', fontWeight: '400', wordWrap: 'break-word'}}>Current Wait Time:</div>
      <div data-layer="00:00" className="00" style={{width: 324, height: 198, left: 665, top: 277, position: 'absolute', color: 'black', fontSize: 96, fontFamily: 'Inknut Antiqua', fontWeight: '400', wordWrap: 'break-word'}}>00:00</div>
      <div data-layer="# of people ahead of you." className="OfPeopleAheadOfYou" style={{left: 486, top: 826, position: 'absolute', color: 'black', fontSize: 50, fontFamily: 'Instrument Sans', fontWeight: '400', wordWrap: 'break-word'}}># of people ahead of you.</div>
      <div data-layer="There are" className="ThereAre" style={{left: 646, top: 545, position: 'absolute', color: 'black', fontSize: 50, fontFamily: 'Instrument Sans', fontWeight: '400', wordWrap: 'break-word'}}>There are</div>
      <div data-layer="approx." className="Approx" style={{left: 523, top: 397, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Instrument Sans', fontWeight: '400', wordWrap: 'break-word'}}>approx.</div>
      <div data-layer="HomeButton" className="Homebutton" style={{width: 97, height: 97, padding: 12, left: 149, top: 40, position: 'absolute', background: '#2C2C2C', borderRadius: 32, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div data-layer="Home" className="Home" style={{width: 73, height: 73, position: 'relative'}}>
          <div data-layer="Icon" className="Icon" style={{width: 54.75, height: 60.83, left: 9.13, top: 6.08, position: 'absolute', border: '2px #F5F5F5 solid'}}></div>
        </div>
      </div>
      <div data-layer="GameButton" className="Gamebutton" style={{width: 97, height: 97, padding: 12, left: 28, top: 40, position: 'absolute', background: '#2C2C2C', borderRadius: 32, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div data-layer="Play" className="Play" style={{width: 73, height: 73, position: 'relative'}}>
          <div data-layer="Icon" className="Icon" style={{width: 42.58, height: 54.75, left: 15.21, top: 9.13, position: 'absolute', border: '2px #F5F5F5 solid'}}></div>
        </div>
      </div>
    <div data-layer="LabButton" className="Labbutton" style={{width: 97, height: 97, padding: 12, left: 271, top: 40, position: 'absolute', background: '#2C2C2C', borderRadius: 32, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      <div data-layer="Thermometer" className="Thermometer" style={{width: 73, height: 73, position: 'relative'}}>
        <div data-layer="Icon" className="Icon" style={{width: 27.38, height: 66.92, left: 21.29, top: 3.04, position: 'absolute', border: '2px #F5F5F5 solid'}}></div>
      </div>
    </div>
    <div data-layer="ChatButton" className="Chatbutton" style={{width: 97, height: 97, padding: 12, left: 392, top: 40, position: 'absolute', background: '#2C2C2C', borderRadius: 32, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
      <div data-layer="Message circle" className="MessageCircle" style={{width: 73, height: 73, position: 'relative'}}>
        <div data-layer="Icon" className="Icon" style={{width: 54.75, height: 54.75, left: 9.13, top: 9.12, position: 'absolute', border: '2px #F5F5F5 solid'}}></div>
      </div>
    </div>
    <div data-layer="UserLeft" className="Userleft" style={{width: 131, height: 131, left: 515, top: 651, position: 'absolute'}}>
      <div data-layer="Icon" className="Icon" style={{width: 87.33, height: 98.25, left: 21.83, top: 16.38, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
    </div>
    <div data-layer="UserRight" className="Userright" style={{width: 131, height: 131, left: 862, top: 651, position: 'absolute'}}>
      <div data-layer="Icon" className="Icon" style={{width: 87.33, height: 98.25, left: 21.83, top: 16.38, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
    </div>
    <div data-layer="UserYou" className="Useryou" style={{width: 131, height: 131, left: 688, top: 639, position: 'absolute'}}>
      <div data-layer="Icon" className="Icon" style={{width: 87.33, height: 98.25, left: 21.83, top: 16.38, position: 'absolute', border: '4px #009951 solid'}}></div>
    </div>
  </div>
  );
}

function MyButton() {
  const [count, setcount] = useState(0)

  function handleClick(){
    setcount(count + 1);
  }
  return (
    <button onClick ={handleClick}>
      Clicked {count} times
    </button>
  )
}

export default App;
