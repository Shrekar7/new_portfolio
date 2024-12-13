import React from 'react';

const Contact = () => {
  return (
    <div className="container py-16 relative max-w-[90%] sm:left-20 sm:px-4 left-6 z-20" id="contact">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 font-primary text-5xl font-extrabold tracking-tight lg:text-7xl">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#ff80b5] via-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
          <div className="text-xl lg:text-sl text-muted-foreground text-gray-400 z-20">
            <p>Got a question, proposal, project, or want to work together on something?</p>
            <a
              href="mailto:shrekarreddy7@gmail.com"
              className="underline underline-offset-4 hover:text-foreground transition"
            >
              Send me an email
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="rounded-lg border bg-primary text-card-foreground shadow-sm pt-6">
            <div className="p-6 pt-0">
              <div className="w-full grid gap-4 grid-cols-3">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:Rcoraba:"
                  data-state="closed"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium z-20 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2"
                  aria-label="open-popover"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </button>
                <a
                  aria-label="github"
                  href="https://github.com/Shrekar7"
                  target="_blank"
                  className="inline-flex items-center justify-center z-20 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/srikar-reddy-b-976187247/"
                  target="_blank"
                  className="inline-flex items-center justify-center z-20 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  aria-label="twitter"
                  href="https://x.com/shrekarreddy7"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md z-30 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/_.shrekar._/"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md text-sm z-20 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <div className="group relative">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-gray-600 h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone z-30"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.49 19.49 0 0 1-6-6A19.86 19.86 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.73 12.73 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.03 9.03a16 16 0 0 0 6 6l1.39-1.39a2 2 0 0 1 2.11-.45 12.73 12.73 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </button>
                  <span
                    className="absolute -top-14 left-[50%] -translate-x-[50%] 
                    z-20 origin-left scale-0 px-3 rounded-lg border text-black 
                    border-gray-300 bg-white py-2 text-sm font-bold
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100"
                  >
                    +91-9951728407
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left-side clipPath */}
      <div
        className="absolute inset-x-0 -top-20 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-60 sm:left-5"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(70%-11rem)] aspect-[1455/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Right-side clipPath */}
      <div
        className="absolute inset-x-0 z-0 transform-gpu overflow-hidden blur-3xl sm:top-0 sm:right-0"
        aria-hidden="true"
        style={{ top: "calc(5rem)" }}
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#d564fe] to-[#887fff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(22% 22%, 35% 35%, 22% 53%, 53% 75%, 68% 68%, 75% 58%, 80% 66%, 83% 70%, 88% 65%, 90% 50%, 96% 42%, 75% 12%, 65% 8%, 60% 18%, 45% 35%, 34% 20%)",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
