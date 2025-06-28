import './index.css'
import './custom.css'

function Header() {

    return (
        <>
            <header className='flex items-center justify-center h-[20vh] w-[100%] bg-zinc-200 z-10 fixed top-0  left-0 right-0 shadow-sm'>
                <nav className='flex gap-10' id='nav-container'>
                    <a className='text-3xl inconsolata font-semilight' href="">Home</a>
                    <a className='text-3xl inconsolata font-semilight' href="">About</a>
                    <a className='text-3xl inconsolata font-semilight' href="">Features</a>
                    <a className='text-3xl inconsolata font-semilight' href="">Demo</a>
                </nav>
            </header>
        </>
    )
}

export default Header
  