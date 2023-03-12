import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';
const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
		<aside
			className={`${
				isSidebarOpen
					? 'sidebar-wrapper show'
					: 'sidebar-wrapper'
			} `}
		>
      <div className="sidebar">
        <button className="absolute top-4 right-4 text-[2rem] text-gray-700" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div>
          {sublinks.map((item, index)=>{
            const {links, page} = item;
            return (
              <article className='mb-4' key={index}>
                <h4>{page}</h4>
                <div className="grid grid-cols-[1fr_1fr] gap-y-1">
                  {links.map((link,index)=>{
                    const {url,icon,label} = link;
                    return (
                      <a href={url} className='text-gray-800 flex items-center gap-2'>{icon}{label}</a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
	);
}

export default Sidebar