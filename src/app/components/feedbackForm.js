'use client'

import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from '@/firebase/firebaseClient';
import CircularProgress from '@mui/material/CircularProgress';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [alert, setAlert] = useState({visibility: false});
    const [loading, setLoading] = useState(false);

    async function submitForm() {
      setLoading(true)

      try {
        // Add the feedback to firebase
        await addDoc(collection(db, "feedback"), {
            feedback: feedback,
            dateTime: Timestamp.fromDate(new Date())
        });

        setAlert({visibility: true, content: 'Sent!'})
        setTimeout(() => {setAlert({visibility: false})}, 3000);
      } catch {
        setAlert({visibility: true, content: "Sorry, that didn't sent. Please try again."})
        setTimeout(() => {setAlert({visibility: false})}, 3000);
      } finally {
        setLoading(false)
      }
    }

    return (
      <div className='flex-col'>
        <div className="flex flex-col gap-2 md:gap-10 md:flex-row md:pb-8">
          <label htmlFor="about" className="text-sm font-medium leading-6 text-tertiary md:flex-1 md:text-base md:text-right md:self-center md:max-w-xs">Got feedback or thoughts on what else you might want from us?</label>
          <div className="flex flex-row gap-2 items-center md:flex-1">
            <textarea
              id="thoughtsInput"
              name="thoughtsInput"
              rows={3}
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-tertiary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary text-sm p-2"
              defaultValue={''}
              onChange={(event) => setFeedback(event.target.value)}
              placeholder="I don't even want samples! I'd rather get..."
            />
            <button className="text-tertiary hover:text-primary transition" onClick={() => submitForm()}>
              <SendIcon className={loading ? 'hidden' : 'block'}/>
              <CircularProgress size={20} className={'text-tertiary' + (loading ? ' block' : ' hidden')}/>
            </button>
          </div>
        </div>
        <div className={'w-full shadow-md rounded-md bg-tertiary/65 text-primary py-1 px-2 items-center' + (alert.visibility ? ' flex' : ' hidden')}><NotificationsNoneIcon /> {alert.content}</div>
      </div>
    )
}