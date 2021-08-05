import Speaker from './Speaker';
import useRequestRest, {REQUEST_STATUS} from '../hooks/useRequestRest';
import {data} from '../../SpeakerData';
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext';
import { useContext } from 'react';
import SpeakerAdd from './SpeakerAdd';
import ReactPlaceholder from "react-placeholder";

const SpeakersList = ({showSessions}) => {
  const { data: speakersData, requestStatus, error, updateRecord, insertRecord, deleteRecord} = useRequestRest();

  const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading speaker data failed. {error}</b>
      </div>
    )
  }

  return (
      <div className="container speakers-list">
        <ReactPlaceholder type="media" rows={15} className="speakerslist-placeholder" ready={requestStatus === REQUEST_STATUS.SUCCESS}>
          <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {speakersData.filter((speaker) => {
            return (speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery))
          })
          .filter((speaker) => {
            return speaker.sessions.find(session => {
              return session.eventYear === eventYear;
            })
          })
          .map((speaker) => {
            return <Speaker 
            key={speaker.id} 
            speaker={speaker} 
            showSessions={showSessions} 
            updateRecord={updateRecord}
            insertRecord={insertRecord}
            deleteRecord={deleteRecord} />;
          })}
        </div>
        </ReactPlaceholder>

    </div>
  )
};

export default SpeakersList;