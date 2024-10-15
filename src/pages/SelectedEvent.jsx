import { useLocation, useNavigate } from "react-router-dom";

function SelectedEvent() {
    const eventInfo = useLocation();
    const navigate = useNavigate();
    console.log(eventInfo);

    function handleClick() {
        navigate('/confirmation', { state: { event: eventInfo.state.event } });
    }

    return (
        <section>
            <h2>Du har valt:</h2>
            <h3>{ eventInfo.state.event.name }</h3>
            <p>{ eventInfo.state.event.where }</p>
            <p>{ eventInfo.state.event.price } kr</p>
            <button onClick={ handleClick }>Köp</button>
        </section>
    )
}
  
export default SelectedEvent;