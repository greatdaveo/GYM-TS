import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../shared/Types"
import { motion } from "framer-motion"
import Htext from "../shared/Htext";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Home Modern",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

    },

    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Dicerse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

    },

    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = (setSelectedPage: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            {/* Header */}
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                <div className="md:my-5 md:w-3/5">
                    <Htext>MORE THAN JUST GYM.</Htext>
                    <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes get you to your fitness goals with ease. We provide care into each and every member</p>
                </div>

                {/* Benefits */}
                <div className="mt-5 items-center justify-between gap-8 md:flex">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits