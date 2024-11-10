import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      if (!listing?.userRef) return; // Add a check here

      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${listing.userRef}`);
        if (!res.ok) {
          throw new Error('Failed to fetch landlord');
        }
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.error('Error fetching landlord:', error);
      }
    };

    fetchLandlord();
  }, [listing?.userRef]); // Use optional chaining here

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{landlord.username}</span> for{' '}
            <span className='font-semibold'>{listing?.name?.toLowerCase()}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing?.name}&body=${message}`}
            className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
