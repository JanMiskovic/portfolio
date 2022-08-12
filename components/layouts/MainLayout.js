import Header from "../Header";

export default function MainLayout({ children }) {
    return (
        <div className="h-screen bg-slate-300">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}
