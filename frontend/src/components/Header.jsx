export default function Header() {
  return (
    <>
      <h1>EVENTIO</h1>
      <div className="filter">
          <button id="All">All</button>
          <button id="Coding">Coding</button>
          <button id="NonTech">Non-Tech</button>
          <button id="Tech">Tech</button>
      </div>
    </>
  )
}