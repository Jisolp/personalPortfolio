import style from './style';
import {Navbar, about} from './components';

const App = () =>(
    <div className = "bg-primary w-full overflow-hidden">
      <div className ={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className = {`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className = {`bg-primary ${sttles.flexStart}`}>
        <div className = {`${styles.boxWidth}`}>
          <hello u just copy this to make diff sections i believe/>
        </div>
      </div>
    </div>
);

export default App
