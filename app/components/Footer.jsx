'use client';

const Footer = () =>{
    const scrollToAnchor = (id) =>{
        const anchorElement = document.getElementById(id);
        if (anchorElement) {
            anchorElement.scrollIntoView({behavior: 'smooth', duration: 7000,});
        }
    }
    return(
        <footer>
            <div className="m-[15px] bg-[#F65252] lg:px-[150px] py-[65px]">
                <div className="flex justify-center lg:justify-between">
                    <div>
                        <ul className=" uppercase font-[600] text-[1rem] flex text-white tracking-wide">
                            <li className="lets-contact-white">
                                <a href="https://instagram.com/_mishikk?igshid=NzZlODBkYWE4Ng==" target="_blank">
                                    instagram
                                </a>
                            </li>
                            <li className="ml-[20px] lets-contact-white">
                                <a href="https://t.me/USER_VA" target="_blank">
                                    telegram
                                </a>
                            </li>
                            <li className="ml-[20px] lets-contact-white">
                                <a href="https://api.whatsapp.com/send?phone=79149045535" target="_blank">
                                    whatsapp
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=" hidden lg:block">
                        <ul className="font-[400] text-[1rem] flex text-white tracking-wide">
                            <li className="lets-contact-white">
                                <a className="select-none" onClick={() => scrollToAnchor('startContent')}>
                                    вверх
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;