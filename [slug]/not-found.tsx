/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
	return (
		<section className="flex items-center h-full p-16 ">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl dark:text-gray_">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">
						Sorry, we couldn't find this page.
					</p>
					<Link
						href="/"
						title=""
						className=" w-fit peacockGradient inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base lg:text-lg font-semibold text-white_ mt-7 lg:mt-8"
						role="button"
					>
						Back to home page
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
