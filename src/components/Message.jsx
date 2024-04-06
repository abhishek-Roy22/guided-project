import MessageIcon from '../assets/message.svg';

const Message = () => {
  return (
    <div className="flex flex-col gap-5 items-center max-w-[600px] h-fit">
      <h1 className="text-sm sm:text-3xl font-bold text-black">
        Please verify your email...
      </h1>
      <img src={MessageIcon} alt="MessageIcon" width={100} />
      <p className="text-gray-400 text-sm">
        Please verify your email address. We've sent a confirmation email to:
      </p>
      <h3 className="font-bold text-black">account@refero.design</h3>
      <p className="text-gray-400">
        Click the confirmation link in that email to begin using Dribbble.
      </p>
      <p className="text-gray-400 text-wrap">
        Didn't recieve the email? Check you Spam folder, it may have been caught
        by a filter. if you still don't see it, uou can{' '}
        <span className="text-[#ce5297] font-bold">
          resend the confirmation email.
        </span>
      </p>
      <p className="text-gray-400">
        Wrong email address?{' '}
        <span className="text-[#ce5297] font-bold">Change it.</span>
      </p>
    </div>
  );
};

export default Message;
