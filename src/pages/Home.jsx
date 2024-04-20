import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";


const Home = () => {
    return (
        <div className='bg5 w-full' >
            <div className="flex justify-center items-center">
                <div className="mt-5 md:mt-32 glass  p-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
                        {/* 1111111111111111111111 */}
                        <div>
                            <h1 className="py-2 text-lg text-white flex justify-start items-center gap-2"><FaRegArrowAltCircleDown /> You Send</h1>
                            <div className="input-container">
                                <input type="text" name="text" className="input" placeholder="Enter text1" />
                                <div className="highlight"></div>
                            </div>
                            <div className="input-container mt-5">
                                <input type="text" name="text" className="input" placeholder="Enter text2" />
                                <div className="highlight"></div>
                            </div>
                        </div>
                        {/* 222222222222222222 */}
                        <div>
                            <h1 className="py-2 text-lg text-white flex justify-start items-center gap-2"><FaRegArrowAltCircleUp />You Receive</h1>
                            <div className="input-container">
                                <input type="text" name="text" className="input" placeholder="Enter text3" />
                                <div className="highlight"></div>
                            </div>
                            <div className="input-container mt-5">
                                <input type="text" name="text" className="input" placeholder="Enter text4" />
                                <div className="highlight"></div>
                            </div>
                        </div>
                    </div>
                    <div className="font-bold text-center p-4 text-white">
                        Exchange Rate: 120 BDT
                    </div>
                    <button className="hover:bg-[#01003A] transition-all flex justify-center items-center gap-3 text-white w-full py-2 bg-[#006BB3] rounded">
                        <div className="traffic-loader"></div>Exchange
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Home;