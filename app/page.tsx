'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Cpu,
  CheckCircle,
  Menu,
  Copy,
  Check,
} from 'lucide-react';

export default function LandingPage() {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleCopyContractAddress = () => {
    navigator.clipboard.writeText('Coming Soon');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-5 h-5 bg-cyan-500 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500"></div>
            <span className="text-white font-medium tracking-tight">Oneliac</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="https://github.com/Oneliac" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="https://github.com/Oneliac" className="hover:text-white transition-colors">
              Developers
            </a>
            <a href="https://t.me/oneliac_bot" className="hover:text-white transition-colors">
            Telegram Bot
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://t.me/oneliac_bot" className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block">
             
            </a>
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors"  >
            <a href="https://github.com/Oneliac" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-50 transition-colors">
            Documentation 
            </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
        {/* Ambient Background Lights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
          <div className="reveal" ref={addRevealRef}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              ZK PROOFS + SOLANA MAINNET
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8">
              Privacy-preserving <br />
              <span className="italic font-light text-zinc-500">Zero-Knowledge Healthcare AI.</span>
            </h1>

            {/* Subheader */}
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light">
              Decentralized medical analysis without data leaks. Keep patient data private, verify eligibility instantly, and enable federated learning via zero-knowledge proofs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Oneliac/Oneliac-ZKSnark-Circuits" className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all overflow-hidden inline-flex">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a href="https://github.com/Oneliac" className="px-8 py-4 border border-zinc-800 text-white hover:bg-zinc-900 rounded-full transition-all font-medium inline-flex items-center">
                View Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-white/5 backdrop-blur-sm reveal delay-300 overflow-hidden" ref={addRevealRef}>
          <div className="metrics-scroll flex whitespace-nowrap py-6 text-xs font-mono text-zinc-400 uppercase tracking-widest">
            <div className="flex items-center gap-2 flex-shrink-0 px-12">
              <span className="text-emerald-500">●</span> System Operational
            </div>
            <div className="flex-shrink-0 px-12">Latency: &lt; 50ms</div>
            <div className="flex-shrink-0 px-12">Encryption: zk-SNARKs (Groth16)</div>
            <div className="flex-shrink-0 px-12">Compliance: HIPAA Ready</div>
            <div className="flex items-center gap-2 flex-shrink-0 px-12">
              <span className="text-emerald-500">●</span> System Operational
            </div>
            <div className="flex-shrink-0 px-12">Latency: &lt; 50ms</div>
            <div className="flex-shrink-0 px-12">Encryption: zk-SNARKs (Groth16)</div>
            <div className="flex-shrink-0 px-12">Compliance: HIPAA Ready</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 reveal" ref={addRevealRef}>
            <h2 className="text-sm font-mono text-cyan-500 mb-4">01_PROTOCOL</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white">
              The <span className="italic text-zinc-600">liquidity layer</span> <br />
              for medical data.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div
              className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden reveal delay-100"
              ref={addRevealRef}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Insurance Eligibility</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Verify patient coverage in milliseconds. Age & policy validation via ZK proofs with no PII shared with verifiers.
                </p>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-500">
                  <CheckCircle className="w-3 h-3" />
                  <span>CRYPTOGRAPHICALLY VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden reveal delay-200"
              ref={addRevealRef}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Activity className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Prescription Validation</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Safe drug interactions checking. Cross-chain oracle for pharmacy verification with encrypted patient history.
                </p>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-500">
                  <CheckCircle className="w-3 h-3" />
                  <span>INTERACTION CHECKED</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden reveal delay-300"
              ref={addRevealRef}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Federated Learning</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Train AI models on sensitive healthcare data. Patient data never leaves encrypted enclaves.
                </p>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-500">
                  <CheckCircle className="w-3 h-3" />
                  <span>DIFFERENTIAL PRIVACY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-[#050505] relative overflow-hidden">
        {/* Horizontal Glow Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal" ref={addRevealRef}>
            <h2 className="text-sm font-mono text-emerald-500 mb-4">02_INTEGRATION</h2>
            <h3 className="text-5xl font-serif text-white mb-8">
              Healthcare logic <br />
              <span className="italic text-zinc-600">without the chaos.</span>
            </h3>
            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
              Deterministic, auditable, and instant. Our SDK provides the primitive rails for machine-to-machine value transfer, designed specifically for the healthcare agent economy.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="text-4xl font-mono text-white mb-2">&lt; 50ms</div>
                <div className="text-xs text-zinc-500 tracking-widest uppercase">Verification Latency</div>
              </div>
              <div>
                <div className="text-4xl font-mono text-white mb-2">100%</div>
                <div className="text-xs text-zinc-500 tracking-widest uppercase">Type-Safe Python</div>
              </div>
            </div>
          </div>

          <div className="relative reveal delay-200" ref={addRevealRef}>
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] opacity-20"></div>
            <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl group">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/50">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                <div className="ml-auto text-xs font-mono text-zinc-600">integration.py</div>
              </div>

              {/* Code Block */}
              <div className="p-6 overflow-x-auto bg-[#0a0a0a] font-mono text-sm leading-loose">
                <pre className="text-sm">
                  <span className="text-purple-400">from</span>
                  <span className="text-white"> zk_healthcare </span>
                  <span className="text-purple-400">import</span>
                  <span className="text-white"> EligibilityAgent</span>
                  {'\n\n'}
                  <span className="text-zinc-500">
                    {`// Initialize Agent on Solana Devnet`}
                  </span>
                  {'\n'}
                  <span className="text-white">agent = EligibilityAgent(</span>
                  <span className="text-emerald-400">"https://api.devnet.solana.com"</span>
                  <span className="text-white">)</span>
                  {'\n\n'}
                  <span className="text-zinc-500">
                    {`// Verify coverage with Zero-Knowledge Proof`}
                  </span>
                  {'\n'}
                  <span className="text-white">result = </span>
                  <span className="text-purple-400">await</span>
                  <span className="text-white"> agent.check_coverage(</span>
                  {'\n'}
                  <span className="text-white">  patient_data=patient,</span>
                  {'\n'}
                  <span className="text-white">  procedure_code=</span>
                  <span className="text-emerald-400">"PROC001"</span>
                  {'\n'}
                  <span className="text-white">)</span>
                  {'\n\n'}
                  <span className="text-cyan-400">print</span>
                  <span className="text-white">(result[</span>
                  <span className="text-emerald-400">"eligible"</span>
                  <span className="text-white">])           </span>
                  <span className="text-zinc-500"># True</span>
                  {'\n'}
                  <span className="text-cyan-400">print</span>
                  <span className="text-white">(result[</span>
                  <span className="text-emerald-400">"privacy_preserved"</span>
                  <span className="text-white">])  </span>
                  <span className="text-zinc-500"># True</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 reveal" ref={addRevealRef}>
          <h2 className="text-sm font-mono text-cyan-500 mb-4">03_PRICING</h2>
          <h3 className="text-5xl font-serif text-white">
            Predictable costs <br />
            <span className="italic text-zinc-600">for infinite scale.</span>
          </h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div
            className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors reveal delay-100"
            ref={addRevealRef}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              <span className="text-white font-medium">Settlement</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-serif text-white">$0.002</span>
              <span className="text-zinc-500 font-mono text-sm uppercase">/ tx</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 h-10">Per validated state transition on Solana Mainnet.</p>
            <a href="https://github.com/Oneliac" className="w-full py-3 rounded-lg font-medium transition-all bg-cyan-500 text-black hover:bg-cyan-400 inline-flex items-center justify-center">
              Start Building
            </a>
          </div>

          {/* Tier 2 */}
          <div
            className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors reveal delay-200"
            ref={addRevealRef}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full border border-zinc-500"></div>
              <span className="text-white font-medium">Intelligence</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-serif text-white">$0.04</span>
              <span className="text-zinc-500 font-mono text-sm uppercase">/ req</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 h-10">Per inference request for federated learning models.</p>
            <a href="https://github.com/Oneliac" className="w-full py-3 rounded-lg font-medium transition-all bg-white/5 text-white hover:bg-white/10 border border-white/5 inline-flex items-center justify-center">
              Enable Access
            </a>
          </div>

          {/* Tier 3 */}
          <div
            className="bg-zinc-900/20 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/40 transition-colors reveal delay-300"
            ref={addRevealRef}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full border border-zinc-500"></div>
              <span className="text-white font-medium">Governance</span>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-serif text-white">$299</span>
              <span className="text-zinc-500 font-mono text-sm uppercase">/ mo</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 h-10">Fixed protocol fee for private DAO deployment.</p>
            <a href="https://github.com/Oneliac" className="w-full py-3 rounded-lg font-medium transition-all bg-white/5 text-white hover:bg-white/10 border border-white/5 inline-flex items-center justify-center">
              Deploy DAO
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal" ref={addRevealRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM IS LIVE
          </div>
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-8">
            Start the <span className="italic text-cyan-400">revolution.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join the network of autonomous agents processing patient data without exposure. The infrastructure for the machine economy is here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/Oneliac/oneliac_sdk" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-colors inline-flex items-center justify-center">
              Get API Keys
            </a>
            <a href="https://github.com/Oneliac" className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center">
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020202] border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-cyan-500 rounded-sm rotate-45"></div>
              <span className="text-white font-medium">Oneliac ZK Healthcare</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The infrastructure for the autonomous healthcare economy. Built for privacy, verified by math.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="https://github.com/Oneliac" className="hover:text-cyan-400 transition-colors">
                   Intelligence
                </a>
              </li>
              <li>
                <a href="https://github.com/Oneliac" className="hover:text-cyan-400 transition-colors">
                 Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="https://github.com/Oneliac" className="hover:text-cyan-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/Oneliac/Oneliac-Engine" className="hover:text-cyan-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://github.com/Oneliac" className="hover:text-cyan-400 transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>
                <a href="https://github.com/Oneliac" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono">
            <p>© 2025 Oneliac ZK Healthcare. Licensed under Apache 2.0.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              
              <a href="https://github.com/Oneliac" className="hover:text-white transition-colors">
                GITHUB
              </a>
              
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
            <span>Contract Address:</span>
            <button
              onClick={handleCopyContractAddress}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group"
            >
              Coming Soon
              {copied ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
