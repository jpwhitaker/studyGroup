/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export const EmailSignUp = () => {
  return (
    <div className="bg-white border border-slate-300 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-light leading-6 text-gray-900">Sign up for our waitlist!</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>We'll notify you when registration opens for the first course.</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:flex sm:items-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="mt-2 flex rounded-md shadow-sm w-full">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-l-md border border-gray-300 py-1.5 pl-5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
              <button
                type="submit" // Changed to submit if this is intended to submit the form
                className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold bg-[#00ff84] text-[#0d1230] border border-gray-300 hover:bg-gray-50 whitespace-nowrap cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}
