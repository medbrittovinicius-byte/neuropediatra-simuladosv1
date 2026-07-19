/* Módulos de estudo aprofundado — Revisão Ativa (aba "Aula do tema").
   Chave = domínio clínico (mesma classificação de domainOf: "HALF|Nome").
   Formato: { titulo, half, resumo, secoes:[{h,c}], flashcards:[{p,r}], pegadinhas:[],
              diretrizes:[], questoes:[{enunciado, alternativas{a,b,c,d}, correta, comentario, foco}] }.
   Texto das seções (campo c) aceita: parágrafos separados por linha em branco, listas com "- ",
   negrito **assim**, e links. Referências: Tratado de Neurologia da ABN (3ª ed., 2025) + Merritt
   (13ª ed.) — ver materiais_neuro.md. Ampliar aos poucos pela tarefa diária de estudo. */
window.REVISAO_MODULOS = {

/* ===================== NEUROLOGIA ===================== */

"NEURO|Vertigem / síndromes vestibulares": {
 titulo: "Vertigem e síndromes vestibulares",
 half: "NEURO",
 resumo: "Tontura é uma das queixas mais comuns do plantão e o campo onde mais se erra — porque se decoram rótulos (VPPB, Ménière, neurite) sem o raciocínio que os liga. Este texto reconstrói o tema do zero: o que é tontura, como o equilíbrio funciona, e um caminho de decisão (tempo → gatilho → sintoma auditivo → exame de cabeceira) que separa sozinho os cinco diagnósticos e o AVC que não se pode perder.",
 fontes: "Base: Tratado de Neurologia da ABN 3ª ed. (caps. 20 e 135–138), Merritt 13ª ed. (Seção 2 — Tontura, Vertigem e Perda Auditiva), Adams & Victor (Deafness, Dizziness) e Sanvito (semiologia do nistagmo e exame vestibular). Ver materiais_neuro.md.",
 notaErro: `Nos seus registros, **este é o tema em que você mais erra** (taxa de 100% em vertigem/VPPB e em neurite vestibular). O erro quase nunca é falta de decoreba — é falta de um **fio condutor**. Três armadilhas explicam a maioria das quedas, e este texto foi montado para desarmar cada uma:

- **Você tenta classificar pelo "tipo" de tontura** (é rotatória? é desequilíbrio?). A prova abandonou isso porque o paciente descreve mal o sintoma. O caminho certo começa por **tempo + gatilho** (seção 3) — não pelo adjetivo da tontura.
- **Você troca as manobras.** Usa Dix-Hallpike para tudo. Dix-Hallpike é do canal **posterior**; o canal **horizontal** é o head-roll. Manobra errada devolve um exame "negativo" e o diagnóstico se perde (seção 7).
- **Você deixa o fator de risco vascular decidir** e, no susto, rotula "central" (ou o contrário) sem fazer o **HINTS**. O HINTS bem lido inverte a intuição: na vertigem aguda e contínua, **impulso cefálico normal aponta para AVC** (seção 5).

**Como zerar o erro:** diante de qualquer caso, responda três perguntas NESTA ordem — (1) o quadro é agudo e contínuo, episódico com gatilho posicional, ou episódico espontâneo? (2) há sintoma auditivo (hipoacusia/zumbido/plenitude)? (3) o que dizem o HINTS e/ou a manobra do canal? Treine essa sequência e os cinco diagnósticos se separam quase sozinhos. As três questões ao final batem exatamente nesses três tropeços.`,
 secoes: [
  {h:"1. Comece pelo começo: tontura não é uma coisa só", c:`"Tontura" é um guarda-chuva. Debaixo dele cabem coisas com causas bem diferentes, e confundi-las é a origem de metade dos erros. Separe quatro sensações:

- **Vertigem:** a ilusão de que você (ou o ambiente) está **girando** ou se movendo. É o sintoma do sistema **vestibular** (labirinto/nervo/vias no cérebro).
- **Pré-síncope:** sensação de que **vai desmaiar**, escurecimento visual, "cabeça leve". Costuma ser **cardiovascular** (queda de fluxo cerebral) — não é o nosso foco aqui.
- **Desequilíbrio:** instabilidade ao **ficar em pé/andar**, sem giro. Aponta para cerebelo, propriocepção, visão, fraqueza.
- **Tontura inespecífica:** vaga, difícil de nomear (ansiedade, medicamentos).

Uma imagem ajuda: o cérebro é como um piloto que só voa bem quando três instrumentos concordam. Quando um deles envia um sinal errado de repente, o piloto sente o "chão girar" — isso é a vertigem. O objetivo do estudo é descobrir **qual instrumento falhou e por quê**.`},

  {h:"2. Como o corpo se equilibra — os três sensores", c:`O equilíbrio nasce de três fontes de informação que o cérebro cruza o tempo todo:

- **Sistema vestibular (o labirinto), no ouvido interno:** tem três **canais semicirculares** (sentem a cabeça **girando**) e os órgãos otolíticos — **utrículo e sáculo** (sentem a **gravidade** e a aceleração em linha reta). É o instrumento mais especializado em movimento.
- **Visão:** confirma para onde estamos indo.
- **Propriocepção** (sensores nos músculos e articulações): diz onde estão os pés e o corpo no espaço.

Esses sinais chegam aos **núcleos vestibulares** no tronco encefálico, que conversam com o **cerebelo** (o "revisor" que calibra), com os **músculos dos olhos** e com a **medula**. Em condições normais, os dois labirintos (direito e esquerdo) mandam sinais **simétricos**. **Vertigem aguda = assimetria súbita** entre os dois lados (um labirinto/nervo "cala" ou "grita"). Guarde essa frase: quase tudo em vertigem é assimetria de tônus vestibular.`},

  {h:"3. O passo que muda tudo: pense em TEMPO e GATILHO (não no “tipo”)", c:`Durante anos ensinou-se a perguntar "sua tontura é rotatória ou é desequilíbrio?". O problema: o paciente é péssimo em descrever isso, e a resposta muda conforme se pergunta. A abordagem moderna (modelos ATTEST/TiTrATE, no Merritt e na ABN) troca a pergunta por **duas melhores**: **há quanto tempo dura?** e **o que a desencadeia?** Isso gera três "síndromes" que já apontam o diagnóstico:

- **Síndrome vestibular aguda (SVA):** tontura que começou de forma aguda e é **contínua por dias**, com náuseas, nistagmo e dificuldade de andar. Aqui mora a dúvida cara: **neurite vestibular (benigna) × AVC de fossa posterior (grave)**.
- **Síndrome episódica DESENCADEADA:** crises de **segundos**, sempre provocadas por **mudar a cabeça de posição** (deitar, virar na cama, olhar para cima). É a cara da **VPPB**.
- **Síndrome episódica ESPONTÂNEA:** crises de **minutos a horas**, que vêm **sem gatilho** posicional. Aqui vivem a **doença de Ménière**, a **migrânea vestibular** e o AIT.

Fixe o reflexo: antes de qualquer exame, encaixe o caso em uma dessas três caixas. Metade do trabalho está feita.`},

  {h:"4. Anatomia mínima para entender os sinais do exame", c:`Dois circuitos explicam tudo o que você vai testar:

- **Reflexo vestíbulo-ocular (RVO):** quando você vira a cabeça, os olhos giram automaticamente para o lado oposto e **mantêm a imagem estável**. Esse reflexo depende do labirinto e do nervo vestibular. Se esse caminho **periférico** está lesado (ex.: neurite), o reflexo falha — e é isso que o **teste do impulso cefálico** flagra.
- **Cerebelo (flóculo/nódulo) como freio:** ele calibra o sistema. Quando o cerebelo/tronco está lesado (**central**, ex.: AVC), o freio some — e aparecem sinais que o labirinto sozinho **nunca** faz: nistagmo que **muda de direção**, nistagmo **vertical puro**, e o desvio vertical dos olhos (**skew**).

Ou seja: **periférico** = problema no "sensor" (RVO falha, mas o resto do cérebro compensa). **Central** = problema no "processador" (o RVO pode estar intacto, mas surgem sinais estranhos). É por isso que, contraintuitivamente, um RVO **normal** numa pessoa muito tonta é um sinal de alarme.`},

  {h:"5. O exame que decide: HINTS, passo a passo", c:`Na **síndrome vestibular aguda** (tontura contínua COM nistagmo), o **HINTS** — três testes de cabeceira — separa periférico de central melhor que uma RM feita cedo demais. Só use HINTS nesse cenário (SVA com nistagmo); não serve para tontura episódica nem para quem não tem nistagmo.

- **HI — Head Impulse (impulso cefálico):** peça ao paciente para fixar o seu nariz; gire a cabeça dele rápido e num ângulo pequeno. Se, ao voltar, os olhos precisam dar uma **"sacada de correção"**, o teste é **positivo/anormal = PERIFÉRICO** (o RVO daquele lado falhou). Se os olhos ficam grudados no alvo (**normal**) numa pessoa em plena vertigem aguda, isso é **CENTRAL** até prova em contrário. (Este é o ponto que mais derruba: HIT normal na SVA não tranquiliza — assusta.)
- **N — Nystagmus (nistagmo):** **periférico** bate sempre para o mesmo lado (unidirecional), é horizonto-torcional e **diminui quando o paciente fixa o olhar**. **Central** **muda de direção** conforme o olhar, ou é **vertical/torcional puro**, e **não** melhora com a fixação.
- **TS — Test of Skew (desvio skew):** cubra e descubra um olho de cada vez; se um olho **corrige para cima/baixo**, há skew = **CENTRAL**.

Mnemônico dos sinais centrais: **INFARCT** — **I**mpulse **N**ormal, **F**ast-phase **A**lternating, **R**efixation on **C**over **T**est. **Basta UM** sinal central para tratar como central e pedir imagem. Detalhe que salva vida: some ao HINTS o teste do sussurro/audição (HINTS "plus") — perda auditiva nova aguda pode ser AVC da artéria cerebelar ântero-inferior, não "labirintite".`},

  {h:"6. Lendo o nistagmo sem decorar tabelas", c:`Nistagmo é um "vai-e-volta" dos olhos: uma fase lenta (o labirinto empurrando) e uma fase rápida de correção (que dá o "nome" da direção). Regras práticas:

- **Periférico:** direção **fixa** (sempre para o lado são), horizonto-torcional, **inibido pela fixação** (por isso melhora ao olhar um ponto e piora com óculos de Frenzel/no escuro). Vem junto com HIT positivo e sem outros sinais de tronco.
- **Central:** **troca de direção** com o olhar (bate para a direita ao olhar à direita, para a esquerda ao olhar à esquerda), ou é **puramente vertical** (para cima/para baixo) ou **puramente torcional**. **Não** se inibe com a fixação. Costuma vir com skew, ataxia desproporcional ou outros sinais de tronco/cerebelo.

Se você só levar uma coisa: **nistagmo vertical puro ou que muda de direção = central**, ponto.`},

  {h:"7. Os cinco diagnósticos, um a um", c:`**1) VPPB (vertigem posicional paroxística benigna) — a mais comum.** Otólitos (cristais) se soltam do utrículo e caem num canal semicircular (na maioria, o **posterior**). Ao mexer a cabeça, os cristais "arrastam" o líquido e disparam **crises de segundos** (até ~1 min), sem sintoma auditivo. Diagnóstico e tratamento são **manobras** (seção 8), não remédio.

**2) Neurite vestibular.** Inflamação (provável viral) do nervo vestibular → **SVA contínua por dias**, com HIT **positivo**, nistagmo periférico e **sem** perda auditiva (se há hipoacusia junto, chama-se labirintite). Melhora em dias a semanas com a compensação central.

**3) Doença de Ménière.** Excesso de endolinfa (hidropisia). Crises **espontâneas de 20 min a 12 h** com a **tríade**: **hipoacusia neurossensorial flutuante** (grave nas frequências baixas) + **zumbido** + **plenitude aural** (ouvido "cheio"). Com os anos, a audição vai se perdendo.

**4) Migrânea vestibular.** É a causa **mais comum** de vertigem episódica espontânea recorrente. Paciente **com história de enxaqueca**, crises de **5 min a 72 h**, com sintomas migranosos (dor pulsátil, fotofobia) em pelo menos metade delas, e **audição preservada**. É o grande diferencial da Ménière — o que os separa é a **ausência de hipoacusia persistente**.

**5) AVC de fossa posterior — o que não se pode perder.** Cerebelo/tronco. Pode **imitar** um quadro periférico. Pistas: sinais **centrais** no HINTS, cefaleia/cervicalgia occipital nova, ataxia de tronco que não bate com a queixa, outros déficits (diplopia, disartria, dormência facial). Fatores de risco vascular **aumentam a suspeita, mas não decidem** — paciente vascular também tem neurite. Quem decide é o exame.`},

  {h:"8. Manobras por canal — a pegadinha que mais custa pontos", c:`A regra é simples e cai muito: **casar a manobra certa com o canal certo.**

- **Canal posterior (o mais comum):** diagnóstico pela manobra de **Dix-Hallpike** (deita-se o paciente com a cabeça rodada 45° e pendente; surge nistagmo torcional-para-cima, **com latência de alguns segundos e que se esgota** — fatigável). Tratamento pela manobra de **Epley** (recoloca os cristais no utrículo).
- **Canal horizontal/lateral:** diagnóstico pelo **head-roll (teste de Pagnini-McClure)** — paciente deitado de barriga para cima, roda-se a cabeça para cada lado. Tratamento pela manobra de **barbecue** (rotação de 360°) ou Gufoni.

**Onde você erra:** aplicar Dix-Hallpike quando o canal é o horizontal → o teste dá "negativo" e você descarta VPPB por engano. E tratar VPPB com remédio (betaistina, flunarizina) em vez de manobra — não resolve. **Supressores vestibulares** (anti-histamínicos, benzodiazepínicos) só servem para aliviar as primeiras 24–72 h da SVA; usados por muito tempo **atrapalham a compensação** do cérebro e mascaram o quadro.`},

  {h:"9. Tratamento e quando pedir imagem", c:`**Tratamento por diagnóstico:**
- **VPPB:** manobra de reposicionamento (Epley/barbecue). Reabilitação vestibular se recorrente.
- **Neurite vestibular:** sintomáticos por poucos dias + **corticoide** precoce em casos selecionados + **reabilitação vestibular** (o que mais acelera a recuperação).
- **Ménière:** restrição de sódio, diuréticos, sintomáticos nas crises; casos refratários → gentamicina intratimpânica/cirurgia.
- **Migrânea vestibular:** controle de gatilhos + **profilaxia de enxaqueca** (propranolol, topiramato, amitriptilina, flunarizina).
- **AVC:** protocolo de AVC (unidade de AVC, neuroimagem, reperfusão quando cabível).

**Imagem:** a **TC de crânio é ruim** para fossa posterior e para isquemia aguda — **TC normal NÃO exclui** AVC de tronco/cerebelo. O exame de escolha diante de suspeita central é a **RM com difusão** — lembrando que ela pode ser **falso-negativa nas primeiras 24–48 h** de um pequeno AVC de tronco, motivo pelo qual o **HINTS bem feito supera a RM precoce**. Peça imagem quando houver qualquer sinal central, cefaleia súbita associada, déficit focal, ou HINTS duvidoso em paciente de risco.`},

  {h:"10. O algoritmo em seis frases (leve isto para a prova)", c:`- Encaixe o caso em **uma** síndrome temporal: **aguda contínua**, **episódica desencadeada** ou **episódica espontânea**.
- **Episódica desencadeada** (segundos, posicional, sem audição) = **VPPB** → manobra do **canal certo** (posterior: Dix-Hallpike/Epley; horizontal: head-roll/barbecue).
- **Episódica espontânea** = **Ménière** (tem tríade auditiva) **ou** **migrânea vestibular** (sem hipoacusia, com enxaqueca). A audição decide.
- **Aguda contínua** = faça **HINTS**: qualquer sinal **central** (impulso normal, nistagmo que troca de direção, skew) → tratar como **AVC** e pedir **RM com difusão**.
- **Fator de risco vascular não decide** — o exame decide.
- **TC normal não afasta AVC** de fossa posterior.`},
 ],
 flashcards: [
  {p:"Quais são as três síndromes temporais da tontura?", r:"Aguda contínua (neurite × AVC); episódica desencadeada/posicional (VPPB); episódica espontânea (Ménière, migrânea vestibular)."},
  {p:"Na síndrome vestibular aguda, o que significa impulso cefálico NORMAL?", r:"Causa central (AVC) — o reflexo intacto num paciente muito tonto é bandeira vermelha."},
  {p:"Qual manobra diagnostica e qual trata o canal posterior?", r:"Diagnóstico: Dix-Hallpike. Tratamento: Epley."},
  {p:"E o canal horizontal?", r:"Diagnóstico: head-roll (Pagnini-McClure). Tratamento: barbecue (ou Gufoni)."},
  {p:"O que separa Ménière de migrânea vestibular?", r:"A audição: Ménière tem hipoacusia flutuante + zumbido + plenitude; migrânea vestibular tem audição preservada."},
  {p:"Sinais centrais no HINTS (sigla)?", r:"INFARCT: Impulse Normal, Fast-phase Alternating, Refixation on Cover Test."},
  {p:"TC de crânio normal afasta AVC de fossa posterior?", r:"Não — baixa sensibilidade; o exame é RM com difusão (que ainda pode ser falso-negativa nas primeiras 24–48 h)."},
 ],
 pegadinhas: [
  "Dix-Hallpike é para o canal POSTERIOR; canal horizontal usa head-roll (Pagnini-McClure) — manobra errada dá falso-negativo.",
  "SVA contínua com impulso cefálico NORMAL = suspeitar de AVC (central), não relaxar.",
  "TC de crânio tem baixa sensibilidade para isquemia de fossa posterior; RM com difusão é o exame (e pode ser falso-negativa cedo).",
  "Sem hipoacusia não é Ménière: pense migrânea vestibular ou VPPB.",
  "Betaistina/flunarizina não são primeira linha da VPPB — o tratamento é a manobra.",
  "HINTS só se aplica à SVA contínua COM nistagmo; não use em tontura episódica.",
  "Perda auditiva nova aguda + vertigem pode ser AVC da AICA, não 'labirintite' (HINTS plus).",
  "Fator de risco vascular sozinho não decide central × periférico — use o exame.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 135–138 (Síndrome Vestibular Aguda, Vertigem Recorrente, Vertigem Posicional, Síndrome Vestibular Crônica) e cap. 20 — Tonturas e Vertigem (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 2 — Tontura, Vertigem e Perda Auditiva.",
  "Adams & Victor — “Deafness, Dizziness, and Disorders of Equilibrium”; Sanvito — exame vestibular e nistagmo.",
  "Critérios da Bárány Society (VPPB, migrânea vestibular, Ménière).",
 ],
 questoes: [
  {foco:"HINTS central (seu ponto de erro)",
   enunciado:"Homem de 62 anos, hipertenso e diabético, com vertigem rotatória aguda e contínua há 6 horas. Ao exame: teste do impulso cefálico NORMAL, nistagmo que muda de direção conforme a direção do olhar e discreto desvio skew. Qual a conduta mais adequada?",
   alternativas:{a:"Manobra de Epley e alta",b:"Ressonância magnética com difusão por suspeita de AVC de fossa posterior",c:"Prescrever betaistina e reavaliar em 30 dias",d:"Tomografia de crânio, que se normal exclui causa grave"},
   correta:"b",
   comentario:"Os três achados (impulso cefálico normal, nistagmo que muda de direção e skew) são o padrão CENTRAL do HINTS — bandeira vermelha para AVC de fossa posterior, apesar da tontura isolada. A conduta é neuroimagem que enxergue a fossa posterior, ou seja, RM com difusão. Epley trata VPPB (crises de segundos, posicionais) — não é o caso. Betaistina/ambulatório protelam uma emergência. E a TC de crânio tem baixa sensibilidade para isquemia aguda de fossa posterior: TC normal NÃO exclui. Lembre do paradoxo: impulso cefálico normal na vertigem aguda contínua aponta para central."},
  {foco:"Canal e manobra correta (VPPB)",
   enunciado:"Mulher de 54 anos com crises de vertigem de segundos desencadeadas ao rolar na cama para os lados, sem hipoacusia. Suspeita-se de VPPB de canal horizontal. Qual a manobra diagnóstica apropriada?",
   alternativas:{a:"Dix-Hallpike",b:"Teste de impulso cefálico",c:"Head-roll (Pagnini-McClure)",d:"Manobra de Epley"},
   correta:"c",
   comentario:"A manobra diagnóstica depende do canal suspeito. O canal horizontal é avaliado pelo head-roll (Pagnini-McClure), com o paciente em decúbito dorsal girando a cabeça para cada lado. O Dix-Hallpike diagnostica o canal POSTERIOR (o mais comum) e daria falso-negativo aqui. O impulso cefálico avalia neurite/central, não posiciona canal. Epley é tratamento (reposicionamento) do canal posterior, não diagnóstico do horizontal — para o horizontal o tratamento é a manobra de barbecue. Pegadinha clássica: casar a manobra certa com o canal certo."},
  {foco:"Ménière × migrânea vestibular",
   enunciado:"Mulher de 40 anos com enxaqueca desde a adolescência apresenta episódios recorrentes de vertigem de minutos a poucas horas, metade com cefaleia e fotofobia, sem qualquer perda auditiva; audiometria intercrise normal. Qual o diagnóstico e a conduta?",
   alternativas:{a:"Doença de Ménière; restrição de sal e diurético",b:"VPPB; manobra de Epley",c:"Migrânea vestibular; profilaxia de enxaqueca",d:"Neurite vestibular; corticoide"},
   correta:"c",
   comentario:"Sem hipoacusia não é Ménière (que exige a tríade hipoacusia flutuante + zumbido + plenitude aural). O quadro recorrente, em paciente com enxaqueca, com sintomas migranosos em parte das crises e audição preservada, é migrânea vestibular, tratada com profilaxia da enxaqueca (propranolol, topiramato, amitriptilina). VPPB dura segundos e é posicional; neurite vestibular é episódio único, agudo e contínuo por dias. A audiometria normal é a chave que separa da Ménière."},
 ]
},

"NEURO|Neuroimunologia (EM / encefalites / NMO)": {
 titulo: "Neuroimunologia — desmielinizantes e encefalites autoimunes",
 half: "NEURO",
 resumo: "Um grupo de doenças em que o próprio sistema imune ataca o sistema nervoso. Parecem-se entre si, e é por isso que se erra. Este texto monta o mapa do zero — o que é desmielinização, o que é encefalite autoimune — e ensina a assinatura de cada doença (disseminação no tempo/espaço na EM; anti-AQP4 e mielite extensa na NMO; encefalopatia monofásica na ADEM; e o consumo de complemento que separa lúpus de anti-NMDA).",
 fontes: "Base: Tratado de Neurologia da ABN 3ª ed. (caps. 85–91), Merritt 13ª ed. (Seção 10 — Doenças Desmielinizantes e Inflamatórias), Adams & Victor (Multiple Sclerosis and Allied Demyelinating Diseases) e PCDT de Esclerose Múltipla (MS). Ver materiais_neuro.md.",
 notaErro: `Este é um dos temas em que você mais erra (100% em esclerose múltipla e em encefalite anti-NMDA). O motivo é que as doenças **se imitam** e a prova cobra a **pista que as separa** — não o quadro geral. As armadilhas:

- **Tratar NMO como esclerose múltipla.** É o erro que mais custa: o **interferon-beta** (e vários modificadores de EM) **PIORAM a neuromielite óptica**. Por isso, diante de neurite óptica grave ou mielite longa, **dose anti-AQP4 antes** de rotular EM (seção 3).
- **Confundir anti-NMDA com encefalite lúpica.** As duas dão psicose + crises em mulher jovem. A chave é o **complemento**: **baixo (consumido) = lúpus**; **normal = anti-NMDA** (seção 5).
- **Não segurar o conceito de McDonald.** A EM se prova por **disseminação no tempo E no espaço** — é a frase que o examinador quer ver (seção 2).
- **Esquecer o aciclovir empírico.** Numa encefalite aguda febril, cobre-se **herpes** até excluir, mesmo suspeitando de autoimune (seção 5).

**Como zerar:** para cada caso, pergunte — (1) é **desmielinizante** (surtos, RM com placas) ou **encefalite** (psicose/crise subaguda)? (2) qual o **anticorpo/pista laboratorial** (anti-AQP4? anti-NMDA? complemento baixo? bandas oligoclonais?)? (3) o tratamento **muda** conforme a resposta (não trate NMO como EM; não esqueça o aciclovir). As questões ao final batem nesses pontos.`,
 secoes: [
  {h:"1. O mapa do território", c:`Neuroimunologia reúne doenças em que o sistema imune ataca o próprio sistema nervoso. Para não se perder, divida em dois grandes grupos:

- **Doenças desmielinizantes:** o alvo é a **mielina** (a "capa" que isola os axônios e acelera o impulso). Sem mielina, o sinal fica lento ou some. Aqui estão a **esclerose múltipla (EM)**, a **neuromielite óptica (NMO)**, a **ADEM** e a **MOGAD**. Clínica típica: surtos de déficit neurológico (neurite óptica, mielite, síndromes de tronco).
- **Encefalites autoimunes:** anticorpos atacam **neurônios/receptores**, gerando quadro subagudo de **psicose, crises, alteração de comportamento e memória**. Exemplos: **anti-NMDA** e a **encefalite do lúpus** (LES neuropsiquiátrico).

Guardar essa divisão já orienta o raciocínio: "surtos com placas na RM" puxa para desmielinizante; "virou psicótico e teve crise em semanas" puxa para encefalite autoimune.`},

  {h:"2. Esclerose múltipla — a mais importante", c:`Doença inflamatória desmielinizante **crônica** do SNC, imunomediada, típica de **mulheres jovens (20–40 anos)**, com fatores de risco como baixa vitamina D, tabagismo e vírus Epstein-Barr. Linfócitos autorreativos cruzam a barreira hematoencefálica e formam **placas** de desmielinização; o dano axonal acumulado explica a incapacidade a longo prazo.

- **Fenótipos:** **remitente-recorrente** (surtos que remitem — o mais comum no início), **secundariamente progressiva** e **primariamente progressiva**.
- **Surto** = déficit neurológico focal > 24 h **na ausência de febre/infecção**. Cuidado com o **pseudossurto**: calor ou febre pioram temporariamente sintomas antigos (**fenômeno de Uhthoff**) — isso **não** é surto verdadeiro e não muda o tratamento de fundo.
- **Diagnóstico — critérios de McDonald (2017):** exige **disseminação no espaço (DIS)** — lesões em ≥2 de 4 topografias típicas (periventricular, cortical/justacortical, infratentorial, medular) — **e disseminação no tempo (DIT)** — lesões novas no seguimento, ou coexistência de lesões que captam e não captam gadolínio, **ou bandas oligoclonais no líquor** (que passaram a poder cumprir a DIT).
- **Líquor:** bandas oligoclonais de IgG (síntese intratecal) em >85%.
- **Tratamento:** **surto agudo → corticoide em pulso** (metilprednisolona); **doença → terapia modificadora** (acetato de glatirâmer, interferon, e agentes de alta eficácia como natalizumabe/ocrelizumabe conforme o caso).`},

  {h:"3. Neuromielite óptica (NMOSD / anti-AQP4) — a pegadinha do tratamento", c:`Não é "uma EM mais grave" — é outra doença: uma **astrocitopatia** por anticorpo contra o canal de água **aquaporina-4 (anti-AQP4)**.

- **Clínica:** **neurite óptica grave** (frequentemente bilateral, com pior recuperação visual) e **mielite longitudinalmente extensa** (lesão de **≥3 corpos vertebrais** na RM), além da síndrome de área postrema (**soluços/vômitos intratáveis**).
- **Confirmação:** anticorpo **anti-AQP4** positivo.
- **PEGADINHA CAPITAL:** o tratamento clássico da EM (**interferon-beta**, natalizumabe, fingolimode) **PIORA a NMO**. Por isso, sempre que houver neurite óptica grave/bilateral ou mielite extensa, **dose anti-AQP4 antes** de tratar como EM.
- **Tratamento:** surto → corticoide em pulso ± **plasmaférese**; manutenção → **imunossupressão** (rituximabe, eculizumabe, satralizumabe, inebilizumabe).`},

  {h:"4. ADEM e MOGAD", c:`- **ADEM (encefalomielite disseminada aguda):** desmielinização **monofásica**, em geral **pós-infecciosa ou pós-vacinal**, mais em **crianças**, com **encefalopatia** (rebaixamento/confusão — obrigatória para o diagnóstico) + lesões grandes e difusas de substância branca. O que a separa da EM: ser **monofásica** e cursar com **encefalopatia**. Trata-se com **corticoide em pulso** (± imunoglobulina/plasmaférese).
- **MOGAD** (doença associada ao anticorpo anti-MOG): espectro próprio — neurite óptica (muitas vezes bilateral/recorrente), quadros ADEM-like, mielite —, com **anti-MOG** positivo, costuma ter **melhor prognóstico** e boa resposta a corticoide, mas pode recair se a retirada for rápida.`},

  {h:"5. Encefalites autoimunes: anti-NMDA × lúpica (e o herpes no meio)", c:`- **Encefalite anti-receptor de NMDA:** mulher jovem, muitas vezes com pródromo viral, evolui em semanas com **sintomas psiquiátricos/psicose**, **crises**, **discinesias orofaciais**, disautonomia e rebaixamento; associação clássica a **teratoma de ovário**. **Complemento normal**; diagnóstico pelo **anti-NMDA no líquor**. Tratamento: imunoterapia (corticoide, imunoglobulina, plasmaférese; 2ª linha rituximabe/ciclofosfamida) + **retirada do tumor**.
- **Encefalite lúpica (LES neuropsiquiátrico):** psicose/crises/meningoencefalite no contexto de lúpus. **Pista decisiva: consumo de complemento (C3/C4 baixos)** com FAN/anti-dsDNA e clínica sistêmica (fotossensibilidade, artralgias). É o **complemento consumido** que aponta lúpus e não anti-NMDA. Tratamento: **pulso de metilprednisolona + imunossupressor** (ciclofosfamida).
- **Não esqueça o herpes:** diante de encefalite **aguda e febril** (sobretudo com acometimento temporal), inicie **aciclovir empírico** e colha PCR para HSV **até excluir** — a encefalite herpética mata se não tratada, e não custa cobrir enquanto se investiga a causa autoimune.`},

  {h:"6. Armadilhas de imagem e líquor", c:`- Lesão desmielinizante que capta contraste em **anel aberto** favorece desmielinização (contra neoplasia/abscesso, que fazem **anel fechado**).
- **Mielite curta e parcial** favorece EM; **mielite longa e central (≥3 segmentos)** favorece NMO.
- **Bandas oligoclonais** apoiam EM e podem cumprir a disseminação no tempo.
- **Complemento baixo** aponta lúpus; **anti-AQP4** aponta NMO; **anti-NMDA** aponta a encefalite homônima.
- Sempre excluir **mimetizadores**: neurossífilis, HIV, deficiência de B12/cobre, sarcoidose, vasculite.`},

  {h:"7. Síntese em seis frases", c:`- Separe **desmielinizante** (surtos/placas) de **encefalite autoimune** (psicose/crise subaguda).
- **EM** se prova por **disseminação no tempo E no espaço** (McDonald); surto → corticoide, doença → modificador.
- **NMO** (anti-AQP4) = neurite óptica grave + mielite ≥3 segmentos; **não** tratar como EM (interferon piora).
- **ADEM** = monofásica + **encefalopatia**, pós-infecciosa na criança.
- **Anti-NMDA** (complemento normal, teratoma) × **lúpus** (**complemento baixo**) — a pista é o complemento.
- Encefalite aguda febril: **aciclovir empírico** até excluir herpes.`},
 ],
 flashcards: [
  {p:"Frase-chave do diagnóstico de esclerose múltipla?", r:"Disseminação no tempo E no espaço (critérios de McDonald)."},
  {p:"O que separa a encefalite lúpica da anti-NMDA?", r:"Consumo de complemento (C3/C4 baixos) no lúpus; complemento normal na anti-NMDA."},
  {p:"Por que dosar anti-AQP4 antes de tratar como EM?", r:"Porque interferon-beta e vários modificadores de EM PIORAM a NMO."},
  {p:"O que define ADEM frente à EM?", r:"Quadro monofásico + encefalopatia (rebaixamento/confusão), em geral pós-infeccioso na criança."},
  {p:"Anti-NMDA em mulher jovem: o que rastrear?", r:"Teratoma de ovário."},
  {p:"Mielite de ≥3 segmentos vertebrais sugere?", r:"Neuromielite óptica (NMO), não EM (que faz mielite curta/parcial)."},
  {p:"Fenômeno de Uhthoff?", r:"Piora transitória de sintomas de EM com calor/febre — é pseudossurto, não surto verdadeiro."},
 ],
 pegadinhas: [
  "“Disseminação no tempo e no espaço” é a assinatura de McDonald (EM) — decore literalmente.",
  "Tratar NMO como EM (interferon-beta) PIORA a doença — dose anti-AQP4 antes.",
  "ADEM = monofásico + encefalopatia; EM não exige encefalopatia e é recorrente.",
  "Complemento baixo (C3/C4) na encefalite = pense lúpus (anti-NMDA tem complemento normal).",
  "Encefalite aguda febril: iniciar aciclovir empírico até excluir herpes.",
  "Anel aberto ao contraste favorece desmielinização; anel fechado, abscesso/tumor.",
  "Febre/calor causam pseudossurto (Uhthoff) — não é surto verdadeiro.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 85–91 (Esclerose Múltipla; Espectro da Neuromielite Óptica; ADEM; Encefalites Autoimunes e Paraneoplásicas; MOGAD/GFAP) (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 10 — Doenças Desmielinizantes e Inflamatórias.",
  "PCDT de Esclerose Múltipla (Ministério da Saúde/BVSMS); Adams & Victor — “Multiple Sclerosis and Allied Demyelinating Diseases”.",
 ],
 questoes: [
  {foco:"NMO × EM (pegadinha do tratamento)",
   enunciado:"Mulher de 34 anos com neurite óptica grave e mielite estendendo-se por 4 segmentos vertebrais; anticorpo anti-aquaporina-4 positivo. Qual conduta é INADEQUADA por poder agravar a doença?",
   alternativas:{a:"Corticoide em pulsoterapia no surto",b:"Plasmaférese se resposta insuficiente ao corticoide",c:"Interferon-beta como terapia de manutenção",d:"Rituximabe para manutenção"},
   correta:"c",
   comentario:"O quadro é neuromielite óptica (anti-AQP4+): neurite óptica grave + mielite longitudinalmente extensa (≥3 segmentos). O erro clássico é tratá-la como esclerose múltipla: o interferon-beta (e alguns modificadores de EM) PIORA a NMO. O correto no surto é corticoide em pulso, com plasmaférese se refratário, e manutenção com imunossupressor (rituximabe, azatioprina, eculizumabe). Por isso sempre se dosa anti-AQP4 antes de rotular como EM."},
  {foco:"Consumo de complemento (anti-NMDA × lúpica)",
   enunciado:"Mulher de 24 anos com primeira crise convulsiva, duas semanas de alteração de comportamento e alucinações. Exames: C3 e C4 baixos, FAN em título alto, líquor com pleocitose. Qual o diagnóstico mais provável?",
   alternativas:{a:"Encefalite lúpica (LES neuropsiquiátrico)",b:"Encefalite anti-receptor de NMDA",c:"Esclerose múltipla",d:"Encefalite herpética"},
   correta:"a",
   comentario:"O consumo de complemento (C3/C4 baixos) com fator antinuclear em título alto é a pista da encefalite lúpica (lúpus neuropsiquiátrico). A encefalite anti-NMDA também dá psicose/crises semelhantes, mas com complemento NORMAL e frequentemente discinesias orofaciais e teratoma de ovário. A esclerose múltipla não causa quadro psicótico agudo inaugural nem consumo de complemento. A herpética é febril, aguda, com acometimento temporal e PCR+ para HSV. Tratamento do LES neuropsiquiátrico: pulso de metilprednisolona + imunossupressor (ciclofosfamida)."},
  {foco:"McDonald / disseminação no tempo e espaço",
   enunciado:"Mulher de 29 anos com episódio de neurite óptica agora e história, há 3 meses, de dormência em membros que resolveu sozinha; RM com lesões periventriculares e medulares. Qual conceito confirma o diagnóstico de esclerose múltipla?",
   alternativas:{a:"Positividade para anti-aquaporina-4",b:"Disseminação no tempo e no espaço",c:"Encefalopatia com lesão monofásica",d:"Consumo de complemento sérico"},
   correta:"b",
   comentario:"O diagnóstico de EM se apoia na disseminação no tempo (surtos em momentos diferentes) e no espaço (lesões em sítios típicos distintos) — os critérios de McDonald. O anti-AQP4 positivo apontaria NMO, não EM. Encefalopatia monofásica sugere ADEM. Consumo de complemento remete a lúpus. Bandas oligoclonais no líquor apoiam, mas o conceito-chave cobrado é a dupla disseminação temporal e espacial."},
 ]
},

"NEURO|Neuroinfecção": {
 titulo: "Neuroinfecção — meningites, encefalites e o SNC no HIV",
 half: "NEURO",
 resumo: "Infecções do sistema nervoso são emergências em que minutos e condutas na ordem certa salvam vidas. Este texto constrói o tema do zero: como pensar meningite (agente por idade, quando NÃO puncionar sem atrasar o antibiótico), encefalite herpética (aciclovir empírico), neurocisticercose (tema regional que você erra) e o SNC no HIV (toxoplasmose × LEMP × linfoma), além de neurossífilis e tuberculose meníngea.",
 fontes: "Base: Tratado de Neurologia da ABN 3ª ed. (caps. 140–152), Merritt 13ª ed. (Seção 9 — Infecções do SNC), Adams & Victor (Infections of the Nervous System), Guia de Vigilância em Saúde e Diretrizes de Meningites do MS. Ver materiais_neuro.md.",
 notaErro: `Este é um tema ESSENCIAL em que você tem errado (100% em neurocisticercose), e o padrão do erro é **condutas fora de ordem** e **diferenciais do HIV trocados**. As armadilhas:

- **Atrasar o antibiótico da meningite** esperando a TC/o líquor. Quando há sinal de HIC/efeito de massa, a punção espera a imagem — **mas o antibiótico empírico (± dexametasona) NÃO espera** (seção 3). Marcar "adiar antibiótico até o líquor" é o erro que mata.
- **Não reconhecer a neurocisticercose** (procedência endêmica, crise epiléptica no adulto, cisto/calcificação): a prova quer que você lembre do **anticonvulsivante + albendazol com corticoide** e das ressalvas (seção 5).
- **Trocar toxoplasmose por LEMP no HIV.** Toxo = lesões com **realce anelar** e efeito de massa, CD4 baixo → **prova terapêutica**; LEMP = lesões de substância branca **sem** realce/efeito de massa, vírus **JC** → **otimizar TARV** (seção 6).
- **Esquecer o aciclovir na encefalite** aguda febril com acometimento temporal (seção 4).

**Como zerar:** para cada caso pergunte — (1) é **meníngeo** (rigidez, febre) ou **encefalítico** (alteração de comportamento/consciência, crises) ou **lesão focal**? (2) há **imunossupressão** (HIV, CD4)? (3) qual a **primeira medida** (antibiótico/aciclovir imediatos; quando adiar só a punção)? As questões ao final batem exatamente nisto.`,
 secoes: [
  {h:"1. O primeiro passo: onde a infecção está?", c:`"Neuroinfecção" abrange sítios diferentes, e localizar orienta tudo:

- **Meningite:** inflamação das meninges. Domínio da **febre + rigidez de nuca + cefaleia**, com sinais de Kernig/Brudzinski. O líquor é o exame-chave.
- **Encefalite:** inflamação do **parênquima** cerebral. Domínio da **alteração de comportamento/consciência, crises e déficits focais** (a herpética é o protótipo).
- **Meningoencefalite:** os dois juntos.
- **Lesões focais** (abscesso, neurocisticercose, toxoplasmose, tuberculoma, linfoma): dão **crise, déficit focal ou HIC**.

Duas perguntas de triagem mudam a conduta: o paciente é **imunossuprimido** (HIV/CD4, transplante)? Há **sinal de hipertensão intracraniana/efeito de massa** (papiledema, déficit focal, rebaixamento, crises)? Guarde-as.`},

  {h:"2. Meningite bacteriana aguda — agentes e liquor", c:`Emergência. Os **agentes variam pela idade/condição**:
- **Recém-nascido:** Streptococcus do grupo B, E. coli, Listeria.
- **Lactente/criança e adulto jovem:** meningococo (Neisseria meningitidis) e pneumococo (S. pneumoniae); Haemophilus caiu muito com a vacina.
- **> 50 anos, gestante, imunossuprimido:** acrescentar cobertura para **Listeria** (ampicilina).

**Liquor bacteriano típico:** pressão alta, aspecto turvo, **pleocitose de neutrófilos**, **glicose baixa** (consumo bacteriano) e **proteína alta**. O **Gram** ajuda a apontar o agente: **diplococos gram-negativos = meningococo**; diplococos gram-positivos = pneumococo.

**Pista de gravidade:** **petéquias/púrpura + choque** = doença **meningocócica** com **coagulação intravascular disseminada (CIVD)** / síndrome de Waterhouse-Friderichsen (hemorragia adrenal). Meningococo é de **notificação compulsória** e exige **quimioprofilaxia dos contatos** próximos (rifampicina/ceftriaxona/ciprofloxacino).`},

  {h:"3. A ordem que salva vida: antibiótico, dexametasona e quando NÃO puncionar", c:`Esta é a sequência mais cobrada — e a que você não pode inverter:

- **Se há sinal de HIC/efeito de massa** (papiledema, déficit focal, rebaixamento importante, crises, imunossupressão): faça **neuroimagem antes da punção lombar**, pelo risco de **herniação**.
- **MAS o tratamento não espera:** colha **hemoculturas** e **inicie o antibiótico empírico imediatamente** — não aguarde a TC nem o resultado do líquor. Atrasar o antibiótico aumenta a mortalidade.
- **Dexametasona:** administrar **antes ou junto** da primeira dose de antibiótico (benefício sobretudo no pneumococo; reduz sequela auditiva/neurológica).
- **Antibiótico empírico** conforme protocolo do MS/idade: em geral **ceftriaxona** (+ **vancomicina** onde há pneumococo resistente) e **ampicilina** quando há risco de Listeria (extremos de idade, gestante, imunossuprimido).

Regra de ouro para a prova: **"não puncionar antes da imagem" nunca significa "não tratar antes da imagem".**`},

  {h:"4. Encefalite viral — o herpes que não se pode perder", c:`A **encefalite herpética (HSV-1)** é a encefalite esporádica mais importante: febre, **alteração de comportamento/consciência**, crises e sinais focais, com predileção pelos **lobos temporais** (na RM e no EEG). O líquor pode ter hemácias/xantocromia (necrose) e a **PCR para HSV** confirma.

- **Conduta:** **aciclovir intravenoso empírico já na suspeita**, sem esperar a PCR — o atraso piora muito o prognóstico. Mantém-se até excluir/confirmar.
- Outros vírus: arboviroses (dengue, zika, chikungunya, e vigilância de Oropouche) podem dar encefalite/complicações neurológicas; enterovírus causam meningite viral (líquor com **linfócitos**, glicose normal, evolução benigna).`},

  {h:"5. Neurocisticercose — o tema regional que você erra", c:`Causada pela forma larvar da **Taenia solium** (ingestão de ovos, via fecal-oral), é a causa parasitária mais comum de **epilepsia adquirida** em áreas endêmicas (Brasil incluído).

- **Clínica:** depende da localização e do estágio. A forma parenquimatosa dá **crises epilépticas** (a apresentação mais comum no adulto que "começou a convulsionar"); as formas extraparenquimatosas (subaracnóidea/intraventricular) dão **hipertensão intracraniana e hidrocefalia**.
- **Imagem:** cistos em diferentes estágios — vesicular (com escólex, o "cisto com pontinho"), coloidal (com realce/edema) e **calcificado** (a "clássica" calcificação puntiforme).
- **Tratamento:** individualizado. Em geral **anticonvulsivante** para as crises + **albendazol** (± praziquantel nas formas com múltiplos cistos) **sempre associado a corticoide** (a morte dos cistos gera inflamação que pode piorar o edema). **Cuidado:** afastar cisticercose **ocular** antes de dar antiparasitário (risco de perda visual) e priorizar **derivação/manejo da HIC** nas formas com hidrocefalia antes do antiparasitário.`},

  {h:"6. O sistema nervoso no HIV — o diferencial das lesões focais", c:`Com CD4 baixo, três causas de lesão cerebral competem — e a prova cobra separá-las:

- **Neurotoxoplasmose:** a mais comum. **Múltiplas** lesões com **realce anelar** e **efeito de massa** (edema), CD4 geralmente < 100–200. Conduta: **prova terapêutica** com sulfadiazina + pirimetamina + ácido folínico; melhora clínica/radiológica em ~2 semanas confirma.
- **Leucoencefalopatia multifocal progressiva (LEMP):** vírus **JC**. Lesões de **substância branca**, multifocais, **SEM realce** e **sem efeito de massa**; déficit focal progressivo. O líquor tem **baixa sensibilidade/alta especificidade** (PCR do JC). Conduta: **otimizar a TARV** (reconstituição imune) — não há antiviral específico.
- **Linfoma primário do SNC:** lesão **única**, com realce, geralmente associada a EBV no líquor; entra quando a toxo "não responde" à prova terapêutica.

Fora essas, lembrar de **criptococose** (meningite fúngica — cefaleia arrastada, **tinta da China** e antígeno criptocócico; tratar com anfotericina + flucitosina e **controlar a pressão do líquor** com punções de alívio).`},

  {h:"7. Neurossífilis e tuberculose meníngea (não esquecer)", c:`- **Neurossífilis:** pode ser assintomática, meningovascular (AVC no jovem) ou parenquimatosa tardia (**paralisia geral** — demência/psicose; **tabes dorsalis** — ataxia sensitiva; **pupila de Argyll-Robertson** — acomoda mas não reage à luz). Confirma-se por **VDRL no líquor** (+ FTA-Abs). Tratamento: **penicilina G cristalina IV por 10–14 dias** (a benzatina IM **não** trata neurossífilis). O HIV acelera/agrava.
- **Tuberculose meníngea:** meningite **subaguda** (dias a semanas), com **líquor de predomínio linfocítico, glicose baixa e proteína muito alta**, acometimento de **base do crânio** (paralisias de nervos cranianos, hidrocefalia) e AVC por vasculite. Tratamento: **esquema RIPE + corticoide**.`},

  {h:"8. Síntese em seis frases", c:`- Localize: **meníngeo** (rigidez/febre) × **encefalítico** (comportamento/consciência/crise) × **lesão focal**.
- Meningite com sinal de HIC: **imagem antes da punção**, mas **antibiótico + dexametasona imediatos** (nunca atrase o antibiótico).
- **Petéquias + choque** = meningococo + **CIVD**; notificar e fazer **quimioprofilaxia** dos contatos.
- Encefalite aguda febril temporal: **aciclovir empírico** já.
- Adulto que "começou a ter crises" em área endêmica: pense **neurocisticercose** (anticonvulsivante + albendazol **com corticoide**; afastar cisto ocular/HIC).
- HIV: **toxo** (anelar, efeito de massa → prova terapêutica) × **LEMP** (branca, sem realce, JC → otimizar TARV).`},
 ],
 flashcards: [
  {p:"Meningite com sinais de HIC: e o antibiótico?", r:"Neuroimagem antes da punção, mas antibiótico empírico (± dexametasona) IMEDIATO — não esperar."},
  {p:"Petéquias + choque + meningite = ?", r:"Doença meningocócica (diplococo gram-negativo) com CIVD/Waterhouse-Friderichsen; notificar e fazer quimioprofilaxia dos contatos."},
  {p:"Encefalite aguda febril com acometimento temporal — conduta imediata?", r:"Aciclovir IV empírico (suspeita de HSV), sem esperar a PCR."},
  {p:"Adulto com primeira crise epiléptica e cisto/calcificação cerebral em área endêmica?", r:"Neurocisticercose — anticonvulsivante + albendazol com corticoide (afastar cisto ocular e tratar HIC antes)."},
  {p:"HIV: toxoplasmose × LEMP na imagem?", r:"Toxo = múltiplas lesões com realce anelar e efeito de massa (prova terapêutica); LEMP = substância branca, sem realce/massa, vírus JC (otimizar TARV)."},
  {p:"Confirmação e tratamento da neurossífilis?", r:"VDRL no líquor; penicilina G cristalina IV 10–14 dias (benzatina não trata)."},
 ],
 pegadinhas: [
  "‘Não puncionar antes da imagem’ nunca significa ‘não tratar’: o antibiótico/aciclovir empírico não espera.",
  "Diplococo gram-negativo no líquor = meningococo; petéquias + choque = CIVD.",
  "Dexametasona antes/junto da 1ª dose de antibiótico (benefício no pneumococo).",
  "Neurocisticercose: dar corticoide junto do antiparasitário (a morte dos cistos inflama); afastar cisto ocular antes.",
  "LEMP não tem realce nem efeito de massa (vírus JC); toxo tem anel e edema.",
  "Penicilina benzatina IM NÃO trata neurossífilis — tem que ser cristalina IV.",
  "Meningite viral/TB tem líquor linfocítico; a bacteriana é neutrofílica com glicose baixa.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 140–152 (Meningites; AIDS e SN; Encefalite Viral; Neurocisticercose; Neurossífilis; Neurotuberculose; Fúngicas) (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 9 — Infecções do Sistema Nervoso Central.",
  "MS — Guia de Vigilância em Saúde e Diretrizes para Enfrentamento das Meningites; Adams & Victor — “Infections of the Nervous System”.",
 ],
 questoes: [
  {foco:"Neurocisticercose (seu ponto de erro)",
   enunciado:"Homem de 34 anos, procedente de zona rural, tem a primeira crise tônico-clônica da vida; TC mostra uma lesão cística com um pequeno ponto interno (escólex) e discreto edema. Qual a conduta mais adequada?",
   alternativas:{a:"Anticonvulsivante isolado, sem tratar o parasita",b:"Albendazol associado a corticoide, além do anticonvulsivante",c:"Praziquantel isolado, sem corticoide",d:"Apenas observação, pois a lesão é benigna"},
   correta:"b",
   comentario:"Primeira crise no adulto de área endêmica + cisto com escólex = neurocisticercose parenquimatosa. O tratamento junta anticonvulsivante (para as crises) e antiparasitário — albendazol (± praziquantel em múltiplos cistos) SEMPRE com corticoide, porque a morte dos cistos gera inflamação e edema que podem piorar o quadro. Anticonvulsivante isolado não trata o parasita quando há cisto viável; antiparasitário sem corticoide arrisca piora inflamatória; e não é caso de só observar. Antes do antiparasitário, afastar cisticercose ocular e, nas formas com hidrocefalia, manejar a HIC."},
  {foco:"Ordem meningite: antibiótico não espera",
   enunciado:"Homem de 54 anos com febre, rigidez de nuca, papiledema e hemiparesia. Qual a conduta correta quanto à punção lombar e ao antibiótico?",
   alternativas:{a:"Punção lombar imediata antes de qualquer antibiótico",b:"Neuroimagem antes da punção; iniciar antibiótico empírico sem esperar o líquor",c:"Adiar o antibiótico até o resultado do líquor",d:"Nenhum antibiótico até a tomografia ficar pronta"},
   correta:"b",
   comentario:"Há sinais de HIC/efeito de massa (papiledema, déficit focal): a punção lombar deve aguardar a neuroimagem pelo risco de herniação. Mas o antibiótico empírico (± dexametasona antes/junto da 1ª dose) NÃO deve esperar — inicia-se logo após colher hemoculturas, pois o atraso aumenta a mortalidade. Puncionar antes da imagem nesse contexto é perigoso; adiar o antibiótico pela imagem/líquor é o erro que mata."},
  {foco:"HIV: toxoplasmose × LEMP",
   enunciado:"Homem com HIV e CD4 de 40 apresenta déficit focal progressivo; RM mostra lesões na substância branca, SEM realce ao contraste e sem efeito de massa. Qual o diagnóstico mais provável e a conduta?",
   alternativas:{a:"Neurotoxoplasmose; prova terapêutica com sulfadiazina e pirimetamina",b:"Leucoencefalopatia multifocal progressiva (vírus JC); otimizar a terapia antirretroviral",c:"Linfoma primário do SNC; radioterapia imediata",d:"Meningite criptocócica; anfotericina B"},
   correta:"b",
   comentario:"Lesões de substância branca, multifocais, SEM realce e SEM efeito de massa, em HIV com CD4 muito baixo, apontam para LEMP (vírus JC); o líquor tem alta especificidade (PCR do JC) e não há antiviral específico — a conduta é otimizar a TARV para reconstituição imune. A neurotoxoplasmose faria lesões com realce anelar e efeito de massa (aí sim prova terapêutica). Linfoma primário costuma ser lesão única com realce (EBV no líquor). Criptococose é meningite (tinta da China/antígeno), não esse padrão de substância branca."},
 ]
},

"NEURO|Medula / cauda equina": {
 titulo: "Medula espinal, cauda equina e mielopatias",
 half: "NEURO",
 resumo: "O eixo é topográfico e de urgência: reconhecer a emergência (compressão medular / cauda equina), pedir o exame certo (RM) sem atraso, e localizar a lesão pelo padrão (nível sensitivo, NMS × NMI, sela e esfíncteres).",
 secoes: [
  {h:"1. Localização: as síndromes medulares", c:`A medula organiza-se em tratos cujo acometimento gera síndromes reconhecíveis:
- **Transecção completa:** perda motora e sensitiva abaixo do nível + disfunção esfincteriana; na fase aguda, **choque medular** (flacidez e arreflexia transitórias).
- **Síndrome de Brown-Séquard (hemissecção):** paresia e perda de propriocepção **ipsilaterais** + perda de dor/temperatura **contralateral** (2–3 níveis abaixo).
- **Síndrome centromedular:** fraqueza que predomina em membros superiores, dissociação sensitiva "em capa"; típica de trauma em hiperextensão no idoso com canal estreito.
- **Síndrome da artéria espinal anterior:** paraplegia + perda de dor/temperatura com **preservação da propriocepção** (cordões posteriores poupados).
- **Cordões posteriores** (B12, tabes, cobre): ataxia sensitiva, Romberg positivo.`},

  {h:"2. Cauda equina × cone medular", c:`Ponto clássico de prova:
- **Síndrome da cauda equina:** lesão das raízes lombossacras (abaixo de L1-L2). Predomina **neurônio motor inferior** — fraqueza assimétrica, arreflexia, **dor radicular intensa**, **anestesia em sela**, retenção urinária que tende a ser mais tardia. É **emergência cirúrgica**.
- **Síndrome do cone medular:** lesão do segmento sacral da medula. Mais **simétrica**, com disfunção **esfincteriana e sexual precoce**, anestesia em sela, dor menos proeminente, podendo ter sinais de neurônio motor superior (Babinski).

Na prática, muitos casos são mistos (conus-cauda). O que importa é reconhecer a bandeira e agir.`},

  {h:"3. Emergências: compressão medular e cauda equina", c:`A **síndrome medular aguda** com déficit motor/sensitivo, nível sensitivo e disfunção esfincteriana é emergência. Causas: hérnia discal maciça, trauma, abscesso epidural (febre + dor + déficit, sobretudo em usuário de droga IV/diabético), hematoma epidural (anticoagulado) e **compressão medular metastática** (próstata, mama, pulmão, mieloma).

Conduta:
- **RM de toda a coluna** de urgência (o exame de escolha — não TC, não eletroneuromiografia).
- Na compressão metastática: **corticoide em alta dose (dexametasona) imediatamente**, sem esperar a radioterapia, e definição de RT/cirurgia (cirurgia se instabilidade, tumor radiorresistente ou compressão única com boa expectativa).
- Antibiótico empírico + drenagem no abscesso; reversão da anticoagulação no hematoma.

**Bandeira vermelha da dor lombar:** déficit progressivo, retenção/incontinência, anestesia em sela, febre, perda ponderal, câncer conhecido, dor que piora deitado/à noite.`},

  {h:"4. Mielopatia cervical espondilótica × ELA", c:`Causa mais comum de mielopatia no idoso. Marcha espástica progressiva, mãos "desajeitadas", **sinais de NMS abaixo da lesão** (hiper-reflexia, Babinski, Hoffmann) com NMI no nível. O diferencial cobrado é **ELA**: a ELA combina NMS + NMI **sem** qualquer alteração sensitiva e **sem nível sensitivo**. A presença de hipoestesia/nível sensitivo aponta para a mielopatia compressiva (RM cervical confirma; casos progressivos são cirúrgicos).`},

  {h:"5. Mielopatias não compressivas (regionais e sistêmicas)", c:`- **Neuroesquistossomose medular:** tema regional (Bahia/Nordeste). Adolescente/jovem de área rural com dor lombar, mielorradiculopatia e eosinofilia; diagnóstico por biópsia retal + sorologia para S. mansoni; tratamento com **corticoide + praziquantel**.
- **Mielopatia por HTLV-1 (paraparesia espástica tropical):** paraparesia espástica progressiva + bexiga neurogênica em área endêmica.
- **Degeneração combinada subaguda** (deficiência de **B12**, e cobre): cordões posteriores + laterais; tratável — repor precocemente.
- **Mielite transversa** (idiopática/NMO/MOGAD/pós-infecciosa): déficit em horas-dias; investigar e tratar com corticoide.`},
 ],
 flashcards: [
  {p:"Tríade que grita cauda equina?", r:"Anestesia em sela + retenção urinária + déficit motor de MMII (com dor radicular) → RM urgente."},
  {p:"Exame de escolha na síndrome medular aguda?", r:"Ressonância magnética da coluna (toda a coluna se suspeita de metástase)."},
  {p:"O que torna a ELA improvável numa mielopatia?", r:"Alteração sensitiva com nível sensitivo (a ELA não tem déficit sensitivo)."},
  {p:"Compressão medular metastática: primeira medida junto à RM?", r:"Corticoide em alta dose (dexametasona), imediatamente."},
  {p:"Brown-Séquard: o que fica contralateral?", r:"A perda de dor e temperatura (motor e propriocepção são ipsilaterais)."},
 ],
 pegadinhas: [
  "Anestesia em sela + retenção urinária + dor lombar = cauda equina até prova em contrário → RM URGENTE.",
  "O exame de escolha é RM, não TC nem eletroneuromiografia.",
  "Mielopatia cervical tem alteração sensitiva/nível sensitivo; ELA NÃO — esse é o diferencial.",
  "Compressão medular metastática: corticoide em alta dose já, sem esperar a radioterapia.",
  "Dor lombar que piora deitado/à noite e desperta o paciente é bandeira vermelha.",
  "Febre + dor nas costas + déficit = abscesso epidural (não perder em diabético/usuário de droga IV).",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), cap. 114 — Radiculopatias e Plexopatias; cap. 169 — Mielopatias Metabólicas e Tóxicas; cap. 146 — Neuroesquistossomose; cap. 153 — Mielopatia associada ao HTLV-1 (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 15 — Doenças da Medula Espinal; Seção 2 — Síndromes Raquimedulares Agudas.",
  "Adams & Victor — “Diseases of the Spinal Cord” e “Pain in the Back, Neck, and Extremities”.",
 ],
 questoes: [
  {foco:"Reconhecer a emergência e o exame (seu ponto de erro)",
   enunciado:"Homem de 45 anos com lombalgia há meses, agora com fraqueza de membros inferiores, anestesia perineal e retenção urinária com gotejamento há 24 horas. Qual a conduta imediata?",
   alternativas:{a:"Repouso e AINE, reavaliar em 2 semanas",b:"Eletroneuromiografia ambulatorial",c:"Ressonância magnética de coluna lombossacra de urgência",d:"Tomografia de crânio"},
   correta:"c",
   comentario:"O quadro é síndrome da cauda equina — emergência neurocirúrgica. A conduta é RM de coluna lombossacra de urgência para confirmar e localizar a compressão, seguida de descompressão precoce (previne incontinência permanente). Repouso/AINE atrasam uma emergência. A eletroneuromiografia não é o exame agudo de escolha. TC de crânio não tem relação. Tríade a memorizar: anestesia em sela + retenção urinária + déficit motor de MMII."},
  {foco:"Mielopatia cervical × ELA",
   enunciado:"Homem de 60 anos com marcha espástica progressiva, hiper-reflexia e Babinski, mas também com hipoestesia em mãos e nível sensitivo cervical. Qual dado torna a ELA improvável?",
   alternativas:{a:"A presença de sinais de neurônio motor superior",b:"A alteração sensitiva com nível sensitivo",c:"A marcha espástica",d:"A idade do paciente"},
   correta:"b",
   comentario:"A ELA acomete neurônios motores superior e inferior SEM alteração sensitiva. A presença de hipoestesia com nível sensitivo aponta para lesão medular (mielopatia cervical espondilótica), não ELA. Sinais de neurônio motor superior e marcha espástica ocorrem em ambas e não discriminam. A idade também não separa. RM cervical confirma a compressão; a ausência de déficit sensitivo é justamente o que caracteriza a ELA."},
  {foco:"Compressão medular metastática",
   enunciado:"Homem de 63 anos com câncer de próstata metastático, dor dorsal que piora deitado e paraparesia com nível sensitivo torácico. Além da RM de toda a coluna, qual medida deve ser iniciada imediatamente?",
   alternativas:{a:"Corticoide em dose alta",b:"Anticoagulação plena",c:"Aguardar biópsia antes de qualquer tratamento",d:"Punção lombar de alívio"},
   correta:"a",
   comentario:"Na compressão medular metastática, o corticoide em dose alta (dexametasona) deve ser iniciado imediatamente para reduzir o edema e proteger a função neurológica, enquanto se define radioterapia e/ou cirurgia — não se espera a RT. Anticoagulação não trata a compressão. Esperar biópsia atrasa e pode custar a deambulação. Punção lombar é contraindicada/inútil aqui e pode piorar. Dor que piora deitado/à noite + nível sensitivo em paciente oncológico é a apresentação clássica."},
 ]
},

"NEURO|Demências": {
 titulo: "Demências e neurologia do envelhecimento",
 half: "NEURO",
 resumo: "Demência não é 'ficar esquecido com a idade': é um declínio adquirido que rouba a autonomia. Este texto reconstrói o tema do zero — o que é (e o que não é) demência, como investigar direito, como reconhecer cada tipo, quais causas são reversíveis (não perca a hidrocefalia de pressão normal) e como manejar os sintomas de comportamento na ORDEM certa.",
 fontes: "Base: Tratado de Neurologia da ABN 3ª ed. (caps. 96–102 e 106), Merritt 13ª ed. (Seção 6 — Demência; Seção 2 — Delirium/Memória), Adams & Victor (Dementia and the Neurology of Aging) e PCDT de Alzheimer (MS). Ver materiais_neuro.md.",
 notaErro: `Este domínio te derruba porque as questões quase nunca perguntam "qual a demência?" — elas testam **conduta e armadilhas**. Os tropeços clássicos, todos endereçados neste texto:

- **Tratar o comportamento com remédio primeiro.** Diante de agitação, a resposta que a prova quer é **medida não farmacológica**; antipsicótico é exceção (risco, dose baixa, tempo curto). Se você marca "antipsicótico/benzodiazepínico de rotina", erra (seção 6).
- **Não reconhecer a causa REVERSÍVEL.** A hidrocefalia de pressão normal (tríade de Hakim-Adams) é a pegadinha nº 1: o examinador quer que você pense **tap test → derivação**, não donepezila (seção 5).
- **Dar antipsicótico na demência com corpos de Lewy.** Há **hipersensibilidade** — pode causar rigidez grave. A prova adora esse caso (flutuação + alucinação visual + parkinsonismo) (seções 4 e 6).
- **Confundir delirium com demência.** Delirium é **agudo, flutuante, com déficit de atenção** e causa orgânica reversível. Rotular como demência atrasa o tratamento (seção 1).

**Como zerar:** para todo caso, faça três perguntas — (1) é agudo/flutuante (delirium) ou crônico? (2) há causa **reversível** a excluir (NPH, B12, tireoide, sífilis, subdural, depressão)? (3) qual o **padrão** (memória? comportamento? flutuação/alucinação? degraus vasculares?) e, com isso, qual a **conduta** (incluindo o cuidado com antipsicótico)? As questões ao final batem nesses quatro pontos.`,
 secoes: [
  {h:"1. O que é demência — e o que não é", c:`**Demência (transtorno neurocognitivo maior)** é um declínio cognitivo **adquirido** (a pessoa perdeu algo que já tinha), **persistente** e que afeta **pelo menos um domínio** cognitivo a ponto de **comprometer a autonomia** (finanças, medicações, atividades do dia a dia). Os domínios são: memória, funções executivas (planejar, julgar), linguagem, habilidades visuoespaciais e cognição social.

Compare com o que NÃO é demência:
- **Envelhecimento normal:** lentifica, esquece nomes na ponta da língua, mas **não perde funcionalidade**.
- **Comprometimento cognitivo leve (CCL):** há declínio objetivo em testes, porém **sem** perda funcional relevante. É um estágio de risco (parte evolui para demência, parte não).
- **Delirium:** o grande impostor (ver abaixo).

**Delirium × demência — a distinção que mais cai:** delirium tem início **agudo** (horas a dias), curso **flutuante**, e o marcador é a **alteração da atenção** e do nível de consciência, com uma causa orgânica por trás (infecção, fármaco, distúrbio metabólico, dor, retenção urinária). É **reversível** e uma emergência. Demência é insidiosa, estável no dia a dia e com atenção relativamente preservada no início. Regra prática: **todo idoso que "piorou da cabeça" de repente tem delirium até prova em contrário** — procure e trate a causa antes de falar em demência.`},

  {h:"2. Como investigar (o que pedir, e de quem colher a história)", c:`A investigação começa na **anamnese com um informante** (familiar/cuidador) — o paciente costuma subestimar o próprio déficit. Caracterize: o que mudou, em quanto tempo, se foi gradual ou "em degraus", e o impacto funcional.

- **Rastreios cognitivos:** MEEM (Mini-Exame do Estado Mental) e MoCA (mais sensível para disfunção executiva/CCL); avaliação neuropsicológica quando há dúvida.
- **Laboratório para causas reversíveis (sempre):** **TSH/T4**, **vitamina B12** (± folato), função renal/hepática, cálcio, sódio, glicose, e **sorologias** (sífilis/VDRL, HIV) conforme o contexto.
- **Neuroimagem estrutural (TC ou, melhor, RM):** exclui hematoma subdural, tumor, hidrocefalia e caracteriza atrofia/lesões vasculares.
- **Biomarcadores** (líquor com beta-amiloide baixo e tau/p-tau altos; PET amiloide/FDG): confirmam Alzheimer em casos selecionados/atípicos.

O objetivo dessa etapa é duplo: **rotular o tipo** e, principalmente, **não deixar passar uma causa tratável**.`},

  {h:"3. Doença de Alzheimer — a mais comum", c:`Neurodegeneração com acúmulo de **placas de beta-amiloide** e **emaranhados de tau**, começando em regiões da memória (hipocampo/córtex entorrinal) e se espalhando.

- **Clínica:** início insidioso e progressão lenta; **memória episódica** primeiro (esquece fatos recentes, repete perguntas, perde objetos), depois funções executivas, linguagem e orientação visuoespacial; nas fases avançadas, dependência total.
- **Diagnóstico:** clínico + rastreios + exclusão de reversíveis; biomarcadores quando necessário.
- **Tratamento sintomático cognitivo:** **anticolinesterásicos** (donepezila, rivastigmina, galantamina) na fase leve-moderada; **memantina** (antagonista NMDA) na moderada-grave, isolada ou associada ao anticolinesterásico. Esses fármacos **estabilizam sintomas**, não curam. Anticorpos anti-amiloide são novidade de uso restrito.
- **Sempre** tratar comorbidades, revisar fármacos que pioram cognição (anticolinérgicos, benzodiazepínicos) e apoiar o cuidador.`},

  {h:"4. Os diferenciais — como distinguir os tipos", c:`- **Demência vascular / comprometimento cognitivo vascular:** curso **em degraus** (piora, estabiliza, piora), fatores de risco vascular, achados focais no exame e lesões vasculares na imagem; costuma afetar **funções executivas** e velocidade de processamento antes da memória.
- **Demência com corpos de Lewy:** tríade **flutuação cognitiva** + **alucinações visuais precoces e bem formadas** + **parkinsonismo**; soma-se o transtorno comportamental do sono REM. **Hipersensibilidade a antipsicóticos** (evitar). Regra: se o parkinsonismo vem **junto ou antes** da demência, pense Lewy; se a demência surge **anos depois** de um Parkinson estabelecido, é demência da doença de Parkinson.
- **Demência frontotemporal (variante comportamental):** muda a **personalidade/comportamento** primeiro — desinibição, apatia, perda de empatia, comportamentos compulsivos/alimentares — em paciente **mais jovem** (50–65 anos), com memória relativamente preservada no início.
- **Doença priônica (Creutzfeldt-Jakob):** **demência rapidamente progressiva** (semanas a meses) + **mioclonias** + ataxia — pense nela quando a evolução é "rápida demais".`},

  {h:"5. Causas reversíveis — a pegadinha que você não pode perder", c:`Antes de rotular como degenerativa, exclua o que tem tratamento:

- **Hidrocefalia de pressão normal (HPN):** a estrela das provas. **Tríade de Hakim-Adams** — (1) **distúrbio de marcha** "magnética"/apráxica (pés como colados no chão; é o sintoma **mais precoce e o que mais melhora**), (2) **incontinência urinária**, (3) **declínio cognitivo**. Imagem com **ventriculomegalia desproporcional à atrofia**. O **tap test** (punção lombar de alívio de ~30–50 mL) que melhora a marcha **prediz boa resposta** à **derivação ventriculoperitoneal**. Reconhecer isso = não medicar como Alzheimer.
- **Deficiência de vitamina B12**, **hipotireoidismo**, **neurossífilis**, **HIV**.
- **Hematoma subdural crônico** (idoso, queda, anticoagulante).
- **Depressão (pseudodemência):** humor deprimido com queixa cognitiva que melhora ao tratar a depressão.
- **Fármacos** (anticolinérgicos, benzodiazepínicos, opioides).`},

  {h:"6. Manejo dos sintomas comportamentais — a ordem correta", c:`Os sintomas comportamentais e psicológicos da demência (agitação, agressividade, perambulação, psicose, insônia, apatia) são a maior causa de sofrimento e de internação — e o ponto onde a conduta é mais cobrada.

- **Primeira linha SEMPRE é não farmacológica:** procure e trate **gatilhos** (dor, fome, sede, constipação, retenção urinária, infecção, ambiente barulhento), estabeleça **rotina**, higiene do sono, comunicação calma e **orientação ao cuidador**. Muitas "crises" somem ao resolver uma dor ou uma ITU.
- **Antipsicótico apenas se houver risco** (agressividade/psicose com perigo a si ou a outros), na **menor dose e pelo menor tempo**, cientes do **aumento de mortalidade e AVC** em idosos com demência (alerta de bula).
- **Evitar benzodiazepínicos** (pioram cognição, quedas, delirium) e anticolinérgicos.
- **Demência com corpos de Lewy:** **não** usar antipsicótico (hipersensibilidade → rigidez grave, piora); se imprescindível, um atípico (ex.: quetiapina) com muita cautela. Anticolinesterásicos costumam **ajudar** nas alucinações desses pacientes.`},

  {h:"7. Síntese em seis frases (leve para a prova)", c:`- Demência = declínio **adquirido** + **perda de autonomia**; delirium = **agudo, flutuante, desatento** → sempre excluir primeiro.
- **Investigue causas reversíveis** em todo caso: TSH, B12, VDRL, imagem — não perca a **HPN**.
- **HPN** = marcha magnética + incontinência + cognição; **tap test → derivação** (não donepezila).
- **Alzheimer** = memória episódica primeiro; trata com **anticolinesterásico** (± memantina), que estabiliza, não cura.
- **Corpos de Lewy** = flutuação + alucinação visual + parkinsonismo; **evitar antipsicótico**.
- Sintoma de comportamento = **não farmacológico primeiro**; antipsicótico só se risco, dose baixa, curto prazo.`},
 ],
 flashcards: [
  {p:"Como diferenciar delirium de demência?", r:"Delirium: início agudo, curso flutuante, déficit de ATENÇÃO, causa orgânica reversível."},
  {p:"Tríade da hidrocefalia de pressão normal e o que ela prediz o tratamento?", r:"Marcha magnética + incontinência urinária + declínio cognitivo; tap test que melhora a marcha → derivação ventriculoperitoneal."},
  {p:"Demência com flutuação + alucinações visuais precoces + parkinsonismo?", r:"Demência com corpos de Lewy — evitar antipsicóticos (hipersensibilidade)."},
  {p:"Primeira linha para agitação na demência?", r:"Medidas não farmacológicas; antipsicótico só se risco, dose baixa e curto prazo."},
  {p:"Demência que muda a personalidade antes da memória, no paciente mais jovem?", r:"Demência frontotemporal (variante comportamental)."},
  {p:"Demência rapidamente progressiva com mioclonias?", r:"Doença priônica (Creutzfeldt-Jakob)."},
  {p:"Exames mínimos para causas reversíveis de demência?", r:"TSH/T4, vitamina B12, VDRL (± HIV), função metabólica e neuroimagem."},
 ],
 pegadinhas: [
  "Sintoma comportamental: primeira linha é NÃO farmacológica; antipsicótico só se necessário, dose baixa, tempo curto.",
  "Corpos de Lewy: hipersensibilidade a antipsicóticos — evitar (podem causar rigidez grave).",
  "Hidrocefalia de pressão normal é reversível: tríade de Hakim-Adams + resposta ao tap test → derivação.",
  "Excluir delirium (agudo, atencional) e causas reversíveis (B12, TSH, sífilis) antes de rotular demência.",
  "Na frontotemporal, muda a personalidade/comportamento antes da memória — e o paciente é mais jovem.",
  "Demência rapidamente progressiva + mioclonias = pensar em doença priônica.",
  "A marcha é o primeiro e mais reversível sintoma da HPN — valorize-a.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 96–102 (Demências; Corpos de Lewy; Alzheimer; Frontotemporal; Cognitivo Vascular; Hidrocefalia de Pressão Normal) e cap. 106 — Tratamento dos Transtornos Comportamentais nas Demências (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 6 — Demência; Seção 2 — Delirium / Demência e Perda de Memória.",
  "PCDT da Doença de Alzheimer (Ministério da Saúde/BVSMS); Adams & Victor — “Dementia and the Neurology of Aging”.",
 ],
 questoes: [
  {foco:"Manejo de sintoma comportamental",
   enunciado:"Mulher de 78 anos com doença de Alzheimer apresenta agitação vespertina e insônia. Qual a conduta inicial mais adequada?",
   alternativas:{a:"Iniciar antipsicótico de rotina",b:"Benzodiazepínico ao deitar",c:"Medidas não farmacológicas (rotina, ambiente, orientação do cuidador)",d:"Suspender o anticolinesterásico"},
   correta:"c",
   comentario:"Sintomas comportamentais e psicológicos da demência têm como primeira linha as medidas não farmacológicas: ajuste do ambiente, rotina, higiene do sono, manejo de gatilhos e orientação ao cuidador. Antipsicótico só se houver risco (agressividade/psicose com perigo), na menor dose e pelo menor tempo — de rotina, não. Benzodiazepínico piora cognição e quedas no idoso. Suspender o anticolinesterásico não trata a agitação e retira benefício cognitivo."},
  {foco:"Hidrocefalia de pressão normal (reversível)",
   enunciado:"Homem de 74 anos com marcha lenta e “grudada no chão”, incontinência urinária e declínio cognitivo há 1 ano; TC com ventriculomegalia desproporcional à atrofia. Qual conduta confirma a hipótese e orienta o tratamento?",
   alternativas:{a:"Iniciar donepezila e reavaliar em 6 meses",b:"Tap test (punção lombar de alívio); se houver melhora, derivação ventriculoperitoneal",c:"Antipsicótico para a marcha",d:"Anticoagulação para provável causa vascular"},
   correta:"b",
   comentario:"A tríade de Hakim-Adams (marcha magnética + incontinência + declínio cognitivo) com ventriculomegalia sugere hidrocefalia de pressão normal, uma causa reversível. O tap test (retirada de liquor) que melhora a marcha prediz boa resposta à derivação ventriculoperitoneal. Donepezila trata Alzheimer, não a hidrocefalia. Antipsicótico não trata marcha e piora idoso. Anticoagulação não tem papel. Reconhecer a reversibilidade é o ponto de prova."},
  {foco:"Corpos de Lewy e antipsicótico",
   enunciado:"Homem de 73 anos com cognição flutuante, alucinações visuais precoces e parkinsonismo. Qual cuidado é essencial no manejo?",
   alternativas:{a:"Usar haloperidol em dose plena para as alucinações",b:"Evitar antipsicóticos por hipersensibilidade característica",c:"Contraindicar anticolinesterásicos",d:"Iniciar levodopa em alta dose imediatamente"},
   correta:"b",
   comentario:"Na demência com corpos de Lewy há hipersensibilidade a antipsicóticos (sobretudo os típicos como haloperidol), que podem provocar rigidez grave e piora — devem ser evitados; se imprescindível, usar um atípico com muita cautela. Anticolinesterásicos costumam ajudar (não são contraindicados). A levodopa pode ser usada com parcimônia para o parkinsonismo, equilibrando piora das alucinações — não em alta dose de imediato. Flutuação + alucinações visuais precoces + parkinsonismo é a tríade a reconhecer."},
 ]
},

"NEURO|HIC / emergências neuro": {
 titulo: "Hipertensão intracraniana e emergências neurológicas",
 half: "NEURO",
 resumo: "Domínio que se sobrepõe à UTI: doutrina de Monro-Kellie e pressão de perfusão cerebral, tríade de Cushing, escalonamento do tratamento da HIC, quando NÃO puncionar (sem atrasar o antibiótico) e os princípios de morte encefálica.",
 secoes: [
  {h:"1. Fisiopatologia — Monro-Kellie e perfusão", c:`O crânio é uma caixa rígida com três compartimentos: parênquima (~80%), sangue (~10%) e liquor (~10%). Pela **doutrina de Monro-Kellie**, o aumento de um volume exige a redução de outro (deslocamento de liquor e sangue venoso). Esgotada a complacência, pequenos aumentos de volume elevam muito a **pressão intracraniana (PIC)**.

O que importa para o cérebro é a **pressão de perfusão cerebral (PPC) = PAM − PIC**. Portanto, PIC alta ou PAM baixa reduzem a perfusão. Alvos habituais em neurointensivismo: manter **PIC < 20–22 mmHg** e **PPC ~60–70 mmHg**, evitando tanto isquemia quanto hiperemia.`},

  {h:"2. Reconhecer a HIC", c:`Sintomas: cefaleia que piora deitado e pela manhã, vômitos (por vezes em jato), turvação visual, papiledema, paralisia do VI par (falso localizatório) e rebaixamento do nível de consciência.

A **tríade de Cushing** (hipertensão arterial + bradicardia + respiração irregular) é sinal **tardio e grave**, de HIC crítica/herniação iminente. As **síndromes de herniação** (uncal — midríase ipsilateral e hemiparesia; central; tonsilar) são emergências que exigem ação imediata.`},

  {h:"3. Escalonamento terapêutico da HIC", c:`Trate por etapas, do menos ao mais agressivo:
- **Medidas gerais (primeiro):** cabeceira a **30°**, cabeça na **linha média** (para não obstruir a drenagem venosa jugular), normovolemia, controle de dor/febre/agitação, **normocapnia** (PaCO2 35–40), normonatremia-alvo e evitar hipotensão.
- **Osmoterapia:** **manitol** (0,25–1 g/kg; atenção à hipovolemia/lesão renal) ou **salina hipertônica** (preferida no choque/hipovolemia).
- **Sedação/analgesia** otimizadas; drenagem liquórica por cateter ventricular; coma barbitúrico em casos refratários.
- **Cirurgia:** craniectomia descompressiva / remoção de lesão.

A **hiperventilação agressiva** (PaCO2 < 30) causa vasoconstrição e risco de **isquemia** — é medida de **resgate temporário** para herniação, não de rotina.`},

  {h:"4. Quando NÃO puncionar — sem atrasar o antibiótico", c:`Na suspeita de meningite com sinais de HIC/efeito de massa (**papiledema, déficit focal, rebaixamento, crises, imunossupressão**), faça **neuroimagem antes da punção lombar** pelo risco de herniação.

**Regra de ouro:** isso **não** deve atrasar o tratamento — colha **hemoculturas** e inicie **antibiótico empírico** (± **dexametasona** antes/junto da primeira dose, sobretudo pneumococo) **imediatamente**, sem esperar a TC nem o resultado do liquor. Atrasar o antibiótico pela imagem é o erro que aumenta mortalidade.`},

  {h:"5. Coma e morte encefálica", c:`Avaliação do coma: estabilizar (ABC), glicemia, e diferenciar causa **estrutural** (déficit focal, sinais de tronco assimétricos) de **metabólica/tóxica** (simétrica, reflexos preservados). Escala de coma de Glasgow orienta a gravidade.

**Morte encefálica** (Resolução CFM 2.173/2017) é diagnóstico **clínico**, com **pré-requisitos**: causa conhecida e irreversível, e exclusão de confundidores (**hipotermia, drogas/sedação, distúrbios metabólicos/hidroeletrolíticos graves, hipotensão**). Exige **coma aperceptivo**, **ausência de reflexos de tronco**, **teste de apneia** positivo, dois exames por médicos distintos (um capacitado) com intervalo, e um **exame complementar** comprobatório de ausência de fluxo/atividade.`},
 ],
 flashcards: [
  {p:"Fórmula da pressão de perfusão cerebral?", r:"PPC = PAM − PIC (alvo PPC ~60–70; PIC < 20–22 mmHg)."},
  {p:"O que é a tríade de Cushing e o que significa?", r:"HAS + bradicardia + respiração irregular = HIC tardia / herniação iminente."},
  {p:"Primeira etapa do tratamento da HIC?", r:"Medidas gerais (cabeceira 30°, linha média, normovolemia, normocapnia) antes da osmoterapia."},
  {p:"Meningite com sinais de HIC: e o antibiótico?", r:"Neuroimagem antes da punção, mas antibiótico empírico (± dexametasona) imediato — não esperar."},
  {p:"Pré-requisito indispensável para abrir protocolo de morte encefálica?", r:"Causa conhecida/irreversível e exclusão de hipotermia, drogas e distúrbios metabólicos."},
 ],
 pegadinhas: [
  "Tríade de Cushing (HAS + bradicardia + respiração irregular) é sinal TARDIO de HIC/herniação.",
  "Primeiro as medidas gerais (cabeceira 30°, normovolemia) ANTES de manitol/salina.",
  "Hiperventilação agressiva não é rotina — vasoconstrição causa isquemia; é resgate temporário.",
  "Sinais de HIC/efeito de massa → neuroimagem antes da punção; mas antibiótico empírico NÃO espera a imagem.",
  "Morte encefálica exige causa conhecida e exclusão de hipotermia/drogas/distúrbios metabólicos antes de testar.",
  "Paralisia do VI par pode ser falso localizatório na HIC (não indica lesão pontina focal).",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), cap. 163 — Hipertensão Intracraniana em Terapia Intensiva; cap. 162 — Manejo do TCE; cap. 171 — Hipertensão Intracraniana Idiopática; cap. 22 — Transtornos do Nível de Consciência (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 5 — Neurotrauma; Seção 14 — Hidrocefalia e Edema Cerebral; Seção 2 — Torpor e Coma / Morte Encefálica.",
  "Resolução CFM 2.173/2017 (morte encefálica); Adams & Victor — “Coma...” e “Intracranial Pressure”.",
 ],
 questoes: [
  {foco:"Escalonamento da HIC",
   enunciado:"Paciente com hipertensão intracraniana confirmada. Qual a primeira medida terapêutica antes de escalonar para osmoterapia?",
   alternativas:{a:"Manitol em bolus",b:"Medidas gerais: cabeceira a 30°, linha média, normovolemia e normocapnia",c:"Hiperventilação agressiva mantida",d:"Craniectomia descompressiva imediata"},
   correta:"b",
   comentario:"O tratamento da HIC é escalonado: começa pelas medidas gerais (cabeceira a 30°, cabeça na linha média para não obstruir a drenagem venosa, normovolemia, controle de febre/dor/agitação e normocapnia) antes de partir para osmoterapia (manitol/salina hipertônica), sedação e cirurgia. A hiperventilação agressiva mantida causa vasoconstrição e risco de isquemia — é resgate temporário, não rotina. A craniectomia é medida final, não a primeira."},
  {foco:"Quando não puncionar",
   enunciado:"Homem com febre, rigidez de nuca, papiledema e hemiparesia. Qual a conduta correta quanto à punção lombar e ao antibiótico?",
   alternativas:{a:"Punção lombar imediata antes de qualquer antibiótico",b:"Neuroimagem antes da punção; iniciar antibiótico empírico sem esperar o liquor",c:"Adiar o antibiótico até o resultado do liquor",d:"Nenhum antibiótico até a tomografia ficar pronta"},
   correta:"b",
   comentario:"Há sinais de HIC/efeito de massa (papiledema, déficit focal): a punção lombar deve ser adiada para depois da neuroimagem, pelo risco de herniação. Porém o antibiótico empírico (± dexametasona) NÃO deve esperar — inicia-se imediatamente após colher hemoculturas, pois o atraso aumenta a mortalidade da meningite bacteriana. Puncionar antes da imagem, nesse contexto, é perigoso; e adiar o antibiótico pela imagem/liquor é o erro que mata."},
  {foco:"Morte encefálica (pré-requisitos)",
   enunciado:"Antes de iniciar o protocolo de morte encefálica, qual condição é indispensável?",
   alternativas:{a:"Causa do coma conhecida e exclusão de hipotermia, drogas e distúrbios metabólicos",b:"Apenas um exame clínico por um único médico",c:"Presença de reflexos de tronco preservados",d:"Dispensar exame complementar em todos os casos"},
   correta:"a",
   comentario:"O diagnóstico de morte encefálica exige pré-requisitos: causa conhecida e irreversível do coma e exclusão de confundidores (hipotermia, intoxicação/sedação, distúrbios hidroeletrolíticos/metabólicos graves). É preciso coma aperceptivo com AUSÊNCIA de reflexos de tronco (não preservados), teste de apneia positivo, exames repetidos por examinadores distintos e um exame complementar comprobatório, conforme a Resolução CFM 2.173/2017. Por isso a alternativa que reúne causa conhecida + exclusão de confundidores é a correta."},
 ]
},

"NEURO|Transtornos do movimento": {
 titulo: "Transtornos do movimento",
 half: "NEURO",
 resumo: "O foco é separar Parkinson idiopático de parkinsonismo secundário (sobretudo farmacológico) e atípico, reconhecer tremor essencial, e não perder o Wilson no jovem. Resposta à levodopa e DAT-scan ajudam a decidir.",
 secoes: [
  {h:"1. Hipocinéticos × hipercinéticos", c:`Os transtornos do movimento dividem-se em **hipocinéticos** (parkinsonismos — pobreza de movimento) e **hipercinéticos** (tremor, coreia, distonia, mioclonia, tiques, balismo). O **parkinsonismo** é uma síndrome: **bradicinesia** obrigatória + pelo menos um entre **rigidez** e **tremor de repouso** (instabilidade postural é tardia). Definir se há parkinsonismo e depois sua causa é o algoritmo.`},

  {h:"2. Doença de Parkinson idiopática", c:`Neurodegeneração dopaminérgica da substância negra com **corpos de Lewy** (alfa-sinucleína). Clínica **assimétrica**: tremor de repouso "contar moedas", bradicinesia, rigidez em roda denteada; marcha em pequenos passos, festinação, hipomimia, micrografia.

**Sintomas não motores** (muitas vezes precedem): **hiposmia**, **constipação**, **transtorno comportamental do sono REM**, depressão, disautonomia. **Boa resposta à levodopa** é regra e apoia o diagnóstico. Tratamento: levodopa/carbidopa, agonistas dopaminérgicos, iMAO-B; casos avançados com flutuações apesar de otimização → **estimulação cerebral profunda** (alvos **núcleo subtalâmico** e **globo pálido interno**).`},

  {h:"3. Parkinsonismo farmacológico e atípico", c:`- **Parkinsonismo farmacológico:** 2ª causa mais comum. **Bloqueadores D2** — **metoclopramida**, antipsicóticos, **flunarizina/cinarizina**. Costuma ser mais **simétrico**, sem sintomas não motores; o **DAT-scan é NORMAL** (via nigroestriatal íntegra) — é o exame que o separa do Parkinson. Conduta: **suspender o fármaco** (não iniciar levodopa).
- **Parkinsonismos atípicos ("Parkinson-plus"):** paralisia supranuclear progressiva (quedas precoces, paralisia do olhar vertical), atrofia de múltiplos sistemas (disautonomia/ataxia), degeneração corticobasal. Respondem **mal** à levodopa e têm sinais de alarme ("red flags") precoces.`},

  {h:"4. Tremor essencial", c:`Tremor **postural e de ação** (não de repouso), bilateral, predominando nas mãos, podendo afetar cabeça e voz; **história familiar** (autossômico dominante) e **melhora com álcool**. Sem bradicinesia/rigidez; **DAT-scan normal**. Primeira linha: **propranolol** ou **primidona**; refratários → estimulação cerebral profunda do **núcleo ventral intermédio (VIM)** do tálamo.

Diferença essencial do Parkinson: tremor de **ação** (essencial) × tremor de **repouso** (Parkinson).`},

  {h:"5. Coreias, distonias e Wilson", c:`- **Coreia de Sydenham:** pós-estreptocócica, criança/adolescente, autolimitada; critério maior de febre reumática.
- **Doença de Huntington:** **coreia** + declínio **cognitivo/psiquiátrico** + herança **autossômica dominante** (expansão **CAG** no gene HTT), com antecipação.
- **Distonias:** contrações sustentadas com posturas anômalas; focais (blefaroespasmo, torcicolo) tratam-se com **toxina botulínica**.
- **Doença de Wilson:** **jovem (<40 anos)** com transtorno do movimento (tremor "em bater de asas", distonia, disartria) + **hepatopatia** + **anéis de Kayser-Fleischer**, **ceruloplasmina baixa** e cobre urinário alto. É **tratável** (quelantes — trientina/D-penicilamina — e zinco) — por isso não pode passar despercebida.`},
 ],
 flashcards: [
  {p:"Conduta no parkinsonismo por metoclopramida?", r:"Suspender o fármaco (não iniciar levodopa); DAT-scan seria normal."},
  {p:"O que separa tremor essencial de Parkinson?", r:"Essencial = tremor de ação/postural, melhora com álcool, DAT-scan normal; Parkinson = repouso, responde à levodopa."},
  {p:"Jovem com transtorno do movimento + hepatopatia: pensar em?", r:"Doença de Wilson (ceruloplasmina baixa, anéis de Kayser-Fleischer) — tratável."},
  {p:"Alvos da estimulação cerebral profunda no Parkinson?", r:"Núcleo subtalâmico e globo pálido interno."},
  {p:"Herança e mutação da doença de Huntington?", r:"Autossômica dominante, expansão CAG no gene HTT."},
 ],
 pegadinhas: [
  "Parkinsonismo farmacológico: SUSPENDER o fármaco (metoclopramida/antipsicótico), não iniciar levodopa.",
  "DAT-scan NORMAL separa parkinsonismo farmacológico e tremor essencial do Parkinson idiopático.",
  "Tremor essencial é de AÇÃO/postural e melhora com álcool; Parkinson é de REPOUSO.",
  "Jovem com distúrbio do movimento + hepatopatia = investigar Wilson (ceruloplasmina, K-F) — tratável.",
  "Metoclopramida e flunarizina/cinarizina são causas frequentemente esquecidas de parkinsonismo.",
  "Má resposta à levodopa + quedas/olhar vertical precoces = pensar em parkinsonismo atípico.",
 ],
 diretrizes: [
  "Tratado de Neurologia da ABN (3ª ed., 2025), caps. 59–68 (Parkinson; Tremor Essencial; Distonias; Huntington; Movimento Infeccioso/Autoimune; Induzidos por Drogas; Doença de Wilson; Parkinsonismo Atípico) (ver materiais_neuro.md).",
  "Merritt, Tratado de Neurologia (13ª ed.), Seção 11 — Distúrbios do Movimento.",
  "PCDT da Doença de Parkinson (Ministério da Saúde/BVSMS); Adams & Victor — “Abnormalities of Movement” e “Parkinson Disease”.",
 ],
 questoes: [
  {foco:"Parkinsonismo farmacológico (conduta)",
   enunciado:"Mulher de 58 anos com bradicinesia, rigidez e tremor há 3 meses, em uso de metoclopramida diária há meses. Qual a conduta mais adequada?",
   alternativas:{a:"Iniciar levodopa",b:"Suspender a metoclopramida",c:"Iniciar antipsicótico",d:"Solicitar teste genético para Parkinson"},
   correta:"b",
   comentario:"O quadro sugere parkinsonismo farmacológico pela metoclopramida (bloqueador D2). A conduta é suspender o fármaco causador e reavaliar — a maioria melhora em semanas a meses. Iniciar levodopa é erro (trata Parkinson idiopático, não a causa iatrogênica). Antipsicótico agravaria (mais bloqueio dopaminérgico). O DAT-scan, se feito, seria normal — o que confirma a origem farmacológica e separa do Parkinson idiopático."},
  {foco:"Tremor essencial × Parkinson",
   enunciado:"Homem de 62 anos com tremor bilateral das mãos que aparece ao segurar o copo e ao escrever, melhora com álcool, sem rigidez ou bradicinesia, com pai afetado. Qual o tratamento de primeira linha?",
   alternativas:{a:"Levodopa",b:"Propranolol",c:"Metoclopramida",d:"Toxina botulínica para todos os casos"},
   correta:"b",
   comentario:"O quadro é tremor essencial (postural/de ação, familiar, melhora com álcool, sem sinais parkinsonianos). Primeira linha: propranolol ou primidona. Levodopa não tem papel (é do Parkinson). Metoclopramida pioraria (induz parkinsonismo). Toxina botulínica fica para casos selecionados/refratários (tremor cefálico ou vocal), não é primeira linha universal. O tremor de ação e a melhora com álcool são as pistas."},
  {foco:"Wilson (não perder no jovem)",
   enunciado:"Homem de 22 anos com tremor, disartria e alterações de comportamento há 1 ano, além de hepatopatia. Qual investigação é prioritária por identificar causa tratável?",
   alternativas:{a:"Dosagem de ceruloplasmina e pesquisa de anéis de Kayser-Fleischer",b:"Teste genético para Huntington",c:"Cintilografia DAT-scan",d:"Dosagem de anti-estreptolisina O"},
   correta:"a",
   comentario:"Jovem com distúrbio do movimento + hepatopatia obriga a investigar doença de Wilson: ceruloplasmina baixa, cobre urinário elevado e anéis de Kayser-Fleischer — condição TRATÁVEL (quelantes de cobre/zinco), por isso não pode passar. Huntington cursa com coreia + demência + herança dominante, mas não é tratável de forma curativa e não explica a hepatopatia. DAT-scan não faz o diagnóstico etiológico aqui. ASLO remete a Sydenham (coreia pós-estreptocócica), quadro diferente."},
 ]
},

/* ===================== PEDIATRIA ===================== */

"PED|Imunização": {
 titulo: "Imunização — PNI e calendário",
 half: "PED",
 resumo: "A banca cobra o tipo de vacina (viva × inativada) e o que decorre disso, as contraindicações reais × falsas, condutas do calendário do PNI, atraso/intervalos e a vigilância (paralisia flácida aguda, eventos adversos).",
 secoes: [
  {h:"1. Tipos de vacina — o conceito que resolve a maioria das questões", c:`- **Vivas atenuadas:** BCG, **rotavírus**, **febre amarela**, **tríplice/tetra viral (SCR/SCRV)**, **varicela**, dengue (em indicações específicas). Em regra **contraindicadas em imunodepressão grave e gestação**; entre duas vacinas vivas parenterais, respeitar intervalo de 30 dias se não aplicadas no mesmo dia.
- **Inativadas / subunidades / toxoides / conjugadas:** hepatite B, **pentavalente** (DTP+Hib+HepB), **VIP** (poliomielite inativada), pneumocócica, meningocócica, HPV, dTpa, influenza, hepatite A. **Seguras** em imunodeprimidos e gestantes.

Saber a natureza da vacina resolve quase toda questão de contraindicação e de coadministração.`},

  {h:"2. Poliomielite — VOP × VIP e vigilância", c:`O esquema atual usa **VIP** (inativada, injetável) nas doses do primeiro ano e nos reforços (o Brasil migrou para esquema **integralmente VIP**, aposentando a VOP oral). A **VOP** é vírus **vivo atenuado** e pode, raramente, causar **poliomielite associada à vacina (VAPP)** por reversão de virulência — por isso não se usa em imunodeprimidos nem em seus contatos quando ainda empregada.

**Paralisia flácida aguda (PFA)** em menor de 15 anos é **notificação compulsória imediata** e deve ser investigada como possível poliomielite até afastar (coleta de fezes). A doença está **erradicada** no Brasil, mas a **queda de cobertura** ameaça reintrodução.`},

  {h:"3. Contraindicações verdadeiras × falsas", c:`**Verdadeiras:**
- Reação **anafilática** a dose anterior ou a componente da vacina.
- Para **vacinas vivas:** imunodepressão grave e gestação.
- **Encefalopatia** nos 7 dias após dose de componente **pertussis** contraindica novas doses de pertussis (usar dupla sem o componente).

**Falsas (NÃO contraindicam — vacinar):**
- Doença febril **leve**, uso de **antibiótico**, fase de convalescença.
- **Prematuridade** (vacinar pela **idade cronológica**; HepB ao nascer conforme peso/condição).
- Aleitamento; contato domiciliar com gestante/imunodeprimido (para a maioria das vacinas).
- História familiar de eventos, alergia não anafilática.`},

  {h:"4. Intervalos, atraso e situações especiais", c:`- **Atraso vacinal:** não reinicia esquema — completa o que falta ("dose dada é dose contada"), respeitando intervalos mínimos.
- **Prematuro/baixo peso:** BCG geralmente ao atingir **2 kg**; hepatite B ao nascer conforme protocolo.
- **Imunodeprimidos e contatos:** priorizar vacinas inativadas; proteger o paciente vacinando os conviventes (ex.: influenza, tríplice viral nos contatos suscetíveis).
- **Coadministração:** a maioria pode ser dada no mesmo dia; vivas parenterais não coincidentes exigem 30 dias de intervalo.`},

  {h:"5. Eventos adversos pós-vacinação (EAPV)", c:`Registrar e **notificar** EAPV. Pontos cobrados:
- **Episódio hipotônico-hiporresponsivo** e febre alta após pertussis: em geral **não** contraindicam doses futuras (avaliar caso a caso; considerar acelular).
- **Reação anafilática** a uma vacina contraindica **aquela** vacina.
- Invaginação intestinal tem associação temporal com **rotavírus** — respeitar as **idades máximas** de administração das doses.
- Conduta habitual: manter o calendário sempre que possível, orientar sintomáticos e notificar.`},
 ],
 flashcards: [
  {p:"Doença febril leve, uso de antibiótico e prematuridade contraindicam vacina?", r:"Não — são falsas contraindicações; deve-se vacinar."},
  {p:"Vacinas vivas atenuadas de rotina na infância (exemplos)?", r:"BCG, rotavírus, febre amarela, tríplice/tetra viral, varicela."},
  {p:"Prematuro: vacinar por qual idade?", r:"Idade cronológica (não a corrigida)."},
  {p:"PFA em menor de 15 anos — conduta de saúde pública?", r:"Notificação compulsória imediata e investigar poliomielite (coleta de fezes)."},
  {p:"Atraso vacinal: reinicia o esquema?", r:"Não — completa as doses faltantes; dose dada é dose contada."},
 ],
 pegadinhas: [
  "Doença febril LEVE, uso de antibiótico e prematuridade NÃO contraindicam vacinar.",
  "Prematuro vacina pela idade cronológica; BCG em geral ao atingir 2 kg.",
  "VOP é vírus vivo (risco raro de pólio vacinal); VIP é inativada — o Brasil usa esquema só com VIP.",
  "Paralisia flácida aguda em <15 anos = notificação imediata e investigar poliomielite.",
  "Vacinas vivas: cuidado em imunodeprimido grave e gestante; inativadas são seguras.",
  "Atraso não reinicia esquema — completa o que falta.",
 ],
 diretrizes: [
  "Calendário Nacional de Vacinação — PNI/Ministério da Saúde (versão vigente).",
  "SBIm — Calendários de vacinação; SBP — Documentos Científicos (Imunizações).",
  "MS — Guia de Vigilância em Saúde (paralisia flácida aguda / poliomielite) e Manual de EAPV.",
 ],
 questoes: [
  {foco:"Contraindicação verdadeira × falsa",
   enunciado:"Lactente de 3 meses comparece para vacinação com coriza e temperatura de 37,6 °C, em uso de amoxicilina por otite. Qual a conduta?",
   alternativas:{a:"Adiar todas as vacinas até terminar o antibiótico",b:"Vacinar normalmente conforme o calendário",c:"Contraindicar vacinas vivas para sempre",d:"Só vacinar após 30 dias sem sintomas"},
   correta:"b",
   comentario:"Doença febril leve e uso de antibiótico NÃO contraindicam vacinação — são falsas contraindicações. O lactente deve ser vacinado normalmente para não perder oportunidade. Só se adia em doença moderada a grave. Não há razão para contraindicar vacinas vivas de forma permanente. Perder a janela por quadros banais reduz cobertura — justamente o que aumenta o risco de doenças como o sarampo e a poliomielite."},
  {foco:"Tipo de vacina / imunodeprimido",
   enunciado:"Criança com imunodeficiência celular grave precisa atualizar vacinas. Qual está, em regra, CONTRAINDICADA?",
   alternativas:{a:"Hepatite B",b:"Pneumocócica conjugada",c:"VIP (poliomielite inativada)",d:"Tríplice viral (sarampo, caxumba, rubéola)"},
   correta:"d",
   comentario:"A tríplice viral (SCR) é de vírus VIVO atenuado e, em regra, contraindicada na imunodepressão grave (assim como BCG, rotavírus, febre amarela, varicela). Hepatite B, pneumocócica conjugada e VIP são inativadas/subunidades e seguras nesses pacientes. Reconhecer viva × inativada resolve a questão. Contatos podem precisar de estratégias de proteção (vacinar conviventes com vacinas seguras)."},
  {foco:"Paralisia flácida aguda / pólio",
   enunciado:"Criança de 5 anos evolui, após quadro febril, com perda súbita de força e flacidez em um membro, reflexos diminuídos e sensibilidade preservada. Qual conduta de saúde pública é obrigatória?",
   alternativas:{a:"Notificação compulsória imediata e investigação de poliomielite",b:"Apenas observação domiciliar",c:"Alta sem notificação por ser quadro viral",d:"Iniciar corticoide e dispensar investigação"},
   correta:"a",
   comentario:"Toda paralisia flácida aguda em menor de 15 anos é evento de notificação compulsória IMEDIATA e deve ser investigada como possível poliomielite até que se afaste (coleta de fezes para isolamento viral). A poliomielite está erradicada no Brasil, mas a vigilância é mantida porque a queda de cobertura vacinal ameaça reintrodução. Observar em casa, dar alta sem notificar ou tratar sem investigar violam o protocolo de vigilância."},
 ]
},

"PED|Oncologia / hemato-onco": {
 titulo: "Oncologia pediátrica e sinais de alerta hemato-oncológicos",
 half: "PED",
 resumo: "O objetivo é reconhecer cedo os sinais de alerta que exigem investigação rápida: leucocoria (retinoblastoma), massa abdominal (neuroblastoma × Wilms) e o quadro de leucemia. Cada um tem uma pista e um exame que confirma.",
 secoes: [
  {h:"1. Panorama e sinais de alerta gerais", c:`O câncer é causa importante de morte por doença na infância, e o **diagnóstico precoce** muda o prognóstico. Sinais de alerta que devem acender o alarme oncológico e acelerar a investigação:
- Palidez progressiva, **febre prolongada** sem foco, sangramentos/petéquias.
- **Dor óssea** que desperta à noite, claudicação sem trauma.
- **Massa** ou linfonodomegalia que cresce, hepatoesplenomegalia.
- **Leucocoria** (reflexo branco à pupila), estrabismo de início recente.
- Cefaleia matinal com vômitos, alterações neurológicas/visuais, aumento do perímetro cefálico.
- Perda de peso inexplicada.`},

  {h:"2. Leucemia linfoblástica aguda (LLA)", c:`Neoplasia **mais comum** da infância (pico 2–5 anos). A infiltração medular gera **falência medular**: anemia (palidez, fadiga), **neutropenia** (febre, infecções) e **plaquetopenia** (petéquias, sangramentos), além de **dor óssea**, hepatoesplenomegalia e adenomegalia; pode haver massa mediastinal (mais na LLA-T).

- **Hemograma** levanta a suspeita (citopenias, blastos), mas a **confirmação é o MIELOGRAMA** (aspirado de medula) com imunofenotipagem e citogenética/molecular, que definem o subtipo e o risco.
- Fatores de bom prognóstico: idade 1–10 anos, leucometria baixa ao diagnóstico, LLA-B comum, certas alterações citogenéticas, boa resposta precoce.
- Cuidado com a **síndrome de lise tumoral** ao iniciar tratamento (hidratação, alopurinol/rasburicase).`},

  {h:"3. Retinoblastoma", c:`Tumor intraocular maligno mais comum da infância (lactente/pré-escolar). Sinal clássico: **leucocoria** — reflexo pupilar **branco** (notado em fotos com flash), traduzindo perda do **reflexo vermelho**; pode haver estrabismo.

- Conduta: **avaliação oftalmológica urgente** (fundoscopia sob midríase / exame sob anestesia) e imagem; **é emergência oncológica**.
- Pode ser **hereditário** (mutação RB1, frequentemente **bilateral**) — indicar aconselhamento genético.
- O **teste do reflexo vermelho** na puericultura existe justamente para captar isso cedo; reflexo alterado exige encaminhamento imediato.`},

  {h:"4. Neuroblastoma × tumor de Wilms", c:`Ambos aparecem como **massa abdominal** na criança pequena; diferenciá-los é ponto de prova:
- **Neuroblastoma:** origem na crista neural (adrenal/cadeia simpática). Massa que costuma **cruzar a linha média**, com **calcificações**, elevação de **catecolaminas urinárias (VMA/HVA)**; pode ter síndromes paraneoplásicas (**opsoclonus-mioclonus**, "olhos dançantes"), hipertensão, nódulos subcutâneos e metástases (medula, osso, fígado, pele). Marca da agressividade: amplificação de **N-MYC**.
- **Tumor de Wilms (nefroblastoma):** tumor **renal**, geralmente em criança um pouco maior (2–5 anos), massa que **não costuma cruzar a linha média**, às vezes com hematúria/HAS; associa-se a síndromes (WAGR, Beckwith-Wiedemann). **Evitar palpação abdominal repetida** (risco de ruptura).`},

  {h:"5. Outros a lembrar", c:`- **Tumores do SNC** (2º grupo mais comum): cefaleia matinal com vômitos, ataxia, sinais focais, macrocefalia no lactente.
- **Linfomas** (Hodgkin e não-Hodgkin, ex.: Burkitt abdominal de crescimento rápido).
- **Sarcomas** (rabdomiossarcoma, osteossarcoma/Ewing — dor óssea e massa).
- **Púrpura** e citopenias podem ser leucemia — não rotular como PTI sem excluir blastos/medula quando há sinais atípicos (dor óssea, hepatoesplenomegalia, outras citopenias).`},
 ],
 flashcards: [
  {p:"Leucocoria em lactente = ?", r:"Retinoblastoma até prova em contrário → oftalmologia urgente (emergência oncológica)."},
  {p:"O que confirma leucemia?", r:"Mielograma (aspirado de medula) com imunofenotipagem — o hemograma só levanta a suspeita."},
  {p:"Massa abdominal que cruza a linha média + catecolaminas urinárias altas?", r:"Neuroblastoma (VMA/HVA; pode ter opsoclonus-mioclonus)."},
  {p:"Cuidado no exame do tumor de Wilms?", r:"Evitar palpação abdominal repetida (risco de ruptura)."},
  {p:"Síndrome paraneoplásica típica do neuroblastoma?", r:"Opsoclonus-mioclonus (olhos dançantes)."},
 ],
 pegadinhas: [
  "Leucocoria (reflexo branco/perda do reflexo vermelho) = retinoblastoma → oftalmo urgente.",
  "Leucemia se confirma por mielograma; hemograma só levanta a suspeita.",
  "Neuroblastoma tende a cruzar a linha média e eleva catecolaminas urinárias (VMA/HVA); Wilms costuma não cruzar.",
  "No tumor de Wilms, evitar palpação abdominal repetida (risco de ruptura).",
  "Dor óssea que desperta à noite + citopenias em criança = investigar leucemia.",
  "Cefaleia matinal com vômitos + sinais focais/ataxia na criança = pensar em tumor de SNC.",
 ],
 diretrizes: [
  "SBP — Documentos Científicos (Oncologia pediátrica; sinais de alerta) e SBOP — diagnóstico precoce.",
  "Ministério da Saúde — Diagnóstico precoce do câncer na criança e no adolescente.",
  "Materiais do Drive do Vinicius (miscelânea/oncologia pediátrica) quando o tema casar (ver materiais_drive.md).",
 ],
 questoes: [
  {foco:"Leucocoria / retinoblastoma",
   enunciado:"Mãe de menina de 18 meses nota, em fotos com flash, um reflexo esbranquiçado em uma pupila; na consulta, o reflexo vermelho está ausente nesse olho. Qual a conduta?",
   alternativas:{a:"Reavaliar em 6 meses",b:"Encaminhamento oftalmológico urgente por suspeita de retinoblastoma",c:"Prescrever colírio e alta",d:"Solicitar apenas hemograma"},
   correta:"b",
   comentario:"Leucocoria (reflexo branco/ausência do reflexo vermelho) é o sinal clássico do retinoblastoma e uma emergência oncológica: exige encaminhamento oftalmológico urgente para fundoscopia sob midríase/exame sob anestesia e imagem. Reavaliar em meses atrasa um tumor que ameaça a visão e a vida e pode ser bilateral/hereditário. Colírio/alta e hemograma isolado não abordam a lesão intraocular. O teste do reflexo vermelho na puericultura é justamente para pegar isso cedo."},
  {foco:"Confirmação da leucemia",
   enunciado:"Menino de 4 anos com palidez, febre, petéquias, dor óssea e hepatoesplenomegalia; hemograma com anemia, plaquetopenia e blastos. Qual exame confirma o diagnóstico?",
   alternativas:{a:"Mielograma (aspirado de medula óssea)",b:"Nova coleta de hemograma em 30 dias",c:"Ultrassonografia abdominal",d:"Dosagem de ferritina"},
   correta:"a",
   comentario:"O quadro é altamente sugestivo de leucemia aguda; a confirmação diagnóstica é o mielograma (aspirado de medula óssea), com imunofenotipagem e citogenética para classificar e definir prognóstico/tratamento. O hemograma levanta a suspeita (citopenias + blastos), mas não confirma nem substitui a medula. Repetir hemograma atrasa. Ultrassom e ferritina não fazem o diagnóstico. Dor óssea que desperta à noite com citopenias é bandeira clássica."},
  {foco:"Neuroblastoma × Wilms",
   enunciado:"Criança de 2 anos com massa abdominal que cruza a linha média, calcificações à imagem e catecolaminas urinárias (VMA/HVA) elevadas. Qual o diagnóstico mais provável?",
   alternativas:{a:"Tumor de Wilms (nefroblastoma)",b:"Neuroblastoma",c:"Linfoma de Burkitt",d:"Hepatoblastoma"},
   correta:"b",
   comentario:"Massa que cruza a linha média, com calcificações e elevação de catecolaminas urinárias (VMA/HVA), aponta para neuroblastoma (tumor da crista neural/adrenal e cadeia simpática), que pode cursar com síndrome opsoclonus-mioclonus. O tumor de Wilms é renal, geralmente NÃO cruza a linha média e não eleva catecolaminas — e deve-se evitar palpação repetida pelo risco de ruptura. Burkitt e hepatoblastoma têm apresentações distintas. A dupla “cruza a linha média + catecolaminas” fecha neuroblastoma."},
 ]
},

};
