import { data } from "../../SpeakerData";
import Speaker from "./Speaker";

const Speakers = () => {
    return (
        <div className="container-fluid">
            <SpeakersList data={data} />
        </div>
    )
}

export default Speakers;