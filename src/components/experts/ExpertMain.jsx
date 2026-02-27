import ExpertButton from './ExpertButton'
import Experts from './Experts'
import ExpertHead from './ExpertHead'


const ExpertMain = () => {
  return (
    <div className='flex flex-col gap-[1rem] items-center py-[3rem] px-[1.5rem] sm:px-[3rem] lg:px-[4rem] xl:px-[8rem]'>
        <ExpertHead/>
<Experts/>
        <ExpertButton/>
    </div>
  )
}

export default ExpertMain