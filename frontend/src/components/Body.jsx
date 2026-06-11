import Card from "./Card";
import { useEffect, useState } from "react";
export default function Body() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.BACKEND_URL || "http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);
  const Cards = cards.map((cards) => {
      return (
          <Card
              key={cards._id}
              image={cards.image}
              name={cards.name}
              club={cards.club}
              date={cards.date}
              time={cards.time}
              venue={cards.venue}
              link={cards.link}
              bgColor={cards.bgColor}
          />
      )
    } )
  
  return (
    <>
      <div className="Body">
        <div className='container'>{Cards}</div>
      </div>
    </>
  )
}