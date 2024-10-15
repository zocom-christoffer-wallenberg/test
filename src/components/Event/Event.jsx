import { useNavigate } from "react-router-dom";

function Event(props) {
    const { event } = props;
    const navigate = useNavigate();

    function handleClick() {
        navigate('/event', { state: { event: event } });
    }

    return (
        <article onClick={ handleClick }>
            <h3>{ event.name }</h3>
            <p>{ event.where }</p>
        </article>
    )
}

export default Event;