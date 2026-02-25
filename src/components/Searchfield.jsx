export default function Searchfield({handleinput, filter}) {

    return (
        <input type="search" placeholder="Search..." value={filter} onChange={handleinput} style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%' }} />
    )
}