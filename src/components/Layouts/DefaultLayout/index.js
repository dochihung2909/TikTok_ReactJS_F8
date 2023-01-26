import Header from '~/components/Layouts/components/Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
