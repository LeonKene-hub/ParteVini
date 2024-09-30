import React from 'react'
import close from "../../assets/images/Close.svg"
import Image from 'next/image'
import userDefault from '../../assets/images/Foto-padrao.jpg'
import pubPhoto from '../../assets/images/Mask.jpg'
import '../Publicacao/index.css'
import like from "../../assets/images/Button-Like.svg"
import edit from "../../assets/images/Button-Edit.svg"
import trash from "../../assets/images/Button-Trash.svg"
import clock from "../../assets/images/Clock.svg"
import save from "../../assets/images/Bookmark.svg"
import world from "../../assets/images/World.svg"
import miniLike from "../../assets/images/Star.svg"

function Publicacao() {
    return (
        // section com fundo galaxia puxando do arquivo CSS
        <section className='h-full w-full'>

            {/* div representa modal branco */}
            <div className='bg-white mx-5 my-12 px-5 py-3 rounded-lg'>

                {/* organiza infos do perfil, data e "X" de fechamento da publicacao */}
                <div className='w-full flex justify-between'>

                    {/* formata foto nome data do perfil */}
                    <div className='flex'>
                        <Image
                            src={userDefault}
                            alt="foto de perfil do author da publicacao"
                        />
                        <div className='ml-5'>
                            <h1 className='text-black'>@User</h1>
                            <p className='text-black'>21 july</p>
                        </div>
                    </div>

                    {/* icone do "X" de fechamento solto  */}
                    <Image
                        src={close}
                        // height={}
                        // width={}
                        alt='imagem de X representando o fechamento da publicacao em destaque'
                    />
                </div>



                {/* organiza imagem e texto da postagem */}
                <div className='w-full flex flex-col items-center mt-5'>
                    <Image className='w-full'
                        src={pubPhoto}
                    />

                    <p className='text-black mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque deleniti eveniet mollitia consequuntur delectus distinctio iste dolor, eos nesciunt molestias voluptate nulla laudantium pariatur magni totam nam velit eligendi.</p>
                </div>


                {/* organiza icones */}
                <div className='flex justify-between mt-5'>
                    <button>
                        <Image
                            src={like}
                            alt='icone de estrela para curtir'
                        />
                    </button>
                    <button><Image
                        src={edit}
                        alt='icone de lapis para editar'
                    /></button>
                    <button>  <Image
                        src={trash}
                        alt='icone de lixeira para remover'
                    /></button>


                </div>

                {/* detalhes da postagem */}
                <div className='mt-5'>
                    <h2 className='text-black'>Detalhes de Postagem</h2>

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
                <div className='mt-3'>
                    <h2 className='text-black'>Comenários (1)</h2>

                    {/* infos do usuario que comentou */}
                    <div className='flex flex-row items-center gap-2 mt-2 flex-wrap'>
                        <Image
                            src={userDefault}
                            height={20}
                            width={20}
                        />

                        <p className='text-[#6D33A6] text-x'>User Default</p>

                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime odit blanditiis vero quae. Natus deleniti magni ratione exercitationem labore repellendus nulla. Dignissimos, sequi omnis! Maxime illo dicta magni quaerat odit?</p>
                    </div>

                    {/* botoes de curtir e responder */}
                    <div className='flex gap-5 mt-3'>
                        <button className=' text-black'>Curtir</button>
                        <button className=' text-black'>Responder</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publicacao;