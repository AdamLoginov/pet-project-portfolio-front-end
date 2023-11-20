const Header = () => {
    return(
        <header className="sticky-nav pt-[65px] px-[65px]">
            <ul className="flex justify-end text-white text-[22px] font-bold uppercase">
                <li className="mr-5">
                    <a href="" className=" hover:text-gray-300 nav-link-animation">
                    работы
                    </a>
                </li>
                <li className="mr-5">
                    <a href="" className=" hover:text-gray-300 nav-link-animation">
                    Обо мне
                    </a>
                </li>
                <li className="mr-5">
                    <a href="" className=" hover:text-gray-300 nav-link-animation">
                    контакты
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header;