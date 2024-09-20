import Button from './components/Button'
import ButtonBox from './components/ButtonBox'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'
import CalProvider from './context/CalcContext'
import logo_icon from './assets/payscribe_logo.png'

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]
function App() {


  return (
    <CalProvider>
      <div>
         <div className='logo-container'>
          <img src={logo_icon} alt="logo-icon" />
        </div>
      <Wrapper>
       
       <Screen />
       <ButtonBox>
         {btnValues.flat().map((btn, i) => (
           <Button value={btn} key={i} />
         ))}
       </ButtonBox>
    
     </Wrapper>
      </div>
    
   
    </CalProvider>
  )
}

export default App
