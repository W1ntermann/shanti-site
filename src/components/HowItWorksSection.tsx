import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Wallet, Coins, Cpu } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SectionHeading } from "@/components/SectionHeading"
import { BetaLiveCard } from "@/components/BetaLiveCard"
import { animationVariants, transitions } from "@/lib/animations"

interface Step {
  id: string
  number: string
  icon: React.ReactNode
  hasBetaNote?: boolean
}

const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation()
  const containerRef = React.useRef<HTMLDivElement>(null)

  const steps: Step[] = [
    {
      id: "step-1",
      number: "01",
      icon: <Wallet className="w-7 h-7" />,
    },
    {
      id: "step-2",
      number: "02",
      icon: <Coins className="w-7 h-7" />,
    },
    {
      id: "step-3",
      number: "03",
      icon: <Cpu className="w-7 h-7" />,
      hasBetaNote: true,
    },
  ]

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden py-24 px-6"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/working-system.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" style={{ zIndex: 1 }} />

      {/* Cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ zIndex: 2 }} />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none"
        style={{ zIndex: 2 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[140px] pointer-events-none"
        style={{ zIndex: 2 }}
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.45, 0.25, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={animationVariants.fadeInUp}
          className="mb-20"
        >
          <SectionHeading centered>{t("home.howItWorks.title")}</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto -mt-6"
          >
            {t("home.howItWorks.subtitle")}
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-12 md:space-y-20">
          {/* Vertical connection line - desktop only */}
          <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block -translate-x-1/2" />

          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
  step: Step
  index: number
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const { t } = useTranslation()
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stepTitle = t(`home.howItWorks.steps.${index}.title`)
  const stepDesc = t(`home.howItWorks.steps.${index}.desc`)
  const betaNote = step.hasBetaNote ? t("home.howItWorks.steps.2.betaNote") : undefined

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: transitions.smooth.ease }}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Card */}
      <motion.div
        className="flex-1 relative w-full"
        animate={isInView ? { scale: 1 } : { scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative group border border-white/10 bg-card/40 backdrop-blur-xl p-8 clip-corner-tl-br overflow-hidden"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Hover glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Scanline effect */}
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.04)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />

          <div className="relative z-10">
            {/* Icon + Number row */}
            <div className="flex items-start gap-5 mb-6">
              <motion.div
                className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {step.icon}
              </motion.div>
              <div className="flex-1 flex items-center">
                <motion.span
                  className="text-5xl md:text-7xl font-display font-black text-primary/15"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight uppercase">
              {stepTitle}
            </h3>

            {/* Description */}
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              {stepDesc}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Center Number Indicator - desktop only */}
      <motion.div
        className="relative hidden md:flex items-center justify-center flex-shrink-0"
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgb(0 243 255 / 0.15)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgb(0 243 255 / 0.7)"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset="283"
              animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 283 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "center" }}
            />
          </svg>
          <div className="relative z-10 w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/60 flex items-center justify-center backdrop-blur-sm">
            <span className="text-xl font-display font-bold text-primary">
              {step.number}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile number badge */}
      <div className="flex md:hidden items-center justify-center -mt-4 mb-2">
        <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/50 flex items-center justify-center">
          <span className="text-sm font-display font-bold text-primary">{step.number}</span>
        </div>
      </div>

      {/* Beta Live Card under step 3 */}
      {betaNote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full"
        >
          <BetaLiveCard betaNote={betaNote} />
        </motion.div>
      )}
    </motion.div>
  )
}

export default HowItWorksSection