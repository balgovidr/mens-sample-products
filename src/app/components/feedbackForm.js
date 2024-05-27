'use client'

import React, {useEffect, useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from '@/firebase/firebaseClient';

export function FeedbackForm() {
    const [feedback, setFeedback] = useState('');

    async function submitForm() {
        // Add the feedback to firebase
        await addDoc(collection(db, "feedback"), {
            feedback: feedback,
            dateTime: Timestamp.fromDate(new Date())
        });
    }

    return (
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
              <SendIcon />
            </button>
          </div>
        </div>
    )
}