import React from 'react'

function Contact() {
    return (
        <div className="py-6 px-5">
            <h2 className="text-primary text-center text-4xl ">Contact Us</h2>
            <form className="w-full  ">
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Subject
                        </label>
                        <input className="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="Inquiry" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Contact
                        </label>
                        <input className="appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100" id="grid-first-name" type="text" placeholder="0312-1212121" />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Message
                        </label>
                        <textarea className="resize-x h-32 appearance-none block w-full bg-secondary-200 text-white border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-secondary-100 focus:border-primary"></textarea>
                    </div>
                </div>
                <div className="flex pb-4 justify-center">
                    <input type="submit" className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Contact
