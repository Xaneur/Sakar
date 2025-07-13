import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { projectPageContent, projectHeroStyles, backgroundStyles } from '@/data/project-page';

type ProjectHeroProps = {
  title: string;
  location: string;
  price: string;
  bhk: string;
  image: string | { src: string };
};

export default function ProjectHero({ title, location, price, bhk, image }: ProjectHeroProps) {
  const imageSrc = typeof image === 'string' ? image : image.src;
  
  return (
    <div className={projectHeroStyles.container}>
      {/* Background Image with Gradient Overlay */}
      <div 
        className={projectHeroStyles.background}
        style={{
          backgroundImage: `url(${imageSrc})`,
          ...backgroundStyles
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-0"
          priority
          sizes="100vw"
        />
      </div>

      <div className={projectHeroStyles.contentContainer}>
        <div className={projectHeroStyles.contentWrapper}>
          <div className={projectHeroStyles.glassCard}>
            {/* Status Badge */}
            <div className={projectHeroStyles.statusBadge}>
              {projectPageContent.statusBadge}
            </div>

            {/* Project Title */}
            <h1 className={projectHeroStyles.title}>
              {title}
            </h1>

            {/* Project Meta */}
            <div className={projectHeroStyles.metaContainer}>
              <div className={projectHeroStyles.metaItem}>
                <FaMapMarkerAlt className="mr-2" />
                <span>{location}</span>
              </div>
              <div className={projectHeroStyles.metaItem}>
                <span className="font-medium">{price}</span>
              </div>
              <div className={projectHeroStyles.metaItem}>
                <span>{bhk} {projectPageContent.metaLabels.apartments}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={projectHeroStyles.buttonContainer}>
              <button className={projectHeroStyles.primaryButton}>
                {projectPageContent.ctaButtons.contactDeveloper}
              </button>
              <button className={projectHeroStyles.secondaryButton}>
                {projectPageContent.ctaButtons.viewGallery}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
