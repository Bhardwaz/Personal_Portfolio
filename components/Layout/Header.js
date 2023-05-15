import crazyEmoji from '../../assests/navbar/crazyEmoji.png' 
import coolEmoji from '../../assests/navbar/coolEmoji.png' 
import loveEmoji from '../../assests/navbar/loveEmoji.png' 
import shockedEmoji from '../../assests/navbar/shockedEmoji.png' 

const Header = () => {
  return(
    <div className='flex w-full justify-center'>
      <div className="flex w-[330px] bg-[#40B0BD] border border-r-[#7b4bff] rounded-full p-1.5 mt-3 justify-center items-center gap-4 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        
      <div className='w-16 mt-2 h-[60px] rounded-full cursor-pointer'>
      <img src={crazyEmoji}
        type="button"
        className="w-full h-full rounded-full bg-white px-3 py-2 text-sm font-semibold border border-[#7b4bff] text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      />
      </div>

      <div className='w-16 h-[60px] rounded-full cursor-pointer'>
      <img src={coolEmoji}
        type="button"
        className="w-full h-full rounded-full hover:bg-[#40B0BD] px-3 py-2 text-sm font-semibold border border-transparent hover:border-gray-200 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      />
      </div>
      
      <div className='w-16 h-[60px] rounded-full cursor-pointer'>
      <img src={loveEmoji}
        type="button"
        className="w-full h-full rounded-full hover:bg-[#382E70] px-3 py-2 text-sm font-semibold border border-transparent hover:border-[#7b4bff] text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      />
      </div>

      <div className='w-16 h-[60px] rounded-full cursor-pointer'>
      <img src={shockedEmoji}
        type="button"
        className="w-full h-full rounded-full hover:bg-[#382E70] px-3 py-2 text-sm font-semibold border border-transparent hover:border-[#7b4bff] text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      />
      </div>
    </div>
    </div>
  )
}

export default Header