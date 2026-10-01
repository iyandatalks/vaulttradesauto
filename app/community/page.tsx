import Link from 'next/link';

const outcomes = [
  ['01','A Trading Process','Build a repeatable pre-trade, execution and post-trade routine instead of making decisions candle by candle.'],
  ['02','A Risk Framework','Define risk before entry, position sizing, invalidation, drawdown boundaries and rules for when to stop trading.'],
  ['03','A Setup Filter','Learn how structure, liquidity, FIB levels, FVGs, OBs, EMA conditions and session context can be combined into a decision framework.'],
  ['04','Execution Discipline','Use checklists and execution rules to reduce chasing, hesitation, revenge trading and impulsive changes.'],
  ['05','Observe → Validate → Live','Learn how VaultTrades approaches strategy testing before live capital, including signal validation and automation readiness.'],
  ['06','A Review System','Turn every trade into data: setup quality, risk, execution, rule adherence and lessons for the next session.'],
];

const included = [
  ['Online 1-on-1 onboarding','A structured review of your current trading behaviour, process, risk and next focus.'],
  ['Weekly live psychology sessions','Practical work on FOMO, revenge trading, overconfidence, hesitation and rule-breaking.'],
  ['Daily trading insights','Short online guidance focused on process, patience, market conditions and risk awareness — not blind calls.'],
  ['Online trade-with-me sessions','Walk through market structure, liquidity, setup qualification, risk and trade management.'],
  ['VaultTrades education library','Strategy, risk-management, execution, psychology, checklists, e-books and training resources as the library grows.'],
  ['Technology & automation education','Understand the VaultTrades workflow from TradingView signals through validation and MT5 execution.'],
];

export default function VaultTradesCommunityPage() {
  return (
    <main className="vt-sales">
      <nav className="vt-nav">
        <div className="vt-brand">Vault<span>Trades</span></div>
        <div className="vt-nav-pill">100% ONLINE • FOUNDING COMMUNITY</div>
      </nav>

      <section className="vt-hero">
        <div className="vt-kicker">VAULTTRADES COMMUNITY</div>
        <h1>Stop trading from reaction.<br/><em>Start operating from a process.</em></h1>
        <p className="vt-lead">
          An online trading-development community built around structure, risk management,
          disciplined execution, psychology and technology-assisted trading.
        </p>
        <div className="vt-hero-actions">
          <Link className="vt-primary" href="/products/vaulttrades-community">View the Founding Package <span>→</span></Link>
          <a className="vt-secondary" href="#what-you-build">See what you will build</a>
        </div>
        <div className="vt-trust">
          <span>CAPITAL FIRST</span><b>•</b><span>RISK DEFINED</span><b>•</b><span>PROCESS FOLLOWED</span><b>•</b><span>EXECUTION DISCIPLINED</span>
        </div>
      </section>

      <section className="vt-section vt-dark">
        <div className="vt-section-label">THE PROBLEM</div>
        <div className="vt-split">
          <div><h2>Most traders don't need another indicator.</h2></div>
          <div><p>They need a process that tells them what qualifies, what does not, how much is at risk and what to do when the market does not behave as expected.</p><p>A setup can be valid and still become a bad trade when risk, sizing or execution is handled badly.</p></div>
        </div>
      </section>

      <section className="vt-section" id="what-you-build">
        <div className="vt-section-label">WHAT YOU BUILD</div>
        <h2>By following the VaultTrades framework, you work toward six practical capabilities.</h2>
        <div className="vt-outcomes">{outcomes.map(([n,t,d]) => <article key={n} className="vt-card"><div className="vt-number">{n}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section className="vt-section vt-panel-section">
        <div className="vt-section-label">THE VAULTTRADES LOOP</div>
        <div className="vt-loop">
          {['MARKET','SETUP','SIGNAL','RISK','EXECUTION','MANAGE','REVIEW'].map((x,i)=><div key={x}><small>0{i+1}</small><strong>{x}</strong>{i<6 && <span>→</span>}</div>)}
        </div>
        <p className="vt-center">The goal is not to make every trade profitable. <strong>The goal is to make every trade intentional.</strong></p>
      </section>

      <section className="vt-section">
        <div className="vt-section-label">WHAT'S INSIDE</div>
        <h2>Everything is delivered online.</h2>
        <div className="vt-included">{included.map(([t,d]) => <div key={t} className="vt-row"><div className="vt-check">✓</div><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
      </section>

      <section className="vt-section vt-dark">
        <div className="vt-section-label">TECHNOLOGY</div>
        <div className="vt-split">
          <div><h2>Learn the workflow behind VaultTrades.</h2></div>
          <div><p className="vt-codeflow">TradingView <span>→</span> VaultTrades <span>→</span> Validation <span>→</span> Risk Rules <span>→</span> MT5 <span>→</span> Broker</p><p>Automation is treated as an execution tool, not a profit machine. Strategies are approached through <strong>OBSERVE → VALIDATE → LIVE</strong> rather than jumping straight to live risk.</p></div>
        </div>
      </section>

      <section className="vt-section vt-package">
        <div className="vt-package-main">
          <div className="vt-section-label">FOUNDING PACKAGE</div>
          <h2>VaultTrades Community</h2>
          <p className="vt-package-sub">A 100% online trading-development community for traders who want structure before scale.</p>
          <ul>{['Online onboarding session','Weekly live psychology sessions','Daily trading insights','Online trade-with-me sessions','Training and e-book library','Risk, strategy and execution education','Technology & automation education','Community accountability and ongoing development'].map(x=><li key={x}>✓ {x}</li>)}</ul>
        </div>
        <div className="vt-price-card">
          <div className="vt-small">FOUNDING ACCESS</div>
          <div className="vt-price">$88.88</div>
          <div className="vt-once">ONCE-OFF</div>
          <div className="vt-limit">FIRST 20 MEMBERS</div>
          <Link className="vt-primary vt-full" href="/products/vaulttrades-community">View VaultTrades Community Package →</Link>
          <p>No guaranteed returns. No promise of winning trades. Trading involves risk.</p>
        </div>
      </section>

      <section className="vt-section vt-faq">
        <div className="vt-section-label">WHO THIS IS FOR</div>
        <div className="vt-faq-grid">
          <div><h2>For traders ready to take responsibility for the process.</h2><p>For traders who are inconsistent, overtrade, chase entries, struggle with emotions, risk too much or know what to do but fail to execute consistently.</p></div>
          <div><h3>Not for:</h3><p>❌ Guaranteed profits<br/>❌ Get-rich-quick promises<br/>❌ Blind signal dependency<br/>❌ Recovering losses quickly<br/>❌ Ignoring risk</p></div>
        </div>
      </section>

      <footer className="vt-footer">
        <div className="vt-brand">Vault<span>Trades</span></div>
        <p>Protect the capital. Follow the plan. Execute the process.</p>
        <Link className="vt-primary" href="/products/vaulttrades-community">View the Package →</Link>
        <small>Educational content only. No strategy, signal, automation system or programme guarantees profits.</small>
      </footer>
    </main>
  );
}
