import { useState } from 'react'
import '../style/SliderImg.css'

const SliderImg = ({ product }) => {

console.log(product)

const [ currentIndex, setCurrentIndex  ] = useState(0)

const style = {
   transform: `translateX(calc(-${currentIndex}/3 * 100%))`
}

const prev = () => {
    if(currentIndex > 0) {
    setCurrentIndex(currentIndex - 1)
    } else {
        setCurrentIndex(2)
    }
}

const next = () => {
    if(currentIndex < 2) {
    setCurrentIndex(currentIndex + 1)
    } else {
        setCurrentIndex(0)
    }

}

  return (
    <div className="slider">
        <button onClick={prev} className='slider__btn slider__prev'>
        <i className='bx bxs-chevron-left'></i>
        </button>
        <div className="slider__m" style={style}>
            {
                product?.images.map(infoImg =>(
                    <div className="img__i-con">
                        <img className="slider__i" src={infoImg.url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={next} className='slider__btn slider__next'>
        <i className='bx bxs-chevron-right'></i>
        </button>
    </div>
  )
}

export default SliderImg