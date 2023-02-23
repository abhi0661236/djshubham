import React from 'react'

const SectionTitle = ({title, children}) => {
    return (
        <div className="p-2 bg-primary text-dark rounded-top border-bottom border-4 border-secondary d-flex align-items-center">
            <h2>
                {
                    title
                }
            </h2>
            <div className='d-flex flex-grow-1 align-items-center gap-1 justify-content-end'>
                {
                    children
                }
            </div>
        </div>
    )
}

export default SectionTitle