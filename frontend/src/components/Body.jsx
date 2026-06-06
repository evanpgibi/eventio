import Card from "./Card";
import Cards from "./Cards";
export default function Body() {
  const Cards2 = Cards.map((cards) => {
      return (
          <Card
              image={cards.image}
              name={cards.name}
              club={cards.club}
              date={cards.date}
              time={cards.time}
              venue={cards.venue}
              link={cards.link}
          />
      )
    } )
  
  return (
    <>
      <h1>Eventio</h1>
      <div className="filter">
          <button id="All">All</button>
          <button id="Coding">Coding</button>
          <button id="NonTech">Non-Tech</button>
          <button id="Tech">Tech</button>
      </div>
      <div className='container'>{Cards2}</div>
    </>
  )
}