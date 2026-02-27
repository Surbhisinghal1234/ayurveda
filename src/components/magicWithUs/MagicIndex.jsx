import MagicHeader from './MagicHeader'
import Magic from './Magic'
import "./magic.css"
const MagicIndex = () => {
  return (
    <div className='w-[100%] py-[3rem] px-[1.5rem] sm:px-[3rem] lg:px-[4rem] xl:px-[8rem] gap-[3rem] flex flex-col'>
        <MagicHeader/>
        <Magic/>
    </div>
  )
}

export default MagicIndex