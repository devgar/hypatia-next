import BigButton from "../../components/BigButton"

export default function Courses() {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            
            <BigButton
                href="/courses"
                title="Courses"
                description="Find in-depth information about Next.js features and API."
            />
            
            <BigButton
                href="subjects"
                title="Subjects"
                description="Learn about Next.js in an interactive course with quizzes!"
            />
            
            <BigButton
                href="/modules"
                title="Modules"
                description="Explore starter templates for Next.js."
            />
        </div>
    )
}