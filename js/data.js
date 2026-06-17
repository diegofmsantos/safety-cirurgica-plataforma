/* ═══════════════════════════════════════════════════════════════
   DADOS REAIS — SAFETY CIRÚRGICA (OPME / DISTRIBUIÇÃO MÉDICA)
   Benchmark processo a processo por setor
   Fonte: 12 transcrições de entrevistas com gestores (mai–jun/2026)
   Consultoria: TECNASA
═══════════════════════════════════════════════════════════════ */

const SETORES = [

/* ══════════ 1. COORDENAÇÃO COMERCIAL (BACKOFFICE) ══════════ */
{
  id: 'backoffice', nome: 'Coord. Comercial (Backoffice)',
  responsavel: 'Gislaine (Linha Geral / Cabeça-Pescoço) + Glaucia (sucessora de Adriana — Linha Abbott / Cardiologia) | Analice (Licitação compartilhada)',
  sistemas: [
    { n: 'Estoquei (ERP)',        e: 'lim' },
    { n: 'Planilhas Excel',       e: 'lim' },
    { n: 'Portais hospitalares',  e: 'lim' },
    { n: 'WhatsApp + E-mail',     e: 'lim' }
  ],
  processos: [
    {
      nome: 'Gestão de consignados e controle de uso',
      pbf: 'Hospitais enviam arquivos (planilhas ou fotos) com uso de todos os fornecedores misturados. A coordenação filtra manualmente os itens da Safety, alimenta planilha Excel com paciente, material, lote, data, medida e médico. Linha Abbott: 90% consignado. Aprendiz executa parte da alimentação.',
      gap: 'Processo 100% manual e passível de erro humano. Arquivo com 80 páginas de usos de outros fornecedores já consumiu um dia de trabalho de uma assistente sem encontrar nenhum item da Safety. Material vencido em clientes sem ação de remanejamento.',
      mkt: 'Sistema lê automaticamente os arquivos de uso enviados pelos hospitais e filtra os itens do distribuidor. Saldo do consignado atualizado em tempo real. Alerta automático de material próximo ao vencimento com sugestão de remanejamento.',
      crit: 'alta'
    },
    {
      nome: 'Faturamento: gestão de pendências vs. faturamento imediato',
      pbf: 'Dois fluxos paralelos sem integração: faturamento imediato (uso recebido → fatura na hora) e pendências (entra em planilha Excel, aguarda condições). A coordenação controla tudo em planilha única que existe "desde o começo da empresa". Dentro do expediente, nota fiscal é entregue fisicamente na logística; fora do expediente, é enviada por e-mail.',
      gap: 'Planilha de pendências nunca tem itens excluídos — só inseridos e atualizados. Risco crescente de erro com o volume. Falta de sistema integrado obriga dupla verificação manual. A logística frequentemente não encontra produtos que constam no sistema — produto "cai no lote errado".',
      mkt: 'ERP registra os dois fluxos em tela unificada. Faturamento imediato gera NF automaticamente ao receber o uso. Pendências têm status visual (aguardando uso / aguardando lote / autorizado / faturado). NF transmitida digitalmente à logística sem necessidade de entrega física.',
      crit: 'alta'
    },
    {
      nome: 'Cotação pré e pós-uso nos portais hospitalares',
      pbf: 'Cotação pré (orçamento antes do procedimento) e pós (após o uso, com material real utilizado) são feitas via portais (Reviot, portal do Português, etc.). O sistema Estoquei não inclui o lote no campo de cotação pós — só tem o pré. Clientes exigem lote + ficha de sala no pós. Solução paliativa: cotação em Excel enviada por e-mail.',
      gap: 'Clientes estão retendo pagamentos por não aceitar cotação pós sem lote. "Teve cliente que não quis considerar a cotação pós da gente." Ricardo e Edilma proíbem o envio de cotação em Excel, preferindo o modelo do sistema — que não tem o lote. Impasse paralisante.',
      mkt: 'Sistema emite cotação pós com campo obrigatório de lote e evidência de uso (ficha de sala). Integração direta com portais hospitalares. Validação automática do formato exigido por cada portal antes do envio.',
      crit: 'alta'
    },
    {
      nome: 'Resolução de divergências logísticas de lote',
      pbf: 'Pedido lançado no Estoquei com saldo disponível no sistema, mas a logística não encontra o produto fisicamente. Coordenação desce fisicamente para a logística resolver. Paulo (diretoria) autoriza "outras entradas" no sistema para que o faturamento ocorra. Processo acontece com frequência às 18h–19h, exigindo que a coordenação trabalhe fora do horário.',
      gap: 'Pedido de R$ 87.200 lançado às 10h, criticado às 19h. Coordenação sem tempo hábil para resolver dentro do expediente. Sem comunicação automática entre estoque e logística, o erro só é descoberto na separação física. Retrabalho diário que paralisa o faturamento.',
      mkt: 'Sistema valida saldo físico no momento do lançamento do pedido. Alerta imediato de divergência entre saldo sistêmico e inventário físico. Logística recebe ordem de separação com localização de lote. Coordenação não é acionada para resolver o que é problema operacional da logística.',
      crit: 'alta'
    },
    {
      nome: 'Sugestão comercial para compras da linha Abbott',
      pbf: 'Fluxo de 3 etapas manuais: (1) Daniela (Compras) manda sugestão bruta → (2) Adriana/Glaucia atualiza com usos do dia anterior e manda de volta → (3) Daniela deduz consignados e emite pedido. Coordenação ainda adiciona uma terceira coluna de "sugestão comercial" com média ponderada dos últimos 6 meses por medida (balão e stent).',
      gap: 'Sem comitê formal de compras: material parado há 90+ dias em clientes sem consumo continua sendo comprado. Representante que deveria sugerir o remanejamento não o faz. Já houve caso de precisar ir a Natal retirar 4 balões de um cliente para fechar um pedido de R$ 200k de outro.',
      mkt: 'Módulo de gestão de consignados alimenta automaticamente a sugestão de compra, deduzindo o que está em campo. Comitê de compras mensal com dashboard de giro por cliente e representante. Remanejamento é proposta sistêmica antes de qualquer novo pedido ao fornecedor.',
      crit: 'alta'
    },
    {
      nome: 'Comunicação dupla WhatsApp + E-mail',
      pbf: 'Ricardo exige que tudo seja colocado nos grupos de WhatsApp. A coordenação também usa e-mail para o mesmo assunto. Resultado: cada cotação, cada uso recebido, cada planilha é enviada e respondida nos dois canais. "A gente manda no WhatsApp e no e-mail. A gente tem que responder nos dois."',
      gap: 'Retrabalho diário de duplicação. Informações se perdem no histórico do WhatsApp. Planilha de pendências é enviada por e-mail, mas gerentes também pedem por WhatsApp. Sem canal único, auditar o que foi ou não comunicado é impossível.',
      mkt: 'Canal único de comunicação operacional (e-mail ou plataforma integrada). WhatsApp restrito a urgências com protocolo definido. Planilhas e cotações acessíveis via sistema, sem necessidade de envio ativo.',
      crit: 'media'
    }
  ],
  impactos: [
    { ic: '🗂️', t: 'Backoffice é o gargalo central da operação', b: 'Segundo Gislaine, <strong>70% ou mais das demandas da empresa chegam primeiro ao backoffice</strong>. Sem a coordenação operando, o faturamento para. A saída de Adriana representa risco real de perda de conhecimento crítico não documentado.' },
    { ic: '⏰', t: 'Trabalho fora de horário como rotina', b: 'Divergências logísticas de lote são descobertas às 18h–19h. A coordenação trabalha fora do expediente para destravar pedidos. <strong>Pico de crise operacional diária no final do dia</strong> — não como exceção, mas como rotina.' },
    { ic: '📋', t: 'Conhecimento crítico concentrado em uma pessoa', b: 'Adriana conhecia as particularidades de todos os clientes, medidas, prazos e regras de faturamento. <strong>Essa inteligência existia na cabeça dela, não no sistema.</strong> Transição sem documentação = risco de ruptura de relacionamento com clientes.' }
  ]
},

/* ══════════ 2. GESTÃO COMERCIAL (GERÊNCIA) ══════════ */
{
  id: 'comerc', nome: 'Gestão Comercial',
  responsavel: 'Ricardo (Gerente Comercial) + Edilma (Gerente Comercial) + Lauro (Gerente Comercial) | Representantes PJ externos por região',
  sistemas: [
    { n: 'Estoquei (ERP)',     e: 'lim' },
    { n: 'WhatsApp (grupos)',  e: 'lim' },
    { n: 'CRM',               e: 'aus' },
    { n: 'Dashboard de metas',e: 'aus' }
  ],
  processos: [
    {
      nome: 'Gestão e acompanhamento de representantes',
      pbf: 'Representantes são PJ externos. Gerentes acompanham por WhatsApp e ligações informais. Não existe carteira de clientes formalizada por representante. Gestores não sabem quais clientes estão inativos. Ricardo criou planilha de mapeamento de contatos (médicos, enfermeiros, financeiro por cliente), mas "ninguém faz".',
      gap: 'Sem CRM, sem carteira definida, sem indicador de positivação. Gerentes não sabem o que o representante fez ou deixou de fazer. "A gente é tratado como CLT e não ganha como CLT" — falta de clareza sobre responsabilidades e métricas gera conflito constante.',
      mkt: 'CRM com carteira definida por representante e região. Mapa de relacionamentos (médico, enfermeiro, compras) atualizado pelo próprio representante. Relatório semanal de positivação e visitas. Gerente acompanha painel — não liga para saber o que foi feito.',
      crit: 'alta'
    },
    {
      nome: 'Alinhamento entre gerência e coordenação interna',
      pbf: 'Adriana respondia diretamente a Túlio, não à gerência comercial. Processos de negociação, definição de produto e consignação eram iniciados pelos representantes com a coordenação, sem passar pelos gerentes. "Ela simplesmente, sem falar nada com a gente, vai lá e faz." Gerentes ficavam sabendo das negociações quando já estavam concluídas.',
      gap: 'Falha organizacional reconhecida por Ricardo e Edilma como grave. Gerentes sem poder sobre a coordenação interna. Decisões de produto e preço tomadas sem alinhamento comercial. Sem integração, o planejamento de vendas é impossível.',
      mkt: 'Hierarquia clara com reunião de alinhamento semanal entre gerência e coordenação. Toda negociação nova segue fluxo: representante → gerente → coordenação → Túlio (quando necessário). Plano de ataque por cliente compartilhado entre os três elos.',
      crit: 'alta'
    },
    {
      nome: 'Acompanhamento de inadimplência pelos gerentes',
      pbf: 'Financeiro (Alan) envia relatório de inadimplência por e-mail. Gerentes têm acesso ao sistema mas raramente atuam. O financeiro é responsável por 95% do retorno das cobranças — praticamente sozinho. "Falta empenho e engajamento por parte do time comercial e dos gerentes para pressionar os representantes."',
      gap: 'Sem processo formal de cobrança pelo comercial, a inadimplência fica refém do financeiro. Representante PJ sem compromisso de cobrança. Gerente não vê como sua responsabilidade. Resultado: dívidas que se acumulam até o financeiro ter que escalar para Túlio.',
      mkt: 'Gerentes acompanham painel de inadimplência por representante no início de cada semana. Fluxo de cobrança com responsabilidade definida: representante → gerente → financeiro → Túlio. SLA de cobrança com prazo máximo de X dias por faixa de atraso.',
      crit: 'alta'
    },
    {
      nome: 'Gestão de consignado parado e remanejamento',
      pbf: 'Representantes não realizam contagem de estoque consignado de forma proativa. Coordenação prepara planilha com estoque atualizado (saldo deduzido de usos pendentes) e envia ao representante antes da visita. Na chegada ao cliente, o representante encontra produtos que não estão na planilha por falha de registro. Materiais com 90+ dias sem giro não são retirados.',
      gap: 'Ricardo já foi pressionado por Adriana para autorizar retiradas — e negou. Material vencido em clientes é o resultado. Já houve caso de precisar viajar a Natal para retirar 4 balões de um cliente para destravar um pedido de R$ 200k. "A conta, conta, reconta, vence. Ninguém toma decisão de nada."',
      mkt: 'Painel de giro de consignados com semáforo por cliente e representante. Material acima de 60 dias sem uso gera alerta automático ao gerente. Aprovação de remanejamento via sistema, rastreável, sem dependência de WhatsApp ou ligação.',
      crit: 'alta'
    },
    {
      nome: 'Metas, comissionamento e performance de representantes',
      pbf: 'Metas existem (Túlio tem projeção de faturamento) mas não estão formalizadas por representante. Comissões são calculadas pelo financeiro com base no relatório de vendas enviado pela coordenação — processo sujeito a erros de atribuição de nota por representante. Representantes PJ não têm clareza sobre performance individual.',
      gap: '"Tem nota que sai com nome errado de representante." Financeiro não confia no relatório do sistema para comissionar. Representantes descobrem comissão só no dia do pagamento. Sem meta visível, não há senso de urgência. "Eles são completamente despreocupados com o resultado."',
      mkt: 'Dashboard de metas com realizado vs. planejado em tempo real por representante. Regras de comissão parametrizadas no sistema — resultado calculado automaticamente com base no faturamento baixado (recebido). Representante acompanha própria evolução sem precisar perguntar.',
      crit: 'alta'
    },
    {
      nome: 'Ritos de gestão comercial',
      pbf: 'Não existia rotina formal de reunião entre gerência e coordenação. Primeiro rito está sendo implementado pela TECNASA: reunião semanal/quinzenal de resultados entre Túlio, gerentes e coordenação. Até o início da consultoria, Ricardo e Edilma nunca tinham tido reunião de alinhamento entre eles com frequência definida.',
      gap: 'Edilma chegou a marcar reunião de alinhamento bilateral com Ricardo duas vezes — ele cancelou as duas. Sem rito, cada gerente trabalha em silo. Decisões que deveriam ser coletivas são tomadas individualmente ou chegam direto a Túlio.',
      mkt: 'Cadência de ritos estabelecida: reunião semanal de resultados (Túlio + gerentes, 20–30 min) + one-on-one quinzenal por gerente + reunião mensal de time completo com representantes de Recife. Pautas pré-definidas com template.',
      crit: 'media'
    }
  ],
  impactos: [
    { ic: '🔗', t: 'Gerência e coordenação operam em silos opostos', b: 'A coordenação interna (backoffice) reportava diretamente a Túlio — não aos gerentes. <strong>Processos críticos de negociação, consignação e produto eram decididos sem a gerência comercial.</strong> Silo estrutural que compromete qualquer planejamento de vendas.' },
    { ic: '📉', t: 'Inadimplência sem dono no comercial', b: 'O financeiro assume sozinho 95% do esforço de cobrança. <strong>Gerentes e representantes não se engajam.</strong> Sem responsabilidade clara no comercial, a inadimplência cresce sem contrapeso.' },
    { ic: '🎯', t: 'Representantes sem meta visível e comissão com erro', b: 'Sem dashboard de metas e com comissão calculada manualmente (com risco de erro de atribuição), <strong>representantes não têm referência de performance.</strong> Resultado: desmotivação e ausência de urgência para fechar negócios.' }
  ]
},

/* ══════════ 3. COMPRAS ══════════ */
{
  id: 'compras', nome: 'Compras',
  responsavel: 'Daniela (compradora — sozinha após saída de assistente) | 34 fornecedores nacionais + 2 internacionais (China)',
  sistemas: [
    { n: 'Estoquei (ERP)',      e: 'lim' },
    { n: 'Planilhas Excel',     e: 'lim' },
    { n: 'Templates de fornecedores', e: 'lim' },
    { n: 'Portal de cotação',   e: 'aus' }
  ],
  processos: [
    {
      nome: 'Sugestão e planejamento de compras',
      pbf: 'Daniela puxa relatório do Estoquei, exporta para Excel e monta manualmente a sugestão de compra (média de vendas + estoque atual + cobertura desejada de 60–90 dias). Sistema não entrega média confiável nem sugestão automática. Linha Abbott exige triângulo manual com a coordenação comercial. Linha Medtronic: template proprietário com 300+ itens, preenchido em 2–3 horas.',
      gap: 'Sistema não tem parâmetros configuráveis (estoque mínimo, ponto de pedido, cobertura por SKU). Média calculada inclui dados de consignado na rua como se fossem vendas — distorce a sugestão. "Toda essa base de planilha falha muito nessa falta de informação."',
      mkt: 'ERP com parâmetros de estoque mínimo, ponto de pedido e cobertura-alvo por SKU. Sugestão de compra gerada automaticamente, deduzindo consignado em campo. Comprador valida exceções e sazonalidades — não alimenta planilha.',
      crit: 'alta'
    },
    {
      nome: 'Emissão e envio de pedidos de compra',
      pbf: 'Daniela monta sugestão no Excel, converte para o template do fornecedor (cada um tem o seu), lança manualmente e envia. Processo leva 2–3 horas só para a Medtronic. Não existe portal unificado de pedidos. Para fornecedores menores, o pedido vai por e-mail sem rastreabilidade.',
      gap: 'Sem portabilidade entre sistema e templates de fornecedores. Cada pedido é uma operação manual de copiar-colar entre planilhas. Daniela sozinha gerencia 34 fornecedores nacionais e 2 internacionais — sem assistente desde a saída recente.',
      mkt: 'Sistema integra com portais de fornecedores (EDI ou API). Pedido gerado no ERP é transmitido diretamente ao fornecedor. Histórico de pedidos, entregas e desvios registrado automaticamente. Comprador foca em negociação, não em digitação.',
      crit: 'alta'
    },
    {
      nome: 'Controle de consignado em campo e visibilidade de estoque real',
      pbf: 'Daniela não tem visibilidade sistêmica do que está consignado nos clientes. Só consegue dados via planilha da coordenação comercial — atualizada manualmente e "passiva a erro humano". Sem essa informação, compras para 60–90 dias pode ser compra desnecessária se há estoque parado em campo.',
      gap: '70% do faturamento é OPME (consignado). Daniela compra sem saber o que está na rua. "Mandamos 300k para um cliente, ele consumiu 50k. Significa que tenho meses de estoque nesse cliente. Esse dado eu não tenho do Estoquei." Risco de superpedido e capital empatado em campo.',
      mkt: 'ERP consolida estoque em depósito + estoque consignado em campo por cliente. Sugestão de compra deduz automaticamente o que está em campo. Visão real de cobertura por linha e por produto disponível a qualquer momento.',
      crit: 'alta'
    },
    {
      nome: 'Aprovação de pedidos de compra',
      pbf: 'Todos os pedidos passam por Túlio para aprovação — independente do valor. Daniela negocia preço e prazo, monta o pedido "mastigado" e envia para Túlio. Ele aprova ou solicita ajustes. Em viagens ou feiras do setor, Túlio fecha pedidos direto com fornecedores sem avisar Daniela.',
      gap: 'Sem alçada de aprovação por valor, qualquer compra — por menor que seja — aguarda Túlio. Em dias de ausência, os pedidos param. Pedidos fechados por Túlio em feiras chegam como surpresa para compras, sem planejamento de recebimento e estoque.',
      mkt: 'Política de alçada documentada: Daniela aprova até R$ X por pedido/fornecedor. Acima disso, fluxo de aprovação digital para Túlio com SLA de resposta de X horas. Pedidos de feiras registrados no sistema imediatamente pelo responsável comercial.',
      crit: 'media'
    },
    {
      nome: 'Devolução a fornecedor e gestão de faturamento de entrada',
      pbf: 'Daniela também é responsável por devolução de mercadoria avariada, faturamento de devolução e cobrança ao fornecedor. Processo de faturamento de entrada tem problemas fiscais frequentes (CFOP, tributação) que param o processo por dias até Paulo (diretoria/TI) resolver. "Chego a ficar semanas para faturar."',
      gap: 'Sem responsável interno de faturamento fiscal. Daniela não tem formação fiscal e fica travada em problemas de parametrização. Paulo, que deveria estar na estratégia, vira suporte fiscal operacional. Processo de devolução sem fluxo definido gera comunicação falha com o financeiro.',
      mkt: 'Parametrização fiscal de cada SKU validada no ERP (CFOP, CST, NCM, alíquotas). Devolução a fornecedor gera automaticamente NF de retorno e notifica o financeiro para encontro de contas. Comprador executa — não investiga tributação.',
      crit: 'alta'
    }
  ],
  impactos: [
    { ic: '🔢', t: '34 fornecedores geridos por uma pessoa só', b: 'Com a saída do assistente, <strong>Daniela gerencia sozinha 34 fornecedores nacionais e 2 internacionais</strong>, monta pedidos manualmente em templates distintos e ainda cuida de devoluções — sem portal, sem automação, sem suporte.' },
    { ic: '📦', t: 'Compra sem visibilidade do estoque em campo', b: '70% do faturamento da Safety é consignado. <strong>Daniela compra sem saber o que está na rua.</strong> "Mandamos 300k, o cliente consumiu 50k." Capital empatado em consignados sem giro — enquanto se compra mais do mesmo produto.' },
    { ic: '⏳', t: 'Semanas para faturar uma nota de entrada', b: 'Problemas de parametrização fiscal travam notas de entrada por dias ou semanas. <strong>Paulo (sócio / diretoria) vira suporte fiscal de compras.</strong> Sem processo, cada nota com problema vira um projeto paralelo.' }
  ]
},

/* ══════════ 4. FINANCEIRO ══════════ */
{
  id: 'financ', nome: 'Financeiro',
  responsavel: 'Shirleane (Analista — contas a pagar, comissões, RH informal, conciliação) + Alan (Assistente — contas a receber, inadimplência, viagens) + Vitória (Menor aprendiz)',
  sistemas: [
    { n: 'Estoquei (ERP)',       e: 'lim' },
    { n: 'Planilhas Excel',      e: 'lim' },
    { n: 'Empresa Meta (fiscal/DP)', e: 'lim' },
    { n: 'API bancária',         e: 'aus' }
  ],
  processos: [
    {
      nome: 'Cobrança de inadimplência',
      pbf: 'Alan envia relatório de inadimplência por e-mail aos gerentes e cobra diariamente os representantes (por e-mail e ligação). O financeiro é responsável por 95% do esforço de cobrança. Gerentes não se engajam. Shirleane faz contato com clientes diretos. Antes de cobrar, sempre verifica com o backoffice se a nota não foi cancelada ou devolvida sem comunicação.',
      gap: 'Gerentes e representantes não têm processo de cobrança formal. Financeiro assume função que deveria ser do comercial. Notas canceladas sem comunicação ao financeiro geram cobranças indevidas e desgaste com clientes. Representantes difíceis de localizar por telefone.',
      mkt: 'CRM integrado com financeiro: inadimplência aparece automaticamente no painel do gerente e do representante. Fluxo de cobrança com responsabilidade definida por faixa de atraso (1–15 dias: representante; 15–30 dias: gerente; 30+: financeiro + Túlio). Histórico de contatos registrado no sistema.',
      crit: 'alta'
    },
    {
      nome: 'Cálculo e fechamento de comissões',
      pbf: 'Todo dia 10, Shirleane recebe o relatório de vendas da coordenação comercial e cruza com o relatório do Estoquei por representante. Problema: o sistema registra notas com nome errado de representante. A coordenação manda a relação correta — mas diverge do sistema. Shirleane fica no meio dos dois, sem poder confiar em nenhuma fonte isolada.',
      gap: '"Tem nota que sai com nome errado de representante." Shirleane não confia no relatório do sistema para comissionar sozinha — precisa sempre se alinhar com a coordenação. Processo manual, sujeito a erro e a contestação pelo representante no dia do pagamento.',
      mkt: 'Atribuição de representante feita no momento do lançamento da venda, com campo obrigatório e não editável após faturamento. Comissão calculada automaticamente pelo sistema com regra parametrizada por representante. Relatório validado uma vez por mês — não reconstruído.',
      crit: 'alta'
    },
    {
      nome: 'Contas a pagar e fluxo de aprovação',
      pbf: 'Shirleane monta relatório de contas a pagar no Estoquei, submete a Túlio para aprovação, Túlio autoriza, Shirleane executa o pagamento banco a banco. Todas as contas passam por Túlio, sem alçada. Urgências quebram o fluxo toda semana. Pagamentos que não são de fornecedores (consumo interno, fardamento, etc.) são lançados manualmente.',
      gap: 'Sem alçada de valor, qualquer pagamento — inclusive pequenos — aguarda Túlio. Em dias de ausência de Túlio (viagens, feiras), pagamentos param. Fornecedores cobram Daniela por notas vencidas que ainda aguardam aprovação no ciclo financeiro.',
      mkt: 'Política de alçada: Shirleane aprova pagamentos até R$ X sem necessidade de aprovação. Acima disso, aprovação digital de Túlio com SLA de resposta. Pagamentos em lote programados semanalmente — não executados um a um banco a banco.',
      crit: 'alta'
    },
    {
      nome: 'Gestão de viagens e despesas de representantes',
      pbf: 'Alan coteja passagens, hospedagem e locação de carros para representantes. Problema recorrente: representantes solicitam viagem em cima da hora, obrigando compras a preços elevados. Existe política de despesas, mas representantes ultrapassam os limites. Cada exceção vai para Túlio decidir.',
      gap: 'Solicitação de última hora é regra, não exceção. Custo de viagem elevado sem controle sistêmico. Política não é cumprida espontaneamente. Alan resolve caso a caso sem suporte de ferramenta de gestão de despesas.',
      mkt: 'Plataforma de gestão de viagens com SLA de solicitação mínima (ex: 72h antes). Política de despesas parametrizada com limites por categoria. Acima do limite, aprovação digital automática vai para Túlio. Relatório mensal de gastos por representante e por região.',
      crit: 'media'
    },
    {
      nome: 'Relatórios financeiros e indicadores',
      pbf: 'Shirleane monta planilha de contas a pagar e a receber manualmente. Relatórios do Estoquei têm inconsistências (pendentes e baixados misturados). Não existe DRE gerencial. Fluxo de caixa projetado é feito pela Shirleane informalmente. Indicador de inadimplência não é extraído do sistema — é construído em planilha.',
      gap: 'Túlio toma decisões financeiras sem base consolidada confiável. Provisionamento do mês seguinte (pedido por Túlio todo dia 27–28) é feito manualmente às pressas. "O relatório do sistema vai murchar" — dito pela própria Shirleane sobre a confiabilidade dos dados.',
      mkt: 'DRE gerencial e fluxo de caixa projetado extraídos automaticamente do ERP. Painel de inadimplência por faixa de atraso atualizado em tempo real. Provisionamento automático baseado em histórico de recebimento. Shirleane analisa — não constrói planilha.',
      crit: 'alta'
    },
    {
      nome: 'RH informal e DP paralelo',
      pbf: 'Shirleane acumula funções informais de RH: controla férias em planilha, valida atestados, solicita documentação de contratação (PJ e CLT), confere folha de pagamento, compra fardamento e crachá. DP é terceirizado para empresa externa (comunicação por Telegram). Sem RH interno, Shirleane é o ponto de contato de todos.',
      gap: 'Shirleane perde tempo significativo com atividades que não são do escopo financeiro. Controle de férias é informal ("entrego na mão de Deus"). Um colaborador conseguiu tirar 40 dias de férias aproveitando brecha no controle. Sem RH, processos de contratação e desligamento são lentos e reativos.',
      mkt: 'HRIS (sistema de RH) básico para controle de férias, atestados e jornada. DP terceirizado com portal de integração — não por Telegram. Shirleane executa apenas aprovação de folha, não a gestão de todo o ciclo de RH.',
      crit: 'media'
    }
  ],
  impactos: [
    { ic: '💸', t: 'Financeiro assume 95% da cobrança sozinho', b: 'Alan e Shirleane cobram clientes inadimplentes sem apoio efetivo do comercial. <strong>Gerentes não se engajam.</strong> O financeiro vira atendimento de cobrança — função que deveria ser liderada pelo representante e gerente que fizeram a venda.' },
    { ic: '📊', t: 'Comissão calculada sem fonte confiável', b: 'Sistema registra notas com representante errado. Relatório da coordenação diverge do sistema. <strong>Shirleane comissiona no cruzamento manual dos dois</strong> — sujeito a erro todo mês e a contestação no dia do pagamento.' },
    { ic: '🧾', t: 'Shirleane faz financeiro, RH e suporte ao DP', b: 'Além de contas a pagar, conciliação e comissões, Shirleane controla férias, valida atestados, compra fardamento e se comunica com o DP via Telegram. <strong>Acúmulo de funções incompatível com o volume da empresa.</strong>' }
  ]
},

/* ══════════ 5. SUPERVISÃO ADM / VENDAS INTERNAS ══════════ */
{
  id: 'adm', nome: 'Sup. ADM / Vendas Internas',
  responsavel: 'Robson (Supervisor ADM — na prática: importação + vendas internas + suporte a cotações) | Analice (Licitação — reporta a Gislaine)',
  sistemas: [
    { n: 'Estoquei (ERP)',     e: 'lim' },
    { n: 'Portais (Bionex, Síntese)', e: 'lim' },
    { n: 'E-mail / WhatsApp', e: 'lim' },
    { n: 'Sistema de importação', e: 'aus' }
  ],
  processos: [
    {
      nome: 'Importação da linha Domo Dynamica',
      pbf: 'Robson lidera as importações da linha própria (Leopold Metal, Yankee e Bros Metal). Em 2024 realizou 3 importações; em 2026 ainda não havia realizado nenhuma. Processo completo da importação (compra internacional, entrada fiscal, venda) está concentrado em Robson sem documentação de procedimento.',
      gap: 'Linha de importação ociosa em 2026. Processo de importação sem documentação — se Robson sair, o conhecimento vai junto. Sem parametrização fiscal de produtos importados, cada entrada gera dúvida tributária.',
      mkt: 'Procedimento de importação documentado (POP): etapas, responsáveis, prazos, documentos e validações fiscais. Planejamento anual de importações alinhado com compras e comercial. Processo executável por mais de uma pessoa.',
      crit: 'media'
    },
    {
      nome: 'Vendas internas e atendimento a portais (Bionex, Síntese)',
      pbf: 'Robson atende portais de venda direta (Bionex, Síntese) e apoia cotações internas. Na prática, funciona como vendedor interno do portfólio completo da Safety — embora o título seja de Supervisor ADM. Não trabalha com consignado. 90% da receita de Robson vem de acessórios de cardiologia.',
      gap: 'Cargo de Supervisor ADM sem liderados — a função real é de vendedor interno. Falta de clareza sobre o papel gera expectativa equivocada de "supervisão" que não existe. Robson tem tempo ocioso sem aproveitamento para suportar outros processos.',
      mkt: 'Cargo redefinido formalmente como Vendedor Interno / Especialista de Portais. Metas claras de faturamento por portal e por linha. Processo de atendimento de portais documentado e transferível. Eventuais horas ociosas utilizadas para suporte à coordenação em períodos críticos.',
      crit: 'baixa'
    },
    {
      nome: 'Licitação (Analice)',
      pbf: 'Analice opera licitações para todas as linhas, reportando primariamente a Gislaine (que implantou o processo). Participa de lances, orienta valores e processo. Para negociações de produto de linhas específicas, consulta a coordenadora da linha. Não tem estrutura de monitoramento automático de editais.',
      gap: 'Processo de licitação iniciado por Gislaine sem documentação formal transferível. Analice aprendeu "como era feito" sem POP escrito. Sem plataforma de monitoramento, editais são capturados reativamente. Risco de perda de oportunidades em estados fora do radar.',
      mkt: 'Plataforma de monitoramento de editais com filtro por produto e estado. Processo de licitação documentado passo a passo. Analice executa com autonomia, consultando coordenação apenas para definição de preço mínimo por produto e linha.',
      crit: 'media'
    },
    {
      nome: 'Gestão de comissionamento dos representantes externos (PMO)',
      pbf: 'Robson e Alan foram designados como PMO (gestores do processo de implementação da consultoria) pela TECNASA. Robson tem tempo disponível para absorver tarefas de suporte administrativo e de acompanhamento de processos.',
      gap: 'Papel de PMO não está claro para Robson nem para o time. Sem reunião regular de acompanhamento de implementação, os ritos comerciais implementados pela consultoria correm risco de não serem sustentados após o fim do contrato.',
      mkt: 'PMO com rotina quinzenal documentada: checklist de processos implementados, indicadores monitorados, escalada de problemas. Robson assume o papel de guardião dos processos internos enquanto a consultoria acompanha externamente.',
      crit: 'media'
    }
  ],
  impactos: [
    { ic: '🔀', t: 'Cargo de Supervisor sem equipe para supervisionar', b: 'Robson é Supervisor ADM sem liderados. Na prática é vendedor interno e responsável por importações. <strong>Cargo inadequado ao papel real</strong> — gera ambiguidade e impede que Robson seja aproveitado nos processos certos.' },
    { ic: '💤', t: 'Tempo ocioso de um colaborador qualificado', b: 'Tulio e Paulo reconhecem que Robson tem tempo ocioso. Ele tem histórico como gerente de suprimentos com equipe de 25 pessoas. <strong>Potencial subutilizado</strong> enquanto a empresa tem déficit de suporte operacional no backoffice e em compras.' },
    { ic: '📄', t: 'Licitação sem processo documentado',  b: 'Analice aprendeu o processo com Gislaine, sem POP escrito. <strong>Se Analice sair, a licitação para.</strong> Mesmo risco enfrentado com a saída de Adriana no backoffice — conhecimento concentrado em pessoa, não em processo.' }
  ]
}

]; // END SETORES
