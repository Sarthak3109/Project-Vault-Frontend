import React from 'react'
import { Link } from 'react-router-dom'
const ProjectTitleCard = ({href, title,desc, image}) => {
  return (
    <div className="w-[400px] mt-[2px] lg:w-auto rounded-lg shadow-md lg:max-w-sm hover:translate-y-1">
        <Link to = {href} >
            <img
                className="object-cover w-full sm:h-70 md:h-48"
                // src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                src = {image}
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {title}
                </h4>
                <p className="mb-2 leading-normal">
                    {desc}
                </p>
               
            </div>
            </Link>
        </div>
  )
}

export default ProjectTitleCard