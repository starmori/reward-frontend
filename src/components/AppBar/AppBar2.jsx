import React from 'react';
import logo from '../../assets/logo.png';
import crown from '../../assets/crown.png';
import MiniPad from './MiniPad';

const AppBar = () => {
    const num = [1, 1, 2, 4, 5, 6, 3, 4, 3, 4];
    return (
        <>
            <div className='flex justify-between flex-col md:flex-row items-center px-5 md:px-0 md:pr-9 mb-10 md:mb-0'>
                <div className='flex items-center flex-col md:flex-row'>
                    <div className='relative'>
                        <img src={logo} alt='logo' />
                        <img src={crown} className="absolute right-[90px] top-5 translate-x-1/2" alt='crown' />
                        <p className="text-8 text-yellow-main font-bold font-montserrat absolute right-[90px] bottom-[60px] translate-x-1/2 translate-y-1/2">JACKPOT</p>
                    </div>
                    <div className='flex text-white-main mb-2 md:mb-0'><MiniPad num={num[0]} /> <MiniPad num={num[1]} /> : <MiniPad num={num[2]} /><MiniPad num={num[3]} />:<MiniPad num={num[4]} /><MiniPad num={num[5]} />:<MiniPad num={num[6]} /><MiniPad num={num[7]} /></div>
                    <div className='font-bold text-white-2 font-montserrat text-4 mb-6 md:mb-0 md:ml-5'>Last winners</div>
                </div>
                <div className='flex text-white-2 font-bold font-montserrat text-4 py-5 md:py-0'>
                    <p className='border-r border-solid border-white-6 pr-4'>dVouchers pending: <b className='text-white-main'>$1,458,653</b></p>
                    <p className='border-r border-solid border-white-6 pr-4 pl-4'>dVoucher balance: <span className='text-yellow-600 font-bold'>1</span> </p>
                    <p className='pl-4 '>0x086....6a80</p>
                </div>
                {/* <button className='header-btn w-[120px] h-[35px] bg-yellow-main border-2 border-solid border-white-2 bg-opacity-0 text-white-2 font-bold text-4 font-montserrat'>Connect</button> */}
            </div>
        </>
    )
}

export default AppBar;