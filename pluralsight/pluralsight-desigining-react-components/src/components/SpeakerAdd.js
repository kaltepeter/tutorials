import withAuth from "./withAuth";

const SpeakerAdd = ({insertRecord, eventYear, loggedInUser }) => {

    if (!loggedInUser || loggedInUser.length === 0) return null;

    return (
        <a href="#" className="addSes">
            <i onClick={(e) => {
                e.preventDefault();
                const firstLast = window.prompt("Enter your first and last name: ", "");
                const firstLastArray = firstLast.split(' ');
                insertRecord({
                    id: "999999",
                    first: firstLastArray[0],
                    last: firstLastArray[1],
                    sessions: [
                        {
                            id: "88888",
                            title: `New Session for ${firstLastArray[0]}`,
                            room: {
                                name: "Main Ball Room"
                            },
                            eventYear
                        }
                    ]
                })
            }}>+</i>
        </a>
    );
};

export default withAuth(SpeakerAdd);