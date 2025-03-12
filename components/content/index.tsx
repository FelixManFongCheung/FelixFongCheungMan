export default function Content({ title }: { title: string }) {
    return (title === 'About' && <div className="md:absolute md:h-full md:w-[40vw]">
        I am a self-taught software engineer with a passion for web development, AI implementation and creative coding. 
        My blend of academic knowledge of data science and hands-on experience of full-stack web development has given me opportunities to make data-driven decisions and build products that are both functional and aesthetically pleasing. 
        I recently finished my master&apos;s degree in Social Data Science at the University of Copenhagen and completed an internship at a startup company that has a focus on implementing AI solutions for product management.
        I am currently looking for a job that allows me to work with AI, data and web with a touch of creativity. Please don&apos;t hesitate to contact me. 

    </div>)
}
