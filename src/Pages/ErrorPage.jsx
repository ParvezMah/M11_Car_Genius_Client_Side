import { Link } from 'react-router-dom';
import Image404 from '../../public/images/banner/404.png'

const ErrorPage = () => {
    return (
        <div>
            <div className=''>
                <div className='mt-10'>
                    <img className='w-3/4 mx-auto' src={Image404} alt="" />
                </div>
                <div className='flex justify-center my-10'>
                    <h3 className="text-5xl text-center font-bold">This Page is not ready yet</h3>
                </div>
                <div className='flex justify-center'>
                    <Link to='/'><button className=' text-3xl text-white btn btn-accent'>Go Back</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;