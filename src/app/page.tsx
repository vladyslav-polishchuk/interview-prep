'use client';

import LoginModal from '@/lib/client/auth/LoginModal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <GoogleButton /> */}

      <LoginModal />
    </main>
  );
}
