import family from './family.svg';
import holiday from './going-holiday.svg';
import retire from './retire.svg';
import home from './home.svg';
import fund from './em-fund.svg';
import debt from './debt.svg';
import vision from './vision.svg';
import chevron from './chevron.svg';

const timelineEvents = [
  { text: 'You are here', style: {} },
  { text: 'In 1 year and 9 months', style: { right: '56px' } },
  { text: 'In 3 years and 2 months', style: { right: '66px' } },
  { text: 'In 4 years and 9 months', style: { right: '70px' } },
  { text: 'In 8 years and 11 months', style: { right: '30px' } },
  { text: 'Ultimately', style: {} }
];

const cards = [
  { src: family, alt: "Baby's birth", label: "Baby’s birth", className: 'card-one', style: { left: '160px', top: '56px' } },
  { src: holiday, alt: "Holiday", label: "Holiday", className: 'card-one', style: { left: '300px', bottom: '78px' } },
  { src: retire, alt: "Retire", label: "Retire", className: 'card-one', style: { left: '720px', bottom: '212px' } },
  { src: home, alt: "New home", label: "New home", className: 'card-two', style: { left: '160px', bottom: '74px' } },
  { src: fund, alt: "Emergency fund", label: "Emergency fund", labelStyle: { paddingTop: '2px', paddingBottom: '2px' },
  className: 'card-two', style: { left: '447px', bottom: '210px', } },
  { src: debt, alt: "Debt free", label: "Debt free", className: 'card-two', style: { left: '638px', bottom: '348px' } },
  { src: vision, alt: "Vision", label: "Make a contribution to my community through philanthropy", className: 'card-three', style: { left: '780px', bottom: '485px' } }
];

const App = () => (
  <main>
      <ul className="timeline">
      {timelineEvents.map((event, index) => (
        <li key={index} className="timeline-item" style={event.style}>
          <p>{event.text}</p>
        </li>
      ))}
    </ul>

    {cards.map((card, index) => (
      <div key={index} className={`card ${card.className}`} style={card.style}>
        <img src={card.src} alt={card.alt} />
        <div className="label" style={card?.labelStyle}>{card.label}</div>
      </div>
    ))}

  </main>
);

export default App;