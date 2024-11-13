import localFont from "next/font/local";




export const metadata = {
    title: "Admin : Facebook",
    description: "Admin : Explore the world with us, with facebook",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>
    );
}
