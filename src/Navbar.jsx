import React from 'react';
import { useGlobalContext } from './context';
import logo from './assets/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 5
		openSubmenu(page, {center, bottom});
	};

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('nav-btn')){
      closeSubmenu()
    }
  }

	return (
		<nav className='h-[5rem] flex items-center justify-center bg-transparent relative z-[1]' onMouseOver={handleSubmenu}>
			<div className='w-[90vw] max-w-[1170px] md:grid md:grid-cols-[auto_1fr_auto]'>
				<div className='flex justify-between items-center'>
					<img src={logo} alt='stripe logo' />
					<button className='btn md:hidden' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='hidden  md:justify-self-center md:items-center md:grid md:grid-cols-[1fr_1fr_1fr] md:text-center md:h-full '>
					<li>
						<button
							className='nav-btn h-full bg-transparent text-[1.1rem] text-white capitalize tracking-[1px] w-[10rem]'
							onMouseOver={displaySubmenu}
						>
							products
						</button>
					</li>
					<li>
						<button
							className='nav-btn h-full bg-transparent text-[1.1rem] text-white capitalize tracking-[1px] w-[10rem]'
							onMouseOver={displaySubmenu}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className='nav-btn h-full bg-transparent text-[1.1rem] text-white capitalize tracking-[1px] w-[10rem]'
							onMouseOver={displaySubmenu}
						>
							company
						</button>
					</li>
				</ul>
				<button className='btn px-3 hidden md:block'>sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
