/* ═══════════════════════════════════════════════════════
   RENDER — Safety Cirúrgica Dashboard de Processos
   TECNASA Consultoria
═══════════════════════════════════════════════════════ */

const nav = document.getElementById('sector-nav');
const pages = document.getElementById('sector-pages');

/* ── Helpers gerais ── */
function sysChips(sistemas) {
  return sistemas.map(s => {
    const cls = { ok: 'ok', lim: 'lim', aus: 'aus' }[s.e];
    const lbl = { ok: 'Adequado', lim: 'Limitado', aus: 'Ausente' }[s.e];
    return `<div class="sys-chip"><div class="sys-dot ${cls}"></div>${s.n} <span style="font-size:9px;color:var(--soft);margin-left:2px">(${lbl})</span></div>`;
  }).join('');
}

function procTableHtml(processos) {
  const rows = processos.map(p => `
    <tr>
      <td class="col-num"><span class="proc-num">${p.num}</span></td>
      <td class="col-etapa">
        <div class="proc-name">${p.nome}</div>
        <div class="proc-resp">${p.resp}</div>
      </td>
      <td class="col-ent">${p.entrada}</td>
      <td class="col-sai">${p.saida}</td>
      <td class="col-sys">
        ${p.sistema}
        ${p.obs ? `<div class="proc-obs">ℹ ${p.obs}</div>` : ''}
      </td>
    </tr>`).join('');

  return `<div style="overflow-x:auto">
    <table class="proc-table">
      <thead><tr>
        <th class="col-num">#</th>
        <th class="col-etapa">Etapa / Responsável</th>
        <th class="col-ent">Entrada</th>
        <th class="col-sai">Saída</th>
        <th class="col-sys">Sistema + Observação</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

/* ══════════════════════════════════════════════════
   PÁGINA: CADEIA DE VALOR
   - Quadrados clicáveis com setas em sequência
   - Ao clicar num setor, exibe apenas ele abaixo
   - Botão Diagnóstico ao lado das abas, na tab bar
══════════════════════════════════════════════════ */

/* Tab "Cadeia de Valor" no nav */
nav.insertAdjacentHTML('beforeend',
  `<button class="snav-btn active" onclick="showCadeia(this)">🔗 Cadeia de Valor</button>`
);

/* Tab "Mapa de Oportunidades" no nav */
nav.insertAdjacentHTML('beforeend',
  `<button class="snav-btn" onclick="gotoMapa(this)">🎯 Mapa de Oportunidades</button>`
);

/* Botão Diagnóstico na tab bar, separado visualmente */
nav.insertAdjacentHTML('beforeend',
  `<button class="snav-btn snav-diag" id="btn-nav-diag" onclick="gotoDiag(this)">📊 Diagnóstico</button>`
);

/* Monta os quadrados da cadeia */
const nodesHtml = CADEIA.map((s, i) => {
  const arrow = i < CADEIA.length - 1
    ? `<div class="cnode-arrow">→</div>`
    : '';
  return `
    <div class="cnode" id="cnode-${s.id}" onclick="selectSector('${s.id}')">
      <div class="cnode-step">Etapa ${i + 1}</div>
      <div class="cnode-icon">${s.icon}</div>
      <div class="cnode-name">${s.nome}</div>
      <div class="cnode-resp">${s.responsavel.split('+')[0].trim().split('(')[0].trim()}</div>
      <div class="cnode-count">${s.processos.length} processos</div>
    </div>${arrow}`;
}).join('');

/* Página da cadeia de valor */
pages.insertAdjacentHTML('beforeend', `
  <div class="sector-page active" id="sp-cadeia">

    <div class="pg-title">Cadeia de Valor — Safety Cirúrgica</div>
    <div class="pg-sub">Selecione um setor para ver seus processos, responsáveis, entradas e saídas</div>

    <!-- Fluxo de quadrados clicáveis -->
    <div class="cnode-flow">${nodesHtml}</div>

    <!-- Detalhe do setor selecionado -->
    <div id="sector-detail-area"></div>

  </div>`);

/* Função que exibe o detalhe de um setor ao clicar no quadrado */
window.selectSector = function (id) {
  /* destaca o quadrado selecionado */
  document.querySelectorAll('.cnode').forEach(n => n.classList.remove('cnode-active'));
  document.getElementById('cnode-' + id).classList.add('cnode-active');

  const s = CADEIA.find(x => x.id === id);
  const area = document.getElementById('sector-detail-area');

  area.innerHTML = `
    <div class="sdet-card">
      <div class="sdet-header">
        <div class="sdet-left">
          <div class="sdet-name">${s.icon} ${s.nome}</div>
          <div class="sdet-resp">${s.responsavel}</div>
        </div>
        <div class="sdet-stats">
          <div class="sdet-stat">
            <div class="sdet-stat-n">${s.processos.length}</div>
            <div class="sdet-stat-l">Processos</div>
          </div>
          <div class="sdet-stat">
            <div class="sdet-stat-n">${s.sistemas.length}</div>
            <div class="sdet-stat-l">Sistemas</div>
          </div>
        </div>
      </div>
      <div class="sdet-sistemas">${sysChips(s.sistemas)}</div>
      ${procTableHtml(s.processos)}
    </div>
`;

  /* scroll suave até o detalhe */
  setTimeout(() => area.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
};

/* Abre o primeiro setor por padrão */
setTimeout(() => selectSector(CADEIA[0].id), 80);

/* ══════════════════════════════════════════════════
   PÁGINA: MAPA DE OPORTUNIDADES
══════════════════════════════════════════════════ */
pages.insertAdjacentHTML('beforeend', `<div class="sector-page" id="sp-mapa"></div>`);
buildMapaOportunidades();

window.gotoMapa = function (btn) {
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sector-page').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('sp-mapa').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ══════════════════════════════════════════════════
   PÁGINA: DIAGNÓSTICO CONSOLIDADO
══════════════════════════════════════════════════ */
const achadosHtml = ACHADOS.map(a => `
  <div class="achado-card${a.destaque ? ' destaque' : ''}">
    <div class="achado-icon">${a.icon}</div>
    <div class="achado-setor">${a.setor}</div>
    <div class="achado-title">${a.title}</div>
    <div class="achado-desc">${a.desc}</div>
  </div>`).join('');

pages.insertAdjacentHTML('beforeend', `
  <div class="sector-page" id="sp-diag">
    <div class="pg-title">📊 Diagnóstico Consolidado</div>
    <div class="pg-sub">Principais achados do mapeamento AS-IS — Safety Cirúrgica | TECNASA, jul/2026</div>



    <div class="chart-block">
      <div class="chart-hdr">
        <div class="chart-hdr-title">Panorama do Diagnóstico — Números que Sintetizam o AS-IS</div>
        <div class="chart-badge">⚠ Achado Central</div>
      </div>
      <div class="chart-body">

        <!-- KPI cards -->
        <div class="chart-kpis">
          <div class="kpi-card kpi-crit">
            <div class="kpi-val">14</div>
            <div class="kpi-lbl">Pendências do Estoquei priorizadas</div>
          </div>
          <div class="kpi-card kpi-warn">
            <div class="kpi-val">1</div>
            <div class="kpi-lbl">Compradora cobrindo 42 fornecedores</div>
          </div>
          <div class="kpi-card kpi-mid">
            <div class="kpi-val">2-3h</div>
            <div class="kpi-lbl">Por pedido manual à Medtronic</div>
          </div>
          <div class="kpi-card kpi-high">
            <div class="kpi-val">1 a 5m</div>
            <div class="kpi-lbl">Sem inventário na base Cirúrgica</div>
          </div>
        </div>


    <div class="sec-t">Principais Achados por Setor</div>
    <div class="achados-grid">${achadosHtml}</div>

    <div class="next-block">
      <div>
        <div class="next-label">Próximo passo — TECNASA</div>
        <div class="next-title">Sanear a base e corrigir o Estoquei antes de automatizar</div>
        <div class="next-desc">
          As automações do plano só entregam valor sobre dados confiáveis. A sequência recomendada
          parte do inventário consolidado das bases Safety Cirúrgica e Safety Log e da correção das
          falhas críticas do Estoquei (baixa parcial e vínculo de representante), passa pela transição
          planejada de Wilton para Compras, e então executa o plano de ação por fases — priorizando os
          gargalos que travam faturamento, comissão e sugestão de compra.
        </div>
      </div>
      <div class="next-steps">
        <div class="next-step"><div class="next-step-n">01</div><div class="next-step-t">Inventariar e conciliar as bases Cirúrgica × Log</div></div>
        <div class="next-step"><div class="next-step-n">02</div><div class="next-step-t">Corrigir baixa parcial e vínculo de representante</div></div>
        <div class="next-step"><div class="next-step-n">03</div><div class="next-step-t">Planejar a transição de Wilton para Compras</div></div>
        <div class="next-step"><div class="next-step-n">04</div><div class="next-step-t">Executar o plano de ação por fases</div></div>
      </div>
    </div>
  </div>`);

/* ══════════════════════════════════════════════════
   NAVEGAÇÃO
══════════════════════════════════════════════════ */
window.showCadeia = function (btn) {
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sector-page').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sp-cadeia').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.gotoDiag = function (btn) {
  document.querySelectorAll('.snav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.sector-page').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('sp-diag').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* Botão do header também chama gotoDiag */
window.gotoDiagHeader = function () {
  const navBtn = document.getElementById('btn-nav-diag');
  gotoDiag(navBtn);
};

/* ══════════════════════════════════════════════════
   MODAL + INIT
══════════════════════════════════════════════════ */
function openModal() { const mo = document.getElementById('mo'); if (mo) mo.classList.add('open'); }
function closeModal() { const mo = document.getElementById('mo'); if (mo) mo.classList.remove('open'); }

document.addEventListener('DOMContentLoaded', () => {
  const mo = document.getElementById('mo');
  if (mo) {
    mo.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal();
    });
  }

  /* Preenche a data de geração no rodapé */
  const gd = document.getElementById('gen-date');
  if (gd) {
    const now = new Date();
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    gd.textContent = `Gerado em ${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;
  }
});