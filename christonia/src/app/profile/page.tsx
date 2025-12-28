import { redirect } from 'next/navigation';

export default function ProfilePage() {
  redirect('/profile/user-info');
  return null;
}