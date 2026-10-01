import Link from 'next/link';

const benefits = [
  'Online 1-on-1 trading onboarding',
  'Weekly live trading psychology sessions',
  'Daily process and risk insights',
  'Online trade-with-me sessions',
  'VaultTrades strategy and execution education',
  'Risk-management frameworks and checklists',
  'Trading psychology and discipline training',
  'Technology and automation education',
  'VaultTrades training and e-book library',
  'Online community accountability and ongoing development',
];

export default function VaultTradesCommunityProduct() {
  return (
    <main className="vt-product">
      <div className="vt-product-top"><Link href="/community">← Back to VaultTrades Community</Link><div className="vt-brand">Vault<span>Trades</span></div></div>
      <section className="vt-product-hero">
        <div className="vt-section-label">VAULTTRADES COMMUNITY • FOUNDING PRODUCT</div>
        <h1>Build the trader.<br/><em>Then build the system.</em></h1>
        <p>One online programme focused on the part of trading that technology cannot replace: disciplined decision-making, defined risk and consistent execution.</p>
      </section>
      <section className="vt-product-grid">
        <div className="vt-product-card">
          <div className="vt-small">FOUNDING ACCESS</div><div className="vt-product-price">$88.88</div><div className="vt-once">ONCE-OFF • FIRST 20 MEMBERS</div>
          <Link className="vt-primary vt-full" href="/community">Review the Full Programme →</Link>
          <div className="vt-risk-note">Trading involves substantial risk. This product is educational and does not guarantee profits or trading results.</div>
        </div>
        <div>
          <div className="vt-section-label">WHAT YOU RECEIVE</div>
          <div className="vt-benefit-list">{benefits.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></div>)}</div>
        </div>
      </section>
      <section className="vt-achieve">
        <div className="vt-section-label">WHAT YOU SHOULD WALK AWAY WITH</div>
        <div className="vt-achieve-grid">
          <div><strong>A defined trading routine</strong><span>Know what to check before, during and after a trade.</span></div>
          <div><strong>A personal risk framework</strong><span>Understand exposure, invalidation, sizing and drawdown boundaries.</span></div>
          <div><strong>A decision filter</strong><span>Separate qualified setups from market noise and impulse.</span></div>
          <div><strong>An execution checklist</strong><span>Make your process repeatable instead of improvising under pressure.</span></div>
          <div><strong>A review habit</strong><span>Evaluate process quality, not just whether a trade won or lost.</span></div>
          <div><strong>A path to automation</strong><span>Understand OBSERVE → VALIDATE → LIVE before trusting technology with capital.</span></div>
        </div>
      </section>
    </main>
  );
}
