import Header from "../Header";

export default function MainLayout({ children }) {
    return (
        <div className="mx-auto max-w-screen-lg p-5">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}
