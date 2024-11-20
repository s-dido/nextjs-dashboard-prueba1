import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import homeStyles from '@/app/ui/home.module.css';



export default function Page() {
  return (
    <>
    <main className="flex min-h-screen bg-gradient-to-r from-zinc-900 to-neutral-700 flex-col justify-center">
      <div className="flex h-10 shrink-0 items-end rounded-lg bg-black-400 p-4 md:h-52">
        <AcmeLogo />
        {/* <AcmeLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className = {homeStyles.shape}/>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        
          {/* Add Hero Images Here */}
      </div>
    </main>
    </>
  );

}
