import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const LoginForm = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const progressCircle = useRef(null);
	const progressContent = useRef(null);

	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	const validateForm = () => {
		const errors = {};
		if (!userId.trim()) errors.userId = 'User ID is required.';
		if (!password.trim()) errors.password = 'Password is required.';
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length === 0) {
			setIsLoading(true);
			// Simulate API call
			setTimeout(() => {
				setIsLoading(false);
				console.log('Form submitted successfully!');
			}, 2000);
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className="min-h-screen flex items-center font-iceland justify-center bg-lime-50">
    <div className="container max-w-7xl h-[600px] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

				{/* Left Section */}
				<div className="w-full lg:w-1/3 p-8 mt-14">
					<h2 className="text-6xl font-bold text-[#013D54] mb-10 text-center">SIM Login</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<label htmlFor="userId" className="block text-xl mb-2 font-medium text-gray-700">
								<FontAwesomeIcon icon={faUser} />
								<span className="ml-2">User Id</span>
							</label>
							<input
								type="text"
								id="userId"
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
								placeholder="Enter your User ID"
							/>
							{errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId}</p>}
						</div>

						<div className="mb-5 relative">
							<label htmlFor="password" className="block text-xl mb-2 font-medium text-gray-700">
								<FontAwesomeIcon icon={faLock} />
								<span className="ml-2">Password</span>
							</label>
							<input
								type={showPassword ? 'text' : 'password'}
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
								placeholder="Enter your Password"
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-11 text-gray-500"
							>
								<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
							</button>
							{errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
						</div>

						<div className="mb-4 flex items-center">
							<input type="checkbox" id="rememberMe" className="h-4 w-4 border-gray-300 rounded" />
							<label htmlFor="rememberMe" className="ml-2 text-lg text-[#76B900]">
								Remember Me
							</label>
						</div>

						<div className="mb-4">
							<button
								type="submit"
								disabled={isLoading}
								className="w-full bg-[#76B900] hover:bg-[#013D54] text-xl font-bold text-white py-2 rounded-md transition duration-200"
							>
								{isLoading ? 'Loading...' : 'Login'}
							</button>
						</div>

						<div className="text-center">
							<Link to="/forgot-password" className="text-lg font-bold text-[#76B900] hover:underline">
								Forgot Password?
							</Link>
						</div>
					</form>
				</div>

				{/* Right Section with Carousel */}
				<div className="hidden lg:w-2/3 md:flex border-l-4 border-[#013D54] md:w-1/2 bg-white p-8 items-center justify-center">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}

						modules={[Autoplay, Pagination]}
						onAutoplayTimeLeft={onAutoplayTimeLeft}
						className="mySwiper hidden lg:w-2/3 md:flex md:w-1/2 bg-blue-50 p-8 items-center justify-center"
					>
						<SwiperSlide>
							<div className="flex flex-col items-center justify-center text-center p-4">
								<h2 className="text-4xl font-bold text-[#013D54] mb-2"><strong>SIM</strong></h2>
								<p className="text-lg text-gray-700">
									Completely integrated application to help you run your entire Educational Setup more efficiently
								</p>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="flex flex-col items-center justify-center text-center p-4">
								<h2 className="text-4xl font-bold text-[#013D54] mb-2"><strong>End-to-End Business Process Management</strong></h2>
								<p className="text-lg text-gray-700">
									Till now either you were not using any application or were forced to buy multiple applications to manage your institutional activities.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col items-center justify-center text-center p-4">
								<h2 className="text-4xl font-bold text-[#013D54] mb-2"><strong>Create Your Web Presence Easily</strong></h2>
								<p className="text-lg text-gray-700">
									Customization services along with SIM allows you to have your interactive Website without hassles – with any URL you choose.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col items-center justify-center text-center p-4">
								<h2 className="text-4xl font-bold text-[#013D54] mb-2"><strong>Analyze and Make Better Decisions</strong></h2>
								<p className="text-lg text-gray-700">
									Good reporting is crucial to your institutional setup. You need accurate and fast information to make smart decisions.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col items-center justify-center text-center p-4">
								<h2 className="text-4xl font-bold text-[#013D54] mb-2"><strong>Advanced Security Features</strong></h2>
								<p className="text-lg text-gray-700">
									Three – Tier Security System - A system so unique and flexible that you manage all your users and machines with specific user rights
								</p>
							</div>
						</SwiperSlide>
						<div className="autoplay-progress" slot="container-end">
							<svg viewBox="0 0 48 48" ref={progressCircle}>
								<circle cx="24" cy="24" r="20"></circle>
							</svg>
							<span ref={progressContent}></span>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
