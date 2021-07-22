import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

function useRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
    async function delayFunc() {
        try {
        setData(data);
        await delay(delayTime);
        // throw "had error"
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        } catch(e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
        }
    }
    delayFunc();
    }, []);

    const updateRecord = (recordUpdated, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = data.map((rec) => {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });
        async function delayFunction() {
            try {
                await delay(delayTime);
                if (doneCallback) {
                    doneCallback();
                }
                setData(newRecords);
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
        data, requestStatus, error, updateRecord
    }
}

export default useRequestDelay;