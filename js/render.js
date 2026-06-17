/* ═══════════════════════════════════════════
   RENDER — CENEP Dashboard de Processos
   TECNASA Consultoria
═══════════════════════════════════════════ */

function build() {
  const nav   = document.getElementById('sector-nav');
  const pages = document.getElementById('sector-pages');

  SETORES.forEach((s, i) => {
    /* ── Contadores ── */
    const altaCount  = s.processos.filter(p => p.crit === 'alta').length;
    const mediaCount = s.processos.filter(p => p.crit === 'media').length;
    const baixaCount = s.processos.filter(p => p.crit === 'baixa').length;
    const okCount    = s.processos.filter(p => p.crit === 'ok').length;

    /* ── Tab de navegação ── */
    nav.insertAdjacentHTML('beforeend',
      `<button class="snav-btn${i === 0 ? ' active' : ''}" onclick="showSec('${s.id}', this)">
        ${s.nome}
        ${altaCount > 0
          ? `<span style="background:rgba(230,57,70,.2);color:var(--crit);border-radius:10px;padding:0 5px;font-size:9px;margin-left:2px">${altaCount}↑</span>`
          : ''}
      </button>`
    );

    /* ── Sistemas em uso ── */
    const sysHtml = s.sistemas.map(sys => {
      const ec = { ok: 'e-ok', lim: 'e-lim', aus: 'e-aus' }[sys.e];
      const el = { ok: 'Adequado', lim: 'Limitado', aus: 'Ausente' }[sys.e];
      return `<div class="sys-tag">
        <span class="sys-tag-name">${sys.n}</span>
        <span class="eval ${ec}">${el}</span>
      </div>`;
    }).join('');

    /* ── Linhas de benchmark ── */
    const critMap = { alta: 'cr-alta', media: 'cr-media', baixa: 'cr-baixa', ok: 'cr-ok' };
    const critLbl = { alta: 'Alta', media: 'Média', baixa: 'Baixa', ok: 'OK' };

    const rowsHtml = s.processos.map((p, pi) => `
      <div class="bench-row">
        <div class="bc-proc">
          <div class="bc-proc-num">PROCESSO ${pi + 1}</div>
          <div class="bc-proc-name">${p.nome}</div>
        </div>
        <div class="bc-pbf">
          <p>${p.pbf}</p>
          ${p.gap ? `<p class="gap-note">⚠ ${p.gap}</p>` : ''}
        </div>
        <div class="bc-mkt"><p>${p.mkt}</p></div>
        <div class="bc-crit">
          <div class="crit-col ${critMap[p.crit]}">
            <div class="crit-dot"></div>
            <div class="crit-lbl">${critLbl[p.crit]}</div>
          </div>
        </div>
      </div>`
    ).join('');

    /* ── Cards de impacto ── */
    const impactHtml = s.impactos.map(imp => `
      <div class="impact-card">
        <div class="ic-head">
          <span class="ic-icon">${imp.ic}</span>
          <span class="ic-title">${imp.t}</span>
        </div>
        <div class="ic-body">${imp.b}</div>
      </div>`
    ).join('');

    /* ── Painel completo ── */
    pages.insertAdjacentHTML('beforeend', `
      <div class="sector-page${i === 0 ? ' active' : ''}" id="sp-${s.id}">

        <div class="sec-header">
          <div class="sec-info">
            <div class="sec-name">${s.nome}</div>
            <div class="sec-team">${s.responsavel}</div>
            <div class="sec-meta">
              <div class="meta-item">
                <div class="meta-lbl">Processos</div>
                <div class="meta-val">${s.processos.length}</div>
              </div>
              <div class="meta-item">
                <div class="meta-lbl">Críticos</div>
                <div class="meta-val" style="color:var(--crit)">${altaCount}</div>
              </div>
              <div class="meta-item">
                <div class="meta-lbl">Médios</div>
                <div class="meta-val" style="color:var(--high)">${mediaCount}</div>
              </div>
              <div class="meta-item">
                <div class="meta-lbl">Baixos</div>
                <div class="meta-val" style="color:#8a5800">${baixaCount}</div>
              </div>
            </div>
          </div>
          <div class="sec-status">
            <div style="font-family:Inter;font-weight:600;font-size:10px;color:var(--soft);text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Sistemas em uso</div>
            ${sysHtml}
          </div>
        </div>

        <div class="sec-t">Processos: CENEP Hoje vs. Mercado</div>
        <div class="bench-wrap">
          <div class="bench-head">
            <div class="bh-cell bh-proc">Processo</div>
            <div class="bh-cell bh-pbf">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" style="margin-right:5px">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              CENEP — Como faz hoje
            </div>
            <div class="bh-cell bh-mkt">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" style="margin-right:5px">
                <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
              </svg>
              Mercado — Como deveria ser
            </div>
            <div class="bh-cell bh-crit">Criticidade</div>
          </div>
          ${rowsHtml}
        </div>

        <div class="sec-t">Principais Impactos Documentados</div>
        <div class="impact-grid">${impactHtml}</div>

      </div>`
    );
  });
}

function showSec(id, btn) {
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sector-page').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sp-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal()  { document.getElementById('mo').classList.add('open'); }
function closeModal() { document.getElementById('mo').classList.remove('open'); }

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('mo').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  build();
  document.getElementById('gen-date').textContent =
    'Gerado em: ' + new Date().toLocaleDateString('pt-BR');
});