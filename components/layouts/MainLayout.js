import Bio from "../Bio";
import Header from "../Header";
import Nav from "../Nav";

export default function MainLayout({ children }) {
    return (
        <div className="mx-auto max-w-screen-lg p-5 sm:p-7">
            <Header />
            <Bio />
            <Nav />
            <main>
                {children}
            </main>
        </div>
    );
}
