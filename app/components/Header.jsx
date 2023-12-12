'use client';

const Header = () => {
    
    const scrollToAnchor = (id) =>{
        const anchorElement = document.getElementById(id);
        if (anchorElement) {
            anchorElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
    }

    return(
        <header className="sticky-nav pt-[65px] lg:px-[65px]">
            <ul className="flex justify-end text-white text-[1rem] lg:text-[22px] font-bold uppercase">
                <li className="mr-5">
                    <a href className=" transition-colors duration-300 hover:text-red-500 nav-link-animation select-none"
                        onClick={() => scrollToAnchor('ideas')}>
                    Идеи
                    </a>
                </li>
                <li className="mr-5">
                    <a className=" transition-colors duration-300 hover:text-red-500 nav-link-animation select-none"
                        onClick={() => scrollToAnchor('ofMe')}>
                    Обо мне & контакты
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;