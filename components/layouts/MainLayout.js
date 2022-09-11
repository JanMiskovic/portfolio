import Header from "../Header";

export default function MainLayout({ children }) {
    return (
        <div className="h-screen mx-auto max-w-screen-lg py-12">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}
