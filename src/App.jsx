import { useState, useEffect } from "react"
import { getAllTickets } from "./services/ticketservice"
import "./app.css"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

export const App = () => {
  const [AllTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState([false])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("ticket set!")
    })
  
  }, []) // runs on initial render of component

 
  return (
     <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() => {
        setShowEmergency(true)
        }}>
          Emergency</button>
    </div>
    <div>
      <button className="filter-btn btn-info" 
      onClick={() => {
        setShowEmergency(false)
      }}
      >
        Show All
      </button>
    </div>
    <article className="tickets">
      {AllTickets.map((ticket) => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
          </section>
        )
      })}
    </article>
  </div>
  )
}

