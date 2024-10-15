import { useLocation } from "react-router-dom";

function Confirmation() {
    const eventInfo = useLocation();
    console.log(eventInfo);

    return (
        <section>
            <h2>Tack din för din beställning</h2>
        </section>
    )
}
  
export default Confirmation;