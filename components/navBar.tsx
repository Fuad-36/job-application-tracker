import { BriefcasePlus } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
export default function NavBar(){
    return (
        <nav className ="flex justify-between border-b border-border bg-background px-4 py-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
            <div className="container flex items-center gap-2 h-10 px-4">
                <BriefcasePlus />
                Job Tracker
            </div>
            </Link>
            <div className="flex items-center gap-2 px-4">
                <Link  href="/sign-in"> <Button variant="ghost" className="text-gray-700 hover:text-black" >Log In</Button></Link>
                <Link href="/sign-up"> <Button className="">Start for Free</Button></Link>
            </div>
        </nav>
    )
}