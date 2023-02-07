
import Profile from "@/components/profile";
import {useUser} from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user.email_verified === false) return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex justify-center">
                <div className="ml-3">
                    <h3 className="text-center text-sm font-medium text-red-800">Email Address Not Verified</h3>
                    <div className="mt-2 text-center text-sm text-red-700">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            <li>Before you can access the Cruise0 dashboard you must first verify your email</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <a
                    href="/api/auth/logout"
                    className="my-3 inline-block rounded-md border border-transparent bg-red-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                >
                    Logout
                </a>
            </div>
            <div className="relative">
                <img
                    className="aspect-[3/2] w-full bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1657182410450-1ca8bacf84a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
                    alt=""
                />
            </div>
        </div>
    )
    return (
        <>
            <Navbar />
            <Newsletter />
        </>
    )
}