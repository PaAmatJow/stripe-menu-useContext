import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();
	const container = useRef(null);

  const [columns, setColumns] = useState('grid-cols-[repeat(2,1fr)]')

	useEffect(() => {
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;

    setColumns('grid-cols-[repeat(2,1fr)]');
    if(links.length === 3){
      setColumns('grid-cols-[repeat(3,1fr)]');
    }
    if(links.length > 3){
      setColumns('grid-cols-[repeat(4,1fr)]');
    }
	}, [location],[links]);
	return (
		<aside
			className={`shadow-md absolute -translate-x-2/4 z-[3] hidden rounded-md transition-all duration-200 p-8 left-2/4 top-16 before:content-[''] before:block before:w-0 before:h-0 before:border-b-white before:absolute before:top-[-5px] before:-translate-x-2/4 before:border-b-[5px] before:border-x-[5px] before:border-x-transparent before:border-solid before:left-2/4 bg-white ${
				isSubmenuOpen ? 'md:block' : ''
			}`}
			ref={container}
		>
			<h4 className='font-semibold'>{page}</h4>
			<div className={`grid gap-y-1 gap-x-8 ${columns} `}>
        {links.map((link,index)=>{
          const {label, icon,url} = link;
          return <a key={index} href={url} className='flex items-center gap-2 text-gray-700 capitalize'>{icon}{label}</a>
        
        })}
      </div>
		</aside>
	);
};

export default Submenu;
