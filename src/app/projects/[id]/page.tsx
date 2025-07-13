import { notFound } from 'next/navigation';
import { Project, featuredProjects } from '@/data/featured-projects';
import Image from 'next/image';
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa';
import Navigation from '@/components/common/Navigation';
import ProjectHero from '@/sections/projects/ProjectHero';
import KeyHighlights from '@/sections/projects/KeyHighlights';
import ProjectGallery from '@/sections/projects/ProjectGallery';
import FeaturedDevelopment from '@/sections/projects/FeaturedDevelopment';
import LocationAdvantages from '@/sections/projects/LocationAdvantages';
import InquirySection from '@/sections/projects/InquirySection';
import RelatedProjects from '@/sections/projects/RelatedProjects';
import Footer from '@/components/common/Footer';

type Props = {
    params: { id: string };
};

export default async function ProjectDetail({ params }: Props) {
    // Await the params before using them
    const { id } = await params;
    const project = featuredProjects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <>
            {/* Navigation Bar */}
            <Navigation />

            {/* Hero Section */}
            <ProjectHero
                title={project.title}
                location={project.location}
                price={project.price}
                bhk={project.bhk}
                image={project.image}
            />

            {/* Key Highlights Section */}
            <KeyHighlights />

            {/* Project Gallery */}
            <ProjectGallery />

            {/* Location & Advantages */}
            <LocationAdvantages />

            {/* Featured Development */}
            <FeaturedDevelopment />

            {/* Inquiry Section */}
            <InquirySection />

            {/* Related Projects */}
            <RelatedProjects />

            {/* Footer */}
            <Footer />

        </>
    );
}
