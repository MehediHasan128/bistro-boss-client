import bg from '../../../../assets/assets/home/chef-service.jpg';

const About = () => {
    return (
        <div className='container mx-auto relative'>
            <img className='brightness-75 h-72 lg:h-auto object-cover' src={bg} alt="" />
            <div className='absolute top-0 text-white w-full h-full'>
                <div className='flex justify-center items-center h-full'>
                    <div className='w-[90%] lg:w-[80%] mx-auto bg-white'>
                        <div className='text-center text-black lg:w-[60%] mx-auto px-5 lg:px-0 py-5 lg:py-20'>
                            <h1 className='text-xl lg:text-4xl font-bold lg:font-semibold mb-3 lg:mb-5'>Bistro Boss</h1>
                            <p className='text-xs lg:text-lg font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;