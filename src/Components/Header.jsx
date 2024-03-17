import React from 'react';


const Header = () => {
    return (
        <div className='lg:mx-20'>
            {/* this is nav */}
            <div class="navbar bg-base-100 my-12">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><a class="text-[16px] text-[#150B2B] font-normal">Home</a></li>
                            <li>
                                <a class="text-[16px] text-[#150B2B] font-normal">Recipes</a>

                            </li>
                            <li><a class="text-[16px] text-[#150B2B] font-normal">About</a></li>
                            <li><a class="text-[16px] text-[#150B2B] font-normal">Search</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-3xl text-[#150B2B] font-bold">Taste & Go</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li ><a class="text-[16px] text-[#150B2B] font-normal">Home</a></li>
                        <li>
                            <a class="text-[16px] text-[#150B2B] font-normal">Recipes</a>

                        </li>
                        <li><a class="text-[16px] text-[#150B2B] font-normal">About</a></li>
                        <li><a class="text-[16px] text-[#150B2B] font-normal">Search</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="form-control">
                        <label class="input input-bordered flex items-center gap-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>

                            <input type="text" placeholder="Search" class="input  w-24 md:w-auto text-[16px] font-normal" />
                        </label>
                    </div>
                    <div class="bg-green-500 ml-2 w-11 h-11 flex justify-center items-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class=" border border-blue-600  ">
                            <path d="M23.9761 24.9668C23.0444 23.7333 21.8391 22.7329 20.455 22.0446C19.0709 21.3562 17.5459 20.9987 16.0001 21.0001C14.4543 20.9987 12.9292 21.3562 11.5451 22.0446C10.1611 22.7329 8.95571 23.7333 8.02406 24.9668M23.9761 24.9668C25.7941 23.3497 27.0762 21.2182 27.655 18.8549C28.2337 16.4916 28.0804 14.0082 27.2153 11.7341C26.3503 9.45992 24.8144 7.50246 22.8113 6.12129C20.8081 4.74012 18.4325 4.00049 15.9994 4.00049C13.5663 4.00049 11.1906 4.74012 9.18753 6.12129C7.18443 7.50246 5.6485 9.45992 4.78344 11.7341C3.91838 14.0082 3.76506 16.4916 4.34382 18.8549C4.92257 21.2182 6.20606 23.3497 8.02406 24.9668M23.9761 24.9668C21.7814 26.9243 18.9409 28.0043 16.0001 28.0001C13.0588 28.0046 10.219 26.9246 8.02406 24.9668M20.0001 13.0001C20.0001 14.061 19.5786 15.0784 18.8285 15.8285C18.0783 16.5787 17.0609 17.0001 16.0001 17.0001C14.9392 17.0001 13.9218 16.5787 13.1716 15.8285C12.4215 15.0784 12.0001 14.061 12.0001 13.0001C12.0001 11.9392 12.4215 10.9218 13.1716 10.1717C13.9218 9.42152 14.9392 9.00009 16.0001 9.00009C17.0609 9.00009 18.0783 9.42152 18.8285 10.1717C19.5786 10.9218 20.0001 11.9392 20.0001 13.0001Z" stroke="#150B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* this is banner */}
            
            <div className="hero min-h-screen " style={{ backgroundImage: "url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__)", borderRadius: '24px' }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-6 text-3xl lg:text-5xl font-bold text-[#FFF] mx-1.5 lg:mx-auto lg:w-[897px]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-6 lg:w-[933px] text-xl font-normal text-[#FFF]">Embark on a culinary journey personalized to your tastes with our bespoke cooking classes. From mastering gourmet techniques to exploring international flavors, elevate your culinary skills in an experience tailored exclusively for you.</p>
                        <button className="btn btn-accent mr-3 rounded-full">Explore Now</button>
                        <button className="btn btn-outline btn-accent ml-3 rounded-full">Our Feedback</button>
                    </div>
                </div>
            </div>
            

            

        </div>
    );
};

export default Header;