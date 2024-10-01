import Image from "next/image"
import like from "../../assets/images/Star.svg"
import edit from "../../assets/images/Edit.svg"
import trash from "../../assets/images/Trash.svg"

export const ButtonLike = ({ children, onClick, styles }) => {
    return (
        <button className={`h-[48px] flex rounded-lg text-black border-solid border border-[#B5B5B5] items-center justify-center gap-2 ${styles}`} onClick={onClick} type="button">
            <Image
                src={like}
                width={25}
                height={25}
            />
            {children}
        </button>
    )
}
export const ButtonEdit = ({ children, onClick, styles }) => {
    return (
        <button className={`h-[48px] flex rounded-lg text-black border-solid border border-[#8CE0F3] bg-[#8CE0F3] bg-opacity-10 items-center justify-center gap-2 ${styles}`} type="button" onClick={onClick}>
            <Image
                src={edit}
                width={25}
                height={25}
            />
            {children}
        </button>
    )
}
export const ButtonTrash = ({ children, onClick, styles }) => {
    return (
        <button onClick={onClick} type="button" className={`h-[48px] flex rounded-lg text-[#F03D3E] border-solid border border-[#F03D3E] bg-[#F03D3E] bg-opacity-10 items-center justify-center gap-2 ${styles}`}>
            <Image
                src={trash}
                width={25}
                height={25}
            />
            {children}
        </button>
    )
}