import './index.css'
import './custom.css'

function Header() {

    return (
        <>
            <header className='flex items-center justify-center h-[20vh]'>
                <nav className='flex gap-8' id='nav-container'>
                    <a className='text-2xl inconsolata font-semilight' href="">Home</a>
                    <a className='text-2xl inconsolata font-semilight' href="">About</a>
                    <a className='text-2xl inconsolata font-semilight' href="">Features</a>
                    <a className='text-2xl inconsolata font-semilight' href="">Demo</a>
                </nav>
            </header>
        </>
    )
}

export default Header
  