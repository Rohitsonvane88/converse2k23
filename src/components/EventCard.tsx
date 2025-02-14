'use client';
import React from 'react';
import Image from 'next/image';
import { generateTicket } from '@/lib/actions/ticket.actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type PropType = {
  userId: string | null;
  event: {
    eventId: string;
    eventName: string;
    imgSrc: string;
  };
};

const EventCard = ({ userId, event }: PropType) => {
  const router = useRouter();

  const handleRegistration = async () => {
    try {
      if (!userId) {
        router.push('/sign-in');
      } else {
        const res = await generateTicket({ userId, eventId: event.eventId });
      }
    } catch (err) {}
  };

  return (
    <div className="grid-cols-12 max-w-sm  border-2  border-slate-500 mt-2">
      <div className="grid justify-center items-center col-span-12">
        <Image src={event.imgSrc} alt="hi" width={240} height={240} />
      </div>
      <div className="grid justify-center items-center col-span-12">
        {event.eventName}
      </div>
      <div className="col-span-12 grid gap-8 grid-cols-12  justify-center mt-8 mb-8">
        <div className="col-span-6 grid justify-end">
          <Link href={`events/${event.eventId}`}>
            <button className="pixel-border px-4">View</button>
          </Link>
        </div>
        <div className="col-span-6 grid justify-start">
          <button onClick={handleRegistration} className="pixel-border px-4">
            Register
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventCard;
