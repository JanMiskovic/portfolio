import Bio from "../Bio";
import Header from "../Header";

export default function MainLayout({ children }) {
    return (
        <div className="mx-auto max-w-screen-lg px-5 py-5">
            <Header />
            <Bio />
            <main>
                {children}
            </main>
        </div>
    );
}
