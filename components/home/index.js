import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    router.push('/login')
  }


  return (
    <div>
      {
        session ? (
          <div>
            Real Estate
            <h2>{t("home:rent")}</h2>
            <h1>{session.user.name}</h1>
            <p>{session.user.email}</p>
            <img src={session.user.image} />
          </div>
        ) : (
          <p>Skeleton </p>
        )
      }
      <button onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}

export default HomePage