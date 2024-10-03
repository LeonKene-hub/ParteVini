"use client";
import close from "../../assets/images/Close.svg"
import Image from 'next/image'
 import userDefault from '../../assets/images/Foto-padrao.svg'
import pubPhoto from '../../assets/images/aws.jpg'
import '../Publicacao/index.css'
import edit from "../../assets/images/Button-Edit.svg"
import trash from "../../assets/images/Button-Trash.svg"
import clock from "../../assets/images/Clock.svg"
import save from "../../assets/images/Bookmark.svg"
import world from "../../assets/images/World.svg"
import miniLike from "../../assets/images/Star.svg"
import { ButtonEdit, ButtonLike, ButtonTrash } from "@/src/Components/Button"
import { useEffect, useState } from "react"


function Publicacao() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Isso garante que o código só rodará no cliente
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
                setWindowHeight(window.innerHeight);
            };

            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <>        
            {/* organiza infos do perfil, data e "X" de fechamento da publicacao */}
                    <div className='w-full flex justify-between'>

                        {/* formata foto nome data do perfil */}
                        <div className='flex sm:gap-5'>
                            {/* {innerWidth} */}
                            <Image
                                src={userDefault}
                                width={windowWidth > 375 ? 110 : 52}
                                height={windowHeight > 375 ? 110 : 52}
                                alt="foto de perfil do author da publicação"
                            />
                            <div className='flex flex-col justify-center ml-5'>
                                <h1 className='text-black sm:text-2xl'>@Vinicius</h1>
                                <p className='text-black sm:text-2xl'>06 de Outubro de 2024</p>
                            </div>
                        </div>

                        {/* icone do "X" de fechamento solto  */}
                        <Image
                            src={close}
                            height={windowHeight > 375 ? 33 : 16}
                            width={windowWidth > 375 ? 33 : 16}
                            alt='imagem de X representando o fechamento da publicacao em destaque'
                        />
                    </div>


                    {/* organiza imagem e texto da postagem */}
                    <div className='w-full flex flex-col items-center mt-5'>
                        <Image className='rounded-lg w-[100%]'
                            src={pubPhoto}
                        />

                        <p className='text-black mt-3 text-justify sm:mt-5 sm:text-3xl sm:mt-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque deleniti eveniet mollitia consequuntur delectus distinctio iste dolor, eos nesciunt molestias voluptate nulla laudantium pariatur magni totam nam velit eligendi.</p>
                    </div>


                    {/* organiza icones */}
                    <div className='w-full flex justify-around mt-5 sm:justify-start sm:gap-10'>
                        <ButtonLike styles={windowWidth >= 376 ? "w-[161px]" : "w-[50px]"}>
                            {windowWidth >= 376 ? 'Curtir' : ""}
                        </ButtonLike>

                        <ButtonEdit styles={windowWidth >= 376 ? "w-[161px]" : "w-[50px]"}>
                            {windowWidth >= 376 ? 'Editar' : ""}
                        </ButtonEdit>

                        <ButtonTrash styles={windowWidth >= 376 ? "w-[161px]" : "w-[50px]"}>
                            {windowWidth >= 376 ? 'Deletar' : ""}
                        </ButtonTrash>
                    </div>


                    <div className="gap-5 flex flex-col sm:flex-row-reverse sm:gap-10 sm:mt-24">
                        {/* detalhes da postagem */}
                        <div className='mt-7'>
                            <h2 className='text-black text-xl sm:text-3xl whitespace-nowrap'>Detalhes de Postagem</h2>

                            {/* formata so os icone com as labels do lado */}
                            <div className='mt-3'>

                                <div className='mt-2 flex flex-row'>
                                    <Image
                                        src={clock}
                                    />

                                    <p className='text-black ml-2'>21 de jul de 2024</p>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <Image
                                        src={save}
                                    />
                                    <p className='text-black ml-2'>Java, Spring Boot</p>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <Image
                                        src={world}
                                    />
                                    <p className='text-black ml-2'>https://www.meusite.com.br</p>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <Image
                                        src={miniLike}
                                    />
                                    <p className='text-black ml-2'>Curtidas</p>
                                </div>
                            </div>
                        </div>

                        {/* Comentarios */}
                        <div className="mt-5">
                            <h2 className='text-black text-xl sm:text-3xl'>Comenários (1)</h2>

                            {/* infos do usuario que comentou */}
                            <div className='flex flex-row items-center gap-2 mt-2 flex-wrap'>
                                <Image
                                    src={userDefault}
                                    height={20}
                                    width={20}
                                />

                                <p className='text-[#6D33A6] text-[16px]'>User Default</p>

                                <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime odit blanditiis vero quae. Natus deleniti magni ratione exercitationem labore repellendus nulla. Dignissimos, sequi omnis! Maxime illo dicta magni quaerat odit?</p>
                            </div>

                            {/* botoes de curtir e responder */}
                            <div className='flex gap-5 mt-3'>
                                <button className=' text-black'>Curtir</button>
                                <button className=' text-black'>Responder</button>
                            </div>
                        </div>
                    </div>
            
            {/* </section> */}
        </>

    )
}

export default Publicacao;