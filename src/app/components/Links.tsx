export function LinkedInLink() {
  return (
    <span className="not-prose">
      <a
        href="https://www.linkedin.com/in/tahamukhtar20/"
        target="_blank"
        className="border border-gray-700 bg-gray-800 rounded p-1 text-xs inline-flex items-center leading-4 text-gray-100 no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          height="14px"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0A66C2"
              d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
            />
          </g>
        </svg>
        &nbsp;LinkedIn
      </a>
    </span>
  );
}

export function GitHubLink() {
  return (
    <span className="not-prose">
      <a
        href="https://www.github.com/tahamukhtar20/"
        target="_blank"
        className="border border-gray-700 bg-gray-800 rounded p-1 text-xs inline-flex items-center leading-4 text-gray-100 no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14px"
          height="14px"
          viewBox="0 0 20 20"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-140.000000, -7559.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                  id="github-[#142]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        &nbsp;GitHub
      </a>
    </span>
  );
}

export function EmailLink() {
  return (
    <span className="not-prose">
      <a
        href="mailto:tahamukhtar20@gmail.com"
        target="_blank"
        className="border border-gray-700 bg-gray-800 rounded p-1 text-xs inline-flex items-center leading-4 text-gray-100 no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          width="14px"
          height="14px"
          viewBox="0 0 1920 1920"
        >
          <path
            d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
            fillRule="evenodd"
          />
        </svg>
        &nbsp;Email
      </a>
    </span>
  );
}

export function DynamicNoLink({ text }: { text: string }) {
  return (
    <span className="not-prose">
      <span className="border border-gray-700 bg-gray-800 rounded p-1 text-xs inline-flex items-center leading-4 text-gray-100 no-underline">
        {text}
      </span>
    </span>
  );
}
