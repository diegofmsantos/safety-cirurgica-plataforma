/* ═══════════════════════════════════════════════════════
   MAPA DE OPORTUNIDADES — SAFETY CIRÚRGICA
   Análise conduzida pela TECNASA — jul/2026
═══════════════════════════════════════════════════════ */

const OPORTUNIDADES = [

    /* ─── SUPORTE / TI (ESTOQUEI) ─── */
    {
        id: 'op01', setor: 'Suporte / TI', icone: '🩹',
        processo: 'Correção da falha de baixa parcial no Estoquei',
        problema: 'Quando um cliente faz pagamento parcial de um título, o sistema não exibe essa baixa no relatório diário — o título some ou permanece aberto integralmente. Shirleane mantém controle paralelo em planilha e chega a lançar compensações de notas duplicadas com data de fim de semana para não sujar o relatório.',
        iniciativa: 'Corrigir o comportamento do relatório diário para exibir valor recebido, saldo remanescente e data da baixa parcial. Abrir chamado formal com o suporte do Estoquei (Paulo) e validar com um caso real de baixa parcial e de compensação.',
        beneficios: 'Conciliação bancária diária correta; fim do controle paralelo em planilha; base limpa para qualquer automação financeira futura; eliminação do risco de auditoria do workaround atual.',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'É uma falha existente do sistema (não funcionalidade nova) com impacto diário mensurável na conciliação de Shirleane. Correção de baixa complexidade que bloqueia a Fase 2 do financeiro.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Abertura de chamado formal com o suporte do Estoquei (Paulo).'
    },
    {
        id: 'op02', setor: 'Suporte / TI', icone: '🔗',
        processo: 'Correção do vínculo de representante na nota fiscal',
        problema: 'Mesmo com bloqueio configurado para impedir a emissão de NF sem representante, parte das notas sai sem esse vínculo no relatório extraído. O bloqueio na tela funciona, mas o campo não persiste no relatório de exportação — impossibilitando o fechamento de comissão confiável.',
        iniciativa: 'Corrigir a persistência do campo de representante no relatório de exportação. Testar com Paulo e o faturamento na tela, ao vivo, para distinguir falha do sistema de erro humano de preenchimento e fechar a causa raiz.',
        beneficios: 'Fechamento de comissão confiável; fim da identificação manual nota por nota; pré-requisito para o cálculo automático de comissão (Fase 3).',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'Consome 3-4h mensais só na identificação manual do representante correto. Sem a correção, nenhuma automação de comissão é possível.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Abertura de chamado com o Estoquei; teste conjunto com Paulo e o faturamento.'
    },
    {
        id: 'op03', setor: 'Suporte / TI', icone: '🏷️',
        processo: 'Exportação de lote no formato dos portais hospitalares',
        problema: 'O número de lote exportado pelo sistema não está no formato aceito pelos portais de cotação (Reviot, Bionexo, Inpart, Emparte). A equipe de coordenação insere o lote manualmente a cada cotação pós-procedimento, para cada portal, dezenas de vezes por semana.',
        iniciativa: 'Ajustar a exportação para gerar o lote já no formato alfanumérico exigido pelos portais, eliminando a formatação manual na cotação pós.',
        beneficios: 'Fim da inserção manual de lote em cada cotação; ganho direto de tempo na coordenação comercial; redução de erro de digitação de lote.',
        roi: ['Operacional'],
        justificativa: 'Gargalo crítico identificado por Gislaine e Adriana, com volume de dezenas de cotações por semana. Correção pontual de alto efeito imediato.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Lista de pendências entregue a Paulo; formato exigido por cada portal mapeado.'
    },
    {
        id: 'op04', setor: 'Suporte / TI', icone: '📋',
        processo: 'Roadmap único de pendências do Estoquei com Paulo',
        problema: 'As demandas ao sistema são tratadas informalmente por WhatsApp, sem prazo, status ou priorização consolidada. As solicitações de Shirleane, Alan, Daniela e Gislaine estão dispersas, sem visão única de roadmap.',
        iniciativa: 'Consolidar todas as pendências em documento único e priorizado (por fases), instituir reunião quinzenal com Paulo para acompanhar status de cada item e registrar o roadmap de desenvolvimento com prazo e responsável.',
        beneficios: 'Fim das demandas informais sem SLA; priorização do que trava a operação; acompanhamento formal do desenvolvimento.',
        roi: ['Operacional'],
        justificativa: 'Demandas dispersas por WhatsApp geram esquecimento e priorização conflitante. Organizar o roadmap é de baixíssima complexidade e destrava toda a execução técnica.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Nenhuma — pode iniciar imediatamente com TECNASA, Paulo e os setores.'
    },

    /* ─── COMPRAS ─── */
    {
        id: 'op05', setor: 'Compras', icone: '⚖️',
        processo: 'Inventário consolidado das bases Safety Cirúrgica × Safety Log',
        problema: 'As bases da Safety Cirúrgica e da Safety Log estão completamente dessincronizadas (caso real: sistema via 0 unidades de um produto Abbott; a Log tinha 16). Nunca foi feito inventário na base da Cirúrgica em 1 ano e 5 meses — os inventários acontecem na Log e não atualizam o sistema da Cirúrgica.',
        iniciativa: 'Realizar inventário físico com conferência e consolidar o resultado nas DUAS bases simultaneamente. Definir rotina periódica de conciliação para que inventários futuros da Log atualizem a base da Cirúrgica. Liberar acesso de Daniela ao sistema da Log.',
        beneficios: 'Saldo confiável para sugestão de compra; fim das compras baseadas em dado errado; base sólida para sugestão automática e controle de consignado.',
        roi: ['Operacional', 'Estratégico'],
        justificativa: 'É a prioridade zero de Compras: qualquer automação (sugestão de compra, consignado) construída sobre bases divergentes produz decisões erradas. Ataca a causa raiz do maior risco de Daniela.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Acesso de Daniela à base da Safety Log; janela para inventário físico; alinhamento com a Safety Log.'
    },
    {
        id: 'op06', setor: 'Compras', icone: '🔁',
        processo: 'Transição planejada de Wilton para Compras',
        problema: 'Daniela cobre sozinha os 42 fornecedores desde a saída do assistente anterior. Wilton foi contratado, mas está temporariamente no comercial, com previsão de assumir Compras em agosto/2026 — inclusive com o papel de auditar o controle de consignado em cliente.',
        iniciativa: 'Planejar e acompanhar a transição de Wilton para Compras (checklist de fornecedores, rotina de sugestão de compra, templates, auditoria de consignado), garantindo transferência de conhecimento sem ruptura nos ciclos de compra.',
        beneficios: 'Fim do ponto único de operação em Compras; capacidade de auditar consignado em cliente (aproveitando a experiência prévia de Wilton); redução da sobrecarga de Daniela.',
        roi: ['Operacional'],
        justificativa: 'Toda a operação de compras depende hoje de uma única pessoa. A transição já está decidida — falta estruturá-la para não gerar ruptura na chegada de agosto.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Alinhamento de disponibilidade de Wilton com Thulio (previsto para agosto/2026).'
    },
    {
        id: 'op07', setor: 'Compras', icone: '🤖',
        processo: 'Estoque mínimo por SKU e sugestão automática de compra',
        problema: 'Daniela recalcula manualmente em Excel a sugestão de compra para todos os fornecedores (média de saída, cobertura, ponto de pedido), pois os campos nativos do Estoquei não são confiáveis — 2 a 3 horas por ciclo, fornecedor por fornecedor.',
        iniciativa: 'Parametrizar estoque mínimo, ponto de pedido e lead time por SKU e ativar a sugestão automática de compra no Estoquei (Ponto de Pedido = Estoque Mínimo + Consumo Médio × Lead Time), com alerta quando o SKU atingir o nível crítico.',
        beneficios: 'Fim do recálculo manual em Excel; redução de ruptura e de excesso; comprador focado em negociação estratégica.',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'A função de comprador só se torna estratégica quando o sistema sugere o que comprar. Depende de base limpa — por isso vem após o inventário das bases.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Inventário das bases concluído; parâmetros de consumo e lead time fornecidos por Daniela.'
    },
    {
        id: 'op08', setor: 'Compras', icone: '📥',
        processo: 'Aviso de recebimento e SLA de entrada com a Safety Log',
        problema: 'A logística recebe a carga e não avisa Compras nem confere se há pedido no sistema. Sem Daniela cobrando ativamente, a entrada da mercadoria no sistema atrasa dias (caso real: nota do dia 22 lançada só após cobrança direta).',
        iniciativa: 'Formalizar protocolo entre Recebimento (Safety Log) e Compras: aviso imediato de chegada da carga e prazo máximo (ex: 24-48h) para conferência e entrada no sistema, salvo exceções.',
        beneficios: 'Fim da verificação física manual de Daniela; entrada de mercadoria no prazo; estoque do sistema alinhado à realidade física mais rapidamente.',
        roi: ['Operacional'],
        justificativa: 'Sem aviso e sem SLA, a entrada pode levar semanas, distorcendo o estoque e a sugestão de compra. Protocolo de baixa complexidade e efeito imediato.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Alinhamento com a Safety Log e com Robson; definição do prazo-alvo de entrada.'
    },
    {
        id: 'op09', setor: 'Compras', icone: '🔌',
        processo: 'Integração ERP-fornecedor para templates Medtronic/Abbott',
        problema: 'O preenchimento dos templates próprios da Medtronic e Abbott é 100% manual: Daniela converte código, insere sellout, estoque, pedido e forecast item a item — 300+ itens, 2 a 3 horas por pedido.',
        iniciativa: 'Avaliar integração direta entre o Estoquei e o portal/template do fornecedor, de modo que o pedido saia do sistema já no formato exigido pelo fabricante, eliminando o "copiar e colar" em planilha.',
        beneficios: 'Eliminação de 2-3h por pedido em preenchimento manual; tempo redirecionado para negociação e análise; redução de erro de digitação em 300+ itens.',
        roi: ['Operacional'],
        justificativa: 'Daniela já teve essa integração em empresa anterior — é prática real de mercado. Porém exige integração técnica com terceiros, de maior complexidade, e depende da base saneada.',
        impacto: 'Médio', complexidade: 'Alta',
        dependencias: 'Sugestão automática ativa; viabilidade técnica de integração com os portais dos fabricantes.'
    },
    {
        id: 'op10', setor: 'Compras', icone: '✅',
        processo: 'Alçadas de aprovação de compra',
        problema: '100% dos pedidos de compra passam por aprovação manual de Thulio, independentemente do valor ou da recorrência — gargalo de decisão e sobrecarga da diretoria.',
        iniciativa: 'Parametrizar alçadas por valor/categoria: pedidos recorrentes dentro de parâmetros pré-definidos aprovados automaticamente; aprovação manual reservada às exceções.',
        beneficios: 'Thulio liberado de aprovações operacionais recorrentes; agilidade no fechamento de pedidos; registro auditável de aprovações.',
        roi: ['Operacional'],
        justificativa: 'A aprovação universal por Thulio é gargalo de baixa complexidade de resolução — basta definir os limites de alçada e as categorias recorrentes.',
        impacto: 'Médio', complexidade: 'Baixa',
        dependencias: 'Decisão de Thulio sobre limites de alçada.'
    },

    /* ─── COMERCIAL / COORDENAÇÃO ─── */
    {
        id: 'op11', setor: 'Comercial / Coordenação', icone: '📦',
        processo: 'Módulo de controle de consignado por cliente',
        problema: 'Não há visão confiável do saldo de consignado por hospital. O Estoquei não separa o que foi utilizado do que ainda está disponível no cliente — consolida tudo em um único número. Gislaine controla o consignado permanente em planilha herdada de Adriana.',
        iniciativa: 'Implantar módulo de consignado por cliente no Estoquei: saldo por hospital em tempo real, uso amarrado ao paciente (data, convênio, material), visão separada de estoque na empresa × em cliente e alerta de material próximo do vencimento.',
        beneficios: 'Sugestão de compra Abbott baseada em consumo real; fim do controle em planilha manual; prevenção de material vencendo no cliente sem ação.',
        roi: ['Operacional', 'Estratégico'],
        justificativa: 'A maior linha da empresa (Abbott) é gerida sem visão confiável de consignado. É a informação que falta a Daniela e Gislaine para decisões precisas — depende de base saneada.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Inventário das bases; POP de consignado documentado; acesso de Gislaine ao módulo.'
    },
    {
        id: 'op12', setor: 'Comercial / Coordenação', icone: '📄',
        processo: 'Leitura automática de arquivos de uso dos hospitais',
        problema: 'A equipe recebe arquivos de uso de 60-80 páginas (Unimed Natal, Recife, Fortaleza, Hospital Português) com materiais de múltiplos fornecedores, filtra manualmente o que é da Safety e lança a cotação pós portal por portal — processo repetitivo e sujeito a erro de seleção.',
        iniciativa: 'Desenvolver leitura automática dos arquivos de uso no Estoquei: o sistema lê o arquivo, identifica os itens da Safety e pré-preenche a cotação pós-procedimento. Modelos de arquivo já estão com Gislaine para entregar a Paulo.',
        beneficios: 'Fim da filtragem manual de arquivos extensos; cotação pós gerada automaticamente; redução de erro de seleção de itens.',
        roi: ['Operacional'],
        justificativa: 'Processo repetitivo de alto volume. Os modelos de arquivo já existem — falta desenvolver a leitura no sistema.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Arquivos-modelo entregues por Gislaine a Paulo; correção da exportação de lote.'
    },
    {
        id: 'op13', setor: 'Comercial / Coordenação', icone: '📝',
        processo: 'POPs de portais e regras por cliente especial',
        problema: 'A rotina de cotação pré e pós por portal (Reviot, Inpart, Emparte, Bionexo, Síntese, Apoio) e as regras de negócio por cliente especial (Português dia 10, Unimed Natal/Recife/Fortaleza) estão na memória de Gislaine — conhecimento tácito herdado de Adriana, sem documentação.',
        iniciativa: 'Documentar POP de cada portal (campos obrigatórios, tratamento de lote, fluxo de faturamento) e as regras por cliente especial, transformando conhecimento tácito em processo formal e consultável.',
        beneficios: 'Fim da dependência da memória de Gislaine após a saída de Adriana; processo replicável pela equipe; base para treinar novos analistas.',
        roi: ['Operacional'],
        justificativa: 'A saída de Adriana expôs o risco de concentração de conhecimento crítico. Documentar é de baixa complexidade e reduz risco de pessoa imediatamente.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Nenhuma — pode iniciar imediatamente com Gislaine e TECNASA.'
    },
    {
        id: 'op14', setor: 'Comercial / Coordenação', icone: '🔧',
        processo: 'Protocolo digital de equipamentos e alerta de calibração',
        problema: 'Gislaine controla 30+ equipamentos e 60+ peças de mão em campo por planilha própria, com ponto cego de localização entre a saída e o retorno. As calibrações são monitoradas manualmente — risco de equipamento em campo com calibração vencida.',
        iniciativa: 'Implantar protocolo digital de entrega/devolução (técnico, equipamento por série, hospital, datas) e alerta automático de calibração com 60 dias de antecedência do vencimento.',
        beneficios: 'Fim do ponto cego de localização; rastreabilidade de equipamentos; nenhum equipamento em campo com calibração vencida.',
        roi: ['Operacional'],
        justificativa: 'O controle manual de dezenas de itens em campo é risco de extravio e de não conformidade (calibração). Depende de módulo no sistema, de complexidade média.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Módulo de protocolo no Estoquei; cadastro de série e datas de calibração dos equipamentos.'
    },

    /* ─── COMERCIAL / GERÊNCIA ─── */
    {
        id: 'op15', setor: 'Comercial / Gerência', icone: '📈',
        processo: 'CRM / carteira, dashboard comercial e positivação',
        problema: 'Clientes ativos/inativos e representantes são controlados por memória e por uma planilha de mapeamento com adesão praticamente nula. Não há relatório de positivação por representante nem dashboard de indicadores — a gestora lê relatórios brutos manualmente.',
        iniciativa: 'Implantar CRM/módulo de carteira no Estoquei: clientes por representante e gerente, alerta de inatividade e relatório de positivação; e dashboard comercial (faturamento por carteira, ticket médio, crescimento vs. meta).',
        beneficios: 'Cobrança de meta objetiva; recuperação de clientes inativos; representantes com visibilidade do próprio resultado; gestão baseada em dado.',
        roi: ['Operacional', 'Estratégico'],
        justificativa: 'Sem dado não há cobrança objetiva de positivação nem gestão comercial estruturada. Substitui a planilha sem adesão por registro integrado ao fluxo.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Carteiras formalizadas por gerente/representante; definição de indicadores com Ricardo e Edilma.'
    },
    {
        id: 'op16', setor: 'Comercial / Gerência', icone: '🧭',
        processo: 'Matriz de decisão (RACI) e ritos de gestão comercial',
        problema: 'A gestão compartilhada Ricardo/Edilma nasceu informal, sem RACI. Decisões de produto/qualidade eram tomadas pelo backoffice sem alinhar com a gerência, e já houve representante acionando Thulio direto, contornando ambos. Reuniões eram informais e sem sequência garantida.',
        iniciativa: 'Estruturar matriz de decisão (RACI) entre coordenação interna (Gislaine/Glaucia) e gerência comercial (Ricardo/Edilma) — quem decide produto, cotação, reposição e negociação — e consolidar o rito semanal/quinzenal com pauta fixa.',
        beneficios: 'Fim do conflito de autoridade perante o cliente; papéis claros; reuniões com pauta objetiva e decisões registradas.',
        roi: ['Operacional', 'Estratégico'],
        justificativa: 'A ausência de hierarquia de decisão é falha organizacional típica de empresa em estruturação. A solução é o desenho explícito de RACI — de baixa complexidade e alto efeito na governança.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Facilitação da TECNASA; participação de Thulio, Ricardo, Edilma e Gislaine.'
    },
    {
        id: 'op17', setor: 'Comercial / Gerência', icone: '📨',
        processo: 'Repasse estruturado de inadimplência ao comercial (SLA)',
        problema: 'Historicamente 95% das pendências de inadimplência são resolvidas só pelo financeiro. O relatório de Alan aos gerentes gera pouco retorno — o comercial, que ganha comissão sobre o recebimento, não se engaja proporcionalmente.',
        iniciativa: 'Criar processo formal de repasse de inadimplência ao comercial: relatório estruturado por gerente/representante com SLA de resposta (prazo de X dias) e escalada definida — vinculando a cobrança ativa a quem recebe comissão sobre o recebimento.',
        beneficios: 'Distribuição da responsabilidade de cobrança; redução da sobrecarga do financeiro; recuperação mais rápida de recebíveis.',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'A melhora recente (últimos 20 dias) com os novos ritos mostra que a estrutura funciona — falta formalizar o SLA para sustentá-la.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Rito semanal comercial em andamento; acordo de SLA entre Thulio, gerentes e financeiro.'
    },

    /* ─── FINANCEIRO ─── */
    {
        id: 'op18', setor: 'Financeiro', icone: '💼',
        processo: 'Automação do fechamento de comissões',
        problema: 'Shirleane cruza manualmente nota por nota, em duas telas, para identificar o representante e calcular a comissão sobre o valor recebido (30/60/90) — o maior gargalo isolado do financeiro, agravado pelas notas que saem sem vínculo de representante.',
        iniciativa: 'Após corrigir o vínculo de representante, parametrizar as regras de comissionamento (2% sobre valor recebido, regras próprias da Meta) e calcular a comissão automaticamente a partir da baixa financeira da nota.',
        beneficios: 'Fim do cruzamento manual nota por nota; relatório de comissão direto do sistema; redução de erro e de tempo de fechamento.',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'É onde ERPs financeiros maduros já resolvem via automação nativa. Depende diretamente da correção do vínculo de representante (op02).',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Vínculo de representante corrigido; regras de comissão parametrizadas.'
    },
    {
        id: 'op19', setor: 'Financeiro', icone: '📞',
        processo: 'Régua de cobrança estruturada',
        problema: 'A cobrança de inadimplência é reativa e sem fluxo definido: Alan aciona gerentes e clientes manualmente, decidindo caso a caso quando insistir ou escalar. Não há segmentação por risco nem escalonamento automático.',
        iniciativa: 'Implantar régua de cobrança estruturada: D+0 (lembrete), D+7 (cobrança ativa de Alan), D+15 (escalada ao gerente comercial), D+30 (escalada a Thulio), com relatório de inadimplência por faixa de atraso (0-30/30-60/60-90/90+).',
        beneficios: 'Cobrança previsível e escalonada; priorização de contatos; redução da decisão manual de quando insistir.',
        roi: ['Operacional', 'Financeiro'],
        justificativa: 'Substitui o modelo reativo por um fluxo estruturado. Pode começar como processo (mesmo antes de automação multicanal), de baixa complexidade.',
        impacto: 'Alto', complexidade: 'Baixa',
        dependencias: 'Processo de repasse ao comercial definido; relatório de inadimplência por faixa de atraso.'
    },
    {
        id: 'op20', setor: 'Financeiro', icone: '📊',
        processo: 'DRE simplificada e fluxo de caixa projetado',
        problema: 'Shirleane monta planilhas manuais de fluxo de caixa a pedido de Thulio e envia relatórios à Meta Contábil sem formato padronizado. Não há DRE estruturada nem projeção de caixa 30/60/90.',
        iniciativa: 'Implantar DRE simplificada mensal (receitas, custos e despesas por setor/linha) e fluxo de caixa projetado 30/60/90 no Estoquei, consolidando contas a pagar, a receber e previsão de faturamento.',
        beneficios: 'Decisões baseadas em números; previsibilidade de caixa; redução do esforço manual de preparo de relatório para a contabilidade.',
        roi: ['Financeiro', 'Estratégico'],
        justificativa: 'Separa a gestão reativa da estratégica. Depende da conciliação estabilizada e da baixa parcial corrigida — por isso é de horizonte mais longo.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Conciliação bancária estabilizada; baixa parcial corrigida; indicadores definidos com Thulio.'
    },
    {
        id: 'op21', setor: 'Financeiro', icone: '🧑‍💼',
        processo: 'Apoio administrativo / DP para desafogar o financeiro',
        problema: 'Sem RH interno, Shirleane absorve demandas administrativas (fardamento, relógio de ponto, linhas móveis corporativas) e Alan gasta 30-40% do tempo em suporte informal via WhatsApp — tempo desviado das atividades financeiras essenciais.',
        iniciativa: 'Avaliar a contratação de apoio administrativo/DP e documentar as demandas não-financeiras hoje absorvidas por Shirleane e Alan, redistribuindo o que não é do financeiro.',
        beneficios: 'Financeiro focado nas atividades essenciais; demandas administrativas com dono; redução da sobrecarga informal.',
        roi: ['Operacional'],
        justificativa: 'Parte relevante do tempo do financeiro é consumida por demandas que seriam de um administrativo/RH dedicado — documentar e redistribuir é de baixa complexidade.',
        impacto: 'Médio', complexidade: 'Baixa',
        dependencias: 'Decisão de Thulio sobre o apoio administrativo; documentação das demandas atuais.'
    },

    /* ─── SUPERVISÃO / VENDAS INTERNAS ─── */
    {
        id: 'op22', setor: 'Supervisão / Vendas Internas', icone: '🏛️',
        processo: 'Escopo formal e indicadores do Supervisor (Robson)',
        problema: 'Robson tem cargo de Supervisor de Vendas sem nenhum liderado e sem atribuições claras, acumulando venda direta, compras, importação e coordenação logística de uma linha. Ele deseja explicitamente ser cobrado por indicadores, mas não possui nenhum.',
        iniciativa: 'Desenhar formalmente o escopo do cargo com responsabilidades definidas e implantar indicadores de performance (vendas diretas faturadas, carteira atendida, itens em trânsito, prazo médio de entrega).',
        beneficios: 'Cargo com atribuições claras; potencial de Robson aproveitado; engajamento por métricas que ele próprio deseja.',
        roi: ['Operacional', 'Estratégico'],
        justificativa: 'O vácuo de escopo foi reconhecido por Thulio e Gislaine. Definir escopo e indicadores é de baixa complexidade e destrava o engajamento declarado de Robson.',
        impacto: 'Médio', complexidade: 'Baixa',
        dependencias: 'Facilitação da TECNASA; decisão de Thulio sobre o desenho do cargo.'
    },
    {
        id: 'op23', setor: 'Supervisão / Vendas Internas', icone: '📑',
        processo: 'POP do processo de licitação (Analice)',
        problema: 'O processo de licitação (captação de editais, montagem de proposta, disputa, documentação pós-ganho e faturamento) foi implantado por Robson e é executado por Analice, mas não está documentado — risco de dependência de pessoa.',
        iniciativa: 'Documentar o processo de licitação em POP formal, com etapas, prazos e responsáveis, transformando o conhecimento de Analice em processo consultável.',
        beneficios: 'Redução do risco de pessoa; processo replicável; base para escalar a atuação em licitações.',
        roi: ['Operacional'],
        justificativa: 'Processo funcional, mas concentrado no conhecimento de uma pessoa. Documentar é de baixa complexidade e reduz risco imediato.',
        impacto: 'Médio', complexidade: 'Baixa',
        dependencias: 'Disponibilidade de Analice e Robson para o mapeamento com a TECNASA.'
    },

    /* ─── LOGÍSTICA E CAMPO ─── */
    {
        id: 'op24', setor: 'Logística e Campo', icone: '🚚',
        processo: 'Profissional dedicado à logística de equipamentos',
        problema: 'Os técnicos/enfermeiros (Alexandre, Fernanda, Wellen) acumulam o deslocamento de materiais e equipamentos com o atendimento cirúrgico. Retornos de madrugada do interior (ex: Caruaru às 2h para cirurgia às 6h) comprometem qualidade e segurança.',
        iniciativa: 'Avaliar a contratação de profissional dedicado à logística de materiais e equipamentos, separando o deslocamento do atendimento cirúrgico, e revisar os auxílios (combustível/alimentação) defasados frente ao custo real de viagens ao interior.',
        beneficios: 'Técnicos focados no atendimento cirúrgico; redução de risco de fadiga e de segurança; custo de deslocamento compatível com a realidade.',
        roi: ['Operacional'],
        justificativa: 'O acúmulo de deslocamento com o atendimento é risco operacional e de segurança. Exige análise de viabilidade financeira, de complexidade média.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Análise de viabilidade financeira; decisão de Thulio e Gislaine.'
    },

    /* ─── DIRETORIA ─── */
    {
        id: 'op25', setor: 'Diretoria', icone: '🗺️',
        processo: 'Dashboard executivo de gestão',
        problema: 'Thulio toma decisões sem um painel de gestão integrado. Os dados são coletados manualmente de múltiplas fontes quando necessário — faturamento por setor/linha/estado, estoque, inadimplência, consignados e comissões.',
        iniciativa: 'Desenvolver dashboard executivo no Estoquei: faturamento por setor/linha/estado, estoque em tempo real, inadimplência por faixa, consignados em campo por hospital, comissões projetadas e pedidos em trânsito.',
        beneficios: 'Visão integrada da operação para a diretoria; decisões baseadas em dado; fim da coleta manual de múltiplas fontes.',
        roi: ['Estratégico'],
        justificativa: 'É o topo da pirâmide de informação — só entrega valor com todos os módulos anteriores estáveis e com dados confiáveis. Por isso é de horizonte mais longo.',
        impacto: 'Alto', complexidade: 'Média',
        dependencias: 'Todos os módulos integrados e com dados confiáveis (Fases 1 a 3 do Estoquei).'
    }

];

/* ══ Priorização ══ */
function getPrioridade(op) {
    if (op.impacto === 'Alto' && op.complexidade === 'Baixa') return 'P1';
    if (op.impacto === 'Alto' && op.complexidade !== 'Baixa') return 'P2';
    if (op.impacto === 'Médio' && op.complexidade === 'Baixa') return 'P3';
    return 'P4';
}
const P_META = {
    P1: { label: 'Quick Win', cor: '#00C48C', desc: 'Alto impacto · Baixa complexidade · Implantação imediata' },
    P2: { label: 'Projeto', cor: '#484776', desc: 'Alto impacto · Requer planejamento e maior esforço' },
    P3: { label: 'Melhoria', cor: '#d4840a', desc: 'Impacto médio · Baixa complexidade · Próximo ciclo' },
    P4: { label: 'Avaliar', cor: '#6b6b8a', desc: 'Avaliar custo-benefício antes de priorizar' }
};
const ROI_COR = {
    'Operacional': { bg: 'rgba(0,196,140,.12)', color: '#1d6b4a' },
    'Financeiro': { bg: 'rgba(72,71,118,.12)', color: '#332f5c' },
    'Estratégico': { bg: 'rgba(203,255,45,.25)', color: '#3a4a00' }
};

/* ══ Build ══ */
function buildMapaOportunidades() {
    const container = document.getElementById('sp-mapa');
    const grupos = { P1: [], P2: [], P3: [], P4: [] };
    OPORTUNIDADES.forEach(op => grupos[getPrioridade(op)].push(op));

    const roiCount = {};
    OPORTUNIDADES.forEach(op => op.roi.forEach(r => roiCount[r] = (roiCount[r] || 0) + 1));

    /* ── KPIs ── */
    const kpisHtml = `
    <div class="mapa-kpis">
      <div class="mapa-kpi" style="border-left-color:var(--primary)">
        <div class="mapa-kpi-n" style="color:var(--primary)">${OPORTUNIDADES.length}</div>
        <div class="mapa-kpi-l">Oportunidades identificadas</div>
      </div>
      <div class="mapa-kpi" style="border-left-color:var(--ok)">
        <div class="mapa-kpi-n" style="color:var(--ok)">${grupos.P1.length}</div>
        <div class="mapa-kpi-l">Quick Wins (implantação imediata)</div>
      </div>
      <div class="mapa-kpi" style="border-left-color:var(--primary)">
        <div class="mapa-kpi-n" style="color:var(--primary)">${grupos.P2.length}</div>
        <div class="mapa-kpi-l">Projetos (alto impacto)</div>
      </div>
      <div class="mapa-kpi" style="border-left-color:var(--accent)">
        <div class="mapa-kpi-n" style="color:var(--dark)">${roiCount['Financeiro'] || 0}</div>
        <div class="mapa-kpi-l">Com ROI Financeiro direto</div>
      </div>
    </div>`;

    /* ── Lista de cards clicáveis por grupo ── */
    function renderGrupo(p, ops) {
        if (!ops.length) return '';
        const m = P_META[p];
        const itens = ops.map(op => {
            const roiChips = op.roi.map(r => {
                return `<span class="roi-chip roi-chip--${r.toLowerCase()}">${r}</span>`;
            }).join('');
            return `
        <div class="mop-item" id="item-${op.id}" onclick="toggleOp('${op.id}')">
          <div class="mop-item-left">
            <span class="mop-item-icon">${op.icone}</span>
            <div>
              <div class="mop-item-setor">${op.setor}</div>
              <div class="mop-item-proc">${op.processo}</div>
            </div>
          </div>
          <div class="mop-item-right">
            <div class="mop-item-chips">${roiChips}</div>
            <div class="mop-item-meta">
              <span class="mop-meta-tag">Impacto: ${op.impacto}</span>
              <span class="mop-meta-tag">Complexidade: ${op.complexidade}</span>
            </div>
            <span class="mop-chevron" id="chev-${op.id}">▼</span>
          </div>
        </div>
        <div class="mop-detail" id="det-${op.id}">
          <div class="mop-detail-grid">
            <div class="mop-det-block">
              <div class="mop-det-lbl">Problema / Oportunidade</div>
              <div class="mop-det-txt">${op.problema}</div>
            </div>
            <div class="mop-det-block">
              <div class="mop-det-lbl">Iniciativa Proposta</div>
              <div class="mop-det-txt">${op.iniciativa}</div>
            </div>
            <div class="mop-det-block">
              <div class="mop-det-lbl">Benefícios Esperados</div>
              <div class="mop-det-txt">${op.beneficios}</div>
            </div>
            <div class="mop-det-block">
              <div class="mop-det-lbl">Justificativa Técnica</div>
              <div class="mop-det-txt mop-just">${op.justificativa}</div>
            </div>
          </div>
          <div class="mop-det-footer">
            <div class="mop-det-block" style="flex:1">
              <div class="mop-det-lbl">Dependências / Pré-requisitos</div>
              <div class="mop-det-txt">📌 ${op.dependencias}</div>
            </div>
          </div>
        </div>`;
        }).join('');

        return `
      <div class="mop-grupo">
        <div class="mop-grupo-hdr" style="border-left-color:${m.cor}">
          <span class="mop-grupo-badge" style="background:${m.cor}">${m.label}</span>
          <span class="mop-grupo-desc">${m.desc}</span>
          <span class="mop-grupo-n" style="color:${m.cor}">${ops.length}</span>
        </div>
        <div class="mop-list">${itens}</div>
      </div>`;
    }

    container.innerHTML = `
    <div class="pg-title">🎯 Mapa de Oportunidades</div>
    <div class="pg-sub">Iniciativas identificadas pela TECNASA com base no mapeamento AS-IS da cadeia de valor da Safety Cirúrgica — jul/2026. Clique em uma oportunidade para ver o detalhamento.</div>
    ${kpisHtml}
    ${renderGrupo('P1', grupos.P1)}
    ${renderGrupo('P2', grupos.P2)}
    ${renderGrupo('P3', grupos.P3)}
    ${grupos.P4.length ? renderGrupo('P4', grupos.P4) : ''}
  `;
}

/* ══ Toggle accordion ══ */
window.toggleOp = function (id) {
    const det = document.getElementById('det-' + id);
    const item = document.getElementById('item-' + id);
    const chev = document.getElementById('chev-' + id);
    const isOpen = det.classList.contains('open');

    // Fecha todos
    document.querySelectorAll('.mop-detail.open').forEach(d => d.classList.remove('open'));
    document.querySelectorAll('.mop-item.selected').forEach(i => i.classList.remove('selected'));
    document.querySelectorAll('.mop-chevron').forEach(c => c.textContent = '▼');

    // Abre o clicado (toggle)
    if (!isOpen) {
        det.classList.add('open');
        item.classList.add('selected');
        chev.textContent = '▲';
        setTimeout(() => det.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
};