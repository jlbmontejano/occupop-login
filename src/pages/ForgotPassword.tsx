import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<div className='page-container bg-gradient-to-r from-40% from-teal-300 to-40% to-white flex justify-center items-center'>
			<div className='w-3/4 h-3/4 flex shadow-xl  to-white'>
				<div className='flex flex-col gap-6 w-1/3 justify-center'>
					<p className='text-2xl font-bold pb-3'>CLEAN MY CAR</p>
					<p>India's first waterless car cleaning company</p>
				</div>
				<div className='flex flex-col gap-6 w-2/3 h-full items-center p-6'>
					<div className='text-sm text-right w-full'>
						<Link to='/needhelp'>Need help?</Link>
					</div>
					<div className='flex flex-col grow w-2/3 justify-center'>
						<p className='text-2xl font-bold'>Forgot Password</p>
						<form className='inline'>
							<label className='flex flex-col py-5'>
								<p className='text-lg text-left pb-1'>Email:</p>
								<input type='email' name='email' placeholder='joe@email.com' required className='text-left p-1' />
							</label>
							<div className="py-5">
								<label className='flex flex-col'>
									<p className='text-lg text-left pb-1'>Confirm Email:</p>
									<input type='email' name='confirm-email' placeholder='joe@email.com' required className='text-left p-1' />
								</label>
								<div className='text-sm text-right'>
									<Link to='/'>Already have an account?</Link>
								</div>
							</div>
							<button type='submit' className='bg-teal-300 hover:bg-teal-500 hover:text-white rounded w-1/2 items-self-center p-3'>
								Reset password
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
