import '../../../style/index.css'
function PurpleButton({text}) {
    return (
        <>
            <button className='bg-primary-purple text-foreground-white h-12 rounded-md px-4 font-heading duration-100 hover:scale-95 active:scale-90'>{text}</button>
        </>
    )
}

export default PurpleButton