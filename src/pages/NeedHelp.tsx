import { faqQuestions } from "../constants";
import { useNavigate } from "react-router-dom";

const NeedHelp = () => {
	const navigate = useNavigate();

	return (
		<div className='page-container flex flex-col'>
			<div className='flex bg-teal-300 h-1/5 items-center justify-center w-full'>
				<p className='text-6xl text-white font-semibold'>Help Center</p>
			</div>
			<div className='px-16 py-6'>
				<p className='text-2xl font-semibold'>We are here to help you with any questions you may have, here are some of the most common ones:</p>
				<ol>
					{faqQuestions.map((question, questionIdx) => (
						<li className='text-left py-3' key={questionIdx}>
							<p className='text-left font-semibold'>{question.question}</p>
							<p className='text-left'>{question.answer}</p>
						</li>
					))}
				</ol>
			</div>
			<div>
				<button onClick={() => navigate(-1)} type='submit' className='bg-teal-300 hover:bg-teal-500 hover:text-white rounded w-1/4 items-self-center p-3'>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NeedHelp;
