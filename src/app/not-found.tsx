import Link from 'next/link'
 
function NotFound() {
  return (
    <div className="min-h-screen container mx-auto flex items-center justify-center px-4">
  <div className="text-center max-w-md">

    <h1 className="text-8xl font-bold font-oswald text-[#CCFF00]">
      404
    </h1>

    <h2 className="mt-4 text-3xl font-bold">
      Page Not Found
    </h2>

    <p className="mt-3 text-base text-gray-400">
      Sorry, we couldn’t find the page you’re looking for.
      The resource may have been removed or the URL is incorrect.
    </p>

    <Link
      href="/"
      className="inline-flex mt-8 items-center justify-center rounded-full 
      bg-[#CCFF00] px-8 py-3 font-bold text-black 
      transition hover:scale-105"
    >
      Return Home
    </Link>

  </div>
</div>
  )
}

export default NotFound