import { useState, useEffect } from "react";
import axios from 'axios';

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const restUrl = "api/speakers";

function useRequestRest() {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
    async function delayFunc() {
        try {
            const result = await axios.get(restUrl);
            setRequestStatus(REQUEST_STATUS.SUCCESS);
            setData(result.data);
        } catch(e) {
            setRequestStatus(REQUEST_STATUS.FAILURE);
            setError(e);
        }
    }
    delayFunc();
    }, []);

    const updateRecord = (record, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = data.map((rec) => {
            return rec.id === record.id ? record : rec;
        });
        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.put(`${restUrl}/${record.id}`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch(error) {
                console.error('error thrown in delay function', error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    const insertRecord = (record, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = [record, ...data];
        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.post(`${restUrl}/99999`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch(error) {
                console.error('error thrown in delay function', error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    const deleteRecord = (record, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = data.filter((rec) => {
            return rec.id !== record.id;
        });
        async function delayFunction() {
            try {
                setData(newRecords);
                await axios.delete(`${restUrl}/${record.id}`, record)
                if (doneCallback) {
                    doneCallback();
                }
            } catch(error) {
                console.error('error thrown in delay function', error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    return {
        data, requestStatus, error, updateRecord, insertRecord, deleteRecord
    }
}

export default useRequestRest;