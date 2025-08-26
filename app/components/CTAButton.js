import Link from 'next/link';

export default function CTAButton({ 
  href = "/get-started", 
  children = "Book Free Consultation", 
  variant = "primary",
  size = "md",
  className = ""
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
