import Button from '@/components/Button';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='flex px-20 w-screen pt-10 gap-6 justify-center items-center'>
      <div className='w-1/2 h-[20rem] rounded-lg bg-white dark:bg-dark-bg border border-gray-300 dark:border-gray-700 flex items-center justify-center'>
        <p className='text-center'>My Photo</p>
      </div>
      <div className='w-1/3'>
        <Button className='mb-4' variant='secondary'>Login</Button>
        <Button variant='secondary'>Login with google</Button>
      </div>
      </div>
      
      <div className='px-20 py-10'>
        <p className='text-center text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus asperiores quas ipsam incidunt officia corrupti ab quaerat aspernatur, veritatis, quidem ad vero accusantium, totam cum modi sapiente eos illum?</p>
      </div>
      <div>
        <Button variant='outline'>Contact me</Button>
      </div>
    </div>
  );
}