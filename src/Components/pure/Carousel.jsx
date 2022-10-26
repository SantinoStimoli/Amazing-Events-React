import { Carousel } from 'flowbite-react';
import React from 'react';
import Image1 from '../../resources/image1.jpg'
import Image2 from '../../resources/image2.jpg'
import Image3 from '../../resources/image3.jpg'

const CarouselHome = () => {
    return (
        <div className="h-64 sm:h-80 xl:h-96 2xl:h-96 carousel">
            <Carousel slideInterval={5000}
                leftControl=" "
                rightControl=" "
            >
                <img
                    className='lg:pb-32'
                    src={Image1}
                    alt="..."
                />
                <img
                    className='lg:pb-32'
                    src={Image2}
                    alt="..."
                />
                <img
                    className='lg:pb-30'
                    src={Image3}
                    alt="..."
                />
            </Carousel>
        </div>
    );
}

export default CarouselHome;
