import React from 'react'
import { cardData } from './CardData'

const AyurvedicConsultation = () => {
  return (
    <>
      <div className='bg-primary py-14 px-[3rem] lg:px-[4rem] xl:px-[8rem]'>

        <h2 className='text-dark text-[2rem] font-semibold md:text-4xl mb-8 text-center md"font-bold'>What sets Ayurvedic consultations apart?</h2>
        <div className=" flex flex-col gap-4 items-center text-dark">
          {cardData.map((row, rowIndex) => (
            <div key={rowIndex} className=" flex flex-col md:flex-row gap-6 justify-center ">
              {row.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className={`aspect-auto ${card.width}`}
                >


                  {card.type === 'text' ? (
                    <>
                      <div className="flex items-center rounded-lg px-6 lg:px-10 h-[18rem] md:h-[20rem] lg:h-[18rem] flex-col gap-6 bg-white justify-center border-t-4  border-dark" >
                        <div className='py-[3rem] flex flex-col gap-[1.5rem]'>

                          <p className='font-semibold text-2xl text-center'> {card.heading}</p>
                          <p className="text-dark text-center font-semibold">{card.paragraph}</p>
                        </div>

                      </div>
                    </>

                  ) : (
                    <img src={card.content} alt={`Card Image ${cardIndex}`} className="w-full h-[18rem] md:h-[20rem] lg:h-[18rem] aspect-square object-cover rounded-[15px]" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </>

  )
}

export default AyurvedicConsultation