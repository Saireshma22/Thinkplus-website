import React from 'react'


export default function CourseCard({c}){
return (
<div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
<h3 className="text-lg font-semibold">{c.title}</h3>
<p className="text-sm text-gray-600">{c.description}</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm">{c.duration}</span>
<span className="font-semibold">{c.price}</span>
</div>
<button className="mt-4 w-full py-2 rounded bg-thinkblue text-white">Enroll Now</button>
</div>
)
}