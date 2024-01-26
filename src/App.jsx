import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Rectangle from './components/Rectangle/Rectangle'
import IntroBox from './components/IntroBox/IntroBox'
import UnitBox from './components/UnitBox/UnitBox'
import {units} from './unitData'
import {intro} from './introData'

export default function App() {
 return ( 
 <div>
    <Header /> 
    <main>
      <MainPage />
    </main>
    <body>
      <Rectangle />
      <div className='introBoxBody'>
      <IntroBox {...intro}/>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[0]}/></li>
        <li><UnitBox {...units[1]}/></li>
        <li><UnitBox {...units[2]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[3]}/></li>
        <li><UnitBox {...units[4]}/></li>
        <li><UnitBox {...units[5]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[6]}/></li>
        <li><UnitBox {...units[7]}/></li>
        <li><UnitBox {...units[8]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[9]}/></li>
        <li><UnitBox {...units[10]}/></li>
        <li><UnitBox {...units[11]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[12]}/></li>
        <li><UnitBox {...units[13]}/></li>
        <li><UnitBox {...units[14]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[15]}/></li>
        <li><UnitBox {...units[16]}/></li>
        <li><UnitBox {...units[17]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[18]}/></li>
        <li><UnitBox {...units[19]}/></li>
        <li><UnitBox {...units[20]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[21]}/></li>
        <li><UnitBox {...units[22]}/></li>
        <li><UnitBox {...units[23]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[24]}/></li>
        <li><UnitBox {...units[25]}/></li>
        <li><UnitBox {...units[26]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[27]}/></li>
        <li><UnitBox {...units[28]}/></li>
        <li><UnitBox {...units[29]}/></li>
      </div>

      <div className='unitBoxLine'>
        <li><UnitBox {...units[30]}/></li>
      </div>

    
    </body>

    
    </div>
   
 )
}