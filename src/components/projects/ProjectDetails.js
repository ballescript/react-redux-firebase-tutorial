import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (    
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab inventore cupiditate error nemo distinctio! Reiciendis itaque, dolores, excepturi est tempora nesciunt quasi et ipsam rem iusto at explicabo ut voluptatem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Balles</div>
                    <div>July 7, 4pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
