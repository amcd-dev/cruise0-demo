
import Profile from "@/components/profile";
import {useUser} from "@auth0/nextjs-auth0/client";

export default function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user.email_verified === false) return (
        <div>
            <p>Email not verified</p>
            <a href="/api/auth/logout">Logout</a>
        </div>
    )

    return (
        <>
            <p>Dashboard placeholder</p>
            <Profile />
            <a href="/api/auth/logout">Logout</a>
        </>
    )
}