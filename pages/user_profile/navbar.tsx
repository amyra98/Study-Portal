

import React, { useState } from 'react';
import Link from 'next/link';

export default function UserProfileNavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-berry  shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div className="text-indigo-500 md:order-1">
			
			
				
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
                
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins]  md:px-20 mr:7 md:py-2 text-indigo-500 font-medium"><Link href="mycourses">My Courses</Link></li>
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins] md:px-20 mr:7 md:py-2 hover:text-indigo-400 font-medium "><Link href="changepassword">Change Password</Link></li>
				<li className="underline underline-offset-8 no-underline hover:underline font-[poppins] md:px-20 mr:7 md:py-2 hover:text-indigo-400 font-medium"><Link href="personalinfo">Personal Information</Link></li>
				
			</ul>
		</div>
		<div className="order-2 md:order-3">
			
		</div>
	</div>
</nav>
   );
}

   