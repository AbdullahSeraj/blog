import SocialIcon from "./SocialIcon"

const user = {
    email: "serajs-net@gmail.com",
    twitter: "https://x.com",
    bluesky: "https://bsky.app",
    linkedin: "https://www.linkedin.com/in/abdullah-seraj",
    github: "https://github.com/AbdullahSeraj"
}

const Footer = () => {
    const { email, twitter, bluesky, linkedin, github } = user

    return (
        <div className="mt-16 pb-5 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
                <SocialIcon size={6} kind="mail" href={`mailto:${email}`} />
                <SocialIcon size={6} kind="github" href={github} />
                <SocialIcon size={6} kind="facebook" href={github} />
                <SocialIcon size={6} kind="youtube" href={github} />
                <SocialIcon size={6} kind="linkedin" href={linkedin} />
                <SocialIcon size={6} kind="x" href={twitter} />
                <SocialIcon size={6} kind="mastodon" href={bluesky} />
                <SocialIcon size={6} kind="threads" href={bluesky} />
                <SocialIcon size={6} kind="instagram" href={bluesky} />
                <SocialIcon size={6} kind="medium" href={bluesky} />
                <SocialIcon size={6} kind="bluesky" href={bluesky} />
            </div>

            <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div>Abdullah SERAJ ALDDIN</div><div> • </div><div>© 2025</div><div> </div>
            </div>
        </div>
    )
}

export default Footer