import { getSession } from '@auth0/nextjs-auth0/edge';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();

  if (session?.user) {
    redirect('/dashboard/home');
  } else {
    redirect('/login');
  }
}