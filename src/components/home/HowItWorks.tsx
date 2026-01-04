"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Wallet, Sliders, ShieldCheck, Unlock } from 'lucide-react'
import { useRouter } from 'next/navigation'

const HowItWorks = () => {
  const router = useRouter();

  const steps = [
    {
      number: "01",
      title: "Connect & Design",
      description: "Connect your Solana wallet. Choose assets (SOL, SPL tokens, NFTs) and craft your message using our encrypted editor.",
      icon: <Wallet className="h-6 w-6" />,
      color: "text-cyan-400"
    },
    {
      number: "02",
      title: "Set Smart Conditions",
      description: "Define immutable unlock parameters: specific date, Oracle price target (e.g., SOL > $500), or wallet activity.",
      icon: <Sliders className="h-6 w-6" />,
      color: "text-cyan-400"
    },
    {
      number: "03",
      title: "Decentralized Custody",
      description: "Your capsule is minted as a unique NFT. Assets are secured in a non-custodial smart contract on Solana.",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "text-cyan-400"
    },
    {
      number: "04",
      title: "Trustless Reveal",
      description: "When conditions are met, the contract automatically unlocks. Claim your assets or share the revealed capsule with the world.",
      icon: <Unlock className="h-6 w-6" />,
      color: "text-cyan-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  }

  return (
    <section className="pt-10 pb-24 bg-transparent relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">
              How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D8FF] to-cyan-400">Works</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Creating and unlocking time capsules is easy with our streamlined process.
              Follow these simple steps to preserve your digital legacy.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connecting Line (Pulsing) */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-500/20 z-0 -translate-y-1/2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative z-10"
            >
              <div
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl h-full relative overflow-hidden group hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex flex-col p-6"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(34, 211, 238, 0.05)'
                }}
              >
                {/* Number Badge */}
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-4xl font-bold text-white/10 group-hover:text-cyan-400/20 transition-colors font-space-grotesk">
                    {step.number}
                  </span>
                  <div className={`h-12 w-12 rounded-xl bg-black/40 flex items-center justify-center border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>

                {/* Glow Overlay on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-8 py-6 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 transition-all duration-300"
            onClick={() => router.push('/create')}
          >
            Create Your Capsule
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks