/* ═══════════════════════════════════════════════════════════════
   DATA — SAFETY CIRÚRGICA
   Fonte: transcrições de entrevistas (mai–jul/2026) +
          validações AS-IS com Daniela (Compras), Shirleane e Alan
          (Financeiro) — jul/2026
   Consultoria: TECNASA
═══════════════════════════════════════════════════════════════ */

const CADEIA = [

  /* ════════════════════════════════════════
     1. COMERCIAL / COORDENAÇÃO
  ════════════════════════════════════════ */
  {
    id: 'coord', nome: 'Comercial / Coordenação', icon: '🏥',
    responsavel: 'Gislaine Ferreira (Coord.) + Glaucia Fischer (venda direta) · equipe: Maria Eduarda, Magda, Cláudia, Thays, Analice, Luana + técnicos',
    sistemas: [
      { n: 'Estoquei — remessa e emissão de NF', e: 'lim' },
      { n: 'Portais de OPME (Reviot, Bionexo, Inpart, Emparte, Apoio, Síntese)', e: 'lim' },
      { n: 'Planilha de agenda de cirurgias', e: 'lim' },
      { n: 'Controle de consignado por cliente', e: 'aus' },
      { n: 'Rastreabilidade de equipamentos e calibração', e: 'aus' },
      { n: 'WhatsApp (grupo operacional)', e: 'lim' }
    ],
    processos: [
      {
        num: '1.1', nome: 'Gestão de agenda e escala de cirurgias (Cabeça e Pescoço)',
        resp: 'Gislaine + equipe de coordenação',
        entrada: 'Solicitações de cirurgia por e-mail e WhatsApp; disponibilidade de técnicos, equipamentos e rota de deslocamento',
        saida: 'Remessa emitida no Estoquei, técnico e equipamento designados, agenda lançada em planilha e print disparado no grupo operacional',
        sistema: 'Estoquei (remessa) + planilha de agenda + WhatsApp — sem agenda cirúrgica integrada com status de pedido',
        obs: 'A comunicação depende de print no WhatsApp a cada atualização e de planilha de agenda paralela ao sistema — sem visibilidade única de status como em plataformas de OPME (ex: GTPlan).'
      },
      {
        num: '1.2', nome: 'Controle de consignados eletivos (vai e volta)',
        resp: 'Gislaine',
        entrada: 'Material temporário liberado para o procedimento; kits variáveis; autorização de convênio',
        saida: 'Retorno do material monitorado; sobras tratadas; NF pós-procedimento emitida; reposição avaliada e acionamento de Compras em ruptura',
        sistema: 'Estoquei — saldo consignado acompanhado manualmente; ponto cego no intervalo de devolução',
        obs: 'O sistema não distingue formalmente material temporário (vai e volta) de permanente. O ponto cego na devolução exige cruzamento manual entre saldo do sistema e físico.'
      },
      {
        num: '1.3', nome: 'Consignados permanentes — Cardiologia / Abbott (5 estados)',
        resp: 'Gislaine (herdou de Adriana em jun/2026)',
        entrada: 'Arquivos de uso enviados pelos hospitais (e-mail/portal, 60-80 páginas com múltiplos fornecedores); tabelas de preço pré-acordadas por convênio',
        saida: 'Uso amarrado ao paciente no Estoquei; cotação pré e pós lançada nos portais com lote inserido manualmente; NF emitida após autorização',
        sistema: 'Estoquei + portais — filtragem e amarração manual; lote inserido à mão em cada cotação pós',
        obs: 'Controles especiais por cliente (Português dia 10, Unimed Natal/Recife/Fortaleza com CNPJ duplo). Materiais vencidos no cliente dependem de decisão caso a caso da diretoria. Conhecimento herdado de Adriana ainda não formalizado em POP.'
      },
      {
        num: '1.4', nome: 'Controle de equipamentos e calibrações',
        resp: 'Gislaine',
        entrada: 'Movimentação de 30+ equipamentos e 60+ peças de mão em campo; datas de vencimento de calibração',
        saida: 'Localização atualizada em planilha própria; calibração acionada junto às empresas responsáveis',
        sistema: 'Planilha manual — sem alerta automático de vencimento e sem rastreabilidade sistêmica',
        obs: 'Risco de equipamento em campo com calibração vencida (questionamento de hospital). Sem protocolo digital de entrega/devolução, a localização depende do controle manual de Gislaine.'
      },
      {
        num: '1.5', nome: 'Supervisão de equipe e transição pós-saída de Adriana',
        resp: 'Gislaine + Glaucia',
        entrada: 'Saída de Adriana em 19/06/2026; redistribuição de escopo (consignado permanente → Gislaine; venda direta → Glaucia)',
        saida: 'Equipe de analistas e técnicos coordenada; consignado permanente absorvido por Gislaine — carga de trabalho real em redimensionamento',
        sistema: 'Estoquei + planilhas herdadas — conhecimento tácito de Adriana em processo de formalização',
        obs: 'A saída de Adriana concentrou o consignado permanente (linha mais crítica) em Gislaine sem que os processos estivessem documentados. Transição precisa de POPs e possível reforço de equipe.'
      }
    ]
  },

  /* ════════════════════════════════════════
     2. COMERCIAL / GERÊNCIA
  ════════════════════════════════════════ */
  {
    id: 'gerencia', nome: 'Comercial / Gerência', icon: '🤝',
    responsavel: 'Ricardo Ciarlini + Edilma Paes (gestão compartilhada Abbott/TAVI) · Lauro Ferreira · Roberto de Barros (Gerentes) + representantes PJ',
    sistemas: [
      { n: 'Estoquei — consulta e acompanhamento', e: 'lim' },
      { n: 'Planilha de mapeamento de clientes', e: 'lim' },
      { n: 'CRM / carteira parametrizada por representante', e: 'aus' },
      { n: 'Dashboard de indicadores comerciais', e: 'aus' },
      { n: 'Comissionamento automático', e: 'aus' }
    ],
    processos: [
      {
        num: '2.1', nome: 'Gestão técnica da linha Abbott — coronária (consignado)',
        resp: 'Ricardo',
        entrada: 'Demanda do médico na rua; produtos consignados (stents, balões); 90% do negócio Abbott em consignação',
        saida: 'Convencimento técnico conduzido; consignado e reposição geridos; contagem de estoque no hospital acompanhada',
        sistema: 'Estoquei + contato direto — rastreabilidade do consignado por contagem manual no hospital',
        obs: 'O sucesso comercial depende fortemente do convencimento humano individual e da contagem manual — risco de concentração de conhecimento crítico sem processo estruturado.'
      },
      {
        num: '2.2', nome: 'Gestão compartilhada de representantes (com Edilma)',
        resp: 'Ricardo + Edilma',
        entrada: 'Representantes PJ sem exclusividade contratual; alta rotatividade; planilha de mapeamento de clientes criada por Edilma',
        saida: 'Acompanhamento informal de campo; adesão dos representantes à planilha praticamente nula; metodologia de treinamento em 3 etapas aplicada quando há estabilidade',
        sistema: 'Planilha manual — sem CRM; carteiras sem definição formal',
        obs: 'Modelo de gestão compartilhada nasceu de conversa informal validada por Thulio, sem RACI. Já houve casos de representantes acionando Thulio diretamente, contornando ambos os gerentes.'
      },
      {
        num: '2.3', nome: 'Acompanhamento operacional (estoque e inadimplência)',
        resp: 'Edilma',
        entrada: 'Solicitações de envio de material dos representantes; relatório de inadimplência acessado diretamente',
        saida: 'Disponibilidade verificada manualmente a cada solicitação; inadimplência acompanhada e repassada ao financeiro; propostas encaminhadas ao backoffice',
        sistema: 'Estoquei — leitura manual de relatórios brutos, sem dashboard de indicadores',
        obs: 'Problema recorrente de demora (até 24h) na entrada de mercadoria recém-chegada no sistema. A gestora interpreta relatórios brutos sem ferramenta visual de apoio.'
      },
      {
        num: '2.4', nome: 'Ritos de gestão e hierarquia de decisão',
        resp: 'Ricardo + Edilma + Thulio',
        entrada: 'Necessidade de alinhamento estruturado; decisões de produto/qualidade tomadas historicamente pelo backoffice sem alinhar com a gerência',
        saida: 'Reunião quinzenal recém-implantada (sextas); reporte a Thulio em reunião própria; feedback individual aos representantes',
        sistema: 'Reuniões — sem dashboard de CRM que sustente a pauta com dados objetivos',
        obs: 'Falha de hierarquia de decisão entre backoffice e comercial (referência a Adriana) — risco de desalinhamento de autoridade perante o cliente. Cadência sem dado ainda depende de memória/planilha.'
      }
    ]
  },

  /* ════════════════════════════════════════
     3. COMPRAS
  ════════════════════════════════════════ */
  {
    id: 'compras', nome: 'Compras', icon: '📦',
    responsavel: 'Daniela Estelita (Supervisora de Compras — única) + Wilton (assume Compras em ago/2026) + Robson (importação / linha própria)',
    sistemas: [
      { n: 'Estoquei — relatório de análise de compra', e: 'lim' },
      { n: 'Excel — recálculo manual de sugestão', e: 'lim' },
      { n: 'Templates próprios de fornecedor (Medtronic/Abbott)', e: 'lim' },
      { n: 'Ponto de pedido / sugestão automática de compra', e: 'aus' },
      { n: 'Controle de consignado por cliente', e: 'aus' },
      { n: 'Base Safety Cirúrgica × base Safety Log (sincronizadas)', e: 'aus' }
    ],
    processos: [
      {
        num: '3.1', nome: 'Análise de estoque e sugestão de compra',
        resp: 'Daniela',
        entrada: 'Relatório de análise de compra do Estoquei (qualidade considerada baixa); histórico de vendas; política de cobertura por fornecedor',
        saida: 'Sugestão de compra recalculada manualmente em Excel (média 4-6 meses, cobertura em dias); programação semanal por grupo dos 42 fornecedores',
        sistema: 'Estoquei + Excel — campos nativos não confiáveis; recálculo manual por fornecedor',
        obs: 'Janela de 60-90 dias para a maioria; exceção contratual Medtronic (4-6 meses). 42 fornecedores no total — 35 principais + 7 de material de consumo (embalagens, etiquetas).'
      },
      {
        num: '3.2', nome: 'Pedido a fornecedores com template próprio',
        resp: 'Daniela',
        entrada: 'Necessidade de reposição; planilha de conversão código interno → código do fornecedor; template próprio Medtronic/Abbott',
        saida: 'Template preenchido manualmente (sellout, estoque, pedido, forecast) — revisão de 300+ itens, 2 a 3 horas por pedido; 2-3 pedidos/mês à Medtronic',
        sistema: 'Templates externos — sem integração ERP-fornecedor; preenchimento inteiramente manual',
        obs: 'Daniela já teve, em empresa anterior, integração que gerava o template a partir do sistema. Hoje o trabalho é basicamente manual — 2-3h por pedido só preenchendo formulário.'
      },
      {
        num: '3.3', nome: 'Negociação, cotação e aprovação',
        resp: 'Daniela → Thulio (aprova todos)',
        entrada: 'Ruptura ou reposição; fornecedores exclusivos e alternativos; campanhas, feiras e reajustes',
        saida: 'Preço, prazo e condições negociados individualmente; pedido "mastigado" encaminhado a Thulio para aprovação final',
        sistema: 'Estoquei + negociação direta — 100% dos pedidos passam por aprovação manual de Thulio, sem alçada por valor',
        obs: 'Negociação individual com cada fornecedor. A aprovação universal de Thulio, independente de valor ou recorrência, é gargalo — mercado usa alçadas automáticas para pedidos recorrentes.'
      },
      {
        num: '3.4', nome: 'Consignado Abbott e divergência de bases (Cirúrgica × Log)',
        resp: 'Daniela + Gislaine',
        entrada: 'Saldo em cliente no Estoquei (sem separar utilizado de disponível); saldo físico na base da Safety Log',
        saida: 'Sugestão de compra baseada no estoque disponível na empresa — aproximação imprecisa; pressão informal sobre representantes para redistribuir estoque parado',
        sistema: 'Estoquei — bases da Cirúrgica e da Log dessincronizadas; sem visão confiável de consumo real por cliente',
        obs: 'Divergência gritante confirmada na validação (ex: Cirúrgica via 0 unidades; Log tinha 16). Nunca houve inventário na base da Cirúrgica em 1 ano e 5 meses. É a prioridade zero: automatizar sobre dado errado gera compra errada.'
      },
      {
        num: '3.5', nome: 'Recebimento e entrada de mercadoria',
        resp: 'Daniela + Safety Log',
        entrada: 'Carga recebida pela logística (Safety Log); nota fiscal do fornecedor',
        saida: 'Entrada no sistema realizada — quando Daniela cobra ativamente; sem aviso automático de chegada',
        sistema: 'Estoquei + WhatsApp/telefone — sem protocolo de aviso de recebimento nem prazo de entrada',
        obs: 'A logística recebe carga e não avisa Compras. Sem Daniela "em cima", a entrada atrasa dias (caso real: nota do dia 22 só lançada por cobrança direta). Falta SLA de conferência e entrada.'
      }
    ]
  },

  /* ════════════════════════════════════════
     4. LOGÍSTICA E CAMPO
  ════════════════════════════════════════ */
  {
    id: 'logist', nome: 'Logística e Campo', icon: '🚚',
    responsavel: 'Safety Log (logística terceirizada) + Alexandre, Fernanda, Wellen (enfermeiros/técnicos) + freelancers Meta',
    sistemas: [
      { n: 'Base Safety Log (estoque físico e expedição)', e: 'lim' },
      { n: 'Estoquei — base Safety Cirúrgica', e: 'aus' },
      { n: 'Protocolo digital de entrega/devolução de equipamentos', e: 'aus' },
      { n: 'Aviso sistêmico de chegada de carga', e: 'aus' }
    ],
    processos: [
      {
        num: '4.1', nome: 'Recebimento físico e entrada de NF',
        resp: 'Safety Log',
        entrada: 'Carga do fornecedor com NF; pedido de compra correspondente',
        saida: 'Mercadoria recebida fisicamente; entrada no sistema realizada de forma reativa, dependente de cobrança de Compras',
        sistema: 'Base Safety Log — sem checagem de pedido na chegada, sem aviso automático a Compras',
        obs: 'A logística não avisa a chegada e não confere se há pedido no sistema. Sem prazo (SLA) de conferência e entrada, o material pode ficar dias sem lançamento.'
      },
      {
        num: '4.2', nome: 'Divergência entre base Cirúrgica e base Log',
        resp: 'Safety Log + Gislaine (único acesso ao sistema da Log)',
        entrada: 'Inventários realizados na base da Safety Log; movimentações de estoque',
        saida: 'Base da Log atualizada; base da Safety Cirúrgica permanece divergente — nunca conciliada',
        sistema: 'Base Safety Log ≠ Estoquei Cirúrgica — inventários não migram entre as bases',
        obs: 'Diferenças gritantes entre as duas bases (linha Abbott, grampeadores). Só Gislaine acessa o sistema da Log. Precisa de inventário consolidado nas duas bases.'
      },
      {
        num: '4.3', nome: 'Entrega e recolhimento de materiais e equipamentos',
        resp: 'Técnicos/enfermeiros (Alexandre, Fernanda, Wellen)',
        entrada: 'Materiais e equipamentos liberados para o procedimento; rota de deslocamento definida pela coordenação',
        saida: 'Material entregue e recolhido pós-cirurgia; deslocamento acumulado com o atendimento cirúrgico',
        sistema: 'Protocolo físico/WhatsApp — sem registro digital de entrega/devolução',
        obs: 'Técnicos acumulam o deslocamento de equipamentos com o atendimento (ex: retorno de Caruaru às 2h para cirurgia às 6h), comprometendo qualidade e segurança. Ponto cego de localização entre saída e retorno.'
      },
      {
        num: '4.4', nome: 'Atuação técnica em cirurgia e suporte ao hospital',
        resp: 'Enfermeiros/técnicos de campo',
        entrada: 'Agenda cirúrgica; equipamento e instrumental do procedimento',
        saida: 'Procedimento apoiado tecnicamente; suporte prestado ao hospital durante e após a cirurgia',
        sistema: 'Sem sistema dedicado — coordenação por WhatsApp e planilha',
        obs: 'Auxílios de combustível e alimentação (R$500 cada) estão defasados frente ao custo real de viagens ao interior de PE, RN e CE.'
      }
    ]
  },

  /* ════════════════════════════════════════
     5. SUPERVISÃO / VENDAS INTERNAS / LICITAÇÃO
  ════════════════════════════════════════ */
  {
    id: 'superv', nome: 'Supervisão / Vendas Internas / Licitação', icon: '🏛️',
    responsavel: 'Robson Joaquim (Supervisor de Vendas — sem liderados) + Analice Aucélia (licitação)',
    sistemas: [
      { n: 'Portais de cotação (Síntese, Bionexo, Apoio)', e: 'lim' },
      { n: 'Estoquei — faturamento da venda direta', e: 'lim' },
      { n: 'Força de Vendas / sugestão automática de recompra', e: 'aus' },
      { n: 'Indicadores de performance', e: 'aus' },
      { n: 'Processo de licitação documentado (POP)', e: 'aus' }
    ],
    processos: [
      {
        num: '5.1', nome: 'Vendas diretas — linha Hemodinâmica / acessórios',
        resp: 'Robson',
        entrada: 'Cotações nos portais Síntese, Bionexo e Apoio (monitoradas toda manhã); itens sem estoque',
        saida: 'Cotação respondida imediatamente no portal; venda faturada do início ao fim; venda externa com visita a clientes (assumida recentemente)',
        sistema: 'Portais + Estoquei — monitoramento manual diário, sem sugestão automática de recompra',
        obs: 'Modelo de recompra recorrente feito manualmente em cada portal. Ferramentas de Força de Vendas (Mercos, Bendito) sugeririam o próximo pedido automaticamente.'
      },
      {
        num: '5.2', nome: 'Compras e importação da linha própria',
        resp: 'Robson',
        entrada: 'Demanda da linha Leopold Medical / Yankee Bras Medical; necessidade de reposição rápida',
        saida: 'Importação internacional (3 no ano anterior, 0 no ano corrente) e compra nacional complementar; compra sob demanda ("chegou, saiu")',
        sistema: 'Estoquei + processo de importação próprio — com autonomia de aprovação para venda direta',
        obs: 'Acumula cotação, compra internacional, importação e venda simultaneamente. A própria empresa já cogitou separar Robson para focar exclusivamente em venda direta.'
      },
      {
        num: '5.3', nome: 'Licitação (conduzida por Analice)',
        resp: 'Analice + Robson',
        entrada: 'Editais captados; documentação exigida pelo órgão',
        saida: 'Proposta montada, disputa conduzida, documentação pós-ganho tratada e faturamento realizado',
        sistema: 'Portais públicos — processo implantado por Robson e executado por Analice, sem POP formal',
        obs: 'Processo funcional, mas concentrado no conhecimento de Analice e sem documentação — risco de dependência de pessoa.'
      },
      {
        num: '5.4', nome: 'Cargo de supervisor sem escopo definido',
        resp: 'Robson + Thulio',
        entrada: 'Cargo formal de Supervisor de Vendas sem liderados nem atribuições claras',
        saida: 'Atuação como vendedor interno, comprador e importador — potencial subutilizado; desejo explícito de ser cobrado por indicadores',
        sistema: 'Sem indicadores formais de performance',
        obs: 'Vácuo de escopo reconhecido por Thulio e Gislaine. Robson afirma gostar de indicadores e querer ser cobrado por eles — oportunidade clara de engajamento se implantados.'
      }
    ]
  },

  /* ════════════════════════════════════════
     6. FINANCEIRO
  ════════════════════════════════════════ */
  {
    id: 'fin', nome: 'Financeiro', icon: '💰',
    responsavel: 'Shirleane Araújo (Analista) + Alan Matheus (Auxiliar) + Meta Contábil (contábil, fiscal e DP — terceirizada)',
    sistemas: [
      { n: 'Estoquei — módulo financeiro', e: 'lim' },
      { n: 'Planilhas paralelas (conciliação e comissão)', e: 'lim' },
      { n: 'Baixa parcial no relatório diário', e: 'aus' },
      { n: 'Vínculo de representante na NF (persistência)', e: 'aus' },
      { n: 'Régua de cobrança automatizada', e: 'aus' },
      { n: 'V Expense — despesas de viagem', e: 'lim' }
    ],
    processos: [
      {
        num: '6.1', nome: 'Contas a pagar e conciliação bancária',
        resp: 'Shirleane',
        entrada: 'Títulos a pagar; despesas internas lançadas manualmente; extrato bancário diário',
        saida: 'Fluxo de caixa planejado; pagamento e baixa realizados; conciliação diária extrato × sistema × planilha',
        sistema: 'Estoquei + planilha — baixa parcial não reflete no relatório diário; controle paralelo obrigatório',
        obs: 'Falha de baixa parcial. Workaround em uso: compensações de notas duplicadas lançadas com data de sábado/domingo para não sujar o relatório diário — prática informal com risco de auditoria.'
      },
      {
        num: '6.2', nome: 'Fechamento de comissões',
        resp: 'Shirleane',
        entrada: 'Relatório de vendas do sistema; planilha de controle; baixas financeiras do mês',
        saida: 'Comissão fechada por cruzamento manual nota por nota (duas telas); cálculo sobre valor recebido (30/60/90 dias)',
        sistema: 'Estoquei + planilha — notas saem sem nome de representante mesmo com bloqueio configurado (falha do sistema)',
        obs: 'Maior gargalo isolado do financeiro. Representantes são mensais e vendedores trimestrais. A Meta Representações tem regra própria acordada separadamente.'
      },
      {
        num: '6.3', nome: 'Cobrança de inadimplência',
        resp: 'Alan',
        entrada: 'Relatório de inadimplência; retorno (ou ausência de retorno) dos gerentes comerciais',
        saida: 'Cobrança acionada aos gerentes e diretamente ao cliente; causa-raiz investigada (erro de faturamento, falta de nota) antes de insistir',
        sistema: 'Estoquei + contato manual — sem régua de cobrança automatizada multicanal',
        obs: 'Historicamente 95% das pendências são resolvidas só pelo financeiro. O comercial ganha comissão sobre o recebimento, mas não engaja proporcionalmente. Melhora recente (últimos 20 dias) com os novos ritos de reunião.'
      },
      {
        num: '6.4', nome: 'Gestão de despesas de viagem',
        resp: 'Alan',
        entrada: 'Solicitações de viagem dos representantes; política de despesas vigente',
        saida: 'Passagem/hotel/locação cotados; despesas revisadas no V Expense; exceções sinalizadas a Thulio',
        sistema: 'V Expense + cotação manual — ferramenta adequada, mas gargalo na antecedência das solicitações',
        obs: 'Reservas de última hora encarecem passagens e locações. O ideal é antecedência mínima de 10 dias — disciplina ainda em consolidação.'
      },
      {
        num: '6.5', nome: 'Relatórios, DP e outras demandas (WhatsApp)',
        resp: 'Shirleane + Alan',
        entrada: 'Relatórios para a Meta Contábil; espelho de folha; demandas de DP; suporte a representantes por WhatsApp',
        saida: 'Relatórios enviados por e-mail/WhatsApp; folha conferida; DP informal atendido (PJ com a advogada Fernanda); suporte a representantes resolvido',
        sistema: 'Estoquei + Meta Contábil (terceirizada) — comunicação por telefone comercial instável; sem RH interno',
        obs: 'Alan estima que 30-40% do seu tempo diário vai para suporte informal via WhatsApp (notas, boletos, devoluções). Shirleane absorve demandas administrativas (fardamento, ponto, linhas móveis) por falta de apoio administrativo.'
      }
    ]
  },

  /* ════════════════════════════════════════
     7. SUPORTE / TI (ESTOQUEI)
  ════════════════════════════════════════ */
  {
    id: 'ti', nome: 'Suporte / TI (Estoquei)', icon: '💻',
    responsavel: 'Paulo (proprietário do sistema Estoquei — suporte prioritário) + Hugo (suporte geral)',
    sistemas: [
      { n: 'Estoquei (ERP — sustentação com Paulo)', e: 'lim' },
      { n: 'Roadmap único de pendências com SLA', e: 'aus' },
      { n: 'Módulo de consignado por cliente', e: 'aus' },
      { n: 'Sugestão automática de compra / comissão automática', e: 'aus' },
      { n: 'Dashboard executivo', e: 'aus' }
    ],
    processos: [
      {
        num: '7.1', nome: 'Fase 1 — Correções críticas',
        resp: 'Paulo (Estoquei) + Shirleane + Gislaine',
        entrada: 'Falhas confirmadas no sistema: baixa parcial, vínculo de representante, exportação de lote',
        saida: 'Correções que destravam a operação diária: relatório de baixa parcial correto, representante persistindo no relatório, lote no formato dos portais',
        sistema: 'Estoquei — itens que já existem no sistema e falham; base para as fases seguintes',
        obs: 'São correções de falhas existentes (não funcionalidades novas). Impacto diário real e mensurável em Financeiro e Coordenação Comercial.'
      },
      {
        num: '7.2', nome: 'Fase 2 — Parâmetros e módulos novos',
        resp: 'Paulo (Estoquei) + Daniela + Gislaine',
        entrada: 'Correções da Fase 1 concluídas; parâmetros de estoque e arquivos-modelo dos hospitais',
        saida: 'Módulo de consignado por cliente, leitura de arquivo de uso, estoque mínimo/ponto de pedido, pedidos em trânsito, protocolo de equipamentos e alerta de calibração',
        sistema: 'Estoquei — base para as automações da Fase 3',
        obs: 'Depende das correções da Fase 1 e da conciliação das bases Cirúrgica × Log. Arquivos-modelo (Unimed, Português) e parâmetros de estoque a entregar por Gislaine e Daniela.'
      },
      {
        num: '7.3', nome: 'Fase 3 — Automações',
        resp: 'Paulo (Estoquei) + Financeiro + Compras + Comercial',
        entrada: 'Fases 1 e 2 estáveis; parâmetros preenchidos e base confiável',
        saida: 'Sugestão automática de compra, cálculo automático de comissão, CRM/carteira, DRE e fluxo de caixa projetado, dashboard executivo',
        sistema: 'Estoquei — só fazem sentido com base correta e parâmetros preenchidos',
        obs: 'Automatizar sobre dados sujos produz resultados errados. A sequência de fases respeita as dependências entre itens.'
      },
      {
        num: '7.4', nome: 'Governança do desenvolvimento com Paulo',
        resp: 'TECNASA + Paulo + Thulio',
        entrada: 'Demandas hoje tratadas informalmente por WhatsApp, sem prazo, status ou priorização consolidada',
        saida: 'Lista única e priorizada de pendências; roadmap com prazo e responsável; reunião quinzenal de acompanhamento',
        sistema: 'WhatsApp — a substituir por roadmap único acompanhado formalmente',
        obs: 'Modelo atual de demandas informais sem SLA. Primeiro passo: consolidar as pendências em documento único e instituir reunião quinzenal com Paulo.'
      }
    ]
  }

]; // END CADEIA

/* ════════════════════════════════════════
   ACHADOS CONSOLIDADOS
════════════════════════════════════════ */
const ACHADOS = [
  {
    icon: '📦', setor: 'Compras',
    title: 'Compradora sozinha e bases Cirúrgica × Log dessincronizadas',
    desc: 'Daniela cobre <strong>42 fornecedores sozinha</strong> (Wilton assume em ago/2026). As bases da Safety Cirúrgica e da Safety Log estão <strong>completamente divergentes</strong> — em um caso, o sistema via 0 unidades e a Log tinha 16. <strong>Nunca houve inventário na base da Cirúrgica</strong> em 1 ano e 5 meses. Sugestão automática sobre esse dado produziria compra errada.',
    destaque: true
  },
  {
    icon: '🏥', setor: 'Comercial / Coordenação',
    title: 'Saída de Adriana concentrou o consignado permanente em Gislaine',
    desc: 'Com a saída de Adriana (jun/2026), o <strong>consignado permanente Abbott</strong> (linha mais crítica, 5 estados) passou integralmente a Gislaine <strong>sem POP documentado</strong>. Cotação pós ainda exige <strong>inserção manual de lote</strong> em cada portal e leitura manual de arquivos de uso de 60-80 páginas.',
    destaque: true
  },
  {
    icon: '💻', setor: 'Suporte / TI',
    title: 'Duas falhas do Estoquei travam financeiro e comissão',
    desc: 'A <strong>baixa parcial</strong> não aparece no relatório diário (força controle paralelo em planilha) e o <strong>nome do representante</strong> some da nota mesmo com bloqueio configurado. São correções de <strong>falhas existentes</strong> — não funcionalidades novas — e bloqueiam a conciliação e o comissionamento automáticos.',
    destaque: true
  },
  {
    icon: '💼', setor: 'Financeiro',
    title: 'Fechamento de comissão nota por nota em duas telas',
    desc: 'Shirleane cruza <strong>manualmente nota por nota</strong> entre o relatório do sistema e a planilha para achar o representante, sobre valor recebido (30/60/90). É o <strong>maior gargalo isolado</strong> do financeiro — dependente da correção do vínculo de representante.',
    destaque: false
  },
  {
    icon: '🤝', setor: 'Comercial / Gerência',
    title: 'Carteira sem CRM e hierarquia de decisão indefinida',
    desc: 'Clientes e representantes controlados por <strong>planilha com adesão quase nula</strong> e por memória. A gestão compartilhada Ricardo/Edilma nasceu informal, <strong>sem RACI</strong> — já houve representante acionando Thulio direto, contornando os dois gerentes.',
    destaque: false
  },
  {
    icon: '📞', setor: 'Financeiro',
    title: 'Financeiro sozinho: 95% da cobrança sem apoio do comercial',
    desc: 'Alan resolve sozinho quase toda a inadimplência. O comercial — que <strong>ganha comissão sobre o recebimento</strong> — não se engaja proporcionalmente. Houve melhora nos últimos 20 dias com os novos ritos, mas o padrão estrutural depende de acompanhamento sustentado.',
    destaque: false
  },
  {
    icon: '🚚', setor: 'Logística e Campo',
    title: 'Técnicos acumulam entrega de equipamentos com a cirurgia',
    desc: 'Enfermeiros/técnicos acumulam o <strong>deslocamento de equipamentos</strong> com o atendimento cirúrgico (ex: retorno de Caruaru às 2h para cirurgia às 6h). O protocolo é <strong>físico/WhatsApp</strong>, com ponto cego de localização entre a saída e o retorno.',
    destaque: false
  },
  {
    icon: '🏛️', setor: 'Supervisão / Vendas Internas',
    title: 'Supervisor sem escopo e sem indicadores',
    desc: 'Robson tem cargo de supervisor <strong>sem nenhum liderado</strong> e acumula venda direta, compras, importação e coordenação logística de uma linha. Ele <strong>deseja ser cobrado por indicadores</strong>, mas não possui nenhum — vácuo reconhecido por Thulio e Gislaine.',
    destaque: false
  },
  {
    icon: '📥', setor: 'Compras / Logística',
    title: 'Recebimento sem aviso e sem prazo de entrada',
    desc: 'A logística recebe a carga e <strong>não avisa Compras</strong> nem confere se há pedido. Sem Daniela "em cima", a entrada no sistema atrasa dias (caso real: nota do dia 22 lançada só por cobrança direta). Falta <strong>SLA de conferência e entrada</strong>.',
    destaque: false
  }
];