export default function TestimonialCard({ name, role, company, content, rating = 5, image = null }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {/* Star Rating */}
        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      
      <blockquote>
        <p className="text-gray-600 mb-4 italic">"{content}"</p>
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
          {image ? (
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <span className="text-gray-600 font-medium text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  );
}
