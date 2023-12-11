'use client';

const Header = () => {
    
    const scrollToAnchor = (id) =>{
        const anchorElement = document.getElementById(id);
        if (anchorElement) {
            anchorElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
    }

    return(
        <header className="sticky-nav pt-[65px] px-[65px]">
            <ul className="flex justify-end text-white text-[22px] font-bold uppercase">
                <li className="mr-5">
                    <a className=" transition-colors duration-300 hover:text-red-500 nav-link-animation"
                        onClick={() => scrollToAnchor('ideas')}>
                    Идеи
                    </a>
                </li>
                <li className="mr-5">
                    <a className=" transition-colors duration-300 hover:text-red-500 nav-link-animation"
                        onClick={() => scrollToAnchor('ofMe')}>
                    Обо мне & контакты
                    </a>
                </li>
                {/* <li className="mr-5">
                    <a href="" className=" hover:text-gray-300 nav-link-animation">
                    контакты
                    </a>
                </li> */}
            </ul>
        </header>
    )
}

export default Header;