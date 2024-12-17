import { cn } from '@/shared/lib/utils';
import { JWTPayload } from '@/types';
import { User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface UserLabelProps {
    className?: string;
    user: JWTPayload;
}

const UserLabel: React.FC<UserLabelProps> = ({ className,user }) => {
  return (
    <Link href={"/profile"} className={cn("flex gap-1 items-center text-base max-sm:text-sm hover:opacity-50 transition-all duration-100 cursor-pointer active:translate-y-[2px]",className)}>
          {user.fullname} <User size={15}/>
    </Link>
  );
};

export default UserLabel;