import Bio from "../Bio";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";

export default function MainLayout({ children }) {
    return (
        <div className="mx-auto max-w-screen-lg p-5 sm:p-7 lg:py-9 2xl:py-[5vh]">
            <Header />
            <Bio />
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
