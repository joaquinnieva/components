function ArrowDropdown({ className = '', color = 'black', ...props }) {
  return (
    <svg {...props} className={className} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.26315 0.832426L10.5145 5.08375C10.8083 5.3776 10.8083 5.85274 10.5145 6.14346L9.80801 6.84993C9.51417 7.14377 9.03902 7.14377 8.74831 6.84993L5.73486 3.83649L2.72142 6.84993C2.42758 7.14377 1.95243 7.14377 1.66172 6.84993L0.955246 6.14346C0.661404 5.84962 0.661404 5.37447 0.955246 5.08375L5.20657 0.832426C5.49416 0.538584 5.96931 0.538584 6.26315 0.832426V0.832426Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowDropdown;
