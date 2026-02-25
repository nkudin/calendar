export default function EventItem({event}) {
    const today = new Date().toISOString().split("T")[0];

    return (
    <section>
        <h3>{event.date === today ? "TODAY: " : event.date > today ? "UPCOMING: " : "PAST:"}{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.description}</p>
    </section>
)
}