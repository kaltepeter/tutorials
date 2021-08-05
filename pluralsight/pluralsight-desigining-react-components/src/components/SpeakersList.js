import Speaker from './Speaker';
import useRequestDelay, {REQUEST_STATUS} from '../hooks/useRequestDelay';
import {data} from '../../SpeakerData';
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext';
import { useContext } from 'react';

import ReactPlaceholder from "react-placeholder";

const SpeakersList = ({showSessions}) => {
  const { data: speakersData, requestStatus, error, updateRecord} = useRequestDelay(2000, data);

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
            return <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} onFavoriteToggle={(doneCallback) => {
              updateRecord({
                ...speaker,
                favorite: !speaker.favorite
              },doneCallback)
            }} />;
          })}
        </div>
        </ReactPlaceholder>

    </div>
  )
};

export default SpeakersList;