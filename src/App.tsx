import family from './family.svg';
import holiday from './going-holiday.svg';
import retire from './retire.svg';

const App = () => (
  <main>
    <ul className="timeline">
      <li className="timeline-item"><p>You are <br /> here</p></li>
      <li className="timeline-item" style={{right: "56px"}}><p>in 1 year and 9 months</p></li>
      <li className="timeline-item" style={{right: "66px"}}><p>in 3 years and 2 months</p></li>
      <li className="timeline-item" style={{right: "70px"}}><p>in 4 year and 9 months</p></li>
      <li className="timeline-item" style={{right: "30px"}}><p>in 8 years and 11 months</p></li>
      <li className="timeline-item"><p>ultimately</p></li>
    </ul>

    <div className="card card-one" style={{left: "160px", top: "60px"}}>
          <img src={family} alt="Baby's birth" />
          <div className="label">Baby’s birth</div>
        </div>
    <div className="card card-one" style={{left: "300px", bottom: "70px"}}>
          <img src={holiday} alt="Holiday" />
          <div className="label">Holiday</div>
        </div>
    <div className="card card-one" style={{left: "720px", bottom: "200px"}}>
          <img src={retire} alt="Retire" />
          <div className="label">Retire</div>
        </div>
  </main>
);

export default App;