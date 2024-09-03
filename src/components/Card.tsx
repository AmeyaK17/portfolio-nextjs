import Image, { StaticImageData } from 'next/image';

interface ProjectDetails {
    title: string;
    description: string;
    image: StaticImageData;
    badges: string[];
    newBadge: boolean,
  }

const Card = ({projectDetails}: {projectDetails: ProjectDetails}) => {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl border">
                <figure className="h-52 w-full relative">
                    <Image
                        src={projectDetails.image.src}
                        alt={projectDetails.title}
                        width={384}
                        height={250}
                        // objectFit="cover"
                        className="w-full h-full"
                    />
                </figure>
                <div className="card-body h-52 px-4">
                    <h2 className="card-title justify-center">
                        {projectDetails.title}
                        {projectDetails.newBadge && (
                            <div className="badge badge-secondary">New</div>
                        )}
                    </h2>
                    <p>{projectDetails.description}</p>
                    <div className="card-actions justify-center">
                    {projectDetails.badges.map((badge, index) => (
                        <div key={index} className="badge badge-primary badge-outline">
                            {badge}
                        </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
