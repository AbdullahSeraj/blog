import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <div className='bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'>
            <section className="px-[12%] min-h-screen">
                <Header />
                <main className="mb-auto">
                    <Outlet />
                </main>
                <Footer />
            </section>
        </div>
    )
}

export default RootLayout