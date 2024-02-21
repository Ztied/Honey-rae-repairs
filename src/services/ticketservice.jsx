export const getAllTickets = () => {
     return fetch("http://localhost:8088/servicetickets").then((res) => res.json())
}