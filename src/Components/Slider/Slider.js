import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        console.log("NEXT");
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {

            setSlideAnim({index: slideAnim.index + 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1,
                inProgress: false})
            }, 400)

        } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {

            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 1,
                inProgress: false})
            }, 400)

        }
    }

    const prevSlide = () => {
        console.log("PREV");
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {

            setSlideAnim({index: slideAnim.index - 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index - 1,
                inProgress: false})
            }, 400)

        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {

            setSlideAnim({index: 5, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 5,
                inProgress: false})
            }, 400)

        }
    }

    const moveDot = index => {
        setSlideAnim({index: index, inProgress: false})
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider direction={"next"} moveSlide={nextSlide} />
            <BtnSlider direction={"prev"} moveSlide={prevSlide} />

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => {
                    return <div
                            className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                            onClick={() => moveDot(index + 1)}
                            ></div>
                })}
            </div>
        </div>
    )
}
