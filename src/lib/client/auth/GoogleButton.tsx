import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function GoogleButton() {
  return (
    <button
      className="flex p-2 w-auto h-5 bg-red-400"
      onClick={() => signIn('google')}
    >
      <Image
        src="/google.svg"
        alt="Google Logo"
        className="dark:invert mb-32"
        width={20}
        height={20}
        priority
      />
      hey
    </button>
  );
}
