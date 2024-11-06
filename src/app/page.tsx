import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen p-4'>
      <div className='border border-gray-200 dark:border-gray-700 w-full max-w-2xl p-6 rounded-lg bg-white dark:bg-dark-bg'>
        <p className='text-sm'>Welcome to our website!</p>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <Link href="/blog" className="text-primary hover:underline">Go to blog</Link>
      </div>
    </div>
  );
}