// import React from 'react';
// import Image from 'next/image';
// import Logo from '../../assets/images/Logo_Black.svg';
// import UserImage from '../../assets/images/Foto-padrao.svg';
// import SearchIcon from '../../assets/images/Lupa.svg';
// import ArrowDown from '../../assets/images/ArrowDown.svg';

const Header = () => {
    return (
        <header className="hidden md:flex justify-between items-center p-5 bg-white shadow-md">
            <div className="flex items-center">
                <Image
                    src={Logo}
                    width={150}
                    height={150}
                    alt="Logo Elit Nexum"
                    className='h-8'
                />
            </div>
            <nav className="space-x-4">
                <a href="/" className="text-gray-800">Home</a>
                <a href="/feed" className="text-gray-800">Feed</a>
                <a href="/pesquisa" className="text-gray-800">Pesquisa</a>
            </nav>
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="border border-gray-600 rounded-full px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Image
                        src={SearchIcon}
                        alt="Ícone de Lupa"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                    />
                </div>
                <Image
                    src={UserImage}
                    width={150}
                    height={150}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                />
                <Image
                    src={ArrowDown}
                    alt="Seta para baixo"
                    className="w-4 h-4"
                />
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md space-x-2">
                    Nova Postagem
                </button>
            </div>
        </header>
    );
};

export default Header;
