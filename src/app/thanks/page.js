import Link from 'next/link';

export default function Thanks() {
  return (
    <>
      <div className="mt-32 mb-11 text-center">
        <h1 className="text-6xl">Your message has been received.</h1>
        <br />
        <h2 className="text-4xl">We will get back to you as soon as possible.</h2>
        
        {/* دکمه برگشت به صفحه اصلی */}
        <div className="mt-12">
          <Link href="/" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}