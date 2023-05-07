import crazyEmoji from '../../assests/navbar/crazyEmoji.png' 
import coolEmoji from '../../assests/navbar/coolEmoji.png' 
import loveEmoji from '../../assests/navbar/loveEmoji.png' 
import shockedEmoji from '../../assests/navbar/shockedEmoji.png' 


const Navbar = () => {
return(
     <nav className='mx-auto h-max pt-5'>

       <div className='mobile:w-[200px] flex justify-center gap-4 mx-auto border-2 rounded-full py-2 w-[240px]'>

          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={crazyEmoji} alt='emoji' /> 

          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={coolEmoji} alt='emoji' /> 

          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={loveEmoji} alt='emoji' /> 

          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={shockedEmoji} alt='emoji' /> 

       </div>

     </nav>
)
}
const Header = () => {
    return(
        <>
        <Navbar />
        </>
    )
}
export default Header