import React from 'react'
import {Link} from 'react-router-dom'
import red from '../../assets/imgs/red.png'
import green from '../../assets/imgs/green.png'
import blue from '../../assets/imgs/blue.png'

function ProductSection() {
    return (
     <div>
            <div className="mt-12 mb-6">
                <div className="text-4xl text-center text-primary ">
                    Most Trending 
                </div>
            </div>
            <div className="container mx-auto flex md:flex-row flex-col justify-center items-center md:space-x-8 space-x-0 " >
                <div className="card m-2">
                    <div className="imgBx"><img src={red} alt="" /></div>
                    <div className="contentBx">
                        <h2 className="text-primary text-2xl">Red Air Max</h2>
                        <div className="size">
                            <h3>Size :</h3>
                            <span> 7 </span>
                            <span> 8 </span>
                            <span> 9 </span>
                            <span> 10 </span>
                        </div>
                        <div className="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/shop" className="add-btn mt-32 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded">Shop Now</Link>
                    </div>
                </div>
                
                <div className="card m-2">
                    <div className="imgBx"><img src={green} alt="" /></div>
                    <div className="contentBx">
                        <h2 className="text-primary text-2xl">Green Energy Boost</h2>
                        <div className="size">
                            <h3>Size :</h3>
                            <span> 7 </span>
                            <span> 8 </span>
                            <span> 9 </span>
                            <span> 10 </span>
                        </div>
                        <div className="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/shop" className="add-btn mt-32 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded">Shop Now</Link>
                    </div>
                </div>

                <div className="card m-2">
                    <div className="imgBx"><img src={blue} alt=""/></div>
                    <div className="contentBx">
                        <h2 className="text-primary text-2xl">Blue Air Zoom</h2>
                        <div className="size">
                            <h3>Size :</h3>
                            <span> 7 </span>
                            <span> 8 </span>
                            <span> 9 </span>
                            <span> 10 </span>
                        </div>
                        <div className="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/shop" className="add-btn mt-32 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded">Shop Now</Link>            </div>
                </div>
                
            </div>
            <div className="my-2 text-2xl text-center text-primary">
                <p className="mb-3">
                    Quickly find the shoes you are looking for.
                </p>
                <Link to="/" className="mt-4 transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded  hover:border-2 hover:bg-secondary-100 hover:text-primary">
                    See More <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </Link>
            </div>

     </div>
    )
}

export default ProductSection
