import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          About Me
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I am Antonio, an MPhil student in Machine Learning and Machine Intelligence at Cambridge University. Before starting my master's, I completed a BSc in Mathematics at VU Amsterdam, where I worked on my thesis in collaboration with CRM Barcelona, researching how variability in synaptic connectivity can enhance the memory storage capabilities of recurrent neural networks (CA3 region of the hippocampus). I also completed a research internship at Artificial Neural Computing, focusing on modeling the boundary dynamics of neural networks.
        </p>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Additionally, I co-founded altan.ai, a startup aimed at automating workflows using AI, and I had the opportunity to teach courses in Single Variable Calculus, Probability Theory, and Linear Algebra as a Teaching Assistant at VU Amsterdam.
        </p>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I am interested in exploring the computational principles of natural and artificial intelligence, aiming to "reverse engineer" the brain's algorithms, both to learn about how our brains work and to build more effective AI systems. In the long term, my goal is to leverage AI to help people gain greater agency over their circumstances and reach their full potential.
        </p>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I particularly want to focus my research on areas such as neural representations and computational dynamics in the brain, learning algorithms that enable continual and efficient skill acquisition, meta-learning and online learning frameworks, understanding the theoretical underpinnings of deep learning, studying knowledge representation and hierarchical abstraction in neural networks, and advancing reinforcement learning techniques for adaptive behavior.
        </p>
      </motion.section>
    </div>
  );
}
