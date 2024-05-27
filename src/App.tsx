import family from './family.svg';
import holiday from './going-holiday.svg';
import retire from './retire.svg';
import home from './home.svg';
import fund from './em-fund.svg';
import debt from './debt.svg';
import vision from './vision.svg';

const App = () => (
  <main>
    <ul className="timeline">
      <li className="timeline-item"><p>You are <br /> here</p></li>
      <li className="timeline-item" style={{right: "56px"}}><p>In 1 year and 9 months</p></li>
      <li className="timeline-item" style={{right: "66px"}}><p>In 3 years and 2 months</p></li>
      <li className="timeline-item" style={{right: "70px"}}><p>In 4 year and 9 months</p></li>
      <li className="timeline-item" style={{right: "30px"}}><p>In 8 years and 11 months</p></li>
      <li className="timeline-item"><p>Ultimately</p></li>
    </ul>

    <div className="card card-one" style={{left: "160px", top: "56px"}}>
      <img src={family} alt="Baby's birth" />
      <div className="label">Baby’s birth</div>
    </div>
    <div className="card card-one" style={{left: "300px", bottom: "78px"}}>
      <img src={holiday} alt="Holiday" />
      <div className="label">Holiday</div>
    </div>
    <div className="card card-one" style={{left: "720px", bottom: "212px"}}>
      <img src={retire} alt="Retire" />
      <div className="label">Retire</div>
    </div>
    <div className="card card-two" style={{left: "160px", bottom: "74px"}}>
      <img src={home} alt="New home" />
      <div className="label">New home</div>
    </div>
    <div className="card card-two" style={{left: "447px", bottom: "210px"}}>
      <img src={fund} alt="Emergency fund" />
      <div className="label py-1">Emergency fund</div>
    </div>
    <div className="card card-two" style={{left: "638px", bottom: "348px"}}>
      <img src={debt} alt="Debt free" />
      <div className="label">Debt free</div>
    </div>
    <div className="card card-three" style={{left: "780px", bottom: "485px"}}>
      <img src={vision} alt="Vision" />
      <div className="label">Make a contribution to my community through philantrophy</div>
    </div>
  </main>
);

export default App;