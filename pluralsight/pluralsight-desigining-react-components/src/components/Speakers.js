import SpeakersList from './SpeakersList';
import { useState } from "react";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({theme, setTheme}) => {
    const [showSessions, setShowSessions] = useState(true);

    return (
        <>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions} />
            <SpeakersList showSessions={showSessions} />
        </>
    );
}

export default Speakers;