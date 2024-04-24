const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '2.5rem', height: '2.5rem' }}
      viewBox="0 0 600 600"
      preserveAspectRatio="none"
      width="100%"
      height="100%">
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#326BF7" />
          <stop offset="100%" stopColor="#6129D5" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="270" fill="url(#gradient)"></circle>
      <path
        d="M150.133 385.03C150.133 359.607 150.362 334.183 150 308.741C150 301.742 152.402 297.775 158.425 294.437C178.115 283.432 197.423 271.855 217.094 260.832C219.52 259.72 221.543 257.883 222.884 255.575C224.225 253.266 224.82 250.599 224.585 247.939C224.299 225.377 224.585 202.814 224.356 180.271C224.356 173.386 226.586 169.19 232.648 165.814C252.598 154.663 272.377 143.22 291.984 131.484C297.283 128.318 301.362 128.089 306.756 131.312C326.637 143.214 346.898 154.485 366.836 166.31C371.792 169.266 375.699 169.438 380.769 166.405C400.669 154.523 420.911 143.233 440.849 131.389C447.33 127.574 449.922 128.623 449.884 136.29C449.77 159.8 449.77 183.322 449.884 206.857C449.884 212.579 447.311 216.26 442.393 219.045C421.693 230.812 401.031 242.656 380.541 254.786C375.394 257.818 371.334 257.17 366.493 254.309C346.479 242.427 326.255 231.06 306.299 219.216C301.667 216.451 298.103 216.126 293.299 218.987C273.667 230.698 253.888 242.141 233.963 253.317C231.68 254.394 229.779 256.14 228.513 258.324C227.246 260.508 226.674 263.025 226.872 265.543C227.044 287.476 227.12 309.409 226.872 331.323C226.872 340.058 230.075 339.142 235.812 335.766C253.862 325.105 272.256 315.016 290.078 304.011C296.978 299.739 302.258 299.93 309.139 304.011C327.857 315.454 347.146 325.811 365.883 337.178C371.906 340.84 376.423 340.592 382.313 337.044C401.622 325.41 421.369 314.52 440.716 302.962C447.711 298.766 450.074 299.93 449.998 308.131C449.795 331.017 449.795 353.904 449.998 376.791C449.998 383.676 447.196 387.872 441.287 391.19C421.35 402.366 401.488 413.714 381.894 425.52C375.814 429.163 371.125 428.629 365.311 425.158C345.945 413.619 326.198 402.748 306.871 391.133C301.457 387.891 297.493 388.139 292.175 391.247C248.487 416.747 204.724 441.903 160.998 467.155C150.686 473.105 150.172 472.876 150.152 461.28C150.051 435.864 150.044 410.447 150.133 385.03Z"
        fill="white"></path>
    </svg>
  );
};

export default Logo;