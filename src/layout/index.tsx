import Footer from "./footer"
import Header from "./header"

export interface IAppProps {
    children: React.ReactElement
}

const Layout = ({ children }: IAppProps) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
}

export default Layout