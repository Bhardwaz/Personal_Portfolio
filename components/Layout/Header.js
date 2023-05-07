import crazyEmoji from '../../assests/navbar/crazyEmoji.png' 
import coolEmoji from '../../assests/navbar/coolEmoji.png' 
import loveEmoji from '../../assests/navbar/loveEmoji.png' 
import shockedEmoji from '../../assests/navbar/shockedEmoji.png' 


const Navbar = () => {
return(
     <nav className='mx-auto h-max pt-10'>

       <div className='mobile:w-[200px] flex justify-center gap-7 mx-auto rounded-full py-2 w-[330px] border-2 border-[#9747FF] bg-[#19222F]'>

          <div className='w-14 h-14 bg-[rgba(123,75,255,.31)] flex justify-center items-center rounded-full border-[1px] border-[#7b4bff]'>
          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={crazyEmoji} alt='emoji' /> 
          </div>

          <div className='w-14 h-14 bg-[rgba(123,75,255,.31)] flex justify-center items-center rounded-full border-[1px] border-[#7b4bff]'>
          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={coolEmoji} alt='emoji' /> 
          </div>

          <div className='w-14 h-14 bg-[rgba(123,75,255,.31)] flex justify-center items-center rounded-full border-[1px] border-[#7b4bff]'>
          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={loveEmoji} alt='emoji' /> 
          </div>

          <div className='w-14 h-14 bg-[rgba(123,75,255,.31)] flex justify-center items-center rounded-full border-[1px] border-[#7b4bff]'>
          <img className='mobile:w-[30px] w-[40px] cursor-pointer' src={shockedEmoji} alt='emoji' /> 
          </div>

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