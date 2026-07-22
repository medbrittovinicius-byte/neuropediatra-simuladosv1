/* Módulos de estudo aprofundado — Revisão Ativa (aba "Aula do tema").
   Chave = domínio clínico (mesma classificação de domainOf: "HALF|Nome").
   Formato: { titulo, half, resumo, fontes, notaErro, secoes:[{h,c}], flashcards:[{p,r}],
              pegadinhas:[], diretrizes:[], questoes:[{enunciado, alternativas{a,b,c,d}, correta, comentario, foco}] }.
   Texto das seções (campo c) e notaErro aceitam: parágrafos separados por linha em branco,
   listas com "- ", negrito **assim**, e links. Referências: Tratado de Neurologia da ABN (3ª ed.,
   2025), Merritt (13ª ed.), Adams & Victor (12ª ed.) e Sanvito — ver materiais_neuro.md.
   Ampliado pela tarefa diária de estudo. */
window.REVISAO_MODULOS = {

"NEURO|Vertigem / síndromes vestibulares": {
 titulo: `Vertigem e síndromes vestibulares`,
 half: `NEURO`,
 resumo: `Tontura é uma das queixas mais comuns do plantão e o campo onde mais se erra — porque se decoram rótulos (VPPB, Ménière, neurite) sem o raciocínio que os liga. Este texto reconstrói o tema do zero: o que é tontura, como o equilíbrio funciona, e um caminho de decisão (tempo → gatilho → sintoma auditivo → exame de cabeceira) que separa sozinho os cinco diagnósticos e o AVC que não se pode perder.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (caps. 20 e 135–138), Merritt 13ª ed. (Seção 2 — Tontura, Vertigem e Perda Auditiva), Adams & Victor (Deafness, Dizziness) e Sanvito (semiologia do nistagmo e exame vestibular). Ver materiais_neuro.md.`,
 notaErro: `Nos seus registros, **este é o tema em que você mais erra** (taxa de 100% em vertigem/VPPB e em neurite vestibular). O erro quase nunca é falta de decoreba — é falta de um **fio condutor**. Três armadilhas explicam a maioria das quedas, e este texto foi montado para desarmar cada uma:

- **Você tenta classificar pelo "tipo" de tontura** (é rotatória? é desequilíbrio?). A prova abandonou isso porque o paciente descreve mal o sintoma. O caminho certo começa por **tempo + gatilho** (seção 3) — não pelo adjetivo da tontura.
- **Você troca as manobras.** Usa Dix-Hallpike para tudo. Dix-Hallpike é do canal **posterior**; o canal **horizontal** é o head-roll. Manobra errada devolve um exame "negativo" e o diagnóstico se perde (seção 7).
- **Você deixa o fator de risco vascular decidir** e, no susto, rotula "central" (ou o contrário) sem fazer o **HINTS**. O HINTS bem lido inverte a intuição: na vertigem aguda e contínua, **impulso cefálico normal aponta para AVC** (seção 5).

**Como zerar o erro:** diante de qualquer caso, responda três perguntas NESTA ordem — (1) o quadro é agudo e contínuo, episódico com gatilho posicional, ou episódico espontâneo? (2) há sintoma auditivo (hipoacusia/zumbido/plenitude)? (3) o que dizem o HINTS e/ou a manobra do canal? Treine essa sequência e os cinco diagnósticos se separam quase sozinhos. As três questões ao final batem exatamente nesses três tropeços.`,
 secoes: [
  {h: `1. Comece pelo começo: tontura não é uma coisa só`, c: `"Tontura" é um guarda-chuva. Debaixo dele cabem coisas com causas bem diferentes, e confundi-las é a origem de metade dos erros. Separe quatro sensações:

- **Vertigem:** a ilusão de que você (ou o ambiente) está **girando** ou se movendo. É o sintoma do sistema **vestibular** (labirinto/nervo/vias no cérebro).
- **Pré-síncope:** sensação de que **vai desmaiar**, escurecimento visual, "cabeça leve". Costuma ser **cardiovascular** (queda de fluxo cerebral) — não é o nosso foco aqui.
- **Desequilíbrio:** instabilidade ao **ficar em pé/andar**, sem giro. Aponta para cerebelo, propriocepção, visão, fraqueza.
- **Tontura inespecífica:** vaga, difícil de nomear (ansiedade, medicamentos).

Uma imagem ajuda: o cérebro é como um piloto que só voa bem quando três instrumentos concordam. Quando um deles envia um sinal errado de repente, o piloto sente o "chão girar" — isso é a vertigem. O objetivo do estudo é descobrir **qual instrumento falhou e por quê**.`},
  {h: `2. Como o corpo se equilibra — os três sensores`, c: `O equilíbrio nasce de três fontes de informação que o cérebro cruza o tempo todo:

- **Sistema vestibular (o labirinto), no ouvido interno:** tem três **canais semicirculares** (sentem a cabeça **girando**) e os órgãos otolíticos — **utrículo e sáculo** (sentem a **gravidade** e a aceleração em linha reta). É o instrumento mais especializado em movimento.
- **Visão:** confirma para onde estamos indo.
- **Propriocepção** (sensores nos músculos e articulações): diz onde estão os pés e o corpo no espaço.

Esses sinais chegam aos **núcleos vestibulares** no tronco encefálico, que conversam com o **cerebelo** (o "revisor" que calibra), com os **músculos dos olhos** e com a **medula**. Em condições normais, os dois labirintos (direito e esquerdo) mandam sinais **simétricos**. **Vertigem aguda = assimetria súbita** entre os dois lados (um labirinto/nervo "cala" ou "grita"). Guarde essa frase: quase tudo em vertigem é assimetria de tônus vestibular.`},
  {h: `3. O passo que muda tudo: pense em TEMPO e GATILHO (não no “tipo”)`, c: `Durante anos ensinou-se a perguntar "sua tontura é rotatória ou é desequilíbrio?". O problema: o paciente é péssimo em descrever isso, e a resposta muda conforme se pergunta. A abordagem moderna (modelos ATTEST/TiTrATE, no Merritt e na ABN) troca a pergunta por **duas melhores**: **há quanto tempo dura?** e **o que a desencadeia?** Isso gera três "síndromes" que já apontam o diagnóstico:

- **Síndrome vestibular aguda (SVA):** tontura que começou de forma aguda e é **contínua por dias**, com náuseas, nistagmo e dificuldade de andar. Aqui mora a dúvida cara: **neurite vestibular (benigna) × AVC de fossa posterior (grave)**.
- **Síndrome episódica DESENCADEADA:** crises de **segundos**, sempre provocadas por **mudar a cabeça de posição** (deitar, virar na cama, olhar para cima). É a cara da **VPPB**.
- **Síndrome episódica ESPONTÂNEA:** crises de **minutos a horas**, que vêm **sem gatilho** posicional. Aqui vivem a **doença de Ménière**, a **migrânea vestibular** e o AIT.

Fixe o reflexo: antes de qualquer exame, encaixe o caso em uma dessas três caixas. Metade do trabalho está feita.`},
  {h: `4. Anatomia mínima para entender os sinais do exame`, c: `Dois circuitos explicam tudo o que você vai testar:

- **Reflexo vestíbulo-ocular (RVO):** quando você vira a cabeça, os olhos giram automaticamente para o lado oposto e **mantêm a imagem estável**. Esse reflexo depende do labirinto e do nervo vestibular. Se esse caminho **periférico** está lesado (ex.: neurite), o reflexo falha — e é isso que o **teste do impulso cefálico** flagra.
- **Cerebelo (flóculo/nódulo) como freio:** ele calibra o sistema. Quando o cerebelo/tronco está lesado (**central**, ex.: AVC), o freio some — e aparecem sinais que o labirinto sozinho **nunca** faz: nistagmo que **muda de direção**, nistagmo **vertical puro**, e o desvio vertical dos olhos (**skew**).

Ou seja: **periférico** = problema no "sensor" (RVO falha, mas o resto do cérebro compensa). **Central** = problema no "processador" (o RVO pode estar intacto, mas surgem sinais estranhos). É por isso que, contraintuitivamente, um RVO **normal** numa pessoa muito tonta é um sinal de alarme.`},
  {h: `5. O exame que decide: HINTS, passo a passo`, c: `Na **síndrome vestibular aguda** (tontura contínua COM nistagmo), o **HINTS** — três testes de cabeceira — separa periférico de central melhor que uma RM feita cedo demais. Só use HINTS nesse cenário (SVA com nistagmo); não serve para tontura episódica nem para quem não tem nistagmo.

- **HI — Head Impulse (impulso cefálico):** peça ao paciente para fixar o seu nariz; gire a cabeça dele rápido e num ângulo pequeno. Se, ao voltar, os olhos precisam dar uma **"sacada de correção"**, o teste é **positivo/anormal = PERIFÉRICO** (o RVO daquele lado falhou). Se os olhos ficam grudados no alvo (**normal**) numa pessoa em plena vertigem aguda, isso é **CENTRAL** até prova em contrário. (Este é o ponto que mais derruba: HIT normal na SVA não tranquiliza — assusta.)
- **N — Nystagmus (nistagmo):** **periférico** bate sempre para o mesmo lado (unidirecional), é horizonto-torcional e **diminui quando o paciente fixa o olhar**. **Central** **muda de direção** conforme o olhar, ou é **vertical/torcional puro**, e **não** melhora com a fixação.
- **TS — Test of Skew (desvio skew):** cubra e descubra um olho de cada vez; se um olho **corrige para cima/baixo**, há skew = **CENTRAL**.

Mnemônico dos sinais centrais: **INFARCT** — **I**mpulse **N**ormal, **F**ast-phase **A**lternating, **R**efixation on **C**over **T**est. **Basta UM** sinal central para tratar como central e pedir imagem. Detalhe que salva vida: some ao HINTS o teste do sussurro/audição (HINTS "plus") — perda auditiva nova aguda pode ser AVC da artéria cerebelar ântero-inferior, não "labirintite".`},
  {h: `6. Lendo o nistagmo sem decorar tabelas`, c: `Nistagmo é um "vai-e-volta" dos olhos: uma fase lenta (o labirinto empurrando) e uma fase rápida de correção (que dá o "nome" da direção). Regras práticas:

- **Periférico:** direção **fixa** (sempre para o lado são), horizonto-torcional, **inibido pela fixação** (por isso melhora ao olhar um ponto e piora com óculos de Frenzel/no escuro). Vem junto com HIT positivo e sem outros sinais de tronco.
- **Central:** **troca de direção** com o olhar (bate para a direita ao olhar à direita, para a esquerda ao olhar à esquerda), ou é **puramente vertical** (para cima/para baixo) ou **puramente torcional**. **Não** se inibe com a fixação. Costuma vir com skew, ataxia desproporcional ou outros sinais de tronco/cerebelo.

Se você só levar uma coisa: **nistagmo vertical puro ou que muda de direção = central**, ponto.`},
  {h: `7. Os cinco diagnósticos, um a um`, c: `**1) VPPB (vertigem posicional paroxística benigna) — a mais comum.** Otólitos (cristais) se soltam do utrículo e caem num canal semicircular (na maioria, o **posterior**). Ao mexer a cabeça, os cristais "arrastam" o líquido e disparam **crises de segundos** (até ~1 min), sem sintoma auditivo. Diagnóstico e tratamento são **manobras** (seção 8), não remédio.

**2) Neurite vestibular.** Inflamação (provável viral) do nervo vestibular → **SVA contínua por dias**, com HIT **positivo**, nistagmo periférico e **sem** perda auditiva (se há hipoacusia junto, chama-se labirintite). Melhora em dias a semanas com a compensação central.

**3) Doença de Ménière.** Excesso de endolinfa (hidropisia). Crises **espontâneas de 20 min a 12 h** com a **tríade**: **hipoacusia neurossensorial flutuante** (grave nas frequências baixas) + **zumbido** + **plenitude aural** (ouvido "cheio"). Com os anos, a audição vai se perdendo.

**4) Migrânea vestibular.** É a causa **mais comum** de vertigem episódica espontânea recorrente. Paciente **com história de enxaqueca**, crises de **5 min a 72 h**, com sintomas migranosos (dor pulsátil, fotofobia) em pelo menos metade delas, e **audição preservada**. É o grande diferencial da Ménière — o que os separa é a **ausência de hipoacusia persistente**.

**5) AVC de fossa posterior — o que não se pode perder.** Cerebelo/tronco. Pode **imitar** um quadro periférico. Pistas: sinais **centrais** no HINTS, cefaleia/cervicalgia occipital nova, ataxia de tronco que não bate com a queixa, outros déficits (diplopia, disartria, dormência facial). Fatores de risco vascular **aumentam a suspeita, mas não decidem** — paciente vascular também tem neurite. Quem decide é o exame.`},
  {h: `8. Manobras por canal — a pegadinha que mais custa pontos`, c: `A regra é simples e cai muito: **casar a manobra certa com o canal certo.**

- **Canal posterior (o mais comum):** diagnóstico pela manobra de **Dix-Hallpike** (deita-se o paciente com a cabeça rodada 45° e pendente; surge nistagmo torcional-para-cima, **com latência de alguns segundos e que se esgota** — fatigável). Tratamento pela manobra de **Epley** (recoloca os cristais no utrículo).
- **Canal horizontal/lateral:** diagnóstico pelo **head-roll (teste de Pagnini-McClure)** — paciente deitado de barriga para cima, roda-se a cabeça para cada lado. Tratamento pela manobra de **barbecue** (rotação de 360°) ou Gufoni.

**Onde você erra:** aplicar Dix-Hallpike quando o canal é o horizontal → o teste dá "negativo" e você descarta VPPB por engano. E tratar VPPB com remédio (betaistina, flunarizina) em vez de manobra — não resolve. **Supressores vestibulares** (anti-histamínicos, benzodiazepínicos) só servem para aliviar as primeiras 24–72 h da SVA; usados por muito tempo **atrapalham a compensação** do cérebro e mascaram o quadro.`},
  {h: `9. Tratamento e quando pedir imagem`, c: `**Tratamento por diagnóstico:**
- **VPPB:** manobra de reposicionamento (Epley/barbecue). Reabilitação vestibular se recorrente.
- **Neurite vestibular:** sintomáticos por poucos dias + **corticoide** precoce em casos selecionados + **reabilitação vestibular** (o que mais acelera a recuperação).
- **Ménière:** restrição de sódio, diuréticos, sintomáticos nas crises; casos refratários → gentamicina intratimpânica/cirurgia.
- **Migrânea vestibular:** controle de gatilhos + **profilaxia de enxaqueca** (propranolol, topiramato, amitriptilina, flunarizina).
- **AVC:** protocolo de AVC (unidade de AVC, neuroimagem, reperfusão quando cabível).

**Imagem:** a **TC de crânio é ruim** para fossa posterior e para isquemia aguda — **TC normal NÃO exclui** AVC de tronco/cerebelo. O exame de escolha diante de suspeita central é a **RM com difusão** — lembrando que ela pode ser **falso-negativa nas primeiras 24–48 h** de um pequeno AVC de tronco, motivo pelo qual o **HINTS bem feito supera a RM precoce**. Peça imagem quando houver qualquer sinal central, cefaleia súbita associada, déficit focal, ou HINTS duvidoso em paciente de risco.`},
  {h: `10. O algoritmo em seis frases (leve isto para a prova)`, c: `- Encaixe o caso em **uma** síndrome temporal: **aguda contínua**, **episódica desencadeada** ou **episódica espontânea**.
- **Episódica desencadeada** (segundos, posicional, sem audição) = **VPPB** → manobra do **canal certo** (posterior: Dix-Hallpike/Epley; horizontal: head-roll/barbecue).
- **Episódica espontânea** = **Ménière** (tem tríade auditiva) **ou** **migrânea vestibular** (sem hipoacusia, com enxaqueca). A audição decide.
- **Aguda contínua** = faça **HINTS**: qualquer sinal **central** (impulso normal, nistagmo que troca de direção, skew) → tratar como **AVC** e pedir **RM com difusão**.
- **Fator de risco vascular não decide** — o exame decide.
- **TC normal não afasta AVC** de fossa posterior.`}
 ],
 flashcards: [
  {p: `Quais são as três síndromes temporais da tontura?`, r: `Aguda contínua (neurite × AVC); episódica desencadeada/posicional (VPPB); episódica espontânea (Ménière, migrânea vestibular).`},
  {p: `Na síndrome vestibular aguda, o que significa impulso cefálico NORMAL?`, r: `Causa central (AVC) — o reflexo intacto num paciente muito tonto é bandeira vermelha.`},
  {p: `Qual manobra diagnostica e qual trata o canal posterior?`, r: `Diagnóstico: Dix-Hallpike. Tratamento: Epley.`},
  {p: `E o canal horizontal?`, r: `Diagnóstico: head-roll (Pagnini-McClure). Tratamento: barbecue (ou Gufoni).`},
  {p: `O que separa Ménière de migrânea vestibular?`, r: `A audição: Ménière tem hipoacusia flutuante + zumbido + plenitude; migrânea vestibular tem audição preservada.`},
  {p: `Sinais centrais no HINTS (sigla)?`, r: `INFARCT: Impulse Normal, Fast-phase Alternating, Refixation on Cover Test.`},
  {p: `TC de crânio normal afasta AVC de fossa posterior?`, r: `Não — baixa sensibilidade; o exame é RM com difusão (que ainda pode ser falso-negativa nas primeiras 24–48 h).`}
 ],
 pegadinhas: [
  `Dix-Hallpike é para o canal POSTERIOR; canal horizontal usa head-roll (Pagnini-McClure) — manobra errada dá falso-negativo.`,
  `SVA contínua com impulso cefálico NORMAL = suspeitar de AVC (central), não relaxar.`,
  `TC de crânio tem baixa sensibilidade para isquemia de fossa posterior; RM com difusão é o exame (e pode ser falso-negativa cedo).`,
  `Sem hipoacusia não é Ménière: pense migrânea vestibular ou VPPB.`,
  `Betaistina/flunarizina não são primeira linha da VPPB — o tratamento é a manobra.`,
  `HINTS só se aplica à SVA contínua COM nistagmo; não use em tontura episódica.`,
  `Perda auditiva nova aguda + vertigem pode ser AVC da AICA, não 'labirintite' (HINTS plus).`,
  `Fator de risco vascular sozinho não decide central × periférico — use o exame.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), caps. 135–138 (Síndrome Vestibular Aguda, Vertigem Recorrente, Vertigem Posicional, Síndrome Vestibular Crônica) e cap. 20 — Tonturas e Vertigem (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 2 — Tontura, Vertigem e Perda Auditiva.`,
  `Adams & Victor — “Deafness, Dizziness, and Disorders of Equilibrium”; Sanvito — exame vestibular e nistagmo.`,
  `Critérios da Bárány Society (VPPB, migrânea vestibular, Ménière).`
 ],
 questoes: [
  {enunciado: `Homem de 62 anos, hipertenso e diabético, com vertigem rotatória aguda e contínua há 6 horas. Ao exame: teste do impulso cefálico NORMAL, nistagmo que muda de direção conforme a direção do olhar e discreto desvio skew. Qual a conduta mais adequada?`, alternativas: {a: `Manobra de Epley e alta`, b: `Ressonância magnética com difusão por suspeita de AVC de fossa posterior`, c: `Prescrever betaistina e reavaliar em 30 dias`, d: `Tomografia de crânio, que se normal exclui causa grave`}, correta: "b", comentario: `Os três achados (impulso cefálico normal, nistagmo que muda de direção e skew) são o padrão CENTRAL do HINTS — bandeira vermelha para AVC de fossa posterior, apesar da tontura isolada. A conduta é neuroimagem que enxergue a fossa posterior, ou seja, RM com difusão. Epley trata VPPB (crises de segundos, posicionais) — não é o caso. Betaistina/ambulatório protelam uma emergência. E a TC de crânio tem baixa sensibilidade para isquemia aguda de fossa posterior: TC normal NÃO exclui. Lembre do paradoxo: impulso cefálico normal na vertigem aguda contínua aponta para central.`, foco: `HINTS central (seu ponto de erro)`},
  {enunciado: `Mulher de 54 anos com crises de vertigem de segundos desencadeadas ao rolar na cama para os lados, sem hipoacusia. Suspeita-se de VPPB de canal horizontal. Qual a manobra diagnóstica apropriada?`, alternativas: {a: `Dix-Hallpike`, b: `Teste de impulso cefálico`, c: `Head-roll (Pagnini-McClure)`, d: `Manobra de Epley`}, correta: "c", comentario: `A manobra diagnóstica depende do canal suspeito. O canal horizontal é avaliado pelo head-roll (Pagnini-McClure), com o paciente em decúbito dorsal girando a cabeça para cada lado. O Dix-Hallpike diagnostica o canal POSTERIOR (o mais comum) e daria falso-negativo aqui. O impulso cefálico avalia neurite/central, não posiciona canal. Epley é tratamento (reposicionamento) do canal posterior, não diagnóstico do horizontal — para o horizontal o tratamento é a manobra de barbecue. Pegadinha clássica: casar a manobra certa com o canal certo.`, foco: `Canal e manobra correta (VPPB)`},
  {enunciado: `Mulher de 40 anos com enxaqueca desde a adolescência apresenta episódios recorrentes de vertigem de minutos a poucas horas, metade com cefaleia e fotofobia, sem qualquer perda auditiva; audiometria intercrise normal. Qual o diagnóstico e a conduta?`, alternativas: {a: `Doença de Ménière; restrição de sal e diurético`, b: `VPPB; manobra de Epley`, c: `Migrânea vestibular; profilaxia de enxaqueca`, d: `Neurite vestibular; corticoide`}, correta: "c", comentario: `Sem hipoacusia não é Ménière (que exige a tríade hipoacusia flutuante + zumbido + plenitude aural). O quadro recorrente, em paciente com enxaqueca, com sintomas migranosos em parte das crises e audição preservada, é migrânea vestibular, tratada com profilaxia da enxaqueca (propranolol, topiramato, amitriptilina). VPPB dura segundos e é posicional; neurite vestibular é episódio único, agudo e contínuo por dias. A audiometria normal é a chave que separa da Ménière.`, foco: `Ménière × migrânea vestibular`}
 ]
},

"NEURO|Neuroimunologia (EM / encefalites / NMO)": {
 titulo: `Neuroimunologia — desmielinizantes e encefalites autoimunes`,
 half: `NEURO`,
 resumo: `Um grupo de doenças em que o próprio sistema imune ataca o sistema nervoso. Parecem-se entre si, e é por isso que se erra. Este texto monta o mapa do zero — o que é desmielinização, o que é encefalite autoimune — e ensina a assinatura de cada doença (disseminação no tempo/espaço na EM; anti-AQP4 e mielite extensa na NMO; encefalopatia monofásica na ADEM; e o consumo de complemento que separa lúpus de anti-NMDA).`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (caps. 85–91), Merritt 13ª ed. (Seção 10 — Doenças Desmielinizantes e Inflamatórias), Adams & Victor (Multiple Sclerosis and Allied Demyelinating Diseases) e PCDT de Esclerose Múltipla (MS). Ver materiais_neuro.md.`,
 notaErro: `Este é um dos temas em que você mais erra (100% em esclerose múltipla e em encefalite anti-NMDA). O motivo é que as doenças **se imitam** e a prova cobra a **pista que as separa** — não o quadro geral. As armadilhas:

- **Tratar NMO como esclerose múltipla.** É o erro que mais custa: o **interferon-beta** (e vários modificadores de EM) **PIORAM a neuromielite óptica**. Por isso, diante de neurite óptica grave ou mielite longa, **dose anti-AQP4 antes** de rotular EM (seção 3).
- **Confundir anti-NMDA com encefalite lúpica.** As duas dão psicose + crises em mulher jovem. A chave é o **complemento**: **baixo (consumido) = lúpus**; **normal = anti-NMDA** (seção 5).
- **Não segurar o conceito de McDonald.** A EM se prova por **disseminação no tempo E no espaço** — é a frase que o examinador quer ver (seção 2).
- **Esquecer o aciclovir empírico.** Numa encefalite aguda febril, cobre-se **herpes** até excluir, mesmo suspeitando de autoimune (seção 5).

**Como zerar:** para cada caso, pergunte — (1) é **desmielinizante** (surtos, RM com placas) ou **encefalite** (psicose/crise subaguda)? (2) qual o **anticorpo/pista laboratorial** (anti-AQP4? anti-NMDA? complemento baixo? bandas oligoclonais?)? (3) o tratamento **muda** conforme a resposta (não trate NMO como EM; não esqueça o aciclovir). As questões ao final batem nesses pontos.`,
 secoes: [
  {h: `1. O mapa do território`, c: `Neuroimunologia reúne doenças em que o sistema imune ataca o próprio sistema nervoso. Para não se perder, divida em dois grandes grupos:

- **Doenças desmielinizantes:** o alvo é a **mielina** (a "capa" que isola os axônios e acelera o impulso). Sem mielina, o sinal fica lento ou some. Aqui estão a **esclerose múltipla (EM)**, a **neuromielite óptica (NMO)**, a **ADEM** e a **MOGAD**. Clínica típica: surtos de déficit neurológico (neurite óptica, mielite, síndromes de tronco).
- **Encefalites autoimunes:** anticorpos atacam **neurônios/receptores**, gerando quadro subagudo de **psicose, crises, alteração de comportamento e memória**. Exemplos: **anti-NMDA** e a **encefalite do lúpus** (LES neuropsiquiátrico).

Guardar essa divisão já orienta o raciocínio: "surtos com placas na RM" puxa para desmielinizante; "virou psicótico e teve crise em semanas" puxa para encefalite autoimune.`},
  {h: `2. Esclerose múltipla — a mais importante`, c: `Doença inflamatória desmielinizante **crônica** do SNC, imunomediada, típica de **mulheres jovens (20–40 anos)**, com fatores de risco como baixa vitamina D, tabagismo e vírus Epstein-Barr. Linfócitos autorreativos cruzam a barreira hematoencefálica e formam **placas** de desmielinização; o dano axonal acumulado explica a incapacidade a longo prazo.

- **Fenótipos:** **remitente-recorrente** (surtos que remitem — o mais comum no início), **secundariamente progressiva** e **primariamente progressiva**.
- **Surto** = déficit neurológico focal > 24 h **na ausência de febre/infecção**. Cuidado com o **pseudossurto**: calor ou febre pioram temporariamente sintomas antigos (**fenômeno de Uhthoff**) — isso **não** é surto verdadeiro e não muda o tratamento de fundo.
- **Diagnóstico — critérios de McDonald (2017):** exige **disseminação no espaço (DIS)** — lesões em ≥2 de 4 topografias típicas (periventricular, cortical/justacortical, infratentorial, medular) — **e disseminação no tempo (DIT)** — lesões novas no seguimento, ou coexistência de lesões que captam e não captam gadolínio, **ou bandas oligoclonais no líquor** (que passaram a poder cumprir a DIT).
- **Líquor:** bandas oligoclonais de IgG (síntese intratecal) em >85%.
- **Tratamento:** **surto agudo → corticoide em pulso** (metilprednisolona); **doença → terapia modificadora** (acetato de glatirâmer, interferon, e agentes de alta eficácia como natalizumabe/ocrelizumabe conforme o caso).`},
  {h: `3. Neuromielite óptica (NMOSD / anti-AQP4) — a pegadinha do tratamento`, c: `Não é "uma EM mais grave" — é outra doença: uma **astrocitopatia** por anticorpo contra o canal de água **aquaporina-4 (anti-AQP4)**.

- **Clínica:** **neurite óptica grave** (frequentemente bilateral, com pior recuperação visual) e **mielite longitudinalmente extensa** (lesão de **≥3 corpos vertebrais** na RM), além da síndrome de área postrema (**soluços/vômitos intratáveis**).
- **Confirmação:** anticorpo **anti-AQP4** positivo.
- **PEGADINHA CAPITAL:** o tratamento clássico da EM (**interferon-beta**, natalizumabe, fingolimode) **PIORA a NMO**. Por isso, sempre que houver neurite óptica grave/bilateral ou mielite extensa, **dose anti-AQP4 antes** de tratar como EM.
- **Tratamento:** surto → corticoide em pulso ± **plasmaférese**; manutenção → **imunossupressão** (rituximabe, eculizumabe, satralizumabe, inebilizumabe).`},
  {h: `4. ADEM e MOGAD`, c: `- **ADEM (encefalomielite disseminada aguda):** desmielinização **monofásica**, em geral **pós-infecciosa ou pós-vacinal**, mais em **crianças**, com **encefalopatia** (rebaixamento/confusão — obrigatória para o diagnóstico) + lesões grandes e difusas de substância branca. O que a separa da EM: ser **monofásica** e cursar com **encefalopatia**. Trata-se com **corticoide em pulso** (± imunoglobulina/plasmaférese).
- **MOGAD** (doença associada ao anticorpo anti-MOG): espectro próprio — neurite óptica (muitas vezes bilateral/recorrente), quadros ADEM-like, mielite —, com **anti-MOG** positivo, costuma ter **melhor prognóstico** e boa resposta a corticoide, mas pode recair se a retirada for rápida.`},
  {h: `5. Encefalites autoimunes: anti-NMDA × lúpica (e o herpes no meio)`, c: `- **Encefalite anti-receptor de NMDA:** mulher jovem, muitas vezes com pródromo viral, evolui em semanas com **sintomas psiquiátricos/psicose**, **crises**, **discinesias orofaciais**, disautonomia e rebaixamento; associação clássica a **teratoma de ovário**. **Complemento normal**; diagnóstico pelo **anti-NMDA no líquor**. Tratamento: imunoterapia (corticoide, imunoglobulina, plasmaférese; 2ª linha rituximabe/ciclofosfamida) + **retirada do tumor**.
- **Encefalite lúpica (LES neuropsiquiátrico):** psicose/crises/meningoencefalite no contexto de lúpus. **Pista decisiva: consumo de complemento (C3/C4 baixos)** com FAN/anti-dsDNA e clínica sistêmica (fotossensibilidade, artralgias). É o **complemento consumido** que aponta lúpus e não anti-NMDA. Tratamento: **pulso de metilprednisolona + imunossupressor** (ciclofosfamida).
- **Não esqueça o herpes:** diante de encefalite **aguda e febril** (sobretudo com acometimento temporal), inicie **aciclovir empírico** e colha PCR para HSV **até excluir** — a encefalite herpética mata se não tratada, e não custa cobrir enquanto se investiga a causa autoimune.`},
  {h: `6. Armadilhas de imagem e líquor`, c: `- Lesão desmielinizante que capta contraste em **anel aberto** favorece desmielinização (contra neoplasia/abscesso, que fazem **anel fechado**).
- **Mielite curta e parcial** favorece EM; **mielite longa e central (≥3 segmentos)** favorece NMO.
- **Bandas oligoclonais** apoiam EM e podem cumprir a disseminação no tempo.
- **Complemento baixo** aponta lúpus; **anti-AQP4** aponta NMO; **anti-NMDA** aponta a encefalite homônima.
- Sempre excluir **mimetizadores**: neurossífilis, HIV, deficiência de B12/cobre, sarcoidose, vasculite.`},
  {h: `1b. Como a mielina funciona — e por que perdê-la dá sintoma`, c: `Para entender **toda** a neuroimunologia desmielinizante, comece por um único conceito: a **mielina**. Imagine o axônio (o "fio" do neurônio) como um cabo elétrico. A mielina é o **encapamento** que envolve esse cabo. Ela é produzida por células diferentes conforme o território: no **sistema nervoso central** quem faz mielina é o **oligodendrócito**; no **sistema nervoso periférico** é a **célula de Schwann**. As doenças deste módulo atacam a mielina **central** (por isso dão neurite óptica, mielite, síndromes de tronco — e não neuropatia periférica).

Por que o encapamento importa? Porque o impulso nervoso não caminha continuamente pelo axônio mielinizado: ele **"pula"** de um espaço sem mielina para o próximo (os **nódulos de Ranvier**). Esse pulo se chama **condução saltatória** e é o que torna a transmissão rápida e econômica. Tire a mielina e o impulso deixa de pular: ele fica **lento**, ou **bloqueia** de vez. É por isso que o sintoma da desmielinização depende de **onde** a placa está — placa no nervo óptico dá perda visual; placa na medula dá dormência/fraqueza; placa no tronco dá diplopia ou vertigem.

Isso também explica dois fenômenos clínicos clássicos. Primeiro, a **recuperação parcial dos surtos**: quando a inflamação cede, sobra mielina residual e ocorre alguma **remielinização**, então o déficit melhora — mas nunca volta 100% se já houve **perda axonal** (o cabo em si rompeu). Segundo, a **incapacidade progressiva a longo prazo** na EM não vem da mielina, e sim do **acúmulo de dano axonal** ao longo dos anos. Guardar isto muda o raciocínio de prova: a desmielinização explica o **surto**; a degeneração axonal explica a **progressão**.`},
  {h: `3b. Antes da EM plenamente estabelecida: síndrome clínica isolada (CIS) e radiologicamente isolada (RIS)`, c: `Nem todo paciente chega com dois surtos e RM cheia de placas. A prova adora os **estágios iniciais**, porque é onde a conduta muda.

- **Síndrome clínica isolada (CIS):** é o **primeiro e único** episódio clínico desmielinizante (por exemplo, uma neurite óptica isolada), ainda sem preencher disseminação no tempo. Não é EM "por definição" — mas é um forte candidato. O que aumenta o risco de conversão para EM: **RM com lesões típicas** e **bandas oligoclonais** no líquor. Pelos critérios de McDonald 2017, se a RM já mostra disseminação no espaço e há **bandas oligoclonais**, elas podem **substituir** a disseminação no tempo e permitir fechar EM já no primeiro surto.

- **Síndrome radiologicamente isolada (RIS):** o paciente **nunca teve sintoma**, mas fez uma RM por outro motivo (cefaleia, trauma) e apareceram lesões que **parecem** desmielinização. Sem clínica, **não** se diagnostica EM e, em regra, **não se trata** — apenas se acompanha, porque tratar imagem sem doença não se justifica. É uma pegadinha frequente: imagem sugestiva **não** é sinônimo de EM.

Por que isso importa para não errar? Porque o examinador testa se você entende que **EM é diagnóstico clínico-radiológico com disseminação**, e não "achado de RM". A pressa de rotular EM em um primeiro evento (ou em imagem incidental) leva a tratamento indevido — e, se por acaso for NMO, a tratamento **perigoso**.`},
  {h: `5b. Tratamento em detalhe — surto, doença e as escolhas que caem na prova`, c: `Separe sempre **tratar o surto** de **tratar a doença**.

- **Surto agudo (qualquer desmielinizante):** **corticoide em pulso** (metilprednisolona 1 g/dia IV por 3–5 dias). Se o surto for grave e **não responder** ao corticoide — sobretudo em **NMO** ou EM fulminante — o resgate é a **plasmaférese**. Lembre: pulso de corticoide encurta o surto, mas **não** muda a evolução de longo prazo.

- **Doença (EM) — terapia modificadora (DMT):** existem duas estratégias. No **escalonamento**, começa-se com drogas de **eficácia moderada e alto perfil de segurança** (interferon-beta, acetato de glatirâmer, teriflunomida, dimetilfumarato) e sobe-se se houver atividade. Na **indução/alta eficácia precoce**, já se inicia com drogas potentes (**natalizumabe, ocrelizumabe, ofatumumabe, cladribina, alentuzumabe**) em quem tem doença agressiva. Some sempre as medidas de base: **reposição de vitamina D** e **cessação do tabagismo** (fatores modificáveis).

- **NMO (anti-AQP4):** manutenção é **imunossupressão** — **rituximabe**, azatioprina, e os biológicos-alvo **eculizumabe** (anti-C5), **satralizumabe** (anti-IL6R) e **inebilizumabe** (anti-CD19). Reforçando a pegadinha capital: **os DMT de EM à base de interferon pioram a NMO** — nunca troque um pelo outro.

- **Encefalite anti-NMDA:** imunoterapia de **1ª linha** (corticoide + imunoglobulina **ou** plasmaférese) e, se refratário, **2ª linha** (rituximabe e/ou ciclofosfamida), **sempre** com busca e **retirada do teratoma** — remover o tumor é parte do tratamento, não um detalhe.`},
  {h: `6b. Semiologia dirigida (Sanvito) — os sinais que entregam a EM`, c: `Alguns sinais de exame são tão característicos que praticamente "assinam" a doença desmielinizante. Saber reconhecê-los evita erro:

- **Neurite óptica:** perda visual **subaguda e monocular**, com **dor à movimentação** do olho e **discromatopsia** (as cores "desbotam", sobretudo o vermelho). O sinal-chave ao exame é o **defeito pupilar aferente relativo (DPAR)**, ou **pupila de Marcus Gunn**: ao passar a lanterna do olho são para o doente ("swinging flashlight"), a pupila do olho afetado **dilata** em vez de contrair, porque o sinal aferente chega enfraquecido.

- **Sinal de Lhermitte:** sensação de **choque elétrico** que desce pela coluna e membros ao **fletir o pescoço** — indica lesão desmielinizante nos **cordões posteriores** da medula cervical.

- **Fenômeno de Uhthoff:** piora **transitória** dos sintomas com **calor/febre/exercício** (aumento da temperatura corporal reduz ainda mais a condução no axônio desmielinizado). É **pseudossurto** — some com o resfriamento e **não** indica novo surto nem troca de tratamento.

- **Oftalmoplegia internuclear (INO):** ao olhar para o lado, o olho que deveria aduzir **não passa da linha média** e o outro faz nistagmo — por lesão do **fascículo longitudinal medial** no tronco. **INO bilateral em pessoa jovem é EM até prova em contrário** (clássico de prova).`},
  {h: `7. Síntese em seis frases`, c: `- Separe **desmielinizante** (surtos/placas) de **encefalite autoimune** (psicose/crise subaguda).
- **EM** se prova por **disseminação no tempo E no espaço** (McDonald); surto → corticoide, doença → modificador.
- **NMO** (anti-AQP4) = neurite óptica grave + mielite ≥3 segmentos; **não** tratar como EM (interferon piora).
- **ADEM** = monofásica + **encefalopatia**, pós-infecciosa na criança.
- **Anti-NMDA** (complemento normal, teratoma) × **lúpus** (**complemento baixo**) — a pista é o complemento.
- Encefalite aguda febril: **aciclovir empírico** até excluir herpes.`}
 ],
 flashcards: [
  {p: `Frase-chave do diagnóstico de esclerose múltipla?`, r: `Disseminação no tempo E no espaço (critérios de McDonald).`},
  {p: `O que separa a encefalite lúpica da anti-NMDA?`, r: `Consumo de complemento (C3/C4 baixos) no lúpus; complemento normal na anti-NMDA.`},
  {p: `Por que dosar anti-AQP4 antes de tratar como EM?`, r: `Porque interferon-beta e vários modificadores de EM PIORAM a NMO.`},
  {p: `O que define ADEM frente à EM?`, r: `Quadro monofásico + encefalopatia (rebaixamento/confusão), em geral pós-infeccioso na criança.`},
  {p: `Anti-NMDA em mulher jovem: o que rastrear?`, r: `Teratoma de ovário.`},
  {p: `Mielite de ≥3 segmentos vertebrais sugere?`, r: `Neuromielite óptica (NMO), não EM (que faz mielite curta/parcial).`},
  {p: `Fenômeno de Uhthoff?`, r: `Piora transitória de sintomas de EM com calor/febre — é pseudossurto, não surto verdadeiro.`},
  {p: `INO (oftalmoplegia internuclear) bilateral em um jovem sugere qual doença?`, r: `Esclerose múltipla (lesão do fascículo longitudinal medial).`},
  {p: `Qual sinal de exame entrega uma neurite óptica?`, r: `Defeito pupilar aferente relativo (pupila de Marcus Gunn) + dor à movimentação ocular e discromatopsia.`},
  {p: `Achado de RM sugestivo de desmielinização em paciente SEM sintoma: diagnóstico e conduta?`, r: `Síndrome radiologicamente isolada (RIS) — não é EM; em regra só se acompanha, não se trata.`},
  {p: `O que a plasmaférese faz no contexto desmielinizante?`, r: `É o resgate do surto grave refratário ao corticoide, sobretudo na NMO e na EM fulminante.`},
  {p: `Quem produz mielina no SNC x no SNP?`, r: `Oligodendrócito no SNC; célula de Schwann no SNP — por isso a EM/NMO dão sintomas centrais.`}
 ],
 pegadinhas: [
  `“Disseminação no tempo e no espaço” é a assinatura de McDonald (EM) — decore literalmente.`,
  `Tratar NMO como EM (interferon-beta) PIORA a doença — dose anti-AQP4 antes.`,
  `ADEM = monofásico + encefalopatia; EM não exige encefalopatia e é recorrente.`,
  `Complemento baixo (C3/C4) na encefalite = pense lúpus (anti-NMDA tem complemento normal).`,
  `Encefalite aguda febril: iniciar aciclovir empírico até excluir herpes.`,
  `Anel aberto ao contraste favorece desmielinização; anel fechado, abscesso/tumor.`,
  `Febre/calor causam pseudossurto (Uhthoff) — não é surto verdadeiro.`,
  `INO bilateral em jovem = esclerose múltipla até prova em contrário.`,
  `RIS (imagem sugestiva sem clínica) NÃO é EM e, via de regra, não se trata — só acompanha.`,
  `Pulso de corticoide encurta o surto, mas NÃO altera a progressão da EM; a progressão vem da perda axonal.`,
  `Na encefalite anti-NMDA, retirar o teratoma faz parte do tratamento — não é opcional.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), caps. 85–91 (Esclerose Múltipla; Espectro da Neuromielite Óptica; ADEM; Encefalites Autoimunes e Paraneoplásicas; MOGAD/GFAP) (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 10 — Doenças Desmielinizantes e Inflamatórias.`,
  `PCDT de Esclerose Múltipla (Ministério da Saúde/BVSMS); Adams & Victor — “Multiple Sclerosis and Allied Demyelinating Diseases”.`
 ],
 questoes: [
  {enunciado: `Mulher de 34 anos com neurite óptica grave e mielite estendendo-se por 4 segmentos vertebrais; anticorpo anti-aquaporina-4 positivo. Qual conduta é INADEQUADA por poder agravar a doença?`, alternativas: {a: `Corticoide em pulsoterapia no surto`, b: `Plasmaférese se resposta insuficiente ao corticoide`, c: `Interferon-beta como terapia de manutenção`, d: `Rituximabe para manutenção`}, correta: "c", comentario: `O quadro é neuromielite óptica (anti-AQP4+): neurite óptica grave + mielite longitudinalmente extensa (≥3 segmentos). O erro clássico é tratá-la como esclerose múltipla: o interferon-beta (e alguns modificadores de EM) PIORA a NMO. O correto no surto é corticoide em pulso, com plasmaférese se refratário, e manutenção com imunossupressor (rituximabe, azatioprina, eculizumabe). Por isso sempre se dosa anti-AQP4 antes de rotular como EM.`, foco: `NMO × EM (pegadinha do tratamento)`},
  {enunciado: `Mulher de 24 anos com primeira crise convulsiva, duas semanas de alteração de comportamento e alucinações. Exames: C3 e C4 baixos, FAN em título alto, líquor com pleocitose. Qual o diagnóstico mais provável?`, alternativas: {a: `Encefalite lúpica (LES neuropsiquiátrico)`, b: `Encefalite anti-receptor de NMDA`, c: `Esclerose múltipla`, d: `Encefalite herpética`}, correta: "a", comentario: `O consumo de complemento (C3/C4 baixos) com fator antinuclear em título alto é a pista da encefalite lúpica (lúpus neuropsiquiátrico). A encefalite anti-NMDA também dá psicose/crises semelhantes, mas com complemento NORMAL e frequentemente discinesias orofaciais e teratoma de ovário. A esclerose múltipla não causa quadro psicótico agudo inaugural nem consumo de complemento. A herpética é febril, aguda, com acometimento temporal e PCR+ para HSV. Tratamento do LES neuropsiquiátrico: pulso de metilprednisolona + imunossupressor (ciclofosfamida).`, foco: `Consumo de complemento (anti-NMDA × lúpica)`},
  {enunciado: `Mulher de 29 anos com episódio de neurite óptica agora e história, há 3 meses, de dormência em membros que resolveu sozinha; RM com lesões periventriculares e medulares. Qual conceito confirma o diagnóstico de esclerose múltipla?`, alternativas: {a: `Positividade para anti-aquaporina-4`, b: `Disseminação no tempo e no espaço`, c: `Encefalopatia com lesão monofásica`, d: `Consumo de complemento sérico`}, correta: "b", comentario: `O diagnóstico de EM se apoia na disseminação no tempo (surtos em momentos diferentes) e no espaço (lesões em sítios típicos distintos) — os critérios de McDonald. O anti-AQP4 positivo apontaria NMO, não EM. Encefalopatia monofásica sugere ADEM. Consumo de complemento remete a lúpus. Bandas oligoclonais no líquor apoiam, mas o conceito-chave cobrado é a dupla disseminação temporal e espacial.`, foco: `McDonald / disseminação no tempo e espaço`},
  {enunciado: `Homem de 27 anos com diplopia: ao olhar para a esquerda, o olho direito não ultrapassa a linha média e o esquerdo faz nistagmo; achado bilateral. Qual a principal hipótese?`, alternativas: {a: `Paralisia isolada do III par`, b: `Miastenia gravis`, c: `Esclerose múltipla (oftalmoplegia internuclear bilateral)`, d: `AVC de tronco por aterosclerose`}, correta: "c", comentario: `Oftalmoplegia internuclear (INO) é a falha de adução de um olho com nistagmo do olho abdutor, por lesão do fascículo longitudinal medial no tronco. Quando é BILATERAL e em pessoa JOVEM, o diagnóstico é esclerose múltipla até prova em contrário. A miastenia pode imitar oftalmoparesia, mas é fatigável e sem nistagmo internuclear; III par isolado não dá esse padrão; AVC aterosclerótico é improvável nessa idade e costuma ser unilateral com outros sinais de tronco.`, foco: `Semiologia — INO / EM em jovem`},
  {enunciado: `Mulher de 30 anos com primeiro episódio de neurite óptica; RM mostra lesões periventriculares e justacorticais típicas; líquor com bandas oligoclonais. Ainda no primeiro surto, o que permite fechar esclerose múltipla?`, alternativas: {a: `A presença de bandas oligoclonais substituindo a disseminação no tempo`, b: `A positividade de anti-AQP4`, c: `O achado de encefalopatia`, d: `O consumo de complemento sérico`}, correta: "a", comentario: `Pelos critérios de McDonald 2017, quando há disseminação no espaço na RM e bandas oligoclonais no líquor, as bandas podem SUBSTITUIR a disseminação no tempo, permitindo o diagnóstico de EM já no primeiro evento (CIS). Anti-AQP4 apontaria NMO; encefalopatia sugere ADEM; consumo de complemento remete a lúpus.`, foco: `CIS / McDonald 2017 — bandas oligoclonais`}
 ]
},

"NEURO|Neuroinfecção": {
 titulo: `Neuroinfecção — meningites, encefalites e o SNC no HIV`,
 half: `NEURO`,
 resumo: `Infecções do sistema nervoso são emergências em que minutos e condutas na ordem certa salvam vidas. Este texto constrói o tema do zero: como pensar meningite (agente por idade, quando NÃO puncionar sem atrasar o antibiótico), encefalite herpética (aciclovir empírico), neurocisticercose (tema regional que você erra) e o SNC no HIV (toxoplasmose × LEMP × linfoma), além de neurossífilis e tuberculose meníngea.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (caps. 140–152), Merritt 13ª ed. (Seção 9 — Infecções do SNC), Adams & Victor (Infections of the Nervous System), Guia de Vigilância em Saúde e Diretrizes de Meningites do MS. Ver materiais_neuro.md.`,
 notaErro: `Este é um tema ESSENCIAL em que você tem errado (100% em neurocisticercose), e o padrão do erro é **condutas fora de ordem** e **diferenciais do HIV trocados**. As armadilhas:

- **Atrasar o antibiótico da meningite** esperando a TC/o líquor. Quando há sinal de HIC/efeito de massa, a punção espera a imagem — **mas o antibiótico empírico (± dexametasona) NÃO espera** (seção 3). Marcar "adiar antibiótico até o líquor" é o erro que mata.
- **Não reconhecer a neurocisticercose** (procedência endêmica, crise epiléptica no adulto, cisto/calcificação): a prova quer que você lembre do **anticonvulsivante + albendazol com corticoide** e das ressalvas (seção 5).
- **Trocar toxoplasmose por LEMP no HIV.** Toxo = lesões com **realce anelar** e efeito de massa, CD4 baixo → **prova terapêutica**; LEMP = lesões de substância branca **sem** realce/efeito de massa, vírus **JC** → **otimizar TARV** (seção 6).
- **Esquecer o aciclovir na encefalite** aguda febril com acometimento temporal (seção 4).

**Como zerar:** para cada caso pergunte — (1) é **meníngeo** (rigidez, febre) ou **encefalítico** (alteração de comportamento/consciência, crises) ou **lesão focal**? (2) há **imunossupressão** (HIV, CD4)? (3) qual a **primeira medida** (antibiótico/aciclovir imediatos; quando adiar só a punção)? As questões ao final batem exatamente nisto.`,
 secoes: [
  {h: `1. O primeiro passo: onde a infecção está?`, c: `"Neuroinfecção" abrange sítios diferentes, e localizar orienta tudo:

- **Meningite:** inflamação das meninges. Domínio da **febre + rigidez de nuca + cefaleia**, com sinais de Kernig/Brudzinski. O líquor é o exame-chave.
- **Encefalite:** inflamação do **parênquima** cerebral. Domínio da **alteração de comportamento/consciência, crises e déficits focais** (a herpética é o protótipo).
- **Meningoencefalite:** os dois juntos.
- **Lesões focais** (abscesso, neurocisticercose, toxoplasmose, tuberculoma, linfoma): dão **crise, déficit focal ou HIC**.

Duas perguntas de triagem mudam a conduta: o paciente é **imunossuprimido** (HIV/CD4, transplante)? Há **sinal de hipertensão intracraniana/efeito de massa** (papiledema, déficit focal, rebaixamento, crises)? Guarde-as.`},
  {h: `2. Meningite bacteriana aguda — agentes e liquor`, c: `Emergência. Os **agentes variam pela idade/condição**:
- **Recém-nascido:** Streptococcus do grupo B, E. coli, Listeria.
- **Lactente/criança e adulto jovem:** meningococo (Neisseria meningitidis) e pneumococo (S. pneumoniae); Haemophilus caiu muito com a vacina.
- **> 50 anos, gestante, imunossuprimido:** acrescentar cobertura para **Listeria** (ampicilina).

**Liquor bacteriano típico:** pressão alta, aspecto turvo, **pleocitose de neutrófilos**, **glicose baixa** (consumo bacteriano) e **proteína alta**. O **Gram** ajuda a apontar o agente: **diplococos gram-negativos = meningococo**; diplococos gram-positivos = pneumococo.

**Pista de gravidade:** **petéquias/púrpura + choque** = doença **meningocócica** com **coagulação intravascular disseminada (CIVD)** / síndrome de Waterhouse-Friderichsen (hemorragia adrenal). Meningococo é de **notificação compulsória** e exige **quimioprofilaxia dos contatos** próximos (rifampicina/ceftriaxona/ciprofloxacino).`},
  {h: `3. A ordem que salva vida: antibiótico, dexametasona e quando NÃO puncionar`, c: `Esta é a sequência mais cobrada — e a que você não pode inverter:

- **Se há sinal de HIC/efeito de massa** (papiledema, déficit focal, rebaixamento importante, crises, imunossupressão): faça **neuroimagem antes da punção lombar**, pelo risco de **herniação**.
- **MAS o tratamento não espera:** colha **hemoculturas** e **inicie o antibiótico empírico imediatamente** — não aguarde a TC nem o resultado do líquor. Atrasar o antibiótico aumenta a mortalidade.
- **Dexametasona:** administrar **antes ou junto** da primeira dose de antibiótico (benefício sobretudo no pneumococo; reduz sequela auditiva/neurológica).
- **Antibiótico empírico** conforme protocolo do MS/idade: em geral **ceftriaxona** (+ **vancomicina** onde há pneumococo resistente) e **ampicilina** quando há risco de Listeria (extremos de idade, gestante, imunossuprimido).

Regra de ouro para a prova: **"não puncionar antes da imagem" nunca significa "não tratar antes da imagem".**`},
  {h: `4. Encefalite viral — o herpes que não se pode perder`, c: `A **encefalite herpética (HSV-1)** é a encefalite esporádica mais importante: febre, **alteração de comportamento/consciência**, crises e sinais focais, com predileção pelos **lobos temporais** (na RM e no EEG). O líquor pode ter hemácias/xantocromia (necrose) e a **PCR para HSV** confirma.

- **Conduta:** **aciclovir intravenoso empírico já na suspeita**, sem esperar a PCR — o atraso piora muito o prognóstico. Mantém-se até excluir/confirmar.
- Outros vírus: arboviroses (dengue, zika, chikungunya, e vigilância de Oropouche) podem dar encefalite/complicações neurológicas; enterovírus causam meningite viral (líquor com **linfócitos**, glicose normal, evolução benigna).`},
  {h: `5. Neurocisticercose — o tema regional que você erra`, c: `Causada pela forma larvar da **Taenia solium** (ingestão de ovos, via fecal-oral), é a causa parasitária mais comum de **epilepsia adquirida** em áreas endêmicas (Brasil incluído).

- **Clínica:** depende da localização e do estágio. A forma parenquimatosa dá **crises epilépticas** (a apresentação mais comum no adulto que "começou a convulsionar"); as formas extraparenquimatosas (subaracnóidea/intraventricular) dão **hipertensão intracraniana e hidrocefalia**.
- **Imagem:** cistos em diferentes estágios — vesicular (com escólex, o "cisto com pontinho"), coloidal (com realce/edema) e **calcificado** (a "clássica" calcificação puntiforme).
- **Tratamento:** individualizado. Em geral **anticonvulsivante** para as crises + **albendazol** (± praziquantel nas formas com múltiplos cistos) **sempre associado a corticoide** (a morte dos cistos gera inflamação que pode piorar o edema). **Cuidado:** afastar cisticercose **ocular** antes de dar antiparasitário (risco de perda visual) e priorizar **derivação/manejo da HIC** nas formas com hidrocefalia antes do antiparasitário.`},
  {h: `6. O sistema nervoso no HIV — o diferencial das lesões focais`, c: `Com CD4 baixo, três causas de lesão cerebral competem — e a prova cobra separá-las:

- **Neurotoxoplasmose:** a mais comum. **Múltiplas** lesões com **realce anelar** e **efeito de massa** (edema), CD4 geralmente < 100–200. Conduta: **prova terapêutica** com sulfadiazina + pirimetamina + ácido folínico; melhora clínica/radiológica em ~2 semanas confirma.
- **Leucoencefalopatia multifocal progressiva (LEMP):** vírus **JC**. Lesões de **substância branca**, multifocais, **SEM realce** e **sem efeito de massa**; déficit focal progressivo. O líquor tem **baixa sensibilidade/alta especificidade** (PCR do JC). Conduta: **otimizar a TARV** (reconstituição imune) — não há antiviral específico.
- **Linfoma primário do SNC:** lesão **única**, com realce, geralmente associada a EBV no líquor; entra quando a toxo "não responde" à prova terapêutica.

Fora essas, lembrar de **criptococose** (meningite fúngica — cefaleia arrastada, **tinta da China** e antígeno criptocócico; tratar com anfotericina + flucitosina e **controlar a pressão do líquor** com punções de alívio).`},
  {h: `7. Neurossífilis e tuberculose meníngea (não esquecer)`, c: `- **Neurossífilis:** pode ser assintomática, meningovascular (AVC no jovem) ou parenquimatosa tardia (**paralisia geral** — demência/psicose; **tabes dorsalis** — ataxia sensitiva; **pupila de Argyll-Robertson** — acomoda mas não reage à luz). Confirma-se por **VDRL no líquor** (+ FTA-Abs). Tratamento: **penicilina G cristalina IV por 10–14 dias** (a benzatina IM **não** trata neurossífilis). O HIV acelera/agrava.
- **Tuberculose meníngea:** meningite **subaguda** (dias a semanas), com **líquor de predomínio linfocítico, glicose baixa e proteína muito alta**, acometimento de **base do crânio** (paralisias de nervos cranianos, hidrocefalia) e AVC por vasculite. Tratamento: **esquema RIPE + corticoide**.`},
  {h: `1b. Como o SNC se defende — e por que a meningite é uma emergência`, c: `O sistema nervoso central vive dentro de duas "muralhas": as **meninges** (dura, aracnoide e pia) e a **barreira hematoencefálica (BHE)**. A BHE é feita de células endoteliais unidas por **junções apertadas** que impedem a passagem livre de micróbios, células e a maioria das drogas. Entre a aracnoide e a pia corre o **líquor** no **espaço subaracnóideo** — é ali que a meningite acontece.

Essa proteção tem um preço. Como o espaço subaracnóideo é normalmente "imunologicamente pobre" (pouco anticorpo, pouco complemento), quando uma bactéria consegue entrar ela **se multiplica quase sem freio** no começo. O sistema imune então responde de forma explosiva, e é justamente a **inflamação** — não só o micróbio — que causa o dano: edema cerebral, aumento da pressão intracraniana, trombose de vasos e queda do fluxo sanguíneo cerebral. Entender isso explica **dois pilares do tratamento**: (1) o antibiótico precisa **atravessar a BHE inflamada** em dose alta e não pode esperar; e (2) a **dexametasona** é dada **antes/junto** da primeira dose de antibiótico para **modular a inflamação** exatamente no momento em que a lise bacteriana pelo antibiótico libera mais componentes pró-inflamatórios (por isso reduz sequelas, sobretudo no pneumococo).

Guardar a anatomia também organiza o raciocínio topográfico: infecção das **meninges** = **meningite** (rigidez de nuca, febre, cefaleia); infecção do **parênquima** = **encefalite** (alteração de comportamento, crises, déficit focal); infecção **focal com massa** = **abscesso/neurocisticercose/toxoplasmose**. Onde está a infecção define o quadro, o líquor e a conduta.`},
  {h: `2b. O líquor passo a passo — a tabela que decide`, c: `Saber ler o líquor separa quase todos os diagnósticos. Analise **cinco parâmetros**, sempre comparando a glicose do líquor com a **glicemia** colhida junto (o normal é o líquor ter ~⅔ da glicemia):

- **Bacteriana aguda:** pressão **alta**, aspecto **turvo**, **milhares de células com predomínio de neutrófilos**, **glicose baixa** (consumida pela bactéria), **proteína alta**, **lactato alto**. É o padrão "tudo alterado".
- **Viral (asséptica):** pressão normal/pouco alta, aspecto **límpido**, **pleocitose linfocítica** (dezenas a centenas), **glicose normal**, proteína normal/pouco alta. Na encefalite herpética pode haver **hemácias/xantocromia** (necrose temporal).
- **Tuberculosa / fúngica (crônica):** aspecto límpido ou opalescente, **pleocitose linfocítica**, **glicose baixa**, **proteína muito alta**. A TB clássica tem evolução **subaguda** e forma **película** ao repousar; a criptocócica pede **tinta da China** e **antígeno criptocócico**.

Uma regra prática que evita erro: **predomínio de neutrófilos + glicose baixa = pense bacteriana** e trate já; **predomínio de linfócitos + glicose baixa = pense TB ou fungo**; **linfócitos + glicose normal = viral**. O **Gram** e o **lactato** ajudam na primeira hora; culturas e PCR confirmam depois. Nunca segure o antibiótico esperando o resultado do líquor.`},
  {h: `5b. Neurocisticercose em profundidade — do porco à prova`, c: `Este é o **seu ponto de maior erro**, então vamos do zero. A neurocisticercose é a infecção do SNC pela **forma larval (cisticerco) da Taenia solium**, o verme do porco. O ciclo tem uma inversão que confunde todo mundo:

- Comer **carne de porco malcozida** com cisticercos → você desenvolve **teníase** (o verme adulto no intestino), que em geral é benigna.
- Ingerir os **ovos** da Taenia solium (via **água/alimentos contaminados por fezes humanas**, ou autoinfecção fecal-oral) → os ovos eclodem, as larvas caem na circulação e se alojam no **cérebro** = **neurocisticercose**. Ou seja, o ser humano vira o "porco" do ciclo. Por isso é doença de **saneamento**, e não simplesmente de "comer porco".

**Como se apresenta:** a manifestação mais comum é **epilepsia de início na vida adulta** em área endêmica — na verdade, é a principal causa de epilepsia adquirida no mundo em regiões endêmicas. Pode dar também cefaleia, hipertensão intracraniana e hidrocefalia (forma **racemosa**/intraventricular).

**Estágios na imagem (Escobar)** — a lesão evolui e a imagem muda:
- **Vesicular:** cisto viável, líquido, com o **escólex** dentro (o "ponto" excêntrico — sinal do "buraco com ponto"). Pouca inflamação.
- **Coloidal e granular-nodular:** a larva morre, o cisto inflama e passa a **captar contraste em anel** com edema ao redor — é a fase que mais dá crise.
- **Calcificado:** cicatriz final, **nódulo calcificado** residual (a "pipoca" na TC), sem realce.

**Tratamento — cuidado com as pegadinhas:** antiparasitário (**albendazol** ± praziquantel) **associado a corticoide**, porque a morte dos cistos gera uma onda inflamatória que pode piorar tudo. Trate a crise com **antiepiléptico**. Antes de tratar, **afaste cisticerco ocular** (fundo de olho) — matar um cisto dentro do olho pode causar cegueira. Em lesão **calcificada única** (larva já morta), muitas vezes **não** se dá antiparasitário — trata-se só a epilepsia.`},
  {h: `7b. Prevenção — quimioprofilaxia e vacinas`, c: `Fechar o tema exige saber **como evitar** a neuroinfecção:

- **Meningococo (Neisseria meningitidis):** os **contatos próximos** do caso recebem **quimioprofilaxia** (rifampicina, ceftriaxona ou ciprofloxacino) o quanto antes — inclusive o próprio paciente, se não recebeu ceftriaxona no tratamento. Há **vacinas** (conjugadas ACWY e a vacina B) no calendário e em surtos.
- **Haemophilus influenzae b (Hib):** contatos domiciliares vulneráveis recebem **rifampicina**; a **vacina Hib** derrubou drasticamente a incidência.
- **Pneumococo:** não há quimioprofilaxia de contato, mas a **vacinação (pneumocócicas conjugadas)** previne doença invasiva; é o agente em que a **dexametasona** mais reduz sequelas.

Regra de ouro da prova: **meningococo e Hib → quimioprofilaxia de contato**; **pneumococo → não**. E lembre que a notificação de meningite é **compulsória e imediata**.`},
  {h: `8. Síntese em seis frases`, c: `- Localize: **meníngeo** (rigidez/febre) × **encefalítico** (comportamento/consciência/crise) × **lesão focal**.
- Meningite com sinal de HIC: **imagem antes da punção**, mas **antibiótico + dexametasona imediatos** (nunca atrase o antibiótico).
- **Petéquias + choque** = meningococo + **CIVD**; notificar e fazer **quimioprofilaxia** dos contatos.
- Encefalite aguda febril temporal: **aciclovir empírico** já.
- Adulto que "começou a ter crises" em área endêmica: pense **neurocisticercose** (anticonvulsivante + albendazol **com corticoide**; afastar cisto ocular/HIC).
- HIV: **toxo** (anelar, efeito de massa → prova terapêutica) × **LEMP** (branca, sem realce, JC → otimizar TARV).`}
 ],
 flashcards: [
  {p: `Meningite com sinais de HIC: e o antibiótico?`, r: `Neuroimagem antes da punção, mas antibiótico empírico (± dexametasona) IMEDIATO — não esperar.`},
  {p: `Petéquias + choque + meningite = ?`, r: `Doença meningocócica (diplococo gram-negativo) com CIVD/Waterhouse-Friderichsen; notificar e fazer quimioprofilaxia dos contatos.`},
  {p: `Encefalite aguda febril com acometimento temporal — conduta imediata?`, r: `Aciclovir IV empírico (suspeita de HSV), sem esperar a PCR.`},
  {p: `Adulto com primeira crise epiléptica e cisto/calcificação cerebral em área endêmica?`, r: `Neurocisticercose — anticonvulsivante + albendazol com corticoide (afastar cisto ocular e tratar HIC antes).`},
  {p: `HIV: toxoplasmose × LEMP na imagem?`, r: `Toxo = múltiplas lesões com realce anelar e efeito de massa (prova terapêutica); LEMP = substância branca, sem realce/massa, vírus JC (otimizar TARV).`},
  {p: `Confirmação e tratamento da neurossífilis?`, r: `VDRL no líquor; penicilina G cristalina IV 10–14 dias (benzatina não trata).`},
  {p: `Como diferenciar líquor de meningite TB/fúngica x viral?`, r: `Ambas são linfocíticas, mas TB/fungo têm GLICOSE BAIXA e proteína muito alta; a viral tem glicose normal.`},
  {p: `Por que a neurocisticercose é doença de saneamento, e não de 'comer porco'?`, r: `A neurocisticercose vem da ingestão dos OVOS da Taenia solium (via fecal-oral); comer carne de porco com cisticercos causa teníase intestinal.`},
  {p: `Sinal de imagem do cisticerco viável?`, r: `Cisto com o escólex dentro (o 'ponto' excêntrico); ao morrer, capta anel com edema; ao fim, calcifica.`},
  {p: `Antes de dar antiparasitário na neurocisticercose, o que checar?`, r: `Fundo de olho para afastar cisticerco ocular (matar cisto no olho pode cegar); e associar corticoide.`},
  {p: `Quais meningites exigem quimioprofilaxia de contato?`, r: `Meningococo e Haemophilus influenzae b; pneumococo NÃO.`}
 ],
 pegadinhas: [
  `‘Não puncionar antes da imagem’ nunca significa ‘não tratar’: o antibiótico/aciclovir empírico não espera.`,
  `Diplococo gram-negativo no líquor = meningococo; petéquias + choque = CIVD.`,
  `Dexametasona antes/junto da 1ª dose de antibiótico (benefício no pneumococo).`,
  `Neurocisticercose: dar corticoide junto do antiparasitário (a morte dos cistos inflama); afastar cisto ocular antes.`,
  `LEMP não tem realce nem efeito de massa (vírus JC); toxo tem anel e edema.`,
  `Penicilina benzatina IM NÃO trata neurossífilis — tem que ser cristalina IV.`,
  `Meningite viral/TB tem líquor linfocítico; a bacteriana é neutrofílica com glicose baixa.`,
  `Neurocisticercose vem dos OVOS (fecal-oral); carne de porco malcozida dá teníase intestinal, não neurocisticercose.`,
  `Lesão calcificada única (larva morta) muitas vezes não recebe antiparasitário — trata-se só a epilepsia.`,
  `Glicose baixa no líquor limita o diferencial a bacteriana (neutrofílica) ou TB/fungo (linfocítica) — a viral tem glicose normal.`,
  `Quimioprofilaxia de contato: meningococo e Hib SIM; pneumococo NÃO.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), caps. 140–152 (Meningites; AIDS e SN; Encefalite Viral; Neurocisticercose; Neurossífilis; Neurotuberculose; Fúngicas) (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 9 — Infecções do Sistema Nervoso Central.`,
  `MS — Guia de Vigilância em Saúde e Diretrizes para Enfrentamento das Meningites; Adams & Victor — “Infections of the Nervous System”.`
 ],
 questoes: [
  {enunciado: `Homem de 34 anos, procedente de zona rural, tem a primeira crise tônico-clônica da vida; TC mostra uma lesão cística com um pequeno ponto interno (escólex) e discreto edema. Qual a conduta mais adequada?`, alternativas: {a: `Anticonvulsivante isolado, sem tratar o parasita`, b: `Albendazol associado a corticoide, além do anticonvulsivante`, c: `Praziquantel isolado, sem corticoide`, d: `Apenas observação, pois a lesão é benigna`}, correta: "b", comentario: `Primeira crise no adulto de área endêmica + cisto com escólex = neurocisticercose parenquimatosa. O tratamento junta anticonvulsivante (para as crises) e antiparasitário — albendazol (± praziquantel em múltiplos cistos) SEMPRE com corticoide, porque a morte dos cistos gera inflamação e edema que podem piorar o quadro. Anticonvulsivante isolado não trata o parasita quando há cisto viável; antiparasitário sem corticoide arrisca piora inflamatória; e não é caso de só observar. Antes do antiparasitário, afastar cisticercose ocular e, nas formas com hidrocefalia, manejar a HIC.`, foco: `Neurocisticercose (seu ponto de erro)`},
  {enunciado: `Homem de 54 anos com febre, rigidez de nuca, papiledema e hemiparesia. Qual a conduta correta quanto à punção lombar e ao antibiótico?`, alternativas: {a: `Punção lombar imediata antes de qualquer antibiótico`, b: `Neuroimagem antes da punção; iniciar antibiótico empírico sem esperar o líquor`, c: `Adiar o antibiótico até o resultado do líquor`, d: `Nenhum antibiótico até a tomografia ficar pronta`}, correta: "b", comentario: `Há sinais de HIC/efeito de massa (papiledema, déficit focal): a punção lombar deve aguardar a neuroimagem pelo risco de herniação. Mas o antibiótico empírico (± dexametasona antes/junto da 1ª dose) NÃO deve esperar — inicia-se logo após colher hemoculturas, pois o atraso aumenta a mortalidade. Puncionar antes da imagem nesse contexto é perigoso; adiar o antibiótico pela imagem/líquor é o erro que mata.`, foco: `Ordem meningite: antibiótico não espera`},
  {enunciado: `Homem com HIV e CD4 de 40 apresenta déficit focal progressivo; RM mostra lesões na substância branca, SEM realce ao contraste e sem efeito de massa. Qual o diagnóstico mais provável e a conduta?`, alternativas: {a: `Neurotoxoplasmose; prova terapêutica com sulfadiazina e pirimetamina`, b: `Leucoencefalopatia multifocal progressiva (vírus JC); otimizar a terapia antirretroviral`, c: `Linfoma primário do SNC; radioterapia imediata`, d: `Meningite criptocócica; anfotericina B`}, correta: "b", comentario: `Lesões de substância branca, multifocais, SEM realce e SEM efeito de massa, em HIV com CD4 muito baixo, apontam para LEMP (vírus JC); o líquor tem alta especificidade (PCR do JC) e não há antiviral específico — a conduta é otimizar a TARV para reconstituição imune. A neurotoxoplasmose faria lesões com realce anelar e efeito de massa (aí sim prova terapêutica). Linfoma primário costuma ser lesão única com realce (EBV no líquor). Criptococose é meningite (tinta da China/antígeno), não esse padrão de substância branca.`, foco: `HIV: toxoplasmose × LEMP`},
  {enunciado: `Homem de 35 anos, de área endêmica, com primeira crise convulsiva; TC mostra nódulo calcificado único. Sobre a doença, qual afirmação está correta?`, alternativas: {a: `Foi adquirida por comer carne de porco malcozida com cisticercos`, b: `Resulta da ingestão de ovos da Taenia solium por via fecal-oral`, c: `Deve sempre receber albendazol, mesmo na lesão calcificada`, d: `Dispensa qualquer investigação oftalmológica`}, correta: "b", comentario: `A neurocisticercose resulta da ingestão dos OVOS da Taenia solium (contaminação fecal-oral por água/alimentos), quando o humano passa a ser hospedeiro intermediário. Comer carne de porco com cisticercos causa TENÍASE (verme adulto no intestino). Em lesão calcificada única (larva já morta), em geral NÃO se usa antiparasitário — trata-se a epilepsia. E sempre se afasta cisticerco ocular antes de qualquer antiparasitário.`, foco: `Neurocisticercose — ciclo e transmissão`},
  {enunciado: `Líquor com aspecto límpido, 300 células com predomínio de linfócitos, glicose de 20 mg/dL (glicemia 90) e proteína muito elevada, em quadro subagudo de 2 semanas. Qual a principal hipótese?`, alternativas: {a: `Meningite viral`, b: `Meningite bacteriana aguda por pneumococo`, c: `Meningite tuberculosa`, d: `Hemorragia subaracnóidea`}, correta: "c", comentario: `Pleocitose LINFOCÍTICA com GLICOSE BAIXA e proteína muito alta, em evolução subaguda, é o padrão clássico da meningite tuberculosa (ou fúngica). A viral também é linfocítica, mas tem glicose NORMAL. A bacteriana aguda é neutrofílica e mais explosiva. O contexto subagudo e a hipoglicorraquia com linfócitos apontam TB — confirmar com ADA, cultura/PCR e iniciar RIPE + corticoide.`, foco: `Interpretação do líquor`}
 ]
},

"NEURO|Medula / cauda equina": {
 titulo: `Medula espinal, cauda equina e mielopatias`,
 half: `NEURO`,
 resumo: `O eixo da medula é topográfico e de urgência: reconhecer a emergência (compressão medular / cauda equina), pedir o exame certo (RM) sem atraso, e localizar a lesão pelo padrão (nível sensitivo, NMS × NMI, sela e esfíncteres). Este texto reconstrói o tema do zero — o que a medula faz, como ler um 'nível', e um caminho de decisão que separa a mielopatia cervical (onde você mais erra) da ELA e das emergências que não se pode perder.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (cap. 114 — Radiculopatias e Plexopatias; cap. 169 — Mielopatias Metabólicas e Tóxicas; cap. 146 — Neuroesquistossomose; cap. 153 — Mielopatia por HTLV-1), Merritt 13ª ed. (Seção 15 — Doenças da Medula Espinal; Seção 2 — Síndromes Raquimedulares Agudas), Adams & Victor 12ª ed. (Diseases of the Spinal Cord; Pain in the Back, Neck and Extremities) e Sanvito (semiologia: nível sensitivo, NMS × NMI, sinais de Hoffmann/Babinski). Ver materiais_neuro.md.`,
 notaErro: `Nos seus registros, **mielopatia cervical espondilótica** aparece com taxa de erro de **100%** (tier ALTO), e o eixo da medula como um todo é dos que mais derrubam. O erro raramente é "não saber a doença" — é **não separar duas coisas parecidas** e **não reconhecer a bandeira de emergência a tempo**. Três armadilhas explicam quase todas as quedas, e este texto foi montado para desarmar cada uma:

- **Você confunde mielopatia cervical com ELA.** As duas dão marcha espástica, hiper-reflexia e Babinski num idoso. A pista que separa é UMA: **a mielopatia tem alteração sensitiva e NÍVEL SENSITIVO; a ELA NÃO tem déficit sensitivo nenhum** (seção 6). Se há hipoestesia/nível, é compressão até prova em contrário — e a RM cervical é obrigatória **antes** de rotular ELA.
- **Você pede o exame errado (ou nenhum).** Diante de síndrome medular aguda, o exame é **RM de coluna**, não TC nem eletroneuromiografia — e é **urgente** (seção 4). Trocar o exame devolve um resultado "normal" e o diagnóstico se perde.
- **Você subestima a emergência.** Anestesia em sela + retenção + déficit de MMII = **cauda equina**, cirúrgica em horas; dor que piora deitado/à noite em paciente oncológico = **compressão metastática**, que exige **corticoide em dose alta JÁ** (seções 3–4). Hesitar custa a deambulação/continência definitivas.

**Como zerar o erro:** para cada caso, responda NESTA ordem — (1) **há bandeira vermelha/emergência?** (sela, esfíncter, febre, câncer, déficit progressivo) → RM urgente; (2) **onde está a lesão?** (nível sensitivo; NMS abaixo × NMI no nível; cauda × cone); (3) **é compressiva ou não?** (compressiva → RM + descompressão/corticoide; não compressiva → investigar B12, HTLV-1, esquistossomose, mielite). As questões ao final batem exatamente nesses três tropeços.`,
 secoes: [
  {h: `1. Comece pelo começo: o que a medula faz e por que 'nível' importa`, c: `A medula é um **cabo** que liga o cérebro ao corpo. Por dentro dela correm três "fios" principais, e entender por onde cada um passa (e onde cruza) explica quase toda a semiologia:

- **Trato corticoespinal (motor):** desce do córtex, **cruza no bulbo** (bem acima da medula) e desce pelo lado de mesmo nome. Consequência: uma lesão na medula dá fraqueza **do mesmo lado** (ipsilateral) abaixo dela.
- **Trato espinotalâmico (dor e temperatura):** entra pela raiz e **cruza dentro da própria medula em 1–2 segmentos**, subindo pelo lado oposto. Consequência: perda de dor/temperatura **do lado contrário** à lesão.
- **Cordões posteriores (propriocepção/vibração):** sobem **ipsilaterais** e só cruzam lá no bulbo. Consequência: perda de propriocepção **do mesmo lado** da lesão.

Duas ideias-chave nascem daí. Primeira, o **nível sensitivo**: como cada segmento medular corresponde a um dermátomo, uma lesão que atravessa a medula cria uma linha no tronco a partir da qual "some" a sensibilidade — achar essa linha **localiza a lesão** (ex.: nível em T4 = mamilos). Segunda, o par **NMS × NMI**: a lesão medular destrói o corpo do neurônio motor inferior **naquele segmento** (dando fraqueza flácida/atrofia/arreflexia **no nível**) e interrompe o trato corticoespinal que passa, gerando sinais de **neurônio motor superior abaixo** (espasticidade, hiper-reflexia, Babinski). Guardar esse "no nível é NMI, abaixo é NMS" é o que permite dizer onde está a doença só pelo exame.`},
  {h: `2. As síndromes medulares (padrões que se reconhecem)`, c: `A medula organiza-se em tratos cujo acometimento gera síndromes reconhecíveis:
- **Transecção completa:** perda motora e sensitiva abaixo do nível + disfunção esfincteriana; na fase aguda, **choque medular** (flacidez e arreflexia transitórias).
- **Síndrome de Brown-Séquard (hemissecção):** paresia e perda de propriocepção **ipsilaterais** + perda de dor/temperatura **contralateral** (2–3 níveis abaixo).
- **Síndrome centromedular:** fraqueza que predomina em membros superiores, dissociação sensitiva "em capa"; típica de trauma em hiperextensão no idoso com canal estreito.
- **Síndrome da artéria espinal anterior:** paraplegia + perda de dor/temperatura com **preservação da propriocepção** (cordões posteriores poupados).
- **Cordões posteriores** (B12, tabes, cobre): ataxia sensitiva, Romberg positivo.`},
  {h: `3. Cauda equina × cone medular`, c: `Ponto clássico de prova:
- **Síndrome da cauda equina:** lesão das raízes lombossacras (abaixo de L1-L2). Predomina **neurônio motor inferior** — fraqueza assimétrica, arreflexia, **dor radicular intensa**, **anestesia em sela**, retenção urinária que tende a ser mais tardia. É **emergência cirúrgica**.
- **Síndrome do cone medular:** lesão do segmento sacral da medula. Mais **simétrica**, com disfunção **esfincteriana e sexual precoce**, anestesia em sela, dor menos proeminente, podendo ter sinais de neurônio motor superior (Babinski).

Na prática, muitos casos são mistos (conus-cauda). O que importa é reconhecer a bandeira e agir.`},
  {h: `4. Emergências: compressão medular e cauda equina`, c: `A **síndrome medular aguda** com déficit motor/sensitivo, nível sensitivo e disfunção esfincteriana é emergência. Causas: hérnia discal maciça, trauma, abscesso epidural (febre + dor + déficit, sobretudo em usuário de droga IV/diabético), hematoma epidural (anticoagulado) e **compressão medular metastática** (próstata, mama, pulmão, mieloma).

Conduta:
- **RM de toda a coluna** de urgência (o exame de escolha — não TC, não eletroneuromiografia).
- Na compressão metastática: **corticoide em alta dose (dexametasona) imediatamente**, sem esperar a radioterapia, e definição de RT/cirurgia (cirurgia se instabilidade, tumor radiorresistente ou compressão única com boa expectativa).
- Antibiótico empírico + drenagem no abscesso; reversão da anticoagulação no hematoma.

**Bandeira vermelha da dor lombar:** déficit progressivo, retenção/incontinência, anestesia em sela, febre, perda ponderal, câncer conhecido, dor que piora deitado/à noite.

Um detalhe de prova sobre a **compressão metastática**: os tumores que mais a causam são **próstata, mama e pulmão** (e mieloma), e a coluna **torácica** é o sítio mais frequente. A conduta que salva função é sequência fixa: **suspeitou → dexametasona em dose alta imediatamente → RM de TODA a coluna (lesões múltiplas são comuns) → definir radioterapia e/ou cirurgia**. O melhor preditor de voltar a andar é **o estado neurológico no momento em que se trata** — por isso a pressa. Regra prática: paciente oncológico com dor dorsal nova que piora deitado/à noite deve fazer RM **antes** de instalar déficit, não depois.`},
  {h: `5. Mielopatia cervical espondilótica — o seu ponto de erro, do zero`, c: `É a **causa mais comum de disfunção medular no idoso**, e o tema onde você mais erra. Vale construí-la do começo.

**O que é / mecanismo.** Com a idade, os discos cervicais desidratam e perdem altura, surgem **osteófitos** (bicos de osso) nas margens vertebrais e o **ligamento amarelo hipertrofia** e "enruga" — tudo isso **estreita o canal** e comprime cronicamente a medula cervical. Some-se um componente **dinâmico**: em extensão do pescoço o canal fica ainda menor. A medula sofre por dois caminhos: **compressão mecânica direta** e **isquemia microvascular** (compressão das artérias que a nutrem). Por isso o dano é lento, progressivo e "em degraus".

**Clínica (a que se cobra).** Instalação **insidiosa**: marcha espástica que vai enrijecendo, quedas, **mãos "desajeitadas"** (dificuldade para abotoar, escrever, segurar moedas), dormência/parestesia em mãos, e o **sinal de Lhermitte** (choque que desce pela coluna ao fletir o pescoço). Ao exame: **NMS abaixo da lesão** (hiper-reflexia nos MMII, **Babinski**, clônus), **NMI no nível cervical** (atrofia/hiporreflexia em MMSS), **sinal de Hoffmann** e frequentemente **hipoestesia com nível sensitivo**. Esfíncteres costumam ser afetados **tardiamente**.

**Diagnóstico.** **RM da coluna cervical** é o exame — mostra o estreitamento, a compressão e, quando há sofrimento medular, **hipersinal em T2** (mielomalácia). A gravidade pode ser graduada (escala mJOA). A eletroneuromiografia serve para o diferencial com neuropatia/radiculopatia, não para "ver" a medula.

Causa mais comum de mielopatia no idoso. Marcha espástica progressiva, mãos "desajeitadas", **sinais de NMS abaixo da lesão** (hiper-reflexia, Babinski, Hoffmann) com NMI no nível. O diferencial cobrado é **ELA**: a ELA combina NMS + NMI **sem** qualquer alteração sensitiva e **sem nível sensitivo**. A presença de hipoestesia/nível sensitivo aponta para a mielopatia compressiva (RM cervical confirma; casos progressivos são cirúrgicos).

**Tratamento.** Casos **leves e estáveis** podem ser observados com fisioterapia e reavaliação. Casos **moderados a graves, ou progressivos**, são **cirúrgicos** (descompressão — discectomia/corpectomia anterior ou laminoplastia/laminectomia posterior): a cirurgia **estabiliza e frequentemente melhora**, e quanto **mais precoce**, melhor o resultado (déficit instalado há muito tende a não reverter). Mensagem para a prova: mielopatia cervical **progressiva** não é para "esperar" — é para operar.`},
  {h: `6. Mielopatia cervical × ELA — como não errar o diferencial`, c: `Este é o par que mais te derruba, então isolamos a regra. **O que as duas têm em comum:** idoso, marcha espástica, hiper-reflexia, Babinski (ambas dão sinais de NMS). **O que só a ELA tem:** combinação de **NMS + NMI difusa** (fasciculações, atrofia, língua com fasciculações, disartria/disfagia bulbar) **SEM nenhuma alteração sensitiva e SEM nível sensitivo**; a eletroneuromiografia mostra **desnervação difusa** em múltiplos segmentos. **O que só a mielopatia compressiva tem:** **hipoestesia / nível sensitivo**, Lhermitte, e a **compressão visível na RM**.

Regra de ouro: **presença de déficit sensitivo/nível sensitivo → NÃO é ELA** (a ELA poupa a sensibilidade). E o passo obrigatório: **toda suspeita de ELA faz RM cervical antes**, porque uma mielopatia compressiva é tratável (cirúrgica) e "imita" ELA — deixá-la passar como ELA é erro grave.`},
  {h: `7. Mielopatias não compressivas (regionais e sistêmicas)`, c: `- **Neuroesquistossomose medular:** tema regional (Bahia/Nordeste). Adolescente/jovem de área rural com dor lombar, mielorradiculopatia e eosinofilia; diagnóstico por biópsia retal + sorologia para S. mansoni; tratamento com **corticoide + praziquantel**.
- **Mielopatia por HTLV-1 (paraparesia espástica tropical):** paraparesia espástica progressiva + bexiga neurogênica em área endêmica.
- **Degeneração combinada subaguda** (deficiência de **B12**, e cobre): cordões posteriores + laterais; tratável — repor precocemente.
- **Mielite transversa** (idiopática/NMO/MOGAD/pós-infecciosa): déficit em horas-dias; investigar e tratar com corticoide.`},
  {h: `8. Semiologia de cabeceira: como examinar`, c: `O exame confirma a topografia sem imagem. Faça na ordem:

- **Marcha:** espástica (pernas rígidas, passos curtos, "em tesoura") aponta trato corticoespinal; atáxica/Romberg aponta cordão posterior.
- **Nível sensitivo:** com um estímulo (alfinete/algodão), suba pelo tronco até achar a linha onde a sensibilidade **muda** — ali está o segmento. Teste dor/temperatura (espinotalâmico) **e** vibração/propriocepção (cordão posterior) separadamente: **dissociação** entre eles localiza qual trato foi pego.
- **Força e reflexos:** procure **NMI no nível** (fraqueza/atrofia/arreflexia segmentar) e **NMS abaixo** (hiper-reflexia, clônus, **Babinski**).
- **Sinais de liberação:** **Hoffmann** (MMSS) e Babinski (MMII) sugerem NMS.
- **Sela e esfíncteres:** teste **sensibilidade perineal (em sela)**, tônus do esfíncter anal e pergunte sobre **retenção/incontinência** — a "bandeira" que transforma o caso em emergência.

Sanvito é a referência para a técnica de cada manobra.`},
  {h: `9. Algoritmo final (o fio condutor)`, c: `Junte tudo numa sequência única:

1) **Há bandeira vermelha?** (anestesia em sela, retenção/incontinência, febre + dor, câncer conhecido, déficit motor progressivo, dor que piora deitado/à noite) → **RM de coluna URGENTE**.
2) **É emergência compressiva?** cauda equina / cone / **compressão metastática** (dexametasona já) / **abscesso epidural** (febre + dor + déficit → ATB + drenagem) / **hematoma** (anticoagulado → reverter). Age-se em horas.
3) **É crônica e compressiva?** **mielopatia cervical espondilótica** (NMS abaixo + NMI no nível + nível sensitivo; RM cervical; progressiva → cirurgia). Diferencie de **ELA** (sem sensitivo).
4) **É não compressiva?** RM sem compressão → investigar **B12/cobre** (degeneração combinada), **HTLV-1**, **esquistossomose medular** (Bahia!), **mielite transversa** (NMO/MOGAD/pós-infecciosa → corticoide).

Decorada essa árvore, os casos se separam quase sozinhos — e a emergência nunca passa despercebida.`}
 ],
 flashcards: [
  {p: `Tríade que grita cauda equina?`, r: `Anestesia em sela + retenção urinária + déficit motor de MMII (com dor radicular) → RM urgente.`},
  {p: `Exame de escolha na síndrome medular aguda?`, r: `Ressonância magnética da coluna (toda a coluna se suspeita de metástase).`},
  {p: `O que torna a ELA improvável numa mielopatia?`, r: `Alteração sensitiva com nível sensitivo (a ELA não tem déficit sensitivo).`},
  {p: `Compressão medular metastática: primeira medida junto à RM?`, r: `Corticoide em alta dose (dexametasona), imediatamente.`},
  {p: `Brown-Séquard: o que fica contralateral?`, r: `A perda de dor e temperatura (motor e propriocepção são ipsilaterais).`},
  {p: `Por que uma lesão medular dá fraqueza ipsilateral abaixo dela?`, r: `Porque o trato corticoespinal já cruzou no bulbo; na medula ele desce do mesmo lado.`},
  {p: `Sinal de Lhermitte — o que é e o que sugere?`, r: `Choque que desce pela coluna ao fletir o pescoço; sugere lesão dos cordões posteriores cervicais (mielopatia cervical, EM).`},
  {p: `Mielopatia cervical progressiva: observar ou operar?`, r: `Operar (descompressão) — quanto mais precoce, melhor; 'esperar' é erro.`}
 ],
 pegadinhas: [
  `Anestesia em sela + retenção urinária + dor lombar = cauda equina até prova em contrário → RM URGENTE.`,
  `O exame de escolha é RM, não TC nem eletroneuromiografia.`,
  `Mielopatia cervical tem alteração sensitiva/nível sensitivo; ELA NÃO — esse é o diferencial.`,
  `Compressão medular metastática: corticoide em alta dose já, sem esperar a radioterapia.`,
  `Dor lombar que piora deitado/à noite e desperta o paciente é bandeira vermelha.`,
  `Febre + dor nas costas + déficit = abscesso epidural (não perder em diabético/usuário de droga IV).`,
  `Déficit sensitivo / nível sensitivo → NÃO é ELA (a ELA poupa a sensibilidade).`,
  `Toda suspeita de ELA faz RM cervical ANTES — a mielopatia compressiva imita ELA e é tratável.`,
  `Compressão metastática: tumores de próstata, mama e pulmão; coluna torácica é o sítio mais comum.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), cap. 114 — Radiculopatias e Plexopatias; cap. 169 — Mielopatias Metabólicas e Tóxicas; cap. 146 — Neuroesquistossomose; cap. 153 — Mielopatia associada ao HTLV-1 (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 15 — Doenças da Medula Espinal; Seção 2 — Síndromes Raquimedulares Agudas.`,
  `Adams & Victor — “Diseases of the Spinal Cord” e “Pain in the Back, Neck, and Extremities”.`
 ],
 questoes: [
  {enunciado: `Homem de 45 anos com lombalgia há meses, agora com fraqueza de membros inferiores, anestesia perineal e retenção urinária com gotejamento há 24 horas. Qual a conduta imediata?`, alternativas: {a: `Repouso e AINE, reavaliar em 2 semanas`, b: `Eletroneuromiografia ambulatorial`, c: `Ressonância magnética de coluna lombossacra de urgência`, d: `Tomografia de crânio`}, correta: "c", comentario: `O quadro é síndrome da cauda equina — emergência neurocirúrgica. A conduta é RM de coluna lombossacra de urgência para confirmar e localizar a compressão, seguida de descompressão precoce (previne incontinência permanente). Repouso/AINE atrasam uma emergência. A eletroneuromiografia não é o exame agudo de escolha. TC de crânio não tem relação. Tríade a memorizar: anestesia em sela + retenção urinária + déficit motor de MMII.`, foco: `Reconhecer a emergência e o exame (seu ponto de erro)`},
  {enunciado: `Homem de 60 anos com marcha espástica progressiva, hiper-reflexia e Babinski, mas também com hipoestesia em mãos e nível sensitivo cervical. Qual dado torna a ELA improvável?`, alternativas: {a: `A presença de sinais de neurônio motor superior`, b: `A alteração sensitiva com nível sensitivo`, c: `A marcha espástica`, d: `A idade do paciente`}, correta: "b", comentario: `A ELA acomete neurônios motores superior e inferior SEM alteração sensitiva. A presença de hipoestesia com nível sensitivo aponta para lesão medular (mielopatia cervical espondilótica), não ELA. Sinais de neurônio motor superior e marcha espástica ocorrem em ambas e não discriminam. A idade também não separa. RM cervical confirma a compressão; a ausência de déficit sensitivo é justamente o que caracteriza a ELA.`, foco: `Mielopatia cervical × ELA`},
  {enunciado: `Homem de 63 anos com câncer de próstata metastático, dor dorsal que piora deitado e paraparesia com nível sensitivo torácico. Além da RM de toda a coluna, qual medida deve ser iniciada imediatamente?`, alternativas: {a: `Corticoide em dose alta`, b: `Anticoagulação plena`, c: `Aguardar biópsia antes de qualquer tratamento`, d: `Punção lombar de alívio`}, correta: "a", comentario: `Na compressão medular metastática, o corticoide em dose alta (dexametasona) deve ser iniciado imediatamente para reduzir o edema e proteger a função neurológica, enquanto se define radioterapia e/ou cirurgia — não se espera a RT. Anticoagulação não trata a compressão. Esperar biópsia atrasa e pode custar a deambulação. Punção lombar é contraindicada/inútil aqui e pode piorar. Dor que piora deitado/à noite + nível sensitivo em paciente oncológico é a apresentação clássica.`, foco: `Compressão medular metastática`},
  {enunciado: `Homem de 66 anos com 1 ano de marcha rígida progressiva, mãos desajeitadas e sinal de Lhermitte; ao exame, hiper-reflexia e Babinski em MMII, Hoffmann positivo e hipoestesia com nível cervical. RM mostra estenose cervical com hipersinal medular em T2. Qual a conduta mais adequada?`, alternativas: {a: `Observação clínica indefinida, pois o quadro é degenerativo e não tratável`, b: `Descompressão cirúrgica, pois há mielopatia compressiva progressiva com sofrimento medular`, c: `Iniciar riluzol por provável ELA`, d: `Eletroneuromiografia seriada e AINE, adiando imagem`}, correta: "b", comentario: `O quadro é mielopatia cervical espondilótica com sinais de sofrimento medular (NMS abaixo + Hoffmann + nível sensitivo) e hipersinal em T2 na RM — e é progressivo. A conduta é descompressão cirúrgica, tanto mais eficaz quanto mais precoce. Observação indefinida deixa evoluir um déficit potencialmente reversível. A hipoestesia com nível sensitivo AFASTA ELA (que não tem déficit sensitivo), então riluzol está errado. A imagem já foi feita e é o exame-chave; adiá-la por ENMG/AINE atrasa. Lição: nível sensitivo = compressão, não ELA; progressiva = operar.`, foco: `Mielopatia cervical — mecanismo e conduta (seu ponto de erro)`}
 ]
},

"NEURO|Demências": {
 titulo: `Demências e neurologia do envelhecimento`,
 half: `NEURO`,
 resumo: `Demência não é 'ficar esquecido com a idade': é um declínio adquirido que rouba a autonomia. Este texto reconstrói o tema do zero — o que é (e o que não é) demência, como investigar direito, como reconhecer cada tipo, quais causas são reversíveis (não perca a hidrocefalia de pressão normal) e como manejar os sintomas de comportamento na ORDEM certa.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (caps. 96–102 e 106), Merritt 13ª ed. (Seção 6 — Demência; Seção 2 — Delirium/Memória), Adams & Victor (Dementia and the Neurology of Aging) e PCDT de Alzheimer (MS). Ver materiais_neuro.md.`,
 notaErro: `Este domínio te derruba porque as questões quase nunca perguntam "qual a demência?" — elas testam **conduta e armadilhas**. Os tropeços clássicos, todos endereçados neste texto:

- **Tratar o comportamento com remédio primeiro.** Diante de agitação, a resposta que a prova quer é **medida não farmacológica**; antipsicótico é exceção (risco, dose baixa, tempo curto). Se você marca "antipsicótico/benzodiazepínico de rotina", erra (seção 6).
- **Não reconhecer a causa REVERSÍVEL.** A hidrocefalia de pressão normal (tríade de Hakim-Adams) é a pegadinha nº 1: o examinador quer que você pense **tap test → derivação**, não donepezila (seção 5).
- **Dar antipsicótico na demência com corpos de Lewy.** Há **hipersensibilidade** — pode causar rigidez grave. A prova adora esse caso (flutuação + alucinação visual + parkinsonismo) (seções 4 e 6).
- **Confundir delirium com demência.** Delirium é **agudo, flutuante, com déficit de atenção** e causa orgânica reversível. Rotular como demência atrasa o tratamento (seção 1).

**Como zerar:** para todo caso, faça três perguntas — (1) é agudo/flutuante (delirium) ou crônico? (2) há causa **reversível** a excluir (NPH, B12, tireoide, sífilis, subdural, depressão)? (3) qual o **padrão** (memória? comportamento? flutuação/alucinação? degraus vasculares?) e, com isso, qual a **conduta** (incluindo o cuidado com antipsicótico)? As questões ao final batem nesses quatro pontos.`,
 secoes: [
  {h: `1. O que é demência — e o que não é`, c: `**Demência (transtorno neurocognitivo maior)** é um declínio cognitivo **adquirido** (a pessoa perdeu algo que já tinha), **persistente** e que afeta **pelo menos um domínio** cognitivo a ponto de **comprometer a autonomia** (finanças, medicações, atividades do dia a dia). Os domínios são: memória, funções executivas (planejar, julgar), linguagem, habilidades visuoespaciais e cognição social.

Compare com o que NÃO é demência:
- **Envelhecimento normal:** lentifica, esquece nomes na ponta da língua, mas **não perde funcionalidade**.
- **Comprometimento cognitivo leve (CCL):** há declínio objetivo em testes, porém **sem** perda funcional relevante. É um estágio de risco (parte evolui para demência, parte não).
- **Delirium:** o grande impostor (ver abaixo).

**Delirium × demência — a distinção que mais cai:** delirium tem início **agudo** (horas a dias), curso **flutuante**, e o marcador é a **alteração da atenção** e do nível de consciência, com uma causa orgânica por trás (infecção, fármaco, distúrbio metabólico, dor, retenção urinária). É **reversível** e uma emergência. Demência é insidiosa, estável no dia a dia e com atenção relativamente preservada no início. Regra prática: **todo idoso que "piorou da cabeça" de repente tem delirium até prova em contrário** — procure e trate a causa antes de falar em demência.`},
  {h: `2. Como investigar (o que pedir, e de quem colher a história)`, c: `A investigação começa na **anamnese com um informante** (familiar/cuidador) — o paciente costuma subestimar o próprio déficit. Caracterize: o que mudou, em quanto tempo, se foi gradual ou "em degraus", e o impacto funcional.

- **Rastreios cognitivos:** MEEM (Mini-Exame do Estado Mental) e MoCA (mais sensível para disfunção executiva/CCL); avaliação neuropsicológica quando há dúvida.
- **Laboratório para causas reversíveis (sempre):** **TSH/T4**, **vitamina B12** (± folato), função renal/hepática, cálcio, sódio, glicose, e **sorologias** (sífilis/VDRL, HIV) conforme o contexto.
- **Neuroimagem estrutural (TC ou, melhor, RM):** exclui hematoma subdural, tumor, hidrocefalia e caracteriza atrofia/lesões vasculares.
- **Biomarcadores** (líquor com beta-amiloide baixo e tau/p-tau altos; PET amiloide/FDG): confirmam Alzheimer em casos selecionados/atípicos.

O objetivo dessa etapa é duplo: **rotular o tipo** e, principalmente, **não deixar passar uma causa tratável**.`},
  {h: `3. Doença de Alzheimer — a mais comum`, c: `Neurodegeneração com acúmulo de **placas de beta-amiloide** e **emaranhados de tau**, começando em regiões da memória (hipocampo/córtex entorrinal) e se espalhando.

- **Clínica:** início insidioso e progressão lenta; **memória episódica** primeiro (esquece fatos recentes, repete perguntas, perde objetos), depois funções executivas, linguagem e orientação visuoespacial; nas fases avançadas, dependência total.
- **Diagnóstico:** clínico + rastreios + exclusão de reversíveis; biomarcadores quando necessário.
- **Tratamento sintomático cognitivo:** **anticolinesterásicos** (donepezila, rivastigmina, galantamina) na fase leve-moderada; **memantina** (antagonista NMDA) na moderada-grave, isolada ou associada ao anticolinesterásico. Esses fármacos **estabilizam sintomas**, não curam. Anticorpos anti-amiloide são novidade de uso restrito.
- **Sempre** tratar comorbidades, revisar fármacos que pioram cognição (anticolinérgicos, benzodiazepínicos) e apoiar o cuidador.`},
  {h: `4. Os diferenciais — como distinguir os tipos`, c: `- **Demência vascular / comprometimento cognitivo vascular:** curso **em degraus** (piora, estabiliza, piora), fatores de risco vascular, achados focais no exame e lesões vasculares na imagem; costuma afetar **funções executivas** e velocidade de processamento antes da memória.
- **Demência com corpos de Lewy:** tríade **flutuação cognitiva** + **alucinações visuais precoces e bem formadas** + **parkinsonismo**; soma-se o transtorno comportamental do sono REM. **Hipersensibilidade a antipsicóticos** (evitar). Regra: se o parkinsonismo vem **junto ou antes** da demência, pense Lewy; se a demência surge **anos depois** de um Parkinson estabelecido, é demência da doença de Parkinson.
- **Demência frontotemporal (variante comportamental):** muda a **personalidade/comportamento** primeiro — desinibição, apatia, perda de empatia, comportamentos compulsivos/alimentares — em paciente **mais jovem** (50–65 anos), com memória relativamente preservada no início.
- **Doença priônica (Creutzfeldt-Jakob):** **demência rapidamente progressiva** (semanas a meses) + **mioclonias** + ataxia — pense nela quando a evolução é "rápida demais".`},
  {h: `5. Causas reversíveis — a pegadinha que você não pode perder`, c: `Antes de rotular como degenerativa, exclua o que tem tratamento:

- **Hidrocefalia de pressão normal (HPN):** a estrela das provas. **Tríade de Hakim-Adams** — (1) **distúrbio de marcha** "magnética"/apráxica (pés como colados no chão; é o sintoma **mais precoce e o que mais melhora**), (2) **incontinência urinária**, (3) **declínio cognitivo**. Imagem com **ventriculomegalia desproporcional à atrofia**. O **tap test** (punção lombar de alívio de ~30–50 mL) que melhora a marcha **prediz boa resposta** à **derivação ventriculoperitoneal**. Reconhecer isso = não medicar como Alzheimer.
- **Deficiência de vitamina B12**, **hipotireoidismo**, **neurossífilis**, **HIV**.
- **Hematoma subdural crônico** (idoso, queda, anticoagulante).
- **Depressão (pseudodemência):** humor deprimido com queixa cognitiva que melhora ao tratar a depressão.
- **Fármacos** (anticolinérgicos, benzodiazepínicos, opioides).`},
  {h: `6. Manejo dos sintomas comportamentais — a ordem correta`, c: `Os sintomas comportamentais e psicológicos da demência (agitação, agressividade, perambulação, psicose, insônia, apatia) são a maior causa de sofrimento e de internação — e o ponto onde a conduta é mais cobrada.

- **Primeira linha SEMPRE é não farmacológica:** procure e trate **gatilhos** (dor, fome, sede, constipação, retenção urinária, infecção, ambiente barulhento), estabeleça **rotina**, higiene do sono, comunicação calma e **orientação ao cuidador**. Muitas "crises" somem ao resolver uma dor ou uma ITU.
- **Antipsicótico apenas se houver risco** (agressividade/psicose com perigo a si ou a outros), na **menor dose e pelo menor tempo**, cientes do **aumento de mortalidade e AVC** em idosos com demência (alerta de bula).
- **Evitar benzodiazepínicos** (pioram cognição, quedas, delirium) e anticolinérgicos.
- **Demência com corpos de Lewy:** **não** usar antipsicótico (hipersensibilidade → rigidez grave, piora); se imprescindível, um atípico (ex.: quetiapina) com muita cautela. Anticolinesterásicos costumam **ajudar** nas alucinações desses pacientes.`},
  {h: `7. Aprofundando a hidrocefalia de pressão normal (o tema onde você mais erra)`, c: `Como a HPN é a sua pegadinha nº 1 e tem taxa de erro de 100%, vale reconstruí-la do zero — porque quem entende o **mecanismo** não confunde mais.

**Por que "pressão normal"?** Na HPN, os ventrículos estão **dilatados**, mas a pressão liquórica medida em repouso é **normal** (por isso o nome). A hipótese fisiopatológica é uma **alteração crônica da dinâmica do liquor** (redução da absorção/complacência), que dilata os ventrículos de forma lenta. Essa dilatação **estica as fibras que sobem do centro para as pernas** (as fibras motoras e do controle esfincteriano dos membros inferiores, que passam justamente ao redor dos ventrículos laterais) — e é isso que explica a ordem dos sintomas.

**Por que a marcha vem primeiro e melhora mais?** Porque as fibras dos **membros inferiores** e do controle vesical são as mais próximas dos ventrículos dilatados. Daí a **marcha "magnética"/apráxica** (passos curtos, base alargada, pés como "colados no chão", dificuldade de iniciar e de virar) ser o sintoma **mais precoce** e o **que mais responde** ao tratamento. A incontinência urinária vem depois, e o declínio cognitivo (mais subcortical/executivo, com lentificação) por último — por isso a HPN é uma **demência potencialmente reversível**.

**A tríade de Hakim-Adams** — marcha + incontinência + cognição — nem sempre está completa; a **marcha** é a âncora. "3 W" em inglês ajuda: **Wobbly** (marcha instável), **Wet** (incontinência), **Weird/Wacky** (cognição).

**Imagem:** ventriculomegalia **desproporcional à atrofia** (índice de Evans > 0,3), muitas vezes com o padrão **DESH** (sulcos apertados no alto da convexidade + fissuras silvianas alargadas). O ponto-chave da prova: a dilatação **não** é explicada apenas pela atrofia (que também alarga ventrículos — a chamada *hydrocephalus ex-vacuo*, que **não** responde a derivação).

**Tap test → derivação:** a **punção lombar de alívio** (retirada de ~30–50 mL de liquor) que **melhora objetivamente a marcha** (cronometrar o tempo de caminhada antes e depois) **prediz boa resposta** à **derivação ventriculoperitoneal (DVP)**. É esse teste, e não a donepezila, que a questão quer. Reconhecer a HPN = oferecer uma cirurgia que pode devolver a marcha e a continência.`},
  {h: `8. Comparando os tipos lado a lado (para não trocar Lewy, vascular e Parkinson)`, c: `A confusão entre demências com componente motor é fonte de erro. Fixe os contrastes:

- **Demência com corpos de Lewy × demência da doença de Parkinson:** a **clínica é parecida** (parkinsonismo + declínio cognitivo), e a diferença é **temporal** — a "**regra de 1 ano**". Se a **demência** aparece **junto ou até 1 ano antes/depois** do parkinsonismo → **corpos de Lewy**. Se surge **anos depois** de uma doença de Parkinson já estabelecida → **demência da doença de Parkinson**. Em ambas há alfa-sinucleína; muda o rótulo e o enquadre, não a cautela com antipsicótico.
- **Lewy — as pistas que a prova adora:** **flutuação** cognitiva marcante (varia de hora em hora), **alucinações visuais** precoces, **bem formadas** e recorrentes, **parkinsonismo** (mais simétrico, menos tremor de repouso que o Parkinson clássico) e **transtorno comportamental do sono REM** (fala/agita-se sonhando, às vezes anos antes). Some-se a **hipersensibilidade a antipsicóticos** (rigidez grave) e a boa resposta das alucinações aos **anticolinesterásicos**.
- **Demência vascular:** história de **fatores de risco** (HAS, diabetes, fibrilação, tabagismo), curso **em degraus**, **sinais focais** ao exame (hemiparesia, reflexos, marcha) e lesões vasculares na imagem. Predominam **disfunção executiva e lentificação** antes da amnésia. Prevenção = **controlar os fatores vasculares** (o "tratamento" mais eficaz é evitar novos AVCs).
- **Alzheimer:** **memória episódica** primeiro, curso lento e progressivo, **sem** parkinsonismo/flutuação precoces — o "molde" com que se comparam os outros.

Regra prática de banca: **flutuação + alucinação visual precoce + parkinsonismo** → Lewy (não dê antipsicótico típico). **Degraus + focal + fator vascular** → vascular. **Parkinson há anos e só agora demenciou** → demência da doença de Parkinson.`},
  {h: `9. Síntese em seis frases (leve para a prova)`, c: `- Demência = declínio **adquirido** + **perda de autonomia**; delirium = **agudo, flutuante, desatento** → sempre excluir primeiro.
- **Investigue causas reversíveis** em todo caso: TSH, B12, VDRL, imagem — não perca a **HPN**.
- **HPN** = marcha magnética + incontinência + cognição; **tap test → derivação** (não donepezila).
- **Alzheimer** = memória episódica primeiro; trata com **anticolinesterásico** (± memantina), que estabiliza, não cura.
- **Corpos de Lewy** = flutuação + alucinação visual + parkinsonismo; **evitar antipsicótico**.
- Sintoma de comportamento = **não farmacológico primeiro**; antipsicótico só se risco, dose baixa, curto prazo.`}
 ],
 flashcards: [
  {p: `Como diferenciar delirium de demência?`, r: `Delirium: início agudo, curso flutuante, déficit de ATENÇÃO, causa orgânica reversível.`},
  {p: `Tríade da hidrocefalia de pressão normal e o que ela prediz o tratamento?`, r: `Marcha magnética + incontinência urinária + declínio cognitivo; tap test que melhora a marcha → derivação ventriculoperitoneal.`},
  {p: `Demência com flutuação + alucinações visuais precoces + parkinsonismo?`, r: `Demência com corpos de Lewy — evitar antipsicóticos (hipersensibilidade).`},
  {p: `Primeira linha para agitação na demência?`, r: `Medidas não farmacológicas; antipsicótico só se risco, dose baixa e curto prazo.`},
  {p: `Demência que muda a personalidade antes da memória, no paciente mais jovem?`, r: `Demência frontotemporal (variante comportamental).`},
  {p: `Demência rapidamente progressiva com mioclonias?`, r: `Doença priônica (Creutzfeldt-Jakob).`},
  {p: `Exames mínimos para causas reversíveis de demência?`, r: `TSH/T4, vitamina B12, VDRL (± HIV), função metabólica e neuroimagem.`},
  {p: `Por que a marcha é o 1º sintoma da HPN?`, r: `A dilatação ventricular estica as fibras periventriculares dos membros inferiores/esfíncteres — daí marcha e incontinência antes da cognição.`},
  {p: `Índice de Evans e padrão de imagem na HPN?`, r: `Índice de Evans > 0,3 (ventriculomegalia desproporcional à atrofia), muitas vezes padrão DESH.`},
  {p: `"Regra de 1 ano" entre corpos de Lewy e demência da doença de Parkinson?`, r: `Demência ≤1 ano do parkinsonismo → corpos de Lewy; anos após Parkinson estabelecido → demência da doença de Parkinson.`},
  {p: `Sintoma que precede anos a demência com corpos de Lewy?`, r: `Transtorno comportamental do sono REM (agita-se/fala sonhando).`}
 ],
 pegadinhas: [
  `Sintoma comportamental: primeira linha é NÃO farmacológica; antipsicótico só se necessário, dose baixa, tempo curto.`,
  `Corpos de Lewy: hipersensibilidade a antipsicóticos — evitar (podem causar rigidez grave).`,
  `Hidrocefalia de pressão normal é reversível: tríade de Hakim-Adams + resposta ao tap test → derivação.`,
  `Excluir delirium (agudo, atencional) e causas reversíveis (B12, TSH, sífilis) antes de rotular demência.`,
  `Na frontotemporal, muda a personalidade/comportamento antes da memória — e o paciente é mais jovem.`,
  `Demência rapidamente progressiva + mioclonias = pensar em doença priônica.`,
  `A marcha é o primeiro e mais reversível sintoma da HPN — valorize-a.`,
  `Ventriculomegalia por atrofia (ex-vacuo) NÃO responde a derivação; só a HPN verdadeira (desproporcional à atrofia) responde.`,
  `Corpos de Lewy × Parkinson: use a "regra de 1 ano" para a ordem entre demência e parkinsonismo.`,
  `Alucinação visual precoce e bem formada + flutuação = pense Lewy antes de rotular Alzheimer.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), caps. 96–102 (Demências; Corpos de Lewy; Alzheimer; Frontotemporal; Cognitivo Vascular; Hidrocefalia de Pressão Normal) e cap. 106 — Tratamento dos Transtornos Comportamentais nas Demências (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 6 — Demência; Seção 2 — Delirium / Demência e Perda de Memória.`,
  `PCDT da Doença de Alzheimer (Ministério da Saúde/BVSMS); Adams & Victor — “Dementia and the Neurology of Aging”.`
 ],
 questoes: [
  {enunciado: `Mulher de 78 anos com doença de Alzheimer apresenta agitação vespertina e insônia. Qual a conduta inicial mais adequada?`, alternativas: {a: `Iniciar antipsicótico de rotina`, b: `Benzodiazepínico ao deitar`, c: `Medidas não farmacológicas (rotina, ambiente, orientação do cuidador)`, d: `Suspender o anticolinesterásico`}, correta: "c", comentario: `Sintomas comportamentais e psicológicos da demência têm como primeira linha as medidas não farmacológicas: ajuste do ambiente, rotina, higiene do sono, manejo de gatilhos e orientação ao cuidador. Antipsicótico só se houver risco (agressividade/psicose com perigo), na menor dose e pelo menor tempo — de rotina, não. Benzodiazepínico piora cognição e quedas no idoso. Suspender o anticolinesterásico não trata a agitação e retira benefício cognitivo.`, foco: `Manejo de sintoma comportamental`},
  {enunciado: `Homem de 74 anos com marcha lenta e “grudada no chão”, incontinência urinária e declínio cognitivo há 1 ano; TC com ventriculomegalia desproporcional à atrofia. Qual conduta confirma a hipótese e orienta o tratamento?`, alternativas: {a: `Iniciar donepezila e reavaliar em 6 meses`, b: `Tap test (punção lombar de alívio); se houver melhora, derivação ventriculoperitoneal`, c: `Antipsicótico para a marcha`, d: `Anticoagulação para provável causa vascular`}, correta: "b", comentario: `A tríade de Hakim-Adams (marcha magnética + incontinência + declínio cognitivo) com ventriculomegalia sugere hidrocefalia de pressão normal, uma causa reversível. O tap test (retirada de liquor) que melhora a marcha prediz boa resposta à derivação ventriculoperitoneal. Donepezila trata Alzheimer, não a hidrocefalia. Antipsicótico não trata marcha e piora idoso. Anticoagulação não tem papel. Reconhecer a reversibilidade é o ponto de prova.`, foco: `Hidrocefalia de pressão normal (reversível)`},
  {enunciado: `Homem de 73 anos com cognição flutuante, alucinações visuais precoces e parkinsonismo. Qual cuidado é essencial no manejo?`, alternativas: {a: `Usar haloperidol em dose plena para as alucinações`, b: `Evitar antipsicóticos por hipersensibilidade característica`, c: `Contraindicar anticolinesterásicos`, d: `Iniciar levodopa em alta dose imediatamente`}, correta: "b", comentario: `Na demência com corpos de Lewy há hipersensibilidade a antipsicóticos (sobretudo os típicos como haloperidol), que podem provocar rigidez grave e piora — devem ser evitados; se imprescindível, usar um atípico com muita cautela. Anticolinesterásicos costumam ajudar (não são contraindicados). A levodopa pode ser usada com parcimônia para o parkinsonismo, equilibrando piora das alucinações — não em alta dose de imediato. Flutuação + alucinações visuais precoces + parkinsonismo é a tríade a reconhecer.`, foco: `Corpos de Lewy e antipsicótico`},
  {enunciado: `Idoso de 76 anos com marcha "magnética", incontinência e lentificação cognitiva há 1 ano. A RM mostra ventrículos dilatados. Qual achado favorece hidrocefalia de pressão normal (potencialmente reversível) em vez de dilatação por atrofia (ex-vacuo)?`, alternativas: {a: `Ventriculomegalia proporcional ao grau de atrofia cortical`, b: `Ventriculomegalia desproporcional à atrofia (índice de Evans > 0,3), padrão DESH, com melhora da marcha após tap test`, c: `Presença de micro-hemorragias corticais`, d: `Atrofia isolada do hipocampo`}, correta: "b", comentario: `A HPN verdadeira mostra ventrículos dilatados DESPROPORCIONALMENTE à atrofia (índice de Evans > 0,3), muitas vezes com padrão DESH (sulcos apertados no vértice + fissuras silvianas alargadas), e — o dado funcional decisivo — melhora objetiva da marcha após o tap test, o que prediz resposta à derivação. Se a dilatação é apenas proporcional à atrofia (ex-vacuo), NÃO há benefício com derivação. Micro-hemorragias sugerem angiopatia/vascular e atrofia hipocampal isolada aponta Alzheimer — nenhum define HPN. Distinguir HPN de ex-vacuo é o ponto que decide oferecer (ou não) a cirurgia.`, foco: `HPN × ex-vacuo (imagem e tap test)`}
 ]
},

"NEURO|HIC / emergências neuro": {
 titulo: `Hipertensão intracraniana e emergências neurológicas`,
 half: `NEURO`,
 resumo: `Domínio amplo que reúne emergências neurológicas (HIC: doutrina de Monro-Kellie, pressão de perfusão, tríade de Cushing, escalonamento, quando NÃO puncionar, morte encefálica) e — no ponto onde você mais erra — o **transtorno de insônia**: o que é o sono normal, quando a insônia vira 'transtorno' com critério, e por que o tratamento começa por comportamento (TCC-I), não por remédio.`,
 fontes: `Base (HIC/emergências): Tratado de Neurologia da ABN 3ª ed. (cap. 22 — Transtornos do Nível de Consciência; caps. 162–163 — TCE/HIC em terapia intensiva; cap. 171 — HIC idiopática), Merritt 13ª ed. (Seções 2, 5 e 14), Resolução CFM 2.173/2017. Base (insônia): Tratado de Neurologia da ABN 3ª ed. (Distúrbios do Sono / Transtorno de Insônia), classificação ICSD-3 (AASM) / DSM-5-TR e diretrizes de insônia (TCC-I como 1ª linha). Ver materiais_neuro.md.`,
 notaErro: `No seu perfil, **transtorno de insônia (neuro-correlato)** está com taxa de erro de **100%**. Como o tema entra "de carona" num módulo de emergências, é fácil estudá-lo mal. Os tropeços clássicos:

- **Você trata insônia como "sintoma" e vai direto ao remédio.** A insônia crônica é um **transtorno com critério diagnóstico**: dificuldade de iniciar/manter o sono (ou despertar precoce) **≥ 3 vezes/semana por ≥ 3 meses**, **com prejuízo diurno** e **apesar de oportunidade e circunstância adequadas** para dormir. E a **1ª linha NÃO é fármaco: é a TCC-I** (terapia cognitivo-comportamental para insônia) (seções de insônia abaixo).
- **Você prescreve benzodiazepínico de rotina.** BZD e "drogas Z" (zolpidem) servem para **curto prazo**, com risco de tolerância, dependência, quedas e piora cognitiva — sobretudo no **idoso**. Não são a base do tratamento crônico.
- **Você ignora o diferencial.** Antes de rotular insônia "primária", exclua **higiene do sono ruim, apneia obstrutiva do sono, síndrome das pernas inquietas, depressão/ansiedade, dor e substâncias** (cafeína, álcool, nicotina, corticoide, estimulantes) — tratar a causa costuma resolver a "insônia".

**Como zerar:** para cada caso — (1) **preenche critério** de transtorno de insônia (frequência, duração ≥ 3 meses, prejuízo diurno, oportunidade adequada)? (2) **há causa secundária** a excluir (apneia, SPI, humor, dor, substância)? (3) **tratamento na ordem certa**: higiene do sono + **TCC-I primeiro**; fármaco só adjuvante/curto prazo, com cautela no idoso. A questão nova ao final bate nesse ponto.`,
 secoes: [
  {h: `1. Fisiopatologia — Monro-Kellie e perfusão`, c: `O crânio é uma caixa rígida com três compartimentos: parênquima (~80%), sangue (~10%) e liquor (~10%). Pela **doutrina de Monro-Kellie**, o aumento de um volume exige a redução de outro (deslocamento de liquor e sangue venoso). Esgotada a complacência, pequenos aumentos de volume elevam muito a **pressão intracraniana (PIC)**.

O que importa para o cérebro é a **pressão de perfusão cerebral (PPC) = PAM − PIC**. Portanto, PIC alta ou PAM baixa reduzem a perfusão. Alvos habituais em neurointensivismo: manter **PIC < 20–22 mmHg** e **PPC ~60–70 mmHg**, evitando tanto isquemia quanto hiperemia.`},
  {h: `2. Reconhecer a HIC`, c: `Sintomas: cefaleia que piora deitado e pela manhã, vômitos (por vezes em jato), turvação visual, papiledema, paralisia do VI par (falso localizatório) e rebaixamento do nível de consciência.

A **tríade de Cushing** (hipertensão arterial + bradicardia + respiração irregular) é sinal **tardio e grave**, de HIC crítica/herniação iminente. As **síndromes de herniação** (uncal — midríase ipsilateral e hemiparesia; central; tonsilar) são emergências que exigem ação imediata.`},
  {h: `3. Escalonamento terapêutico da HIC`, c: `Trate por etapas, do menos ao mais agressivo:
- **Medidas gerais (primeiro):** cabeceira a **30°**, cabeça na **linha média** (para não obstruir a drenagem venosa jugular), normovolemia, controle de dor/febre/agitação, **normocapnia** (PaCO2 35–40), normonatremia-alvo e evitar hipotensão.
- **Osmoterapia:** **manitol** (0,25–1 g/kg; atenção à hipovolemia/lesão renal) ou **salina hipertônica** (preferida no choque/hipovolemia).
- **Sedação/analgesia** otimizadas; drenagem liquórica por cateter ventricular; coma barbitúrico em casos refratários.
- **Cirurgia:** craniectomia descompressiva / remoção de lesão.

A **hiperventilação agressiva** (PaCO2 < 30) causa vasoconstrição e risco de **isquemia** — é medida de **resgate temporário** para herniação, não de rotina.`},
  {h: `4. Quando NÃO puncionar — sem atrasar o antibiótico`, c: `Na suspeita de meningite com sinais de HIC/efeito de massa (**papiledema, déficit focal, rebaixamento, crises, imunossupressão**), faça **neuroimagem antes da punção lombar** pelo risco de herniação.

**Regra de ouro:** isso **não** deve atrasar o tratamento — colha **hemoculturas** e inicie **antibiótico empírico** (± **dexametasona** antes/junto da primeira dose, sobretudo pneumococo) **imediatamente**, sem esperar a TC nem o resultado do liquor. Atrasar o antibiótico pela imagem é o erro que aumenta mortalidade.`},
  {h: `5. Coma e morte encefálica`, c: `Avaliação do coma: estabilizar (ABC), glicemia, e diferenciar causa **estrutural** (déficit focal, sinais de tronco assimétricos) de **metabólica/tóxica** (simétrica, reflexos preservados). Escala de coma de Glasgow orienta a gravidade.

**Morte encefálica** (Resolução CFM 2.173/2017) é diagnóstico **clínico**, com **pré-requisitos**: causa conhecida e irreversível, e exclusão de confundidores (**hipotermia, drogas/sedação, distúrbios metabólicos/hidroeletrolíticos graves, hipotensão**). Exige **coma aperceptivo**, **ausência de reflexos de tronco**, **teste de apneia** positivo, dois exames por médicos distintos (um capacitado) com intervalo, e um **exame complementar** comprobatório de ausência de fluxo/atividade.`},
  {h: `6. Mudando de assunto: o sono normal (base para entender a insônia)`, c: `Para entender insônia, é preciso saber como o sono é regulado. Dois processos, que agem juntos, decidem quando e quão bem dormimos (modelo dos "dois processos"):

- **Processo S (homeostático):** quanto mais tempo acordado, maior a "pressão de sono" (acúmulo de adenosina, entre outros). Cochilos longos e a cafeína (que bloqueia a adenosina) **descarregam** essa pressão e atrapalham o sono da noite.
- **Processo C (circadiano):** o "relógio" do **núcleo supraquiasmático** sincroniza o corpo ao ciclo dia/noite, principalmente pela **luz**; à noite a ausência de luz libera **melatonina**, que sinaliza "hora de dormir".

O sono em si alterna **NREM** (fases N1–N3; a N3 é o sono profundo, restaurador) e **REM** (sono dos sonhos, com atonia muscular), em ciclos de ~90 minutos. Insônia não é "falta de sono" apenas — é um estado de **hiperalerta** (fisiológico e cognitivo) que impede o sistema de "desligar", mesmo com pressão de sono adequada. Essa noção explica por que o tratamento eficaz mira o **comportamento e a cognição**, não só um sedativo.`},
  {h: `7. Transtorno de insônia — definição e diagnóstico`, c: `**Definição (ICSD-3 / DSM-5-TR).** Queixa de **dificuldade para iniciar o sono, para mantê-lo, ou despertar precoce**, associada a **prejuízo diurno** (fadiga, humor irritável, déficit de atenção/memória, sonolência, queda de desempenho), ocorrendo **≥ 3 noites por semana**, e — o ponto que muitos esquecem — **apesar de oportunidade e circunstâncias adequadas para dormir**. Se dura **≥ 3 meses**, é **insônia crônica**; abaixo disso, **insônia de curta duração/aguda** (em geral ligada a estressor).

**O diagnóstico é clínico.** Ferramentas úteis: **diário do sono** (2 semanas) e questionários; a **polissonografia NÃO é rotina** — reserva-se para suspeita de **apneia do sono**, movimentos periódicos ou casos atípicos/refratários.

**Excluir o que imita insônia (obrigatório):**
- **Apneia obstrutiva do sono** (ronco, pausas, sonolência diurna, obesidade) — pedir polissonografia.
- **Síndrome das pernas inquietas** (urgência de mexer as pernas ao repouso, à noite, que alivia com movimento; ligada a **ferritina baixa** — repor ferro).
- **Depressão/ansiedade** (despertar precoce é clássico da depressão).
- **Dor, nictúria, refluxo, doenças da tireoide.**
- **Substâncias:** cafeína, álcool (fragmenta o sono na 2ª metade da noite), nicotina, **corticoide**, estimulantes, alguns antidepressivos.
- **Transtornos do ritmo circadiano** (adolescente "coruja" com atraso de fase — não é insônia verdadeira).`},
  {h: `8. Tratamento da insônia — a ordem certa (onde se erra)`, c: `**1ª linha = terapia cognitivo-comportamental para insônia (TCC-I)** — mais eficaz e mais duradoura que fármaco, com resposta que se mantém após o fim das sessões. Componentes:

- **Controle de estímulos:** cama só para dormir (e sexo); se não dormiu em ~20 min, levantar e voltar só com sono — reassociando a cama ao sono, não ao "esforço de dormir".
- **Restrição de sono:** limitar o tempo na cama ao tempo realmente dormido para aumentar a pressão de sono e a eficiência, expandindo depois gradualmente.
- **Reestruturação cognitiva:** desarmar crenças catastróficas ("se eu não dormir 8 h, meu dia está arruinado") que alimentam o hiperalerta.
- **Higiene do sono** (adjuvante, não basta sozinha): horários regulares, quarto escuro/silencioso/fresco, sem telas e cafeína à noite, sem cochilos longos, exercício de dia.

**Fármacos = adjuvantes/curto prazo**, quando a TCC-I não basta ou há muito sofrimento:
- **Agonistas de melatonina** (melatonina, ramelteon): úteis sobretudo em componente circadiano/idoso, bom perfil de segurança.
- **Doxepina em dose baixa** e alguns sedativos ajudam na manutenção do sono.
- **"Drogas Z" (zolpidem) e benzodiazepínicos:** eficazes a curto prazo, mas com **tolerância, dependência, quedas e piora cognitiva** — **evitar uso crônico**, e **muita cautela no idoso** (risco de queda/fratura e confusão).
- **Antagonistas de orexina** (quando disponíveis): opção mais nova para manutenção do sono.

**Mensagem para a prova:** insônia crônica se trata **primeiro com comportamento (TCC-I)**; o comprimido é coadjuvante e temporário — e nunca antes de excluir apneia, pernas inquietas, humor e substâncias.`}
 ],
 flashcards: [
  {p: `Fórmula da pressão de perfusão cerebral?`, r: `PPC = PAM − PIC (alvo PPC ~60–70; PIC < 20–22 mmHg).`},
  {p: `O que é a tríade de Cushing e o que significa?`, r: `HAS + bradicardia + respiração irregular = HIC tardia / herniação iminente.`},
  {p: `Primeira etapa do tratamento da HIC?`, r: `Medidas gerais (cabeceira 30°, linha média, normovolemia, normocapnia) antes da osmoterapia.`},
  {p: `Meningite com sinais de HIC: e o antibiótico?`, r: `Neuroimagem antes da punção, mas antibiótico empírico (± dexametasona) imediato — não esperar.`},
  {p: `Pré-requisito indispensável para abrir protocolo de morte encefálica?`, r: `Causa conhecida/irreversível e exclusão de hipotermia, drogas e distúrbios metabólicos.`},
  {p: `Critério temporal para insônia CRÔNICA?`, r: `Dificuldade de dormir/manter o sono ≥3x/semana por ≥3 meses, com prejuízo diurno e oportunidade adequada de dormir.`},
  {p: `Qual a 1ª linha de tratamento da insônia crônica?`, r: `TCC-I (terapia cognitivo-comportamental para insônia) — não o fármaco.`},
  {p: `Dois processos que regulam o sono?`, r: `Processo S (homeostático, pressão de sono/adenosina) e Processo C (circadiano, núcleo supraquiasmático/melatonina).`},
  {p: `Insônia + urgência de mexer as pernas ao repouso à noite = ?`, r: `Síndrome das pernas inquietas (checar ferritina; repor ferro).`}
 ],
 pegadinhas: [
  `Tríade de Cushing (HAS + bradicardia + respiração irregular) é sinal TARDIO de HIC/herniação.`,
  `Primeiro as medidas gerais (cabeceira 30°, normovolemia) ANTES de manitol/salina.`,
  `Hiperventilação agressiva não é rotina — vasoconstrição causa isquemia; é resgate temporário.`,
  `Sinais de HIC/efeito de massa → neuroimagem antes da punção; mas antibiótico empírico NÃO espera a imagem.`,
  `Morte encefálica exige causa conhecida e exclusão de hipotermia/drogas/distúrbios metabólicos antes de testar.`,
  `Paralisia do VI par pode ser falso localizatório na HIC (não indica lesão pontina focal).`,
  `Insônia crônica: 1ª linha é TCC-I, não benzodiazepínico.`,
  `Critério de insônia exige 'oportunidade adequada para dormir' + prejuízo diurno — não é só 'dormir pouco'.`,
  `Benzodiazepínico/zolpidem: curto prazo; evitar crônico e ter cautela no idoso (quedas, cognição).`,
  `Antes de rotular insônia primária, excluir apneia do sono, pernas inquietas, depressão e substâncias (cafeína, álcool, corticoide).`,
  `Despertar precoce é pista clássica de depressão; 'coruja' adolescente é atraso de fase circadiana, não insônia.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), cap. 163 — Hipertensão Intracraniana em Terapia Intensiva; cap. 162 — Manejo do TCE; cap. 171 — Hipertensão Intracraniana Idiopática; cap. 22 — Transtornos do Nível de Consciência (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 5 — Neurotrauma; Seção 14 — Hidrocefalia e Edema Cerebral; Seção 2 — Torpor e Coma / Morte Encefálica.`,
  `Resolução CFM 2.173/2017 (morte encefálica); Adams & Victor — “Coma...” e “Intracranial Pressure”.`
 ],
 questoes: [
  {enunciado: `Paciente com hipertensão intracraniana confirmada. Qual a primeira medida terapêutica antes de escalonar para osmoterapia?`, alternativas: {a: `Manitol em bolus`, b: `Medidas gerais: cabeceira a 30°, linha média, normovolemia e normocapnia`, c: `Hiperventilação agressiva mantida`, d: `Craniectomia descompressiva imediata`}, correta: "b", comentario: `O tratamento da HIC é escalonado: começa pelas medidas gerais (cabeceira a 30°, cabeça na linha média para não obstruir a drenagem venosa, normovolemia, controle de febre/dor/agitação e normocapnia) antes de partir para osmoterapia (manitol/salina hipertônica), sedação e cirurgia. A hiperventilação agressiva mantida causa vasoconstrição e risco de isquemia — é resgate temporário, não rotina. A craniectomia é medida final, não a primeira.`, foco: `Escalonamento da HIC`},
  {enunciado: `Homem com febre, rigidez de nuca, papiledema e hemiparesia. Qual a conduta correta quanto à punção lombar e ao antibiótico?`, alternativas: {a: `Punção lombar imediata antes de qualquer antibiótico`, b: `Neuroimagem antes da punção; iniciar antibiótico empírico sem esperar o liquor`, c: `Adiar o antibiótico até o resultado do liquor`, d: `Nenhum antibiótico até a tomografia ficar pronta`}, correta: "b", comentario: `Há sinais de HIC/efeito de massa (papiledema, déficit focal): a punção lombar deve ser adiada para depois da neuroimagem, pelo risco de herniação. Porém o antibiótico empírico (± dexametasona) NÃO deve esperar — inicia-se imediatamente após colher hemoculturas, pois o atraso aumenta a mortalidade da meningite bacteriana. Puncionar antes da imagem, nesse contexto, é perigoso; e adiar o antibiótico pela imagem/liquor é o erro que mata.`, foco: `Quando não puncionar`},
  {enunciado: `Antes de iniciar o protocolo de morte encefálica, qual condição é indispensável?`, alternativas: {a: `Causa do coma conhecida e exclusão de hipotermia, drogas e distúrbios metabólicos`, b: `Apenas um exame clínico por um único médico`, c: `Presença de reflexos de tronco preservados`, d: `Dispensar exame complementar em todos os casos`}, correta: "a", comentario: `O diagnóstico de morte encefálica exige pré-requisitos: causa conhecida e irreversível do coma e exclusão de confundidores (hipotermia, intoxicação/sedação, distúrbios hidroeletrolíticos/metabólicos graves). É preciso coma aperceptivo com AUSÊNCIA de reflexos de tronco (não preservados), teste de apneia positivo, exames repetidos por examinadores distintos e um exame complementar comprobatório, conforme a Resolução CFM 2.173/2017. Por isso a alternativa que reúne causa conhecida + exclusão de confundidores é a correta.`, foco: `Morte encefálica (pré-requisitos)`},
  {enunciado: `Mulher de 40 anos com dificuldade para iniciar o sono ≥4 noites/semana há 6 meses, com fadiga e queda de concentração diurnas; nega ronco/apneia, pernas inquietas ou sintomas depressivos, e tem boa oportunidade de dormir. Qual a conduta inicial mais adequada?`, alternativas: {a: `Iniciar clonazepam de uso contínuo`, b: `Terapia cognitivo-comportamental para insônia (TCC-I), com higiene do sono`, c: `Zolpidem em uso crônico por tempo indefinido`, d: `Solicitar polissonografia antes de qualquer medida`}, correta: "b", comentario: `O quadro preenche critério de transtorno de insônia crônica (dificuldade ≥3x/semana por ≥3 meses, com prejuízo diurno e oportunidade adequada de dormir) e já foram afastadas causas secundárias óbvias (apneia, pernas inquietas, depressão). A 1ª linha é a TCC-I (controle de estímulos, restrição de sono, reestruturação cognitiva) + higiene do sono — mais eficaz e duradoura que fármaco. Benzodiazepínico/zolpidem de uso contínuo trazem tolerância, dependência e risco de quedas/cognição, sendo no máximo adjuvantes de curto prazo. A polissonografia não é rotina: só se houver suspeita de apneia/movimentos periódicos ou refratariedade.`, foco: `Transtorno de insônia — 1ª linha (seu ponto de erro)`}
 ]
},

"NEURO|Transtornos do movimento": {
 titulo: `Transtornos do movimento`,
 half: `NEURO`,
 resumo: `O foco é separar Parkinson idiopático de parkinsonismo secundário (sobretudo farmacológico) e atípico, reconhecer tremor essencial, e não perder o Wilson no jovem. Resposta à levodopa e DAT-scan ajudam a decidir.`,
 secoes: [
  {h: `1. Hipocinéticos × hipercinéticos`, c: `Os transtornos do movimento dividem-se em **hipocinéticos** (parkinsonismos — pobreza de movimento) e **hipercinéticos** (tremor, coreia, distonia, mioclonia, tiques, balismo). O **parkinsonismo** é uma síndrome: **bradicinesia** obrigatória + pelo menos um entre **rigidez** e **tremor de repouso** (instabilidade postural é tardia). Definir se há parkinsonismo e depois sua causa é o algoritmo.`},
  {h: `2. Doença de Parkinson idiopática`, c: `Neurodegeneração dopaminérgica da substância negra com **corpos de Lewy** (alfa-sinucleína). Clínica **assimétrica**: tremor de repouso "contar moedas", bradicinesia, rigidez em roda denteada; marcha em pequenos passos, festinação, hipomimia, micrografia.

**Sintomas não motores** (muitas vezes precedem): **hiposmia**, **constipação**, **transtorno comportamental do sono REM**, depressão, disautonomia. **Boa resposta à levodopa** é regra e apoia o diagnóstico. Tratamento: levodopa/carbidopa, agonistas dopaminérgicos, iMAO-B; casos avançados com flutuações apesar de otimização → **estimulação cerebral profunda** (alvos **núcleo subtalâmico** e **globo pálido interno**).`},
  {h: `3. Parkinsonismo farmacológico e atípico`, c: `- **Parkinsonismo farmacológico:** 2ª causa mais comum. **Bloqueadores D2** — **metoclopramida**, antipsicóticos, **flunarizina/cinarizina**. Costuma ser mais **simétrico**, sem sintomas não motores; o **DAT-scan é NORMAL** (via nigroestriatal íntegra) — é o exame que o separa do Parkinson. Conduta: **suspender o fármaco** (não iniciar levodopa).
- **Parkinsonismos atípicos ("Parkinson-plus"):** paralisia supranuclear progressiva (quedas precoces, paralisia do olhar vertical), atrofia de múltiplos sistemas (disautonomia/ataxia), degeneração corticobasal. Respondem **mal** à levodopa e têm sinais de alarme ("red flags") precoces.`},
  {h: `4. Tremor essencial`, c: `Tremor **postural e de ação** (não de repouso), bilateral, predominando nas mãos, podendo afetar cabeça e voz; **história familiar** (autossômico dominante) e **melhora com álcool**. Sem bradicinesia/rigidez; **DAT-scan normal**. Primeira linha: **propranolol** ou **primidona**; refratários → estimulação cerebral profunda do **núcleo ventral intermédio (VIM)** do tálamo.

Diferença essencial do Parkinson: tremor de **ação** (essencial) × tremor de **repouso** (Parkinson).`},
  {h: `5. Coreias, distonias e Wilson`, c: `- **Coreia de Sydenham:** pós-estreptocócica, criança/adolescente, autolimitada; critério maior de febre reumática.
- **Doença de Huntington:** **coreia** + declínio **cognitivo/psiquiátrico** + herança **autossômica dominante** (expansão **CAG** no gene HTT), com antecipação.
- **Distonias:** contrações sustentadas com posturas anômalas; focais (blefaroespasmo, torcicolo) tratam-se com **toxina botulínica**.
- **Doença de Wilson:** **jovem (<40 anos)** com transtorno do movimento (tremor "em bater de asas", distonia, disartria) + **hepatopatia** + **anéis de Kayser-Fleischer**, **ceruloplasmina baixa** e cobre urinário alto. É **tratável** (quelantes — trientina/D-penicilamina — e zinco) — por isso não pode passar despercebida.`}
 ],
 flashcards: [
  {p: `Conduta no parkinsonismo por metoclopramida?`, r: `Suspender o fármaco (não iniciar levodopa); DAT-scan seria normal.`},
  {p: `O que separa tremor essencial de Parkinson?`, r: `Essencial = tremor de ação/postural, melhora com álcool, DAT-scan normal; Parkinson = repouso, responde à levodopa.`},
  {p: `Jovem com transtorno do movimento + hepatopatia: pensar em?`, r: `Doença de Wilson (ceruloplasmina baixa, anéis de Kayser-Fleischer) — tratável.`},
  {p: `Alvos da estimulação cerebral profunda no Parkinson?`, r: `Núcleo subtalâmico e globo pálido interno.`},
  {p: `Herança e mutação da doença de Huntington?`, r: `Autossômica dominante, expansão CAG no gene HTT.`}
 ],
 pegadinhas: [
  `Parkinsonismo farmacológico: SUSPENDER o fármaco (metoclopramida/antipsicótico), não iniciar levodopa.`,
  `DAT-scan NORMAL separa parkinsonismo farmacológico e tremor essencial do Parkinson idiopático.`,
  `Tremor essencial é de AÇÃO/postural e melhora com álcool; Parkinson é de REPOUSO.`,
  `Jovem com distúrbio do movimento + hepatopatia = investigar Wilson (ceruloplasmina, K-F) — tratável.`,
  `Metoclopramida e flunarizina/cinarizina são causas frequentemente esquecidas de parkinsonismo.`,
  `Má resposta à levodopa + quedas/olhar vertical precoces = pensar em parkinsonismo atípico.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), caps. 59–68 (Parkinson; Tremor Essencial; Distonias; Huntington; Movimento Infeccioso/Autoimune; Induzidos por Drogas; Doença de Wilson; Parkinsonismo Atípico) (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 11 — Distúrbios do Movimento.`,
  `PCDT da Doença de Parkinson (Ministério da Saúde/BVSMS); Adams & Victor — “Abnormalities of Movement” e “Parkinson Disease”.`
 ],
 questoes: [
  {enunciado: `Mulher de 58 anos com bradicinesia, rigidez e tremor há 3 meses, em uso de metoclopramida diária há meses. Qual a conduta mais adequada?`, alternativas: {a: `Iniciar levodopa`, b: `Suspender a metoclopramida`, c: `Iniciar antipsicótico`, d: `Solicitar teste genético para Parkinson`}, correta: "b", comentario: `O quadro sugere parkinsonismo farmacológico pela metoclopramida (bloqueador D2). A conduta é suspender o fármaco causador e reavaliar — a maioria melhora em semanas a meses. Iniciar levodopa é erro (trata Parkinson idiopático, não a causa iatrogênica). Antipsicótico agravaria (mais bloqueio dopaminérgico). O DAT-scan, se feito, seria normal — o que confirma a origem farmacológica e separa do Parkinson idiopático.`, foco: `Parkinsonismo farmacológico (conduta)`},
  {enunciado: `Homem de 62 anos com tremor bilateral das mãos que aparece ao segurar o copo e ao escrever, melhora com álcool, sem rigidez ou bradicinesia, com pai afetado. Qual o tratamento de primeira linha?`, alternativas: {a: `Levodopa`, b: `Propranolol`, c: `Metoclopramida`, d: `Toxina botulínica para todos os casos`}, correta: "b", comentario: `O quadro é tremor essencial (postural/de ação, familiar, melhora com álcool, sem sinais parkinsonianos). Primeira linha: propranolol ou primidona. Levodopa não tem papel (é do Parkinson). Metoclopramida pioraria (induz parkinsonismo). Toxina botulínica fica para casos selecionados/refratários (tremor cefálico ou vocal), não é primeira linha universal. O tremor de ação e a melhora com álcool são as pistas.`, foco: `Tremor essencial × Parkinson`},
  {enunciado: `Homem de 22 anos com tremor, disartria e alterações de comportamento há 1 ano, além de hepatopatia. Qual investigação é prioritária por identificar causa tratável?`, alternativas: {a: `Dosagem de ceruloplasmina e pesquisa de anéis de Kayser-Fleischer`, b: `Teste genético para Huntington`, c: `Cintilografia DAT-scan`, d: `Dosagem de anti-estreptolisina O`}, correta: "a", comentario: `Jovem com distúrbio do movimento + hepatopatia obriga a investigar doença de Wilson: ceruloplasmina baixa, cobre urinário elevado e anéis de Kayser-Fleischer — condição TRATÁVEL (quelantes de cobre/zinco), por isso não pode passar. Huntington cursa com coreia + demência + herança dominante, mas não é tratável de forma curativa e não explica a hepatopatia. DAT-scan não faz o diagnóstico etiológico aqui. ASLO remete a Sydenham (coreia pós-estreptocócica), quadro diferente.`, foco: `Wilson (não perder no jovem)`}
 ]
},

"NEURO|Neuropediatria": {
 titulo: `Neuropediatria — epilepsias da infância, crise febril e doenças neuromusculares`,
 half: `NEURO`,
 resumo: `O cérebro da criança não é um cérebro de adulto "menor": ele está em construção, e por isso as doenças neurológicas têm idades preferenciais, quadros e prognósticos próprios. Este texto reconstrói o tema do zero, com foco no que mais cai e mais confunde — as encefalopatias epilépticas do lactente (com a síndrome de West no centro), a crise febril (que NÃO é epilepsia) e a distrofia de Duchenne — explicando o porquê de cada conduta.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (Seção 19 — Neurologia Pediátrica; caps. 172 — Exame Neurológico da Criança, 173 — Epilepsia na Infância, 174 — Lactente Hipotônico, 176 — Paralisia Cerebral, 180 — Síndromes Neurocutâneas), Merritt 13ª ed. (Seção de Epilepsias e Doenças Neuromusculares), Adams & Victor (Normal Development and Deviations; The Epilepsies) e Sanvito (exame neurológico e do desenvolvimento). Ver materiais_neuro.md.`,
 notaErro: `Nos seus registros, a **neuropediatria específica (síndrome de West)** aparece com erro recorrente. O problema quase nunca é "não conhecer" a síndrome — é **não fechar a tríade** e **errar a droga**. Os tropeços clássicos, todos endereçados neste texto:

- **Você não reconhece o espasmo como crise.** Os espasmos em flexão parecem "cólica", "susto" ou "reflexo de Moro" e vêm em **salvas** ao acordar. Quem os trata como refluxo/cólica perde meses (seção 3). A pista de ouro é a **salva** + a **regressão do desenvolvimento**.
- **Você esquece o EEG.** West é uma **tríade**: espasmos + **hipsarritmia** no EEG + atraso/regressão do DNPM. Sem pedir o EEG (interictal, de preferência com sono), você não fecha o diagnóstico (seção 3).
- **Você erra a primeira droga.** A 1ª linha é **ACTH (ou corticoide) ou vigabatrina** — e, na **esclerose tuberosa**, a **vigabatrina é a escolha**. Marcar "carbamazepina/fenitoína" é erro grave (podem até piorar) (seção 4).
- **Confunde West com crise febril** ou acha que "toda crise na criança é epilepsia". Crise febril **simples NÃO é epilepsia**, não precisa de EEG/neuroimagem nem de droga contínua (seção 5).

**Como zerar:** diante de um lactente com "movimentos anormais", pergunte NESTA ordem — (1) são **espasmos em salva**, sobretudo ao despertar? (2) houve **parada ou regressão** do desenvolvimento? (3) o **EEG** mostra **hipsarritmia**? Se sim, é West → investigue a **causa** (não perca a esclerose tuberosa) e trate com **ACTH/corticoide ou vigabatrina** (vigabatrina se esclerose tuberosa). As questões ao final batem exatamente nesses pontos.`,
 secoes: [
  {h: `1. Por que a neurologia da criança é um capítulo à parte`, c: `O sistema nervoso da criança está em **maturação ativa**: neurônios ainda migram, sinapses se formam e se podam, a mielinização avança por anos. Três consequências práticas nascem disso, e elas explicam quase tudo o que a prova cobra:

- **Doenças têm "idade preferencial".** Um mesmo insulto (genético, metabólico, estrutural) produz síndromes diferentes conforme a idade em que o cérebro está — por isso as **encefalopatias epilépticas** se organizam por faixa etária (Ohtahara no recém-nascido, **West no lactente**, Lennox-Gastaut no pré-escolar). É o conceito de epilepsia **idade-dependente**.
- **O desenvolvimento é o "sinal vital" do cérebro infantil.** Perder marcos ou **regredir** (parar de sorrir, de sentar, de pegar objetos) é um sinal de alarme tão importante quanto uma crise. Sempre pergunte pelo **desenvolvimento neuropsicomotor (DNPM)**.
- **O exame é adaptado à idade.** Avaliamos tônus, postura, reflexos primitivos (Moro, preensão, sucção) e sua **extinção no tempo certo**, além dos marcos. Reflexo primitivo que **não some** ou assimetria de tônus são pistas de lesão.

Guarde a moldura: em pediatria, **crise + regressão do desenvolvimento** é um alerta máximo — e o exemplo-mãe é a síndrome de West.`},
  {h: `2. Como uma criança convulsiona — e a diferença entre crise, epilepsia e síndrome`, c: `Vale separar três palavras que a prova usa com precisão:

- **Crise epiléptica:** o evento — uma descarga elétrica anormal e síncrona de neurônios, que se manifesta como abalos, rigidez, desconexão, espasmo etc. Uma crise isolada **não** é epilepsia.
- **Epilepsia:** a **tendência** a ter crises não provocadas (em geral ≥ 2 crises separadas por > 24 h, ou 1 crise com alto risco de recorrência). "Não provocada" quer dizer **sem** um gatilho agudo como febre, distúrbio metabólico ou trauma.
- **Síndrome epiléptica:** um "pacote" que agrupa tipo de crise + idade + padrão de EEG + prognóstico (ex.: West). Reconhecer a **síndrome** direciona o tratamento e o prognóstico — muito mais do que só nomear a crise.

Por isso, diante de uma criança que "convulsionou", a pergunta certa não é só "que crise foi essa?", mas **"há uma síndrome por trás?"** e **"foi provocada (ex.: febre) ou não?"**.`},
  {h: `3. Síndrome de West — o que é e como reconhecer (o coração do tema)`, c: `A **síndrome de West** é a encefalopatia epiléptica **do lactente** por excelência. Costuma começar entre **3 e 12 meses** (pico ~5–7 meses). É definida por uma **TRÍADE** — decore-a como um tripé, porque a prova exige os três:

- **1) Espasmos epilépticos ("espasmos infantis"):** contrações **súbitas, breves (1–2 s), bilaterais**, em geral **em flexão** do pescoço, tronco e membros ("canivete"/"jack-knife") — às vezes em extensão ou mistas. O detalhe que fecha: vêm **em SALVAS** (dezenas seguidas) e tipicamente **ao despertar** ou ao adormecer. São facilmente confundidos com **cólica, susto, refluxo ou reflexo de Moro** — e essa confusão é a causa nº 1 de atraso diagnóstico.
- **2) Hipsarritmia no EEG:** o padrão eletroencefalográfico clássico — atividade **caótica, desorganizada, de altíssima voltagem**, com ondas lentas e espículas multifocais, sem ritmo de base. O EEG (interictal, de preferência captando **sono**) é o que **confirma** e não pode faltar.
- **3) Atraso ou REGRESSÃO do desenvolvimento:** a criança **estagna ou perde** marcos já adquiridos (deixa de sorrir, de fixar/seguir, de sustentar o tronco). É o sinal que transforma "movimentos estranhos" em emergência.

Nem sempre os três aparecem completos no início (formas "incompletas" existem), mas a combinação **espasmos em salva + regressão** já obriga a pedir EEG **com urgência**. Reconhecer cedo importa porque **quanto mais rápido se controla, melhor o neurodesenvolvimento** — é uma emergência neurológica do lactente.`},
  {h: `4. West — por que acontece (causas) e como tratar`, c: `**Causas (etiologia).** West é uma "via final comum" de muitas agressões ao cérebro em desenvolvimento. Divide-se didaticamente em:

- **Estruturais/sintomáticas (maioria):** encefalopatia hipóxico-isquêmica (asfixia perinatal), malformações do desenvolvimento cortical, sequelas de infecções congênitas, AVC neonatal, e — a que **não se pode perder** — as **síndromes neurocutâneas**, sobretudo a **esclerose tuberosa** (procure manchas hipocrômicas "folha de freixo" à lâmpada de Wood, e faça imagem/genética).
- **Metabólicas/genéticas:** erros inatos do metabolismo, síndromes genéticas.
- **Desconhecida (idiopática/criptogênica):** subgrupo com melhor prognóstico quando o desenvolvimento era normal antes.

Investigar a causa é parte do diagnóstico: **neuroimagem (RM de crânio)**, avaliação para esclerose tuberosa e, conforme o caso, triagem metabólica/genética.

**Tratamento (o ponto que mais se erra).** A 1ª linha são **terapias hormonais — ACTH ou corticoide (prednisolona em dose alta)** — **ou a vigabatrina**. A regra que a banca adora:

- **Esclerose tuberosa → vigabatrina é a 1ª escolha** (resposta especialmente boa nesse grupo).
- Nas demais causas, **ACTH/corticoide ou vigabatrina**, conforme protocolo/disponibilidade.
- **Antiepilépticos "clássicos" de crise focal (carbamazepina, fenitoína, oxcarbazepina) NÃO servem e podem PIORAR** os espasmos. Marcar um deles é o erro grave.

O objetivo do tratamento não é só parar os espasmos, mas **apagar a hipsarritmia** (resolver o padrão de EEG), porque é isso que se associa a melhor desfecho cognitivo. Sem controle, West frequentemente **evolui para síndrome de Lennox-Gastaut** e deficiência intelectual.`},
  {h: `5. Crise febril — o oposto de West: comum, benigna e que NÃO é epilepsia`, c: `A **crise febril** é a crise mais comum da infância e o grande contraponto de West: aqui, na imensa maioria, o prognóstico é **excelente**. Definição: crise associada a **febre**, em criança de **6 meses a 5 anos**, **sem** infecção do SNC (meningite/encefalite) e **sem** distúrbio metabólico que a explique. Ou seja, é uma crise **provocada** (pela febre) — **por isso não é epilepsia**.

Classifica-se em:

- **Simples (a grande maioria):** **generalizada**, **breve (< 15 min)**, **única em 24 h** e sem déficit neurológico residual. Conduta: **tratar a causa da febre e a criança**, orientar os pais, **sem** necessidade de EEG, neuroimagem ou punção lombar de rotina, e **sem** antiepiléptico contínuo. A punção lombar entra se houver **sinais meníngeos/sinais de infecção do SNC**, sinais de alarme, ou em lactente jovem com quadro atípico/toxemiado.
- **Complexa:** **focal**, **prolongada (≥ 15 min)** ou **recorrente em 24 h**. Aqui há mais investigação e mais atenção.

**Mensagens de prova:** crise febril simples **não** vira epilepsia na maioria; o principal "risco" é **repetir outra crise febril** (não epilepsia). O medo dos pais deve ser acolhido com orientação; antitérmico melhora o conforto, mas **não previne** de forma confiável a recorrência da crise. E a regra de segurança: febre + crise no lactente sempre obriga a **excluir meningite** pela clínica.`},
  {h: `6. Distrofia muscular de Duchenne — a doença neuromuscular que mais cai`, c: `Sair do cérebro e ir ao músculo: a **distrofia muscular de Duchenne (DMD)** é a distrofia mais comum da infância. É **genética, ligada ao X recessivo** (afeta **meninos**; mães portadoras), por mutação no gene da **distrofina** — proteína que ancora a membrana da fibra muscular. Sem distrofina funcional, o músculo se degenera progressivamente.

- **Clínica:** menino que, por volta dos **2–5 anos**, tem **atraso para andar**, quedas, dificuldade para correr/subir escadas, **marcha anserina** (gingada) e o clássico **sinal de Gowers** (para levantar do chão, "escala" o próprio corpo com as mãos). **Pseudo-hipertrofia das panturrilhas** (músculo substituído por gordura/fibrose). Progressão para perda da marcha na 2ª década, com envolvimento **respiratório e cardíaco** (miocardiopatia).
- **Pistas laboratoriais:** **CK (creatinoquinase) muito elevada** (milhares) desde cedo — um menino com atraso motor e CK altíssima é DMD até prova em contrário.
- **Confirmação:** **teste genético** (deleções/mutações do gene da distrofina); biópsia muscular quando necessário.
- **Tratamento:** **corticoide** (prednisona/deflazacorte) retarda a perda de força e da marcha; suporte multidisciplinar (cardio, respiratório, ortopédico) e novas terapias gênicas. A variante **Becker** é a forma mais **branda** (distrofina parcialmente funcional).`},
  {h: `7. O lactente hipotônico e a paralisia cerebral (dois clássicos do exame)`, c: `Duas situações completam a base da neuropediatria e frequentemente aparecem ao lado de West:

**O lactente hipotônico ("bebê mole").** Hipotonia é a queixa que abre inúmeros diagnósticos; o passo-chave é **localizar** o problema. Pergunte: a fraqueza é do **neurônio motor/músculo** (hipotonia "periférica") ou do **cérebro** (hipotonia "central")?
- **Central (acima do neurônio motor):** hipotonia **com** hiper-reflexia ou reflexos normais, atraso cognitivo, dismorfias, crises. Causas: encefalopatia hipóxico-isquêmica, síndromes genéticas (ex.: Down), erros do metabolismo. O bebê é "mole mas com reflexos".
- **Periférica (unidade motora):** hipotonia **com fraqueza real e arreflexia/hiporreflexia**, sem déficit cognitivo. Causas: **atrofia muscular espinhal (AME)** — bebê alerta, "olhar vivo", língua com fasciculações, arreflexia —, miopatias congênitas, distrofias, doenças da junção. A **AME** é hoje diagnóstico obrigatório (tratamentos modificadores existem; entrou na triagem neonatal em vários lugares).
A regra prática: **bebê mole + arreflexia + inteligência preservada → pense em doença da unidade motora (AME)**; **bebê mole + reflexos vivos + atraso global → causa central**.

**Paralisia cerebral (PC).** É um **transtorno do movimento e da postura**, **não progressivo**, por uma lesão que ocorreu no cérebro **imaturo** (pré, peri ou pós-natal precoce). Pontos que a prova cobra:
- É **estática** (a lesão não piora) — embora o quadro clínico "mude" com o crescimento. Se há **regressão/piora**, **não** é PC: reinvestigue (doença metabólica/degenerativa).
- Forma mais comum: **espástica** (hipertonia, reflexos vivos, sinal de Babinski, tesoura/equino). Pode ser diplégica (típica do **prematuro** — leucomalácia periventricular), hemiplégica ou quadriplégica.
- Vem com **comorbidades**: epilepsia, deficiência intelectual, disfagia, alterações visuais/auditivas, ortopédicas — o manejo é **multidisciplinar** e de **reabilitação**.
Diferenciar PC (estática) de doença degenerativa (progressiva) é o mesmo raciocínio de West: **o desenvolvimento e sua trajetória contam a história**.`},
  {h: `8. Síntese em seis frases (leve para a prova)`, c: `- Em pediatria, **crise + regressão do desenvolvimento** = alarme máximo → pense em **encefalopatia epiléptica**.
- **West** = tríade **espasmos em salva** + **hipsarritmia (EEG)** + **atraso/regressão do DNPM**, no **lactente**.
- West: procure a **causa** (não perca a **esclerose tuberosa**) e trate com **ACTH/corticoide ou vigabatrina** — **vigabatrina se esclerose tuberosa**; **nunca** carbamazepina/fenitoína.
- **Crise febril simples** (6 m–5 a, generalizada, < 15 min, única) **não é epilepsia** → tratar a febre, orientar, **sem** EEG/imagem/droga contínua; excluir meningite pela clínica.
- **Duchenne** = menino, atraso motor, **Gowers**, pseudo-hipertrofia de panturrilha, **CK altíssima** → genética; **corticoide** ajuda.
- Sempre avalie o **DNPM** e os **reflexos primitivos**: o desenvolvimento é o sinal vital do cérebro da criança.`}
 ],
 flashcards: [
  {p: `Qual a tríade da síndrome de West?`, r: `Espasmos epilépticos (em salva) + hipsarritmia no EEG + atraso/regressão do desenvolvimento neuropsicomotor.`},
  {p: `Faixa etária típica da síndrome de West?`, r: `Lactente, entre 3 e 12 meses (pico ~5–7 meses).`},
  {p: `Tratamento de 1ª linha da síndrome de West?`, r: `ACTH/corticoide (prednisolona) ou vigabatrina — vigabatrina é a escolha na esclerose tuberosa.`},
  {p: `Qual causa estrutural de West não pode ser esquecida?`, r: `Esclerose tuberosa (procurar manchas hipocrômicas à lâmpada de Wood).`},
  {p: `Antiepilépticos que podem PIORAR os espasmos de West?`, r: `Carbamazepina, fenitoína, oxcarbazepina (bloqueadores de canal de sódio para crise focal).`},
  {p: `Definição de crise febril simples?`, r: `6 m–5 a, com febre, sem infecção do SNC; generalizada, < 15 min, única em 24 h, sem déficit residual.`},
  {p: `Crise febril simples precisa de EEG, imagem ou antiepiléptico contínuo?`, r: `Não — tratar a febre, orientar os pais e excluir meningite pela clínica.`},
  {p: `Sinal de Gowers e CK altíssima em menino com atraso motor?`, r: `Distrofia muscular de Duchenne (ligada ao X, gene da distrofina).`},
  {p: `Herança da distrofia de Duchenne?`, r: `Recessiva ligada ao X (afeta meninos; mães portadoras).`}
 ],
 pegadinhas: [
  `Espasmos infantis vêm EM SALVA e ao despertar — não confunda com cólica, susto ou refluxo.`,
  `West é TRÍADE: sem o EEG (hipsarritmia) você não fecha o diagnóstico.`,
  `Na esclerose tuberosa, a 1ª escolha para West é a VIGABATRINA.`,
  `Carbamazepina/fenitoína não tratam West e podem PIORAR — nunca escolher.`,
  `Regressão/parada do desenvolvimento é sinal de alarme tão importante quanto a crise.`,
  `Crise febril simples NÃO é epilepsia e não precisa de EEG/imagem/droga contínua.`,
  `Febre + crise no lactente: sempre excluir meningite pela clínica (punção se sinais de infecção do SNC).`,
  `Antitérmico dá conforto, mas não previne de forma confiável a recorrência da crise febril.`,
  `Menino com atraso motor + CK muito elevada = Duchenne até prova em contrário.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025), Seção 19 — Neurologia Pediátrica, cap. 173 (Epilepsia na Infância), cap. 172 (Exame Neurológico da Criança), cap. 174 (Lactente Hipotônico), cap. 180 (Síndromes Neurocutâneas) (ver materiais_neuro.md).`,
  `Merritt, Tratado de Neurologia (13ª ed.) — Epilepsias (síndromes idade-dependentes) e Doenças Musculares (distrofinopatias); Adams & Victor — “Normal Development and Deviations” e “The Epilepsies”.`,
  `SBP — Documentos Científicos (Neurologia/crise febril) e diretrizes de espasmos infantis; Sanvito — exame neurológico e do desenvolvimento.`
 ],
 questoes: [
  {enunciado: `Lactente de 6 meses apresenta, há 3 semanas, episódios de flexão súbita da cabeça e tronco em salvas ao despertar, e os pais notam que "parou de sorrir e de segurar objetos". Qual exame confirma a principal hipótese?`, alternativas: {a: `Tomografia de crânio urgente`, b: `Eletroencefalograma (buscando hipsarritmia)`, c: `Dosagem de eletrólitos`, d: `Ecocardiograma`}, correta: "b", comentario: `Espasmos em flexão em salvas + regressão do desenvolvimento em um lactente é síndrome de West. O diagnóstico é uma tríade e o exame que a confirma é o EEG, mostrando hipsarritmia (interictal, de preferência com sono). A neuroimagem (RM, melhor que TC) é importante para a etiologia (ex.: esclerose tuberosa), mas não é o exame que fecha a síndrome. Eletrólitos e ecocardiograma não têm papel diagnóstico aqui. Valorizar a salva + a regressão evita meses de atraso rotulando como cólica/refluxo.`, foco: `Diagnóstico de West (EEG/hipsarritmia)`},
  {enunciado: `Lactente com síndrome de West e manchas hipocrômicas na pele evidenciadas à lâmpada de Wood. Qual o tratamento de primeira escolha para os espasmos?`, alternativas: {a: `Carbamazepina`, b: `Fenitoína`, c: `Vigabatrina`, d: `Ácido valproico em monoterapia como 1ª linha universal`}, correta: "c", comentario: `As manchas hipocrômicas ("folha de freixo") indicam esclerose tuberosa — e, nesse contexto, a vigabatrina é a 1ª escolha para os espasmos (resposta especialmente boa). Nas demais etiologias, ACTH/corticoide ou vigabatrina. Carbamazepina e fenitoína (bloqueadores de sódio para crise focal) não tratam West e podem PIORAR os espasmos — erro grave. Reconhecer a esclerose tuberosa muda a droga; por isso sempre se procura a causa.`, foco: `Tratamento de West / esclerose tuberosa`},
  {enunciado: `Menino de 2 anos, previamente hígido, tem uma crise tônico-clônica generalizada de 3 minutos durante pico febril por otite; exame neurológico normal após o episódio, sem sinais meníngeos. Qual a conduta mais adequada?`, alternativas: {a: `Iniciar antiepiléptico contínuo`, b: `Solicitar EEG e RM de crânio de rotina`, c: `Tratar a causa da febre, orientar os pais e observar, sem exames de rotina`, d: `Punção lombar obrigatória para todos`}, correta: "c", comentario: `É uma crise febril simples (6 m–5 a, generalizada, < 15 min, única em 24 h, sem infecção do SNC), que não é epilepsia. A conduta é tratar a febre/causa, orientar e tranquilizar os pais — sem EEG, neuroimagem ou antiepiléptico contínuo de rotina. A punção lombar não é obrigatória para todos: entra se houver sinais meníngeos/sinais de infecção do SNC ou quadro atípico/toxemiado. Medicar cronicamente uma crise febril simples é conduta excessiva e errada.`, foco: `Crise febril simples (conduta)`},
  {enunciado: `Menino de 4 anos com quedas frequentes, dificuldade para subir escadas, marcha gingada e "escalada" do próprio corpo ao levantar do chão. Qual achado laboratorial é esperado e qual a principal hipótese?`, alternativas: {a: `CK muito elevada — distrofia muscular de Duchenne`, b: `CK normal — paralisia cerebral`, c: `Amônia elevada — erro inato do metabolismo`, d: `TSH elevado — hipotireoidismo`}, correta: "a", comentario: `Sinal de Gowers ("escalar" o corpo), marcha anserina, dificuldade para subir escadas e quedas em um menino sugerem distrofia muscular de Duchenne (ligada ao X, gene da distrofina). A CK está tipicamente muito elevada (milhares) desde cedo; a confirmação é genética. Costuma haver pseudo-hipertrofia de panturrilhas. Corticoide retarda a progressão. Os demais achados não explicam esse conjunto clínico clássico.`, foco: `Duchenne (Gowers/CK)`}
 ]
},

"PED|Imunização": {
 titulo: `Imunização — PNI e calendário`,
 half: `PED`,
 resumo: `Imunização é o tema em que se perde ponto "de graça": a banca cobra o raciocínio (tipo de vacina → o que decorre disso), as contraindicações reais × falsas, a lógica do calendário do PNI, o que fazer com atraso/intervalos e a vigilância (paralisia flácida aguda, eventos adversos). Este texto reconstrói tudo do zero, explicando o porquê de cada regra — para você parar de decorar e passar a deduzir.`,
 fontes: `Base: Calendário Nacional de Vacinação — PNI/Ministério da Saúde (versão vigente); SBIm e SBP — Documentos Científicos (Imunizações); MS — Guia de Vigilância em Saúde (paralisia flácida aguda / poliomielite) e Manual de Eventos Adversos Pós-Vacinação (EAPV). Material de Pediatria do Drive (imunização/calendário vacinal) — ver materiais_drive.md.`,
 notaErro: `No seu perfil, **imunização (PNI, paralisia flácida aguda e poliomielite)** aparece com erro recorrente. É um tema traiçoeiro porque parece "decoreba de calendário", mas a prova testa **raciocínio** e **condutas de vigilância**. Os tropeços clássicos, todos endereçados aqui:

- **Você decora o calendário e esquece a lógica "viva × inativada".** Quase toda questão de contraindicação e de coadministração se resolve sabendo se a vacina é **viva atenuada** (cuidado em imunodeprimido grave e gestante) ou **inativada** (segura). Decore o conceito, não a tabela (seção 1).
- **Você "adia por qualquer coisa".** Doença febril **leve**, uso de **antibiótico**, prematuridade e aleitamento **NÃO** contraindicam — adiar por isso derruba a cobertura, que é o que reintroduz sarampo e pólio (seção 3).
- **Você reinicia o esquema no atraso.** Nunca se reinicia: **dose dada é dose contada**; completa-se o que falta respeitando intervalos mínimos (seção 4).
- **Você subestima a paralisia flácida aguda (PFA).** Toda PFA em **< 15 anos** é **notificação compulsória imediata** e se investiga como pólio até afastar — e você confunde VOP (viva, risco raro de pólio vacinal) com VIP (inativada, esquema atual) (seção 2).

**Como zerar:** para cada caso — (1) a vacina é **viva ou inativada**? (isso decide contraindicação/coadministração); (2) o que se alega é uma contraindicação **verdadeira** (anafilaxia; viva em imunodeprimido grave/gestante; encefalopatia pós-pertussis) ou **falsa**? (3) em atraso, **complete** (não reinicie); (4) diante de fraqueza flácida aguda no < 15 anos, **notifique já** e investigue pólio. As questões ao final batem nesses pontos.`,
 secoes: [
  {h: `1. Tipos de vacina — o conceito que resolve a maioria das questões`, c: `- **Vivas atenuadas:** BCG, **rotavírus**, **febre amarela**, **tríplice/tetra viral (SCR/SCRV)**, **varicela**, dengue (em indicações específicas). Em regra **contraindicadas em imunodepressão grave e gestação**; entre duas vacinas vivas parenterais, respeitar intervalo de 30 dias se não aplicadas no mesmo dia.
- **Inativadas / subunidades / toxoides / conjugadas:** hepatite B, **pentavalente** (DTP+Hib+HepB), **VIP** (poliomielite inativada), pneumocócica, meningocócica, HPV, dTpa, influenza, hepatite A. **Seguras** em imunodeprimidos e gestantes.

Saber a natureza da vacina resolve quase toda questão de contraindicação e de coadministração.`},
  {h: `2. Poliomielite — VOP × VIP e vigilância`, c: `O esquema atual usa **VIP** (inativada, injetável) nas doses do primeiro ano e nos reforços (o Brasil migrou para esquema **integralmente VIP**, aposentando a VOP oral). A **VOP** é vírus **vivo atenuado** e pode, raramente, causar **poliomielite associada à vacina (VAPP)** por reversão de virulência — por isso não se usa em imunodeprimidos nem em seus contatos quando ainda empregada.

**Paralisia flácida aguda (PFA)** em menor de 15 anos é **notificação compulsória imediata** e deve ser investigada como possível poliomielite até afastar (coleta de fezes). A doença está **erradicada** no Brasil, mas a **queda de cobertura** ameaça reintrodução.`},
  {h: `3. Contraindicações verdadeiras × falsas`, c: `**Verdadeiras:**
- Reação **anafilática** a dose anterior ou a componente da vacina.
- Para **vacinas vivas:** imunodepressão grave e gestação.
- **Encefalopatia** nos 7 dias após dose de componente **pertussis** contraindica novas doses de pertussis (usar dupla sem o componente).

**Falsas (NÃO contraindicam — vacinar):**
- Doença febril **leve**, uso de **antibiótico**, fase de convalescença.
- **Prematuridade** (vacinar pela **idade cronológica**; HepB ao nascer conforme peso/condição).
- Aleitamento; contato domiciliar com gestante/imunodeprimido (para a maioria das vacinas).
- História familiar de eventos, alergia não anafilática.`},
  {h: `4. Intervalos, atraso e situações especiais`, c: `- **Atraso vacinal:** não reinicia esquema — completa o que falta ("dose dada é dose contada"), respeitando intervalos mínimos.
- **Prematuro/baixo peso:** BCG geralmente ao atingir **2 kg**; hepatite B ao nascer conforme protocolo.
- **Imunodeprimidos e contatos:** priorizar vacinas inativadas; proteger o paciente vacinando os conviventes (ex.: influenza, tríplice viral nos contatos suscetíveis).
- **Coadministração:** a maioria pode ser dada no mesmo dia; vivas parenterais não coincidentes exigem 30 dias de intervalo.`},
  {h: `5. Eventos adversos pós-vacinação (EAPV)`, c: `Registrar e **notificar** EAPV. Pontos cobrados:
- **Episódio hipotônico-hiporresponsivo** e febre alta após pertussis: em geral **não** contraindicam doses futuras (avaliar caso a caso; considerar acelular).
- **Reação anafilática** a uma vacina contraindica **aquela** vacina.
- Invaginação intestinal tem associação temporal com **rotavírus** — respeitar as **idades máximas** de administração das doses.
- Conduta habitual: manter o calendário sempre que possível, orientar sintomáticos e notificar.`},
  {h: `6. A lógica do calendário do PNI (por que as doses caem onde caem)`, c: `Você não precisa decorar datas se entender a **lógica** por trás do calendário do lactente. Três ideias organizam quase tudo:

- **Proteger cedo o que mata cedo.** A **hepatite B** é dada **ao nascer** (idealmente nas primeiras 12–24 h) porque a transmissão vertical no parto tem alto risco de cronificação. A **BCG** também é neonatal (dose única), para prevenir as formas graves da tuberculose (miliar e meníngea) no lactente.
- **Séries de 3 doses no 1º semestre + reforços.** As vacinas **inativadas** precisam de repetição para "amadurecer" a resposta imune. Por isso, aos **2, 4 e 6 meses**, aplicam-se **pentavalente** (DTP + Hib + hepatite B), **VIP** (pólio inativada) e **pneumocócica/meningocócica** conforme o esquema vigente, com **reforços** depois (ex.: DTP e pólio no 2º ano). O **rotavírus** (viva, oral) entra aos **2 e 4 meses**, com **idade máxima** para começar/terminar (risco de invaginação) — perdida a janela, não se aplica.
- **Vacinas vivas virais depois de 1 ano.** A **tríplice viral (SCR)** e a **tetra viral (SCRV)** e a **varicela** ficam a partir dos **12–15 meses**, quando os anticorpos maternos já não neutralizam a vacina e a resposta é robusta. A **febre amarela** entra conforme a área de recomendação.

A moral: **inativada = série + reforço**; **viva = geralmente dose(s) após o 1º ano**; **o que tem risco vertical/precoce (HepB, BCG) = ao nascer**. Sabendo isso, você deduz o calendário e acerta as questões de "qual vacina nessa idade/situação".`},
  {h: `7. Poliomielite e vigilância da PFA (aprofundando o ponto de erro)`, c: `A poliomielite é causada por **poliovírus** (enterovírus) que, em uma minoria dos infectados, invade os **neurônios motores do corno anterior da medula**, produzindo **paralisia flácida assimétrica**, sem perda sensitiva. Está **erradicada no Brasil** (último caso autóctone em 1989; certificação em 1994), mas a **vigilância continua** porque a queda de cobertura reabre a porta para reintrodução.

**VOP × VIP — entenda a troca:**
- **VOP (Sabin, oral):** vírus **vivo atenuado**. Vantagem histórica: induz **imunidade de mucosa** e "circula", protegendo contatos. Desvantagem: pode, raramente, **reverter** e causar **poliomielite associada à vacina (VAPP)** ou gerar **poliovírus derivado vacinal (cVDPV)** — e é **contraindicada em imunodeprimidos e seus contatos**.
- **VIP (Salk, injetável):** vírus **inativado**, **sem** risco de pólio vacinal, segura em imunodeprimidos. Por segurança, o Brasil migrou para esquema **integralmente VIP**.

**Vigilância da paralisia flácida aguda (PFA):** o sistema não vigia "poliomielite" — vigia toda **PFA em menores de 15 anos**, que é **notificação compulsória IMEDIATA** e deve ser **investigada como possível pólio até se afastar**. Isso inclui:
- Coleta de **duas amostras de fezes** (para isolamento viral) nos primeiros 14 dias do início do déficit.
- Investigação do diferencial: **síndrome de Guillain-Barré** (a principal causa de PFA hoje), mielite transversa, neuropatias, trauma, etc.
- A meta é sensibilidade máxima: **na dúvida, notifique** — deixar de notificar é o erro que compromete a certificação de país livre de pólio.`},
  {h: `8. Vacinas específicas de alto rendimento (o que a banca gosta de perguntar)`, c: `Além do raciocínio geral, algumas vacinas têm "pegadinhas" próprias:

- **BCG (viva, intradérmica):** dose única ao nascer (≥ 2 kg). A evolução **normal** é nódulo → úlcera → crosta → cicatriz em semanas — **não** é infecção nem motivo para antibiótico. Não se revacina quem não formou cicatriz (conduta atual). Filho de mãe com HIV tem conduta específica.
- **Rotavírus (viva, oral):** protege contra a diarreia grave; respeitar **idade máxima** para 1ª e última dose (risco de **invaginação intestinal**). Se a criança **cuspir/vomitar**, em geral **não** se repete a dose.
- **Tríplice viral / SCR (viva):** sarampo é a doença que mais se beneficia de cobertura alta; em surto, há **vacinação de bloqueio** (inclusive dose "zero" em lactente de 6–11 meses, que **não conta** no esquema). Contraindicada em gestante e imunodeprimido grave.
- **Febre amarela (viva):** dose conforme área de recomendação; cuidado em imunodeprimidos, gestantes e **maiores de 60 anos** (avaliar risco-benefício); reação anafilática a **ovo** é a contraindicação clássica.
- **HPV (inativada):** adolescentes (meninas e meninos), esquema de 2 doses na faixa preconizada; previne câncer de colo e outros — a proteção é **maior antes do início da vida sexual**.
- **dTpa na gestante:** aplicada em **cada gestação** (a partir de 20 semanas) para gerar anticorpos que protegem o recém-nascido contra **coqueluche** por transferência transplacentária — estratégia de "**cocooning**"/proteção do bebê.
- **Influenza (inativada):** anual, para grupos-alvo (crianças 6 m–<6 a, gestantes, idosos, comorbidades). Na **1ª vez** em criança < 9 anos, são **2 doses**.`}
 ],
 flashcards: [
  {p: `Doença febril leve, uso de antibiótico e prematuridade contraindicam vacina?`, r: `Não — são falsas contraindicações; deve-se vacinar.`},
  {p: `Vacinas vivas atenuadas de rotina na infância (exemplos)?`, r: `BCG, rotavírus, febre amarela, tríplice/tetra viral, varicela.`},
  {p: `Prematuro: vacinar por qual idade?`, r: `Idade cronológica (não a corrigida).`},
  {p: `PFA em menor de 15 anos — conduta de saúde pública?`, r: `Notificação compulsória imediata e investigar poliomielite (coleta de fezes).`},
  {p: `Atraso vacinal: reinicia o esquema?`, r: `Não — completa as doses faltantes; dose dada é dose contada.`},
  {p: `Por que a hepatite B é dada ao nascer?`, r: `Alto risco de transmissão vertical no parto e de cronificação no lactente — proteger o quanto antes.`},
  {p: `Diferença de risco entre VOP e VIP?`, r: `VOP (viva) pode causar pólio vacinal (VAPP/cVDPV) e é contraindicada em imunodeprimidos; VIP (inativada) não tem esse risco.`},
  {p: `Principal causa de paralisia flácida aguda hoje (diferencial da pólio)?`, r: `Síndrome de Guillain-Barré — mas toda PFA em <15 anos é notificada e investigada como pólio.`}
 ],
 pegadinhas: [
  `Doença febril LEVE, uso de antibiótico e prematuridade NÃO contraindicam vacinar.`,
  `Prematuro vacina pela idade cronológica; BCG em geral ao atingir 2 kg.`,
  `VOP é vírus vivo (risco raro de pólio vacinal); VIP é inativada — o Brasil usa esquema só com VIP.`,
  `Paralisia flácida aguda em <15 anos = notificação imediata e investigar poliomielite.`,
  `Vacinas vivas: cuidado em imunodeprimido grave e gestante; inativadas são seguras.`,
  `Atraso não reinicia esquema — completa o que falta.`,
  `Hepatite B e BCG são neonatais (risco vertical/precoce); vacinas vivas virais (SCR/varicela) a partir de 12–15 meses.`,
  `Rotavírus (viva, oral) tem IDADE MÁXIMA para iniciar/completar (risco de invaginação) — perdida a janela, não aplica.`,
  `A vigilância é da PFA (não só da "pólio"): notificar TODA fraqueza flácida aguda em <15 anos.`
 ],
 diretrizes: [
  `Calendário Nacional de Vacinação — PNI/Ministério da Saúde (versão vigente).`,
  `SBIm — Calendários de vacinação; SBP — Documentos Científicos (Imunizações).`,
  `MS — Guia de Vigilância em Saúde (paralisia flácida aguda / poliomielite) e Manual de EAPV.`
 ],
 questoes: [
  {enunciado: `Lactente de 3 meses comparece para vacinação com coriza e temperatura de 37,6 °C, em uso de amoxicilina por otite. Qual a conduta?`, alternativas: {a: `Adiar todas as vacinas até terminar o antibiótico`, b: `Vacinar normalmente conforme o calendário`, c: `Contraindicar vacinas vivas para sempre`, d: `Só vacinar após 30 dias sem sintomas`}, correta: "b", comentario: `Doença febril leve e uso de antibiótico NÃO contraindicam vacinação — são falsas contraindicações. O lactente deve ser vacinado normalmente para não perder oportunidade. Só se adia em doença moderada a grave. Não há razão para contraindicar vacinas vivas de forma permanente. Perder a janela por quadros banais reduz cobertura — justamente o que aumenta o risco de doenças como o sarampo e a poliomielite.`, foco: `Contraindicação verdadeira × falsa`},
  {enunciado: `Criança com imunodeficiência celular grave precisa atualizar vacinas. Qual está, em regra, CONTRAINDICADA?`, alternativas: {a: `Hepatite B`, b: `Pneumocócica conjugada`, c: `VIP (poliomielite inativada)`, d: `Tríplice viral (sarampo, caxumba, rubéola)`}, correta: "d", comentario: `A tríplice viral (SCR) é de vírus VIVO atenuado e, em regra, contraindicada na imunodepressão grave (assim como BCG, rotavírus, febre amarela, varicela). Hepatite B, pneumocócica conjugada e VIP são inativadas/subunidades e seguras nesses pacientes. Reconhecer viva × inativada resolve a questão. Contatos podem precisar de estratégias de proteção (vacinar conviventes com vacinas seguras).`, foco: `Tipo de vacina / imunodeprimido`},
  {enunciado: `Criança de 5 anos evolui, após quadro febril, com perda súbita de força e flacidez em um membro, reflexos diminuídos e sensibilidade preservada. Qual conduta de saúde pública é obrigatória?`, alternativas: {a: `Notificação compulsória imediata e investigação de poliomielite`, b: `Apenas observação domiciliar`, c: `Alta sem notificação por ser quadro viral`, d: `Iniciar corticoide e dispensar investigação`}, correta: "a", comentario: `Toda paralisia flácida aguda em menor de 15 anos é evento de notificação compulsória IMEDIATA e deve ser investigada como possível poliomielite até que se afaste (coleta de fezes para isolamento viral). A poliomielite está erradicada no Brasil, mas a vigilância é mantida porque a queda de cobertura vacinal ameaça reintrodução. Observar em casa, dar alta sem notificar ou tratar sem investigar violam o protocolo de vigilância.`, foco: `Paralisia flácida aguda / pólio`},
  {enunciado: `Criança de 15 meses chega à UBS com apenas as vacinas do nascimento (BCG e hepatite B); a mãe faltou às consultas seguintes. Qual a conduta correta?`, alternativas: {a: `Reiniciar todo o esquema desde o começo`, b: `Completar as doses faltantes respeitando os intervalos mínimos, sem reiniciar`, c: `Considerar a criança perdida para vacinação e só retomar aos 4 anos`, d: `Aplicar apenas vacinas vivas e ignorar as inativadas`}, correta: "b", comentario: `No atraso vacinal NÃO se reinicia o esquema: "dose dada é dose contada". Aproveita-se a oportunidade para atualizar o cartão, completando as doses que faltam e respeitando os intervalos mínimos entre elas — inclusive aplicando várias vacinas no mesmo dia quando compatíveis. Reiniciar do zero é erro (desperdiça doses e adia proteção). Adiar para os 4 anos ou selecionar só vivas deixa a criança desprotegida justamente na fase de maior risco.`, foco: `Atraso vacinal (não reiniciar)`}
 ]
},

"PED|Oncologia / hemato-onco": {
 titulo: `Oncologia pediátrica e sinais de alerta hemato-oncológicos`,
 half: `PED`,
 resumo: `O objetivo é reconhecer cedo os sinais de alerta que exigem investigação rápida — leucocoria (retinoblastoma), massa abdominal (neuroblastoma × Wilms), falência medular (leucemia) — e, no tema onde você mais erra, montar o neuroblastoma do zero: o que é, como se apresenta (inclusive de formas 'estranhas'), como diferenciá-lo do Wilms e o que muda o prognóstico.`,
 fontes: `Base: SBP — Documentos Científicos (Oncologia pediátrica; sinais de alerta) e SBOP; Ministério da Saúde / INCA — Diagnóstico precoce do câncer na criança e no adolescente; e materiais de Pediatria do Drive do Vinicius quando o tema casar (ver materiais_drive.md).`,
 notaErro: `**Neuroblastoma** aparece nos seus registros com taxa de erro de **100%**. O tumor é "o grande imitador" da pediatria — apresenta-se de mil formas — e a prova cobra as **pistas que o fecham** e o **diferencial com o Wilms**. As armadilhas:

- **Você troca neuroblastoma por tumor de Wilms.** Ambos são massa abdominal do pré-escolar. As pistas que decidem: neuroblastoma **cruza a linha média**, tem **calcificações**, eleva **catecolaminas urinárias (VMA/HVA)** e pode dar **opsoclonus-mioclonus** ("olhos dançantes"); o Wilms é **renal**, **não costuma cruzar a linha média** e pode dar hematúria/HAS (seções 5–6).
- **Você não reconhece as apresentações "estranhas".** Nódulos subcutâneos azulados no lactente, **proptose com equimose periorbitária** ("olho de guaxinim"), síndrome de Horner, hipertensão, diarreia secretora — tudo pode ser neuroblastoma metastático/paraneoplásico (seção 5).
- **Você acha que "tumor = sempre péssimo".** A biologia varia: **amplificação de N-MYC** e idade > 18 meses **pioram**; **lactente < 18 meses**, sobretudo o **estágio MS**, pode até **regredir espontaneamente** (seção 6). Não estratificar é errar a conduta.

**Como zerar:** diante de massa abdominal na criança, pergunte NESTA ordem — (1) **cruza a linha média?** (2) **tem calcificação / catecolaminas urinárias altas?** (3) **há sinal paraneoplásico (opsoclonus) ou metástase típica (osso, órbita, pele, medula)?** Se sim, é neuroblastoma: confirme com catecolaminas urinárias, imagem, cintilografia com **MIBG** e biópsia, e estratifique por idade/estágio/N-MYC. As questões ao final batem nesse raciocínio.`,
 secoes: [
  {h: `1. Panorama e sinais de alerta gerais`, c: `O câncer é causa importante de morte por doença na infância, e o **diagnóstico precoce** muda o prognóstico. Sinais de alerta que devem acender o alarme oncológico e acelerar a investigação:
- Palidez progressiva, **febre prolongada** sem foco, sangramentos/petéquias.
- **Dor óssea** que desperta à noite, claudicação sem trauma.
- **Massa** ou linfonodomegalia que cresce, hepatoesplenomegalia.
- **Leucocoria** (reflexo branco à pupila), estrabismo de início recente.
- Cefaleia matinal com vômitos, alterações neurológicas/visuais, aumento do perímetro cefálico.
- Perda de peso inexplicada.`},
  {h: `2. Leucemia linfoblástica aguda (LLA)`, c: `Neoplasia **mais comum** da infância (pico 2–5 anos). A infiltração medular gera **falência medular**: anemia (palidez, fadiga), **neutropenia** (febre, infecções) e **plaquetopenia** (petéquias, sangramentos), além de **dor óssea**, hepatoesplenomegalia e adenomegalia; pode haver massa mediastinal (mais na LLA-T).

- **Hemograma** levanta a suspeita (citopenias, blastos), mas a **confirmação é o MIELOGRAMA** (aspirado de medula) com imunofenotipagem e citogenética/molecular, que definem o subtipo e o risco.
- Fatores de bom prognóstico: idade 1–10 anos, leucometria baixa ao diagnóstico, LLA-B comum, certas alterações citogenéticas, boa resposta precoce.
- Cuidado com a **síndrome de lise tumoral** ao iniciar tratamento (hidratação, alopurinol/rasburicase).`},
  {h: `3. Retinoblastoma`, c: `Tumor intraocular maligno mais comum da infância (lactente/pré-escolar). Sinal clássico: **leucocoria** — reflexo pupilar **branco** (notado em fotos com flash), traduzindo perda do **reflexo vermelho**; pode haver estrabismo.

- Conduta: **avaliação oftalmológica urgente** (fundoscopia sob midríase / exame sob anestesia) e imagem; **é emergência oncológica**.
- Pode ser **hereditário** (mutação RB1, frequentemente **bilateral**) — indicar aconselhamento genético.
- O **teste do reflexo vermelho** na puericultura existe justamente para captar isso cedo; reflexo alterado exige encaminhamento imediato.`},
  {h: `O que é o neuroblastoma (construindo do zero)`, c: `O neuroblastoma nasce da **crista neural** — o tecido embrionário que dá origem ao **sistema nervoso simpático** e à **medula da suprarrenal**. Por isso ele pode surgir **em qualquer ponto da cadeia simpática**: mais comum na **adrenal/abdome**, mas também no tórax (mediastino posterior), pescoço e pelve. É o **tumor sólido extracraniano mais comum da infância** e o câncer mais frequente **no lactente**, com idade mediana ao diagnóstico em torno de **18 meses**.

O que o torna peculiar é a **enorme variação biológica**: no mesmo "nome" cabem tumores que **regridem sozinhos** e tumores altamente agressivos e metastáticos. Essa dualidade é a razão de tantas apresentações diferentes — e de a prova insistir na estratificação de risco. Como é um tumor de tecido simpático, ele frequentemente **produz catecolaminas**, cujos metabólitos (**ácido vanilmandélico — VMA — e ácido homovanílico — HVA**) sobem na urina e viram uma pista diagnóstica barata e específica.`},
  {h: `Apresentações que enganam (metástases e paraneoplásicas)`, c: `Além da massa abdominal, o neuroblastoma pode "entrar" por sinais aparentemente não oncológicos — reconhecê-los é o que separa quem acerta:

- **Opsoclonus-mioclonus** ("olhos dançantes" + mioclonias + ataxia): síndrome **paraneoplásica** quase patognomônica; pode preceder a massa.
- **Equimose periorbitária/proptose** ("olho de guaxinim"): metástase para os ossos da órbita.
- **Nódulos subcutâneos azulados** no lactente ("blueberry muffin" quando múltiplos): metástase cutânea.
- **Síndrome de Horner** (ptose + miose + anidrose): tumor cervical/torácico da cadeia simpática.
- **Hipertensão** (catecolaminas) e, às vezes, **diarreia secretora** (por peptídeo intestinal vasoativo — VIP).
- **Dor óssea/citopenias**: metástase para **medula óssea** (sítio metastático clássico, junto de osso, fígado e pele).

Sítios metastáticos típicos: **medula óssea, osso, fígado e pele**. Guardar essa lista evita rotular como "trauma", "PTI" ou "estrabismo benigno" o que é, na verdade, um neuroblastoma.`},
  {h: `4. Neuroblastoma × tumor de Wilms`, c: `Ambos aparecem como **massa abdominal** na criança pequena; diferenciá-los é ponto de prova:
- **Neuroblastoma:** origem na crista neural (adrenal/cadeia simpática). Massa que costuma **cruzar a linha média**, com **calcificações**, elevação de **catecolaminas urinárias (VMA/HVA)**; pode ter síndromes paraneoplásicas (**opsoclonus-mioclonus**, "olhos dançantes"), hipertensão, nódulos subcutâneos e metástases (medula, osso, fígado, pele). Marca da agressividade: amplificação de **N-MYC**.
- **Tumor de Wilms (nefroblastoma):** tumor **renal**, geralmente em criança um pouco maior (2–5 anos), massa que **não costuma cruzar a linha média**, às vezes com hematúria/HAS; associa-se a síndromes (WAGR, Beckwith-Wiedemann). **Evitar palpação abdominal repetida** (risco de ruptura).`},
  {h: `Diagnóstico, estadiamento e o que muda o prognóstico`, c: `**Como confirmar:** (1) **catecolaminas urinárias (VMA/HVA)** elevadas; (2) **imagem** (US/TC/RM) mostrando massa que cruza a linha média com **calcificações**; (3) **cintilografia com MIBG** (marca tecido simpático — útil para o tumor primário e metástases); (4) **biópsia** (histologia) e **avaliação de medula óssea** (aspirado/biópsia bilateral). A **amplificação de N-MYC** é pesquisada no tumor porque define agressividade.

**O que muda o prognóstico (estratificação de risco):** os principais fatores são **idade** (< 18 meses tende a ser melhor), **estágio** (localizado × metastático), **status de N-MYC** (amplificado = pior), **histologia** e **ploidia**. Um ponto de prova precioso: o **estágio MS** (lactente com metástases limitadas a pele, fígado e medula, sem envolvimento ósseo cortical) tem alta chance de **regressão espontânea** — ou seja, mesmo "metastático" pode ter ótimo prognóstico no bebê.

**Tratamento (visão geral):** varia conforme o risco — de **observação/cirurgia isolada** nos de baixo risco (incluindo o MS que regride) até **quimioterapia + cirurgia + radioterapia + transplante autólogo + imunoterapia anti-GD2 + ácido retinoico** nos de alto risco (N-MYC amplificado, > 18 meses, metastático). A mensagem para a prova: **não** existe "conduta única" — estratifica-se antes de tratar.`},
  {h: `Neuroblastoma em profundidade — biologia e risco (o coração do seu erro)`, c: `O neuroblastoma é o tumor sólido **extracraniano** mais comum da infância e o mais frequente no **lactente** (< 1 ano). Ele nasce das **células da crista neural** que formariam o sistema nervoso **simpático** — por isso pode aparecer em **qualquer ponto da cadeia simpática**: mais comum na **medula adrenal** (glândula suprarrenal), mas também nos **gânglios paravertebrais** do abdome, tórax (mediastino posterior), pescoço e pelve. Essa origem simpática explica tudo o que vem depois: a produção de **catecolaminas** (dosadas na urina como **VMA e HVA**), a captação pela cintilografia com **MIBG** (análogo que o tecido simpático absorve) e várias apresentações "estranhas".

O que torna o neuroblastoma único — e cobrado — é a sua **enorme variação biológica**: o mesmo nome abrange desde tumores que **regridem sozinhos** até tumores altamente agressivos e letais. Quem decide de que lado o caso está é a **estratificação de risco**, que combina:

- **Idade:** **< 18 meses** tem prognóstico bem melhor que a criança mais velha (é um dos fatores mais fortes).
- **Estágio (INRG/INSS):** doença localizada e ressecável é favorável; doença disseminada é desfavorável — **com uma exceção especial** (o estágio MS, abaixo).
- **Biologia molecular:** a **amplificação do oncogene N-MYC (MYCN)** é o marcador de **alto risco/agressividade** — muda a conduta e piora o prognóstico. Também pesam a ploidia do DNA e alterações como del(1p)/11q.
- **Histologia** (classificação de Shimada, favorável × desfavorável).

**O estágio MS (antigo IV-S) é a pegadinha de ouro:** lactente **< 12–18 meses** com tumor primário pequeno e metástases limitadas a **pele, fígado e/ou medula óssea** (sem lesão óssea cortical) que, apesar de "metastático", tem **excelente prognóstico e pode regredir espontaneamente**. É contraintuitivo: um tumor "espalhado" que muitas vezes só precisa de observação. Errar aqui é rotular como alto risco algo que é, na verdade, favorável.`},
  {h: `Apresentações paraneoplásicas e sinais que enganam`, c: `O neuroblastoma é campeão de manifestações **paraneoplásicas** e de metástases com "cara" de outra doença. Reconhecê-las é o que separa quem acerta:

- **Síndrome de opsoclonus-mioclonus-ataxia ("olhos dançantes, pés dançantes"):** movimentos oculares caóticos, mioclonias e ataxia, de causa **imunomediada**. Criança com esse quadro deve ser **investigada para neuroblastoma** (muitas vezes um tumor pequeno e de bom prognóstico oncológico, embora as sequelas neurológicas possam persistir).
- **Equimose periorbitária bilateral ("olhos de guaxinim"/raccoon eyes) e proptose:** metástase para os **ossos da órbita**. Em uma criança sem trauma, esse sinal deve fazer pensar em neuroblastoma metastático.
- **Nódulos subcutâneos azulados ("blueberry muffin")** no lactente e **hepatomegalia** volumosa: doença cutânea/hepática (típica do estágio MS).
- **Diarreia secretória** por produção de **VIP** (peptídeo intestinal vasoativo) — outra paraneoplásica.
- **Síndrome de Horner** (ptose, miose, anidrose) por tumor cervical/torácico na cadeia simpática; **compressão medular** ("tumor em ampulheta" que cresce pelo forame de conjugação) causando déficit motor/esfincteriano — **emergência**.

Repare como todas essas apresentações "voltam" à origem simpática e à capacidade metastática do tumor — se você ancora no mecanismo, os sinais deixam de ser decoreba solta.`},
  {h: `Massa abdominal na criança — o diferencial que cai na prova`, c: `Diante de uma **massa abdominal** na criança, os dois grandes nomes são **neuroblastoma** e **tumor de Wilms (nefroblastoma)**. Saber diferenciá-los é obrigatório:

- **Neuroblastoma:** origem **suprarrenal/paravertebral** (fora do rim), tende a **cruzar a linha média** e a **englobar vasos**, superfície **irregular/nodular**, costuma **elevar catecolaminas urinárias (VMA/HVA)**, capta **MIBG**, calcifica com frequência na imagem, e a criança em geral parece **mais doente** (metástases ao diagnóstico são comuns). Pico por volta de **1–2 anos**.
- **Tumor de Wilms:** origem **renal** (nasce dentro do rim), massa **lisa** que **respeita a linha média**, criança frequentemente **em bom estado geral**, pode vir com **hematúria e hipertensão**; associa-se a síndromes (WAGR, Beckwith-Wiedemann, hemi-hipertrofia). **Cuidado clássico:** **não palpar repetidamente** o abdome (risco de ruptura da cápsula e disseminação).

Um bordão que ajuda: **"neuro cruza, Wilms respeita"** a linha média; **neuro dança os olhos** (opsoclonus) e **eleva catecolaminas**; **Wilms sangra (hematúria) e não se aperta**.`},
  {h: `Emergências oncológicas pediátricas — não perder`, c: `Além de reconhecer o tumor, a prova cobra as **emergências** que podem matar antes do diagnóstico definitivo:

- **Síndrome de lise tumoral:** ocorre em tumores de alta carga/rápida proliferação (**leucemias/linfomas**), espontânea ou após início da quimioterapia. Laboratório: **hipercalemia, hiperfosfatemia, hiperuricemia e hipocalcemia**, com risco de **insuficiência renal** e arritmia. Prevenção/tratamento: **hidratação vigorosa**, **alopurinol ou rasburicase**, controle de eletrólitos.
- **Compressão medular:** por neuroblastoma "em ampulheta", linfoma ou sarcoma — dor nas costas, fraqueza, retenção urinária. É **emergência**: imagem urgente (RM) e corticoide, para preservar função neurológica.
- **Síndrome da veia cava superior/mediastinal:** massa mediastinal (linfoma, tumor de células germinativas) comprimindo grandes vasos e via aérea — edema de face, turgência jugular, dispneia; cuidado com sedação/anestesia.
- **Hiperleucocitose** (leucemia com leucócitos muito altos): risco de **leucostase** (SNC, pulmão) — emergência hematológica.

Reconhecer essas situações e **estabilizar antes de investigar** é o comportamento esperado.`},
  {h: `Sinais de alerta e quando referir (INCA/SBP)`, c: `O grande recado de saúde pública em oncologia pediátrica é o **diagnóstico precoce**: quanto antes se identifica, melhor a chance de cura. Guarde os **sinais de alerta** que obrigam investigação/encaminhamento rápido:

- **Leucocoria** (reflexo pupilar branco / perda do reflexo vermelho) → **retinoblastoma** — oftalmo urgente. O teste do reflexo vermelho ("teste do olhinho") na puericultura serve para isso.
- **Massa abdominal** palpável → neuroblastoma × Wilms (ver acima).
- **Palidez, febre prolongada, sangramentos/petéquias, dor óssea que desperta à noite, adenomegalias** → **leucemia/linfoma** (fazer hemograma e, se alterado, mielograma).
- **Cefaleia matinal com vômitos, ataxia, alterações visuais, regressão de marcos** → **tumor do SNC** (2º grupo mais comum na infância).
- **Aumento de volume ósseo/articular persistente, dor localizada** → tumores ósseos (osteossarcoma, sarcoma de Ewing) no adolescente.
- **"Olhos de guaxinim" sem trauma, proptose, nódulos azulados no lactente** → neuroblastoma metastático.

Regra prática: sintoma **persistente, progressivo ou inexplicado** em criança merece **investigação ativa** — a demora custa estágio e prognóstico.`},
  {h: `5. Outros a lembrar`, c: `- **Tumores do SNC** (2º grupo mais comum): cefaleia matinal com vômitos, ataxia, sinais focais, macrocefalia no lactente.
- **Linfomas** (Hodgkin e não-Hodgkin, ex.: Burkitt abdominal de crescimento rápido).
- **Sarcomas** (rabdomiossarcoma, osteossarcoma/Ewing — dor óssea e massa).
- **Púrpura** e citopenias podem ser leucemia — não rotular como PTI sem excluir blastos/medula quando há sinais atípicos (dor óssea, hepatoesplenomegalia, outras citopenias).`}
 ],
 flashcards: [
  {p: `Leucocoria em lactente = ?`, r: `Retinoblastoma até prova em contrário → oftalmologia urgente (emergência oncológica).`},
  {p: `O que confirma leucemia?`, r: `Mielograma (aspirado de medula) com imunofenotipagem — o hemograma só levanta a suspeita.`},
  {p: `Massa abdominal que cruza a linha média + catecolaminas urinárias altas?`, r: `Neuroblastoma (VMA/HVA; pode ter opsoclonus-mioclonus).`},
  {p: `Cuidado no exame do tumor de Wilms?`, r: `Evitar palpação abdominal repetida (risco de ruptura).`},
  {p: `Síndrome paraneoplásica típica do neuroblastoma?`, r: `Opsoclonus-mioclonus (olhos dançantes).`},
  {p: `De que tecido embrionário nasce o neuroblastoma?`, r: `Da crista neural (sistema nervoso simpático e medula da adrenal) — daí surgir na cadeia simpática/adrenal.`},
  {p: `Estágio de neuroblastoma que pode regredir espontaneamente?`, r: `Estágio MS no lactente (metástases em pele, fígado e medula, sem osso cortical).`},
  {p: `Marcador molecular de agressividade no neuroblastoma?`, r: `Amplificação de N-MYC (pior prognóstico).`},
  {p: `'Olho de guaxinim' (equimose periorbitária) na criança sugere?`, r: `Metástase orbitária de neuroblastoma.`},
  {p: `Por que o estágio MS (IV-S) do neuroblastoma é 'a pegadinha de ouro'?`, r: `Lactente com metástases em pele/fígado/medula que, apesar de 'disseminado', tem ótimo prognóstico e pode regredir espontaneamente.`},
  {p: `Bordão do diferencial massa abdominal?`, r: `Neuroblastoma CRUZA a linha média e eleva catecolaminas; Wilms RESPEITA a linha média, pode dar hematúria/HAS e não se palpa muito.`},
  {p: `Distúrbios da síndrome de lise tumoral?`, r: `Hipercalemia, hiperfosfatemia, hiperuricemia e hipocalcemia, com risco de IRA — tratar com hidratação e rasburicase/alopurinol.`},
  {p: `'Olhos dançantes, pés dançantes' na criança — investigar o quê?`, r: `Neuroblastoma (síndrome opsoclonus-mioclonus-ataxia, paraneoplásica).`},
  {p: `Exame de imagem que marca tecido simpático no neuroblastoma?`, r: `Cintilografia com MIBG (marca primário e metástases).`}
 ],
 pegadinhas: [
  `Leucocoria (reflexo branco/perda do reflexo vermelho) = retinoblastoma → oftalmo urgente.`,
  `Leucemia se confirma por mielograma; hemograma só levanta a suspeita.`,
  `Neuroblastoma tende a cruzar a linha média e eleva catecolaminas urinárias (VMA/HVA); Wilms costuma não cruzar.`,
  `No tumor de Wilms, evitar palpação abdominal repetida (risco de ruptura).`,
  `Dor óssea que desperta à noite + citopenias em criança = investigar leucemia.`,
  `Cefaleia matinal com vômitos + sinais focais/ataxia na criança = pensar em tumor de SNC.`,
  `Neuroblastoma tem enorme variação biológica: de regressão espontânea (MS no lactente) a alto risco (N-MYC).`,
  `Opsoclonus-mioclonus ('olhos dançantes') é síndrome paraneoplásica clássica do neuroblastoma.`,
  `Cintilografia com MIBG marca tecido simpático — útil para primário e metástases do neuroblastoma.`,
  `Sítios metastáticos clássicos: medula óssea, osso, fígado e pele.`,
  `N-MYC (MYCN) amplificado = alto risco/agressividade no neuroblastoma — muda a conduta.`,
  `Estágio MS (IV-S): 'metastático' porém favorável e pode regredir — não superestagie.`,
  `Massa mediastinal + dispneia/turgência = síndrome de veia cava superior: cuidado com sedação.`,
  `Compressão medular por neuroblastoma 'em ampulheta' é emergência — RM e corticoide.`,
  `Idade < 18 meses é fator prognóstico favorável no neuroblastoma.`
 ],
 diretrizes: [
  `SBP — Documentos Científicos (Oncologia pediátrica; sinais de alerta) e SBOP — diagnóstico precoce.`,
  `Ministério da Saúde — Diagnóstico precoce do câncer na criança e no adolescente.`,
  `Materiais do Drive do Vinicius (miscelânea/oncologia pediátrica) quando o tema casar (ver materiais_drive.md).`
 ],
 questoes: [
  {enunciado: `Mãe de menina de 18 meses nota, em fotos com flash, um reflexo esbranquiçado em uma pupila; na consulta, o reflexo vermelho está ausente nesse olho. Qual a conduta?`, alternativas: {a: `Reavaliar em 6 meses`, b: `Encaminhamento oftalmológico urgente por suspeita de retinoblastoma`, c: `Prescrever colírio e alta`, d: `Solicitar apenas hemograma`}, correta: "b", comentario: `Leucocoria (reflexo branco/ausência do reflexo vermelho) é o sinal clássico do retinoblastoma e uma emergência oncológica: exige encaminhamento oftalmológico urgente para fundoscopia sob midríase/exame sob anestesia e imagem. Reavaliar em meses atrasa um tumor que ameaça a visão e a vida e pode ser bilateral/hereditário. Colírio/alta e hemograma isolado não abordam a lesão intraocular. O teste do reflexo vermelho na puericultura é justamente para pegar isso cedo.`, foco: `Leucocoria / retinoblastoma`},
  {enunciado: `Menino de 4 anos com palidez, febre, petéquias, dor óssea e hepatoesplenomegalia; hemograma com anemia, plaquetopenia e blastos. Qual exame confirma o diagnóstico?`, alternativas: {a: `Mielograma (aspirado de medula óssea)`, b: `Nova coleta de hemograma em 30 dias`, c: `Ultrassonografia abdominal`, d: `Dosagem de ferritina`}, correta: "a", comentario: `O quadro é altamente sugestivo de leucemia aguda; a confirmação diagnóstica é o mielograma (aspirado de medula óssea), com imunofenotipagem e citogenética para classificar e definir prognóstico/tratamento. O hemograma levanta a suspeita (citopenias + blastos), mas não confirma nem substitui a medula. Repetir hemograma atrasa. Ultrassom e ferritina não fazem o diagnóstico. Dor óssea que desperta à noite com citopenias é bandeira clássica.`, foco: `Confirmação da leucemia`},
  {enunciado: `Criança de 2 anos com massa abdominal que cruza a linha média, calcificações à imagem e catecolaminas urinárias (VMA/HVA) elevadas. Qual o diagnóstico mais provável?`, alternativas: {a: `Tumor de Wilms (nefroblastoma)`, b: `Neuroblastoma`, c: `Linfoma de Burkitt`, d: `Hepatoblastoma`}, correta: "b", comentario: `Massa que cruza a linha média, com calcificações e elevação de catecolaminas urinárias (VMA/HVA), aponta para neuroblastoma (tumor da crista neural/adrenal e cadeia simpática), que pode cursar com síndrome opsoclonus-mioclonus. O tumor de Wilms é renal, geralmente NÃO cruza a linha média e não eleva catecolaminas — e deve-se evitar palpação repetida pelo risco de ruptura. Burkitt e hepatoblastoma têm apresentações distintas. A dupla “cruza a linha média + catecolaminas” fecha neuroblastoma.`, foco: `Neuroblastoma × Wilms`},
  {enunciado: `Lactente de 5 meses com hepatomegalia, nódulos subcutâneos e infiltração de medula óssea; imagem sem envolvimento ósseo cortical; catecolaminas urinárias elevadas e N-MYC não amplificado. Qual afirmação é correta?`, alternativas: {a: `Trata-se de estágio MS, que pode ter regressão espontânea e bom prognóstico`, b: `A doença metastática nesse lactente indica prognóstico uniformemente péssimo`, c: `O diagnóstico mais provável é tumor de Wilms`, d: `A conduta imediata é palpação abdominal repetida para estadiar`}, correta: "a", comentario: `O quadro é neuroblastoma estágio MS: lactente < 18 meses com metástases limitadas a pele, fígado e medula, SEM envolvimento ósseo cortical, e N-MYC não amplificado — perfil de bom prognóstico, com possibilidade de regressão espontânea (às vezes só observação/cirurgia). Por isso 'metastático = sempre péssimo' está errado. Tumor de Wilms é renal, não cursa com esse padrão de metástase cutânea/hepática nem eleva catecolaminas. Palpação abdominal repetida é o cuidado a EVITAR no Wilms (risco de ruptura), não uma forma de estadiar. Lição: no neuroblastoma, estratifique por idade + estágio + N-MYC antes de prever desfecho.`, foco: `Neuroblastoma — prognóstico e estratificação (seu ponto de erro)`},
  {enunciado: `Lactente de 4 meses com pequeno tumor de suprarrenal, hepatomegalia e nódulos cutâneos; medula óssea com discreta infiltração, sem lesão óssea cortical e sem amplificação de N-MYC. Qual a conduta/prognóstico mais provável?`, alternativas: {a: `Alto risco, quimioterapia intensiva e prognóstico reservado`, b: `Estágio MS, prognóstico favorável, podendo até regredir espontaneamente`, c: `Tumor de Wilms metastático`, d: `Leucemia com síndrome de lise iminente`}, correta: "b", comentario: `É o clássico estágio MS (antigo IV-S): lactente < 12-18 meses, tumor primário pequeno e metástases limitadas a pele, fígado e medula (sem lesão óssea cortical), sem N-MYC amplificado. Apesar de 'metastático', tem excelente prognóstico e frequentemente regride espontaneamente, exigindo às vezes só observação. Superestagiar como alto risco é o erro a evitar.`, foco: `Neuroblastoma — estágio MS (IV-S)`},
  {enunciado: `Menino de 6 anos inicia quimioterapia para leucemia e evolui com potássio e fósforo elevados, cálcio baixo, ácido úrico alto e oligúria. Qual a conduta prioritária?`, alternativas: {a: `Restrição hídrica e furosemida isolada`, b: `Hidratação vigorosa e rasburicase/alopurinol com controle de eletrólitos`, c: `Reposição agressiva de potássio`, d: `Iniciar diálise imediata em todos os casos`}, correta: "b", comentario: `O quadro é síndrome de lise tumoral (hipercalemia, hiperfosfatemia, hipocalcemia, hiperuricemia, risco de IRA). A base é HIDRATAÇÃO vigorosa + rasburicase (ou alopurinol) e correção dos distúrbios eletrolíticos; diálise fica para casos refratários. Repor potássio seria deletério (já está alto).`, foco: `Emergência — síndrome de lise tumoral`}
 ]
},

"PED|Infecto / respiratório / pele": {
 titulo: `Infecto / respiratório / pele na criança`,
 half: `PED`,
 resumo: `As infecções respiratórias e febris do lactente são o campeão de atendimento pediátrico e de erro em prova, porque doenças com nomes diferentes compartilham os mesmos sintomas (tosse, febre, chiado) e a banca cobra a pista que separa uma da outra e a conduta na idade certa. Este texto reconstrói o tema do zero: como o pulmão e a via aérea da criança adoecem, por que a idade muda o agente e o raciocínio, e um caminho de decisão que separa bronquiolite, pneumonia típica, a pneumonia afebril do lactente, ITU e otite — mais um bloco de exantemas/arboviroses e a acne.`,
 fontes: `Base: SBP — Diretrizes de Bronquiolite, Pneumonia Adquirida na Comunidade e Infecção do Trato Urinário na criança; Ministério da Saúde — Guia de Vigilância em Saúde (arboviroses, sarampo) e AIDPI; e materiais de Pediatria do Drive do Vinicius (Infecções respiratórias — bronquiolite, pneumonia; Emergências respiratórias — ver materiais_drive.md).`,
 notaErro: `Nos seus registros, **pneumonia afebril do lactente** aparece com taxa de erro de **100%** (tier ALTO), e o eixo respiratório/infeccioso da criança como um todo derruba pontos. O erro quase nunca é "não conhecer a doença" — é **não deixar a IDADE e a FEBRE guiarem o raciocínio** e **tratar chiado com antibiótico**. Quatro armadilhas explicam a maioria das quedas, e este texto foi montado para desarmar cada uma:

- **Você não reconhece a pneumonia afebril do lactente ("pneumonia atípica do lactente").** É um quadro entre 1 e 4 meses, de evolução arrastada, tosse em acessos (coqueluchoide) SEM febre ou com febre baixa, taquipneia e, muitas vezes, história de conjuntivite neonatal — o agente clássico é a **Chlamydia trachomatis** adquirida no canal de parto. O erro é rotular como pneumonia bacteriana comum e dar penicilina/amoxicilina: o tratamento é **macrolídeo** (azitromicina/eritromicina). Guarde o gatilho: **lactente pequeno + tosse arrastada + SEM febre = pense atípica/Chlamydia** (seção 5).

- **Você troca bronquiolite por pneumonia e prescreve antibiótico.** Primeiro episódio de sibilância no lactente < 2 anos, com pródromo de coriza e depois taquipneia/tiragem/sibilos, no outono-inverno, é **bronquiolite viral** (VSR na maioria) — doença **viral**, cujo tratamento é **suporte** (oxigênio, hidratação, desobstrução nasal). Antibiótico, broncodilatador de rotina, corticoide e fisioterapia **não** mudam o curso (seção 4).

- **Você deixa passar a ITU febril do lactente.** Lactente com **febre sem foco** é ITU até prova em contrário; o exame é **urina tipo I + urocultura por técnica adequada** (jato médio, cateterismo ou punção — NUNCA saco coletor para cultura). Perder isso arrisca cicatriz renal (seção 6).

- **Você superdiagnostica otite e antibiotiza sem critério.** OMA exige **abaulamento** da membrana timpânica (não só hiperemia); e há a opção de **observação** em casos selecionados. Hiperemia isolada com choro/febre pode ser só a membrana congesta pelo choro (seção 7).

**Como zerar o erro:** para toda criança com queixa respiratória/febril, responda NESTA ordem — (1) **que idade** tem (RN, lactente pequeno < 3–4 meses, lactente, pré-escolar)? (2) **tem ou não febre** e desde quando (agudo × arrastado)? (3) **onde está o problema** (via aérea alta, bronquíolo, alvéolo, trato urinário, ouvido, pele)? (4) **é viral ou bacteriano** — e, portanto, **precisa ou não de antibiótico**? As questões ao final batem exatamente nesses tropeços.`,
 secoes: [
  {h: `1. Comece pelo começo: por que a criança adoece diferente`, c: `A via aérea e o pulmão da criança pequena não são "um adulto em miniatura". Três fatos anatômicos explicam quase tudo o que você vê no plantão:

- **Calibres pequenos:** os brônquios e bronquíolos do lactente têm diâmetro reduzido. Um pouco de edema e muco (que num adulto passaria despercebido) já obstrui muito — daí o **sibilo** e a **tiragem** aparecerem com facilidade.
- **Respiração nasal obrigatória** nos primeiros meses: o lactente respira quase só pelo nariz. Coriza e obstrução nasal, sozinhas, já causam dificuldade para mamar e desconforto — por isso **desobstruir o nariz** (soro fisiológico) é tratamento de verdade.
- **Reserva menor e fadiga fácil:** a criança compensa a hipoxemia acelerando a frequência respiratória. Por isso a **taquipneia é o sinal mais sensível** de doença respiratória baixa, e a criança que "cansa" e fica bradipneica/sonolenta está grave.

Uma imagem ajuda: pense na via aérea infantil como um canudo fino. Qualquer muco ou inchaço estreita muito a passagem; o corpo compensa "soprando mais rápido" (taquipneia) e "puxando com força" (tiragem). Quando o canudo entope de vez ou a criança se cansa de soprar, vem a insuficiência respiratória.`},
  {h: `2. As ferramentas que valem mais que qualquer exame: contar a FR e ver o esforço`, c: `Antes de qualquer radiografia, dois dados de beira-leito organizam o caso (padrão AIDPI/OMS):

- **Taquipneia por faixa etária** (contar por 1 minuto, com a criança calma): **< 2 meses ≥ 60 irpm**; **2–11 meses ≥ 50 irpm**; **1–5 anos ≥ 40 irpm**. Taquipneia é o marcador mais sensível de pneumonia na criança.
- **Sinais de esforço/gravidade:** **tiragem subcostal** (o AIDPI chama de "tiragem" e é sinal de pneumonia grave), batimento de asa de nariz, gemência, **saturação baixa** (< 92–95% conforme o serviço), incapacidade de aceitar líquidos, cianose, sonolência ou irritabilidade extrema.

Regra prática: **febre + tosse + taquipneia = pneumonia** até prova em contrário, e a radiografia **não é obrigatória** para diagnosticar PAC ambulatorial típica (ela se reserva a dúvida, gravidade, internação ou complicação). Já o **sibilo** desloca o raciocínio para via aérea (bronquiolite, asma, sibilância viral).`},
  {h: `3. O divisor de águas: FEBRE + IDADE separam os diagnósticos`, c: `Este é o passo que muda tudo — e o que você não pode pular:

- **Lactente < 3 meses com febre:** é sempre um alerta. Febre sem foco nessa idade obriga a investigar infecção bacteriana grave (ITU, pneumonia, bacteremia, meningite) com mais rigor.
- **Quadro AGUDO com febre + tosse + taquipneia:** aponta para **pneumonia bacteriana típica** (pneumococo, o principal) ou, no lactente, **bronquiolite** (se houver sibilo e pródromo catarral).
- **Quadro ARRASTADO, tosse persistente, SEM febre ou febre baixa, no lactente pequeno:** liga o alarme para a **pneumonia afebril/atípica do lactente** (Chlamydia trachomatis; também Ureaplasma, CMV) — o ponto que você mais erra.
- **Pré-escolar/escolar com tosse arrastada, febre baixa e ausculta "pobre" para o tanto que tosse:** pense **pneumonia atípica por Mycoplasma pneumoniae** ("pneumonia andante") — também macrolídeo.

Encaixe sempre o caso em uma dessas caixas ANTES de decidir exame ou antibiótico. Metade do trabalho está feita.`},
  {h: `4. Bronquiolite viral aguda — o chiado que NÃO se antibiotiza`, c: `É a infecção respiratória baixa mais comum do lactente. Definição clássica: **primeiro episódio de sibilância** em criança **< 2 anos** (pico 2–6 meses), no **outono-inverno**, precedido por **pródromo de vias aéreas superiores** (coriza, obstrução nasal), evoluindo em 2–3 dias com **taquipneia, tiragem, sibilos e/ou estertores**. O agente mais comum é o **vírus sincicial respiratório (VSR)**; outros: rinovírus, metapneumovírus, parainfluenza.

- **Diagnóstico é CLÍNICO.** Radiografia e exames virais de rotina **não** são recomendados (a radiografia costuma mostrar hiperinsuflação e atelectasias que confundem e levam a antibiótico desnecessário).
- **Tratamento = SUPORTE:** oxigênio se saturação baixa, **hidratação**, **desobstrução nasal** com soro fisiológico, cabeceira elevada, e observação. O que **NÃO** funciona de rotina: **broncodilatador** (não muda desfecho), **corticoide**, **antibiótico** (é vírus), **fisioterapia respiratória** de rotina, nebulização com adrenalina em casa.
- **Quando internar:** hipoxemia persistente, esforço importante, apneia (comum em prematuros e < 2 meses), recusa alimentar/desidratação, idade < 3 meses ou comorbidade.
- **Prevenção:** higiene, aleitamento materno; **palivizumabe/nirsevimabe** (imunização passiva contra VSR) para grupos de risco conforme o programa vigente.`},
  {h: `5. Pneumonia na criança — típica × afebril do lactente (seu ponto de erro)`, c: `Divida a pneumonia da criança em dois grandes cenários:

**A) Pneumonia bacteriana TÍPICA (aguda, febril).** O agente dominante fora do período neonatal é o **Streptococcus pneumoniae (pneumococo)**. Quadro: **febre alta**, tosse, **taquipneia**, tiragem, ausculta com estertores/redução do murmúrio, às vezes dor pleurítica. Tratamento ambulatorial de escolha: **amoxicilina** (dose alta), pela alta cobertura ao pneumococo; internados, ampicilina/penicilina. Suspeitar de complicação (derrame/empiema, sobretudo por pneumococo ou S. aureus) quando há febre persistente, toxemia e redução localizada do murmúrio.

**B) Pneumonia AFEBRIL / ATÍPICA do LACTENTE (arrastada, sem febre).** Este é o quadro que você erra. Perfil: lactente de **1 a 4 meses**, evolução **subaguda/arrastada**, **tosse em acessos (coqueluchoide) SEM febre** ou com febre baixa, taquipneia, às vezes sibilos e **eosinofilia**; história de **conjuntivite neonatal** (secreção ocular nas primeiras semanas) é a grande pista. O agente clássico é a **Chlamydia trachomatis** adquirida no canal de parto (também Ureaplasma urealyticum, CMV, Bordetella no diagnóstico diferencial de tosse coqueluchoide). Tratamento: **macrolídeo** — **azitromicina** ou **eritromicina** (atenção ao risco de estenose hipertrófica de piloro com macrolídeo em recém-nascidos, mas o benefício supera nesse quadro). Não adianta amoxicilina: o agente não tem parede celular alvo dos betalactâmicos.

**C) Pneumonia ATÍPICA do escolar (Mycoplasma).** Criança maior/adolescente com tosse arrastada, febre baixa, cefaleia, mal-estar e ausculta discreta ("pneumonia andante"); RX às vezes pior que o exame físico. Tratamento: **macrolídeo** (azitromicina). Guarde a regra: **atípica = macrolídeo**, em qualquer idade.

Fio condutor: **febre alta + agudo = típica (amoxicilina); arrastado + sem febre = atípica (macrolídeo)** — e, no lactente pequeno com tosse arrastada sem febre, pense **Chlamydia**.`},
  {h: `6. Infecção do trato urinário — a febre sem foco do lactente`, c: `Em todo **lactente com febre sem foco**, a ITU é o diagnóstico a excluir (é uma das causas mais comuns de bacteremia oculta e de cicatriz renal). O agente principal é a **Escherichia coli**.

- **Como coletar a urina para CULTURA:** o método importa tanto quanto o exame. Para urocultura confiável, use **jato médio** (criança com controle), **cateterismo vesical** ou **punção suprapúbica** no lactente. **Saco coletor NUNCA serve para cultura** (contamina) — só presta para uma urina tipo I negativa afastar (alto valor preditivo negativo); se positiva, confirmar por método estéril.
- **Diagnóstico:** urina tipo I sugestiva (leucocitúria, nitrito, esterase leucocitária) **+ urocultura** com contagem significativa pelo método.
- **Tratamento:** antibiótico conforme idade/gravidade (lactente pequeno e toxemiado → internação e parenteral; demais, oral). Duração habitual 7–10 dias na ITU febril (pielonefrite).
- **Investigação de imagem:** **ultrassonografia de rins e vias urinárias** após a primeira ITU febril; uretrocistografia miccional e outros exames em casos selecionados (ITU atípica/recorrente, US alterado) para buscar **refluxo vesicoureteral** e uropatias. O objetivo é prevenir cicatriz renal e doença renal crônica.`},
  {h: `7. Otite média aguda — abaulamento manda, não a hiperemia`, c: `A **otite média aguda (OMA)** é bacteriana/viral (pneumococo, Haemophilus não tipável, Moraxella) e comum após IVAS. O diagnóstico exige achado objetivo à otoscopia:

- **Critério que decide: ABAULAMENTO da membrana timpânica** (indica pus na orelha média), com ou sem otalgia/febre. **Hiperemia isolada NÃO fecha OMA** — a membrana fica congesta só com o choro/febre, e superdiagnosticar leva a antibiótico à toa.
- **Conduta:** analgesia SEMPRE. Quanto ao antibiótico, há a estratégia de **observação vigiada (48–72 h)** em crianças **> 2 anos**, sem otorreia, com quadro leve e bom acesso a reavaliação. **Antibiótico de escolha: amoxicilina** (dose alta); amoxicilina-clavulanato se falha, otite recente tratada ou conjuntivite associada (Haemophilus).
- **Antibiótico obrigatório (sem observar):** < 6 meses; 6–24 meses com quadro grave/bilateral; otorreia (perfuração); toxemia.`},
  {h: `8. Exantemas e arboviroses — o que a prova (e a vigilância) cobra`, c: `Bloco de alto valor porque envolve **notificação** e saúde pública:

- **Sarampo (reemergente):** febre alta, tosse, coriza, conjuntivite (os "3 C") e **manchas de Koplik** (enantema patognomônico) que precedem o **exantema maculopapular** crânio-caudal. **Notificação imediata**; conduta inclui **vitamina A**, isolamento e bloqueio vacinal dos contatos. Vacina é a prevenção (tríplice viral).
- **Dengue:** febre + mialgia/cefaleia/dor retro-orbitária; vigiar **sinais de alarme** (dor abdominal intensa, vômitos persistentes, sangramento de mucosa, letargia, hepatomegalia dolorosa, queda de plaquetas com aumento do hematócrito) → hidratação guiada por estágio; prova do laço. Zika (exantema pruriginoso precoce, conjuntivite, risco de malformação na gestante) e chikungunya (artralgia intensa e persistente) completam o trio arboviral.
- **Outros exantemas clássicos:** eritema infeccioso (parvovírus B19 — "face esbofeteada"), exantema súbito/roséola (HHV-6 — febre alta 3 dias que some quando surge o exantema), escarlatina (estreptococo — língua em framboesa, exantema em lixa, tratar com penicilina/amoxicilina), varicela.`},
  {h: `9. Acne — a doença de pele do adolescente que também cai`, c: `A **acne vulgar** é a dermatose mais comum da adolescência e tem fisiopatologia em quatro pilares: **hiperprodução sebácea** (estímulo androgênico), **hiperqueratinização** do folículo (forma o comedão), colonização por **Cutibacterium acnes** e **inflamação**.

- **Classificação e tratamento (escalonado por gravidade):**
- **Comedoniana (leve):** **retinoide tópico** (adapaleno/tretinoína) é a base — atua no comedão.
- **Inflamatória leve-moderada (pápulas/pústulas):** retinoide tópico + **peróxido de benzoíla** e/ou **antibiótico tópico** (nunca antibiótico tópico isolado, pela resistência).
- **Moderada-grave:** acrescentar **antibiótico oral** (tetraciclinas — doxiciclina/minociclina em quem já tem os dentes formados; evitar em < 8 anos e na gestante).
- **Grave/nodulocística ou refratária/cicatricial:** **isotretinoína oral** — eficaz, mas **teratogênica** (exige contracepção rigorosa em meninas e controle laboratorial). 
- **Pérola:** não é "falta de higiene" nem "comer gordura"; orientar o adolescente evita estigma e melhora adesão.`},
  {h: `10. O algoritmo em seis frases (leve isto para a prova)`, c: `- Comece por **idade + febre**: elas escolhem o agente e o raciocínio.
- **Chiado no lactente < 2 anos, 1º episódio, com coriza prévia = bronquiolite (VSR)** → suporte, **sem antibiótico**.
- **Febre alta + tosse + taquipneia = pneumonia típica (pneumococo)** → **amoxicilina**; RX não é obrigatória no caso ambulatorial.
- **Lactente pequeno, tosse arrastada, SEM febre (± conjuntivite neonatal) = pneumonia afebril por Chlamydia** → **macrolídeo** (não amoxicilina).
- **Febre sem foco no lactente = ITU até prova em contrário** → urina I + **urocultura por método estéril** (saco coletor não serve para cultura); US após a 1ª ITU febril.
- **OMA precisa de ABAULAMENTO** (não só hiperemia); pode-se observar em > 2 anos leve, mas antibiótico de escolha é **amoxicilina**.`}
 ],
 flashcards: [
  {p: `Lactente de 2 meses, tosse arrastada em acessos, SEM febre, história de conjuntivite neonatal — diagnóstico e tratamento?`, r: `Pneumonia afebril do lactente por Chlamydia trachomatis; tratar com macrolídeo (azitromicina/eritromicina), não amoxicilina.`},
  {p: `Primeiro episódio de sibilância no lactente < 2 anos, com coriza prévia, no inverno — diagnóstico e conduta?`, r: `Bronquiolite viral (VSR); tratamento de suporte (O2, hidratação, desobstrução nasal). Sem antibiótico/broncodilatador/corticoide de rotina.`},
  {p: `Valores de taquipneia por idade (AIDPI/OMS)?`, r: `< 2 meses ≥ 60; 2–11 meses ≥ 50; 1–5 anos ≥ 40 irpm.`},
  {p: `Antibiótico de escolha da pneumonia bacteriana típica (pneumococo) ambulatorial?`, r: `Amoxicilina em dose alta.`},
  {p: `Como coletar urina para urocultura no lactente?`, r: `Jato médio, cateterismo vesical ou punção suprapúbica — saco coletor NUNCA serve para cultura.`},
  {p: `O que é obrigatório à otoscopia para diagnosticar OMA?`, r: `Abaulamento da membrana timpânica (hiperemia isolada não fecha).`},
  {p: `Os '3 C' e o sinal patognomônico do sarampo?`, r: `Tosse, coriza, conjuntivite; manchas de Koplik (enantema) precedem o exantema. Notificação imediata + vitamina A.`},
  {p: `Tratamento da acne nodulocística grave/refratária e seu maior risco?`, r: `Isotretinoína oral; risco de teratogenicidade (exige contracepção rigorosa).`}
 ],
 pegadinhas: [
  `Tosse arrastada SEM febre no lactente pequeno = pensar Chlamydia (macrolídeo), não pneumonia bacteriana típica (amoxicilina).`,
  `Bronquiolite é viral: broncodilatador, corticoide e antibiótico de rotina NÃO mudam o desfecho.`,
  `Saco coletor só serve para urina I negativa afastar ITU; para cultura, método estéril sempre.`,
  `OMA exige abaulamento; hiperemia isolada pode ser só o choro.`,
  `RX de tórax NÃO é obrigatória para diagnosticar PAC típica ambulatorial.`,
  `Taquipneia é o sinal mais sensível de pneumonia — conte a FR por 1 minuto na criança calma.`,
  `Sarampo, dengue e outras arboviroses são de notificação; sarampo recebe vitamina A.`,
  `Atípica = macrolídeo em qualquer idade (Chlamydia no lactente, Mycoplasma no escolar).`
 ],
 diretrizes: [
  `SBP — Diretrizes de Bronquiolite Viral Aguda; Pneumonia Adquirida na Comunidade na infância; Infecção do Trato Urinário na criança (Documentos Científicos).`,
  `Ministério da Saúde — AIDPI (Atenção Integrada às Doenças Prevalentes na Infância); Guia de Vigilância em Saúde (arboviroses, sarampo — notificação).`,
  `Materiais de Pediatria do Drive do Vinicius: 'Infecções respiratórias (bronquiolite, pneumonia)' e 'Emergências respiratórias' (ver materiais_drive.md).`
 ],
 questoes: [
  {enunciado: `Lactente de 2 meses com tosse seca em acessos há 2 semanas, taquipneia leve e SEM febre; a mãe relata secreção ocular tratada na maternidade. Ausculta com estertores finos; hemograma com eosinofilia. Qual o tratamento mais adequado?`, alternativas: {a: `Amoxicilina em dose alta`, b: `Azitromicina (macrolídeo)`, c: `Suporte apenas, pois é bronquiolite`, d: `Ceftriaxona intravenosa`}, correta: "b", comentario: `O conjunto — lactente pequeno, tosse arrastada em acessos, AUSÊNCIA de febre, história de conjuntivite neonatal e eosinofilia — é a pneumonia afebril (atípica) do lactente por Chlamydia trachomatis, adquirida no canal de parto. O tratamento é macrolídeo (azitromicina ou eritromicina). Amoxicilina não cobre Chlamydia (agente sem a parede-alvo dos betalactâmicos). Não é bronquiolite (que é 1º episódio de sibilância com pródromo catarral e febre, curso agudo) nem justifica ceftriaxona IV num lactente estável. Gatilho de prova: tosse arrastada + sem febre + conjuntivite neonatal = Chlamydia = macrolídeo.`, foco: `Pneumonia afebril do lactente (seu ponto de erro)`},
  {enunciado: `Lactente de 4 meses, em julho, com coriza há 3 dias e agora taquipneia, tiragem subcostal e sibilos difusos; primeiro episódio, saturação 95% em ar ambiente, aceitando dieta. Qual a conduta?`, alternativas: {a: `Amoxicilina-clavulanato oral`, b: `Corticoide sistêmico e broncodilatador de horário`, c: `Medidas de suporte (desobstrução nasal, hidratação) e observação`, d: `Radiografia de tórax e antibiótico se infiltrado`}, correta: "c", comentario: `Primeiro episódio de sibilância no lactente < 2 anos, no inverno, com pródromo de coriza = bronquiolite viral aguda (VSR na maioria). O tratamento é de suporte: desobstrução nasal com soro, hidratação, oxigênio se hipoxemia. Antibiótico não tem papel (é viral); corticoide e broncodilatador de rotina não alteram o desfecho; a radiografia de rotina só induz achados que levam a antibiótico desnecessário. Como a criança está estável (satura bem, aceita dieta), o manejo é ambulatorial com sinais de alarme orientados.`, foco: `Bronquiolite: não antibiotizar`},
  {enunciado: `Lactente de 8 meses com febre de 39°C há 2 dias, sem outro foco ao exame. Qual a melhor conduta diagnóstica para investigar infecção do trato urinário?`, alternativas: {a: `Urocultura colhida por saco coletor`, b: `Urina tipo I e urocultura por jato médio, cateterismo ou punção suprapúbica`, c: `Apenas antibiótico empírico, sem coletar urina`, d: `Tomografia de abdome`}, correta: "b", comentario: `Febre sem foco no lactente obriga a investigar ITU. O exame é urina tipo I somada à urocultura, e o método de coleta é decisivo: jato médio (se possível), cateterismo vesical ou punção suprapúbica. O saco coletor tem altíssima taxa de contaminação e NÃO vale para cultura (só uma urina I negativa por saco ajuda a afastar). Tratar às cegas sem coletar impede o diagnóstico microbiológico e o antibiograma; TC de abdome não é o exame inicial. Após a 1ª ITU febril confirmada, solicita-se ultrassonografia de rins e vias urinárias.`, foco: `ITU febril: coleta correta`}
 ]
},

"NEURO|Cefaleias": {
 titulo: `Cefaleias e dor facial`,
 half: `NEURO`,
 resumo: `Dor de cabeça é a queixa neurológica mais comum, e o campo onde se erra por dois motivos opostos: pedir tomografia para todo mundo (excesso) ou deixar passar a cefaleia que mata (falta). Este texto reconstrói o tema do zero: como a dor de cabeça nasce, o primeiro passo que separa a cefaleia primária (benigna) da secundária (perigosa) pelos SINAIS DE ALARME, e depois a assinatura de cada síndrome — enxaqueca, tensional, as trigêmino-autonômicas (salvas e hemicrania paroxística), a neuralgia do trigêmeo e a arterite temporal.`,
 fontes: `Base: Tratado de Neurologia da ABN 3ª ed. (caps. 32 — Cefaleia na Emergência; 37 — Migrânea; 38 — Cefaleia Tipo Tensão; 39 — Cefaleias Trigeminoautonômicas; 44 — Situações Especiais; 45 — Cefaleia por Uso Excessivo de Medicamentos), Merritt 13ª ed. (Seção 7 — Cefaleia e Síndromes Dolorosas), Adams & Victor (Headache and Other Craniofacial Pains) e Classificação Internacional das Cefaleias (ICHD-3). Ver materiais_neuro.md.`,
 notaErro: `Nos seus registros, as **cefaleias trigêmino-autonômicas (hemicrania paroxística)** aparecem com erro elevado (67%, tier ESSENCIAL), e vários subtemas de cefaleia (neuralgia do trigêmeo, enxaqueca com aura, arterite temporal, salvas) também derrubam pontos. O erro quase nunca é "não conhecer a enxaqueca" — é **não usar os sinais de alarme** e **confundir as cefaleias curtas e unilaterais entre si**, cada uma com um tratamento diferente. Três armadilhas explicam a maioria das quedas:

- **Você não reconhece a hemicrania paroxística e a trata como cluster.** As duas são trigêmino-autonômicas (dor unilateral em volta do olho, com lacrimejamento/congestão nasal do mesmo lado). O que as separa é DURAÇÃO e FREQUÊNCIA e, sobretudo, a RESPOSTA À INDOMETACINA: a hemicrania paroxística tem crises **curtas (2–30 min), muito frequentes (mais de 5/dia)** e responde de forma **absoluta à indometacina** (é critério diagnóstico); a cefaleia em salvas tem crises **mais longas (15–180 min)**, menos numerosas, e NÃO responde à indometacina — trata-se com **oxigênio + triptano** (seção 5).

- **Você confunde neuralgia do trigêmeo com as trigêmino-autonômicas.** A neuralgia do trigêmeo é dor em **choque/facada de segundos**, disparada por **gatilhos** (falar, mastigar, tocar a face), **sem** sintomas autonômicos; o tratamento é **carbamazepina** (seção 6). Trocar o diagnóstico troca o remédio.

- **Você deixa passar a cefaleia secundária perigosa.** Cefaleia em trovoada (thunderclap) = hemorragia subaracnóidea até prova em contrário; cefaleia nova no idoso com claudicação de mandíbula/alteração visual e VHS alto = **arterite de células gigantes**, que exige **corticoide IMEDIATO** para não cegar (seção 7).

**Como zerar o erro:** para toda dor de cabeça, faça NESTA ordem — (1) **há sinal de alarme** (SNNOOP10)? Se sim, é secundária até excluir → investigar. (2) Se primária, **quanto dura a crise** (segundos? minutos? horas? dias?) e é **unilateral com sinais autonômicos**? (3) **qual o tratamento específico** daquela síndrome (o teste da indometacina, o oxigênio das salvas, a carbamazepina da neuralgia). As questões ao final batem exatamente nesses pontos.`,
 secoes: [
  {h: `1. Comece pelo começo: de onde vem a dor de cabeça`, c: `O cérebro em si **não dói** — não tem receptores de dor no parênquima. O que dói são as estruturas sensíveis à sua volta: os **vasos sanguíneos** (artérias da base, seios venosos), as **meninges** (dura-máter), os **nervos cranianos** (sobretudo o **trigêmeo**, o V par) e os músculos/couro cabeludo. Toda dor de cabeça é, no fundo, a ativação dessas vias, que convergem para um "centro" no tronco encefálico (núcleo trigeminocervical).

Isso já explica dois fatos úteis: (1) uma dor de cabeça pode sinalizar problema em qualquer dessas estruturas (por isso há causas benignas e perigosas), e (2) o sistema **trigêmeo-vascular** é o eixo comum da enxaqueca e das cefaleias autonômicas — quando ele dispara, ativa também fibras que causam **lacrimejamento, congestão nasal e olho vermelho** do mesmo lado (os "sintomas autonômicos").

Divida o universo em dois grandes grupos, e essa divisão organiza tudo: **cefaleias primárias** (a dor É a doença — enxaqueca, tensional, trigêmino-autonômicas) e **cefaleias secundárias** (a dor é SINTOMA de outra coisa — hemorragia, tumor, meningite, arterite, trombose venosa).`},
  {h: `2. O passo que salva vidas: procurar SINAIS DE ALARME antes de tudo`, c: `Antes de classificar qualquer cefaleia como "enxaqueca", pergunte se há bandeira vermelha de causa **secundária**. O mnemônico atual é o **SNNOOP10**; guarde os mais cobrados:

- **S — Sistêmico:** febre, perda de peso, câncer, HIV/imunossupressão (pensar meningite, metástase, toxoplasmose).
- **N — Neurológico:** déficit focal, rebaixamento, papiledema, crise (pensar lesão de massa, AVC, HIC).
- **O — Onset (início) súbito:** a cefaleia **"em trovoada" (thunderclap)** — pico de intensidade em segundos, "a pior da vida" — é **hemorragia subaracnóidea** até prova em contrário.
- **O — Older (idoso):** cefaleia **nova após os 50 anos** obriga a pensar arterite de células gigantes e lesão estrutural.
- **P — Padrão que muda / Postural / Papiledema / gravidez:** dor que piora deitado ou com Valsalva (HIC), dor que só aparece de pé (hipotensão liquórica), padrão progressivo.

Regra de ouro: **cefaleia primária tem história longa e estereotipada e exame normal.** Qualquer coisa "nova, diferente ou com achado no exame" desloca para secundária e pede investigação (neuroimagem; punção lombar se suspeita de HSA com TC normal ou de meningite; VHS/PCR se suspeita de arterite).`},
  {h: `3. Enxaqueca (migrânea) — a primária que mais incapacita`, c: `É uma desordem do sistema trigêmeo-vascular com hiperexcitabilidade cerebral, típica de **mulheres jovens**, com componente genético. Não é "só uma dor forte": é uma síndrome com fases.

- **Critérios (ICHD-3), forma sem aura:** crises de **4 a 72 h** com **pelo menos 2** de — dor **unilateral**, **pulsátil**, **intensidade moderada/forte**, **piora com atividade física** — E **pelo menos 1** de — **náusea/vômito** ou **fotofobia e fonofobia**. Repare que a enxaqueca faz a pessoa querer **quarto escuro e silencioso e parada** (o oposto da agitação das salvas).
- **Aura:** sintoma neurológico **focal, reversível, que se instala em 5–20 min e dura até 60 min**, geralmente **visual** (escotoma cintilante, linhas em zigue-zague que "marcham"). A marcha lenta e a reversibilidade a separam do AVC (súbito) e da crise epiléptica (segundos, positiva e rápida).
- **Tratamento da crise:** analgésicos/AINEs no leve; **triptanos** (agonistas 5-HT1B/1D) no moderado-grave, quanto mais cedo melhor; antieméticos. **Cuidado:** triptanos e ergóticos são **vasoconstritores** — contraindicados em doença coronariana, AVC prévio e na **aura de tronco/hemiplégica**.
- **Profilaxia** (quando as crises são frequentes/incapacitantes): **betabloqueador (propranolol)**, **topiramato**, **amitriptilina**, **flunarizina**, valproato; e os anti-CGRP nos refratários.
- **Não esquecer:** o uso excessivo de analgésicos (≥ 10–15 dias/mês) causa **cefaleia por uso excessivo de medicamentos** — a dor que "não passa" porque o remédio virou o problema.`},
  {h: `4. Cefaleia do tipo tensional — a mais comum de todas`, c: `É a cefaleia primária mais **prevalente**. O perfil é quase o "negativo" da enxaqueca:

- Dor **bilateral**, em **aperto/peso** (como uma faixa apertando a cabeça), **leve a moderada**, que **NÃO piora com esforço** e **NÃO tem** náusea/vômito (pode ter uma leve foto OU fonofobia, não as duas).
- Pode ser episódica (esporádica/frequente) ou **crônica** (≥ 15 dias/mês por > 3 meses).
- **Tratamento:** analgésicos simples/AINEs nas crises; na forma crônica, **amitriptilina** é a profilaxia de escolha, somada a medidas comportamentais (sono, postura, manejo do estresse, atividade física).

Ponto de prova: a tensional é o grande diferencial "de baixo risco" — bilateral, em aperto, sem sinais autonômicos e sem piora ao esforço. Se aparecerem esses últimos, reconsidere o diagnóstico.`},
  {h: `5. Cefaleias trigêmino-autonômicas — salvas × hemicrania paroxística (seu ponto de erro)`, c: `Este grupo é o que você mais erra. Todas compartilham a **tríade**: dor **unilateral**, **peri/retro-orbitária, muito intensa**, acompanhada de **sinais autonômicos ipsilaterais** (lacrimejamento, olho vermelho, congestão/rinorreia nasal, ptose/miose, edema palpebral). O que as separa é **duração, frequência e resposta ao tratamento**:

- **Cefaleia em salvas (cluster) — a mais conhecida.** Homem, crises **de 15 a 180 minutos**, **1 a 8 por dia**, em "salvas" que duram semanas e depois somem por meses (**ritmo circadiano** — acordam o paciente à mesma hora). O paciente fica **agitado, andando** (ao contrário da enxaqueca). **Tratamento da crise: OXIGÊNIO a 100% em alto fluxo + triptano** (sumatriptano subcutâneo/nasal). **Profilaxia: verapamil.**

- **Hemicrania paroxística — a pegadinha clássica.** Crises **mais curtas (2 a 30 minutos)** e **mais frequentes (geralmente > 5 por dia)**. O traço que fecha o diagnóstico é a **resposta ABSOLUTA à indometacina** — a doença é "indometacina-responsiva" por definição. Se um caso de cefaleia autonômica curta e frequente **some com indometacina**, é hemicrania paroxística, não cluster.

- **SUNCT/SUNA:** crises **ultracurtas** (segundos a 2 min), dezenas a centenas por dia, com sintomas autonômicos proeminentes. Não respondem à indometacina; tratam-se como neuralgia (lamotrigina/lidocaína).

Fio condutor para não errar: **duração curtíssima (s) = SUNCT; curta (2–30 min) e muito frequente + responde à indometacina = hemicrania paroxística; média (15–180 min), agitação, oxigênio = salvas.**`},
  {h: `6. Neuralgia do trigêmeo — dor em choque, sem sinal autonômico`, c: `É uma dor **neuropática** do V par, não uma "cefaleia" no sentido comum. O perfil é inconfundível:

- Dor em **choque elétrico/facada**, de **segundos**, em salvas, no território do trigêmeo (mais em V2/V3 — bochecha e mandíbula), **disparada por gatilhos banais**: mastigar, falar, escovar os dentes, tocar a face, vento no rosto ("zonas de gatilho").
- **Sem sintomas autonômicos** (é isso que a separa das trigêmino-autonômicas) e com exame neurológico normal na forma clássica.
- **Causa clássica:** compressão da raiz do trigêmeo por uma **alça vascular** (conflito neurovascular). **Atenção:** em paciente **jovem**, **bilateral** ou com **déficit sensitivo**, pense em **esclerose múltipla** ou lesão estrutural — peça RM.
- **Tratamento: carbamazepina** (1ª linha; oxcarbazepina como alternativa). Refratários → cirurgia (descompressão microvascular) ou procedimentos percutâneos/radiocirurgia.`},
  {h: `7. As secundárias que não se pode perder`, c: `Três diagnósticos que a prova adora e que exigem ação imediata:

- **Hemorragia subaracnóidea (HSA):** cefaleia **em trovoada** ("a pior da vida", pico em segundos), ± rigidez de nuca, náusea, rebaixamento. Conduta: **TC de crânio sem contraste** urgente; se **normal e a suspeita persiste**, **punção lombar** buscando **xantocromia/hemácias**. Não relaxe com TC normal precoce.
- **Arterite de células gigantes (temporal):** **> 50 anos**, cefaleia nova temporal, **claudicação de mandíbula**, hipersensibilidade do couro cabeludo, sintomas de polimialgia reumática, **VHS/PCR muito altos** e risco de **amaurose** (neuropatia óptica isquêmica). Conduta: **corticoide em dose alta IMEDIATAMENTE**, sem esperar a biópsia da artéria temporal — o objetivo é salvar a visão do outro olho.
- **Hipertensão intracraniana idiopática (pseudotumor cerebral):** mulher jovem obesa, cefaleia + **papiledema** + turvação/obscurações visuais + zumbido pulsátil; RM/venoRM excluem trombose venosa; punção com **pressão de abertura alta**. Trata com **acetazolamida** e perda de peso; risco de perda visual. Sempre excluir **trombose venosa cerebral** (cefaleia progressiva, crises, déficit — vê-se na venografia).`},
  {h: `8. O algoritmo em seis frases (leve isto para a prova)`, c: `- **Primeiro, sinais de alarme (SNNOOP10):** se houver, é **secundária** até excluir → neuroimagem/PL/VHS conforme a suspeita.
- **Trovoada** = HSA (TC e, se normal, PL com xantocromia).
- **Cefaleia nova > 50 anos + claudicação de mandíbula + VHS alto** = arterite temporal → **corticoide já**.
- **Primária, crise de 4–72 h, unilateral pulsátil, foto/fonofobia, quer quarto escuro** = **enxaqueca** (triptano na crise; profilaxia se frequente).
- **Unilateral periorbitária + sinais autonômicos:** cronometre — **2–30 min e > 5/dia respondendo à indometacina = hemicrania paroxística**; **15–180 min, agitação, oxigênio = salvas**.
- **Dor facial em choque de segundos, com gatilhos, SEM autonômicos** = **neuralgia do trigêmeo** → **carbamazepina** (jovem/bilateral → investigar EM).`}
 ],
 flashcards: [
  {p: `O que separa a hemicrania paroxística da cefaleia em salvas?`, r: `Hemicrania paroxística: crises curtas (2–30 min), muito frequentes (>5/dia), resposta ABSOLUTA à indometacina. Salvas: 15–180 min, agitação, trata com oxigênio + triptano (não responde à indometacina).`},
  {p: `Tratamento da crise de cefaleia em salvas?`, r: `Oxigênio a 100% em alto fluxo + triptano (sumatriptano SC/nasal). Profilaxia: verapamil.`},
  {p: `Dor facial em choque de segundos, disparada por mastigar/falar, sem sinais autonômicos — diagnóstico e tratamento?`, r: `Neuralgia do trigêmeo; carbamazepina (jovem/bilateral/déficit → investigar esclerose múltipla).`},
  {p: `Critério de tempo da enxaqueca e da aura?`, r: `Crise de 4–72 h; aura focal reversível que se instala em 5–20 min e dura até 60 min.`},
  {p: `Cefaleia em trovoada (thunderclap) — o que excluir e como?`, r: `Hemorragia subaracnóidea: TC de crânio; se normal com suspeita mantida, punção lombar buscando xantocromia.`},
  {p: `Cefaleia nova no idoso com claudicação de mandíbula e VHS alto — diagnóstico e conduta?`, r: `Arterite de células gigantes; corticoide em dose alta IMEDIATO (antes da biópsia) para prevenir cegueira.`},
  {p: `Contraindicação-chave dos triptanos?`, r: `Doença coronariana/cerebrovascular e aura hemiplégica/de tronco (são vasoconstritores).`}
 ],
 pegadinhas: [
  `Hemicrania paroxística responde à indometacina (é critério); cluster NÃO — cluster é oxigênio + triptano.`,
  `Neuralgia do trigêmeo NÃO tem sintomas autonômicos (isso a separa das trigêmino-autonômicas); trata com carbamazepina.`,
  `Neuralgia do trigêmeo jovem/bilateral/com déficit sensitivo = pensar esclerose múltipla (pedir RM).`,
  `Cefaleia em trovoada = HSA até prova em contrário; TC normal precoce NÃO exclui (fazer PL com xantocromia).`,
  `Arterite temporal: dar corticoide ANTES da biópsia — a espera custa a visão.`,
  `Na cefaleia em salvas o paciente fica agitado/andando; na enxaqueca quer ficar parado no escuro.`,
  `Uso de analgésico ≥ 10–15 dias/mês causa cefaleia por uso excessivo de medicamentos.`,
  `Triptano é vasoconstritor: não usar em coronariopata nem na aura hemiplégica/de tronco.`
 ],
 diretrizes: [
  `Tratado de Neurologia da ABN (3ª ed., 2025): cap. 32 (Cefaleia na Emergência), 37 (Migrânea), 38 (Cefaleia Tipo Tensão), 39 (Cefaleias Trigeminoautonômicas), 44 (Situações Especiais), 45 (Uso Excessivo de Medicamentos) — ver materiais_neuro.md.`,
  `Merritt, Tratado de Neurologia (13ª ed.), Seção 7 — Cefaleia e Síndromes Dolorosas; Adams & Victor — 'Headache and Other Craniofacial Pains'.`,
  `Classificação Internacional das Cefaleias (ICHD-3) — critérios de enxaqueca, tensional, trigêmino-autonômicas e neuralgias.`
 ],
 questoes: [
  {enunciado: `Mulher de 45 anos com crises de dor intensa ao redor do olho direito, com lacrimejamento e congestão nasal do mesmo lado, durando cerca de 15 minutos cada, ocorrendo 8 a 10 vezes por dia. As crises desaparecem completamente com indometacina. Qual o diagnóstico?`, alternativas: {a: `Cefaleia em salvas`, b: `Hemicrania paroxística`, c: `Enxaqueca com aura`, d: `Neuralgia do trigêmeo`}, correta: "b", comentario: `Crises curtas (2–30 min), muito frequentes (>5/dia), unilaterais periorbitárias com sintomas autonômicos e — o dado que fecha — resposta ABSOLUTA à indometacina definem a hemicrania paroxística (é uma cefaleia 'indometacina-responsiva' por critério). A cefaleia em salvas tem crises mais longas (15–180 min), menos numerosas, cursa com agitação e NÃO responde à indometacina (trata-se com oxigênio + triptano). Enxaqueca dura 4–72 h e não tem essa salva autonômica. Neuralgia do trigêmeo é dor em choque de segundos, com gatilhos e sem sintomas autonômicos. O teste da indometacina é o divisor de águas.`, foco: `Hemicrania paroxística × salvas (seu ponto de erro)`},
  {enunciado: `Homem de 60 anos com paroxismos de dor em choque na hemiface direita (região da bochecha e mandíbula), de segundos, desencadeados ao mastigar e escovar os dentes, sem lacrimejamento ou congestão nasal; exame neurológico normal. Qual o tratamento de primeira linha?`, alternativas: {a: `Carbamazepina`, b: `Oxigênio a 100%`, c: `Indometacina`, d: `Sumatriptano subcutâneo`}, correta: "a", comentario: `Dor facial em choque, de segundos, com zonas de gatilho (mastigar, escovar os dentes) e SEM sintomas autonômicos é neuralgia do trigêmeo clássica (frequentemente por conflito neurovascular). O tratamento de 1ª linha é carbamazepina (alternativa: oxcarbazepina). Oxigênio trata cluster; indometacina trata hemicrania paroxística; triptano trata enxaqueca/salvas — todas cursam com sintomas autonômicos, ausentes aqui. Sinal de alerta: se fosse jovem, bilateral ou com déficit sensitivo, investigar esclerose múltipla com RM.`, foco: `Neuralgia do trigêmeo (tratamento)`},
  {enunciado: `Mulher de 72 anos com cefaleia temporal nova há 3 semanas, dor ao mastigar (claudicação de mandíbula), sensibilidade no couro cabeludo e um episódio de embaçamento visual; VHS de 90 mm/h. Qual a conduta imediata?`, alternativas: {a: `Prescrever amitriptilina e reavaliar em 30 dias`, b: `Corticoide em dose alta imediatamente e programar biópsia da artéria temporal`, c: `Sumatriptano e alta`, d: `Tomografia de crânio; se normal, tranquilizar`}, correta: "b", comentario: `Cefaleia nova após os 50 anos com claudicação de mandíbula, sensibilidade do couro cabeludo, sintoma visual e VHS muito alto é arterite de células gigantes (temporal) — emergência por risco de neuropatia óptica isquêmica e cegueira. A conduta é iniciar corticoide em dose alta IMEDIATAMENTE, sem esperar a biópsia da artéria temporal (que confirma depois e não perde o valor se feita nos primeiros dias). Amitriptilina/triptano/tranquilizar protelam uma causa que cega o outro olho em horas a dias. TC normal não afasta arterite (o exame é clínico + VHS/PCR + biópsia/US).`, foco: `Sinal de alarme: arterite temporal`}
 ]
},

"PED|Neonatologia": {
 titulo: `Neonatologia — prematuridade, icterícia, sepse, infecções congênitas e triagem`,
 half: `PED`,
 resumo: `O período neonatal (0–28 dias) concentra decisões de alto risco e é campeão de erro em prova porque mistura conceitos que parecem próximos (idade cronológica × corrigida, icterícia fisiológica × patológica, sepse precoce × tardia) e siglas de triagem que se confundem. Este texto reconstrói o tema do zero: como classificar o recém-nascido, por que a prematuridade muda tudo (inclusive como se conta a idade dele), quando a icterícia é perigosa, como pensar sepse e as infecções congênitas (STORCH), e o que rastreiam os quatro testes da triagem neonatal.`,
 fontes: `Base: SBP — Documentos Científicos de Neonatologia (icterícia, sepse neonatal, seguimento do prematuro); Ministério da Saúde — Atenção à Saúde do Recém-Nascido, Triagem Neonatal (Programa Nacional) e Protocolos de Sífilis Congênita; e materiais de Pediatria do Drive do Vinicius ('Neonatologia'; 'Reanimação Neonatal' — ver materiais_drive.md).`,
 notaErro: `Nos seus registros, **prematuridade / idade corrigida** aparece com erro alto (67%, tier ESSENCIAL), e o eixo neonatal inteiro (icterícia, sepse, infecções congênitas, triagem) derruba pontos. O erro quase nunca é decoreba — é **misturar definições parecidas** e **não aplicar a idade corrigida** onde ela muda a interpretação. Quatro armadilhas explicam a maioria das quedas:

- **Você não usa (ou usa errado) a idade corrigida.** No prematuro, para avaliar **crescimento e desenvolvimento neuropsicomotor**, conta-se a **idade corrigida** = idade cronológica menos as semanas que faltaram para 40 semanas. Um bebê nascido com 30 semanas, avaliado aos 4 meses de vida, tem idade corrigida de ~2 meses — e é isso que se espera dele no marco motor. Aplica-se a correção **até cerca de 2 anos** (alguns marcos até 3). Esquecer isso faz você "diagnosticar atraso" num bebê normal (seção 3).

- **Você troca icterícia fisiológica por patológica (e vice-versa).** A patológica tem bandeiras: aparece **nas primeiras 24 h**, sobe rápido, é muito alta, dura demais, ou tem **fração DIRETA (conjugada) elevada** (que NUNCA é fisiológica e indica colestase — investigar atresia biliar). A fisiológica surge após 24 h, é indireta e limitada (seção 4).

- **Você confunde sepse precoce com tardia.** **Precoce (< 48–72 h)** vem da mãe/canal de parto — **Streptococcus do grupo B (GBS)**, E. coli, Listeria; fatores: bolsa rota prolongada, corioamnionite, colonização materna por GBS. **Tardia (> 72 h)** costuma ser hospitalar/comunitária (Staph, Gram-negativos). O reconhecimento e a cobertura empírica mudam (seção 5).

- **Você embaralha as siglas da triagem e das infecções congênitas.** Os quatro testes (pezinho, olhinho, orelhinha, coraçãozinho) rastreiam coisas diferentes; e o STORCH tem pistas próprias (calcificações periventriculares no CMV × difusas na toxo; sífilis com lesões ósseas e rinite) (seções 6–7).

**Como zerar o erro:** diante de um recém-nascido, pergunte NESTA ordem — (1) **é a termo ou prematuro?** (e, se prematuro, **calcule a idade corrigida** para crescimento/DNPM); (2) **o problema começou quando?** (< 24 h da icterícia, < 72 h da sepse são bandeiras); (3) **é fisiológico ou patológico** — há sinal de alarme? As questões ao final batem exatamente nesses tropeços.`,
 secoes: [
  {h: `1. Comece pelo começo: como se classifica um recém-nascido`, c: `Antes de qualquer conduta, todo RN é classificado por dois eixos, porque isso prevê os riscos dele:

- **Idade gestacional (IG):** **a termo** = 37 a 41 semanas e 6 dias; **pré-termo (prematuro)** = < 37 semanas (subdividido em tardio 34–36+6, moderado 32–33+6, muito prematuro 28–31+6, extremo < 28); **pós-termo** = ≥ 42 semanas.
- **Peso ao nascer:** baixo peso < 2500 g; muito baixo peso < 1500 g; extremo < 1000 g.
- **Peso para a IG:** **PIG** (pequeno), **AIG** (adequado) ou **GIG** (grande) — usando curvas. Um PIG pode ter sofrido restrição de crescimento (risco de hipoglicemia, hipotermia, policitemia); um GIG levanta suspeita de **diabetes materno** (risco de hipoglicemia e tocotraumatismo).

Por que isso importa: cada combinação prevê complicações. O prematuro, por imaturidade de órgãos, tem risco de **desconforto respiratório (doença da membrana hialina por deficiência de surfactante)**, apneia, hemorragia intraventricular, enterocolite necrosante, retinopatia da prematuridade, icterícia mais intensa e sepse. Guarde a lógica: **classificar = antecipar o que vai dar errado.**`},
  {h: `2. Os primeiros minutos: Apgar e a lógica da reanimação`, c: `O **boletim de Apgar** (no 1º e no 5º minuto) avalia cinco itens — frequência cardíaca, respiração, tônus, irritabilidade reflexa e cor — de 0 a 2 cada. Ele **documenta a transição e a resposta à reanimação**, mas **não é ele que decide** iniciar a reanimação: a decisão vem da avaliação imediata (respira/chora? tônus bom?) e, sobretudo, da **frequência cardíaca**.

- Na sala de parto, o eixo é: passos iniciais (aquecer, posicionar, aspirar se necessário, secar/estimular); se apneia/gasping ou FC < 100 → **ventilação com pressão positiva (VPP)** — o passo mais importante e que resolve a maioria dos casos; se FC < 60 apesar de VPP efetiva → massagem cardíaca coordenada e, persistindo, adrenalina.
- **Clampeamento oportuno do cordão** (tardio, ~1–3 min, no RN que não precisa de reanimação) melhora reservas de ferro e desfechos.

Fixe: **a ventilação é a alma da reanimação neonatal** (o problema quase sempre é respiratório, não cardíaco primário), e o Apgar baixo isolado não faz diagnóstico de asfixia.`},
  {h: `3. Prematuridade e IDADE CORRIGIDA — seu ponto de erro`, c: `Este é o conceito que você mais erra, e é simples quando se entende o porquê. O prematuro "perdeu" semanas de gestação que ele completaria dentro do útero; para julgar o desenvolvimento dele com justiça, descontamos essas semanas.

- **Idade cronológica:** tempo desde o nascimento (a que todo mundo usa no dia a dia).
- **Idade corrigida (ou pós-concepcional ajustada):** **idade cronológica − (40 semanas − IG ao nascer)**. Exemplo: bebê nascido com **32 semanas** (faltaram 8 para 40); aos **3 meses** de vida (cronológica), a idade corrigida é **3 meses − 2 meses = 1 mês**. Ele deve sorrir/sustentar a cabeça como um bebê de 1 mês, não de 3.
- **Para que serve:** avaliar **crescimento** (peso/estatura/PC nas curvas) e **desenvolvimento neuropsicomotor** e programar **introdução alimentar**. Usa-se a correção **até ~24 meses** (alguns serviços corrigem certos marcos até 3 anos).
- **Para que NÃO muda:** o **calendário vacinal** segue a **idade cronológica** (vacina-se pela data de nascimento, não corrigida — o prematuro precisa é de proteção mais cedo), com poucas ressalvas (ex.: BCG conforme peso; esquema ampliado para VSR/palivizumabe em grupos de risco).

Erro clássico de prova: "bebê de 4 meses nascido a 30 semanas não senta com apoio, não faz preensão" → antes de dizer "atraso", **corrija a idade** (4 − 2,5 ≈ 1,5 mês) e reavalie: pode estar perfeitamente normal.`},
  {h: `4. Icterícia neonatal — fisiológica × patológica`, c: `Icterícia (bilirrubina alta) é quase universal no RN, porque ele tem mais hemácias com meia-vida curta e um fígado imaturo para conjugar. A tarefa é separar o benigno do perigoso — porque a bilirrubina **indireta** muito alta é neurotóxica (**kernicterus**).

- **Fisiológica:** aparece **APÓS 24 h**, é de **bilirrubina indireta**, tem pico moderado por volta do 3º–5º dia e regride em ~1–2 semanas (mais no prematuro e no bebê em aleitamento). RN clinicamente bem.
- **Bandeiras de PATOLÓGICA (investigar):** início **nas primeiras 24 h**; velocidade de subida alta; **níveis elevados** para a idade em horas (usar o nomograma/curvas de Bhutani e as tabelas por horas de vida); icterícia **prolongada** (> 2 semanas); ou **fração DIRETA (conjugada) elevada** — esta **nunca é fisiológica** e obriga a investigar **colestase** (a grande preocupação é a **atresia de vias biliares**, cujo tratamento cirúrgico — portoenterostomia de Kasai — tem janela nas primeiras semanas).
- **Causas de indireta precoce/intensa:** **incompatibilidade Rh** (mãe Rh− sensibilizada) e **ABO** (mãe O, bebê A/B — Coombs pode ser fraco), esferocitose, deficiência de G6PD, cefalo-hematoma.
- **Tratamento:** **fototerapia** conforme os níveis por hora de vida e fatores de risco; **exsanguineotransfusão** nos níveis críticos ou sinais de encefalopatia bilirrubínica. A prevenção do kernicterus é o objetivo.`},
  {h: `5. Sepse neonatal — precoce × tardia`, c: `O RN tem imunidade imatura e adoece de forma **inespecífica** — por isso a suspeita é generosa. Separe por tempo, porque muda o agente e a fonte:

- **Sepse PRECOCE (< 48–72 h de vida):** origem **materna/periparto**. Agentes: **Streptococcus do grupo B (GBS, Streptococcus agalactiae)** — o principal —, **E. coli** e **Listeria**. Fatores de risco: **colonização materna por GBS**, **bolsa rota > 18 h**, **corioamnionite** (febre materna), prematuridade, ITU materna. A **profilaxia intraparto com penicilina** na gestante GBS+ reduz muito a doença. Cobertura empírica clássica: **ampicilina + gentamicina**.
- **Sepse TARDIA (> 72 h):** origem **hospitalar** (cateteres, ventilação — Staphylococcus coagulase-negativo, S. aureus, Gram-negativos, Candida) ou **comunitária**. A cobertura depende do perfil local.
- **Sinais de alarme (inespecíficos):** instabilidade térmica (hipo ou hipertermia), recusa alimentar, letargia/irritabilidade, desconforto respiratório, apneia, distensão abdominal, icterícia, hipoglicemia, perfusão ruim. **"Bebê que não vai bem" = investigar sepse.**
- **Conduta:** hemocultura (e culturas conforme o caso), hemograma/PCR como apoio (não excluem), e **antibiótico empírico precoce** — não se espera a cultura para tratar o RN grave; ponderar punção lombar conforme protocolo.`},
  {h: `6. Infecções congênitas (STORCH) — pistas que decidem`, c: `As infecções adquiridas na gestação/parto compartilham achados (restrição de crescimento, hepatoesplenomegalia, icterícia, plaquetopenia, alterações no SNC), mas têm assinaturas:

- **Sífilis congênita (Treponema pallidum):** a mais cobrada no Brasil. Pode ser assintomática ou dar **rinite serossanguinolenta ("coriza sifilítica")**, **lesões cutâneas (pênfigo palmoplantar)**, **lesões ósseas (periostite, pseudoparalisia de Parrot)**, hepatoesplenomegalia. Diagnóstico e conduta guiam-se por **VDRL da mãe e do RN** e adequação do tratamento materno; trata-se com **penicilina**. É de **notificação** e amplamente evitável — a falha é não tratar a gestante e o parceiro.
- **Toxoplasmose:** tríade de **Sabin** — **coriorretinite + hidrocefalia + calcificações intracranianas DIFUSAS**.
- **Citomegalovírus (CMV):** a causa infecciosa mais comum de **surdez neurossensorial** e de microcefalia congênita; **calcificações PERIVENTRICULARES**, petéquias ("blueberry muffin"), PIG. (Truque: **CMV = periventricular; toxo = difusa.**)
- **Rubéola:** catarata, **surdez** e **cardiopatia (persistência do canal arterial)** — a tríade de Gregg (rara hoje pela vacina).
- **Zika:** microcefalia com desproporção craniofacial e calcificações; **Herpes** neonatal: quadro grave (vesículas, encefalite, sepse-like) — aciclovir.`},
  {h: `7. Triagem neonatal — os quatro 'testes' do RN`, c: `A triagem universal busca doenças tratáveis **antes** de darem sequela. Não confunda o que cada uma rastreia:

- **Teste do PEZINHO (triagem biológica):** sangue do calcanhar, idealmente entre o **3º e o 5º dia**. O painel do SUS vem sendo **ampliado por etapas**; o núcleo clássico rastreia **hipotireoidismo congênito**, **fenilcetonúria**, **doença falciforme/hemoglobinopatias**, **fibrose cística**, **hiperplasia adrenal congênita** e **deficiência de biotinidase** (e novas condições na expansão). O **hipotireoidismo congênito** é o exemplo-mãe: assintomático ao nascer, causa deficiência intelectual irreversível se não tratado com **levotiroxina** precocemente — daí a triagem.
- **Teste do OLHINHO (reflexo vermelho):** rastreia opacidades do eixo visual — **catarata congênita, retinoblastoma, glaucoma** — pela pesquisa do reflexo vermelho; reflexo ausente/branco (leucocoria) exige oftalmologista já.
- **Teste da ORELHINHA (triagem auditiva — emissões otoacústicas):** detecta **surdez congênita** precocemente (CMV é causa comum), permitindo intervenção que preserva a linguagem.
- **Teste do CORAÇÃOZINHO (oximetria de pulso):** mede a saturação em membro superior direito e um inferior; rastreia **cardiopatias congênitas críticas** (canal-dependentes) antes da alta.`},
  {h: `8. O algoritmo em seis frases (leve isto para a prova)`, c: `- **Classifique** o RN por IG e peso — isso antecipa os riscos.
- No **prematuro**, use **idade corrigida** para crescimento e DNPM (até ~2 anos); **vacina segue idade cronológica**.
- **Icterícia nas primeiras 24 h, ou fração DIRETA elevada, ou prolongada = patológica** (a direta indica colestase → investigar atresia biliar); fototerapia/exsanguíneo pela curva por hora.
- **Sepse precoce (<72 h) = GBS/E. coli/Listeria** (ampicilina + gentamicina); **tardia (>72 h) = hospitalar** — sempre tratar cedo o RN que 'não vai bem'.
- **STORCH:** sífilis (rinite, lesão óssea, VDRL, penicilina); **CMV = calcificação periventricular + surdez**; **toxo = calcificação difusa + coriorretinite + hidrocefalia**.
- **Triagem:** pezinho (metabólico/endócrino/hemoglobina), olhinho (reflexo vermelho), orelhinha (audição), coraçãozinho (oximetria/cardiopatia crítica).`}
 ],
 flashcards: [
  {p: `Como se calcula a idade corrigida do prematuro?`, r: `Idade cronológica − (40 semanas − IG ao nascer). Ex.: nascido a 32 sem, aos 3 meses → 3 − 2 = 1 mês corrigido. Corrige-se até ~2 anos.`},
  {p: `A vacinação do prematuro segue idade cronológica ou corrigida?`, r: `Cronológica (pela data de nascimento) — o prematuro precisa de proteção mais cedo.`},
  {p: `Que características tornam a icterícia neonatal PATOLÓGICA?`, r: `Início < 24 h, subida rápida, níveis altos para a hora de vida, duração > 2 semanas, ou bilirrubina DIRETA elevada (colestase — nunca fisiológica).`},
  {p: `Icterícia com fração direta (conjugada) elevada — o que investigar?`, r: `Colestase neonatal; a grande preocupação é atresia de vias biliares (Kasai tem janela nas primeiras semanas).`},
  {p: `Agentes da sepse neonatal precoce (<72 h) e cobertura empírica?`, r: `Streptococcus do grupo B (GBS), E. coli, Listeria; ampicilina + gentamicina. Profilaxia intraparto com penicilina na gestante GBS+.`},
  {p: `Calcificações intracranianas: CMV × toxoplasmose?`, r: `CMV = periventriculares (+ surdez neurossensorial); toxoplasmose = difusas (+ coriorretinite e hidrocefalia — tríade de Sabin).`},
  {p: `O que rastreiam olhinho, orelhinha e coraçãozinho?`, r: `Olhinho: reflexo vermelho (catarata/retinoblastoma/glaucoma). Orelhinha: surdez congênita (emissões otoacústicas). Coraçãozinho: cardiopatias congênitas críticas (oximetria de pulso).`}
 ],
 pegadinhas: [
  `Antes de diagnosticar 'atraso' no prematuro, corrija a idade — o marco é julgado pela idade corrigida (até ~2 anos).`,
  `Vacina do prematuro é pela idade CRONOLÓGICA, não corrigida.`,
  `Bilirrubina DIRETA elevada nunca é fisiológica: pense colestase/atresia biliar.`,
  `Icterícia nas primeiras 24 h de vida é sempre patológica (pensar hemólise: Rh/ABO, G6PD).`,
  `Sepse precoce vem da mãe (GBS/E. coli/Listeria); tardia é hospitalar — o tempo (<72 h vs >72 h) decide.`,
  `CMV = calcificação periventricular e surdez; toxo = calcificação difusa e coriorretinite.`,
  `Sífilis congênita: rinite serossanguinolenta, pênfigo palmoplantar, lesão óssea; conduta guiada por VDRL e tratamento materno; penicilina.`,
  `Apgar documenta a transição, mas não decide iniciar reanimação — quem decide é a FC/respiração; a alma da reanimação é a ventilação.`
 ],
 diretrizes: [
  `SBP — Documentos Científicos de Neonatologia: icterícia neonatal (manejo por horas de vida/curvas), sepse neonatal e seguimento do prematuro (idade corrigida).`,
  `Ministério da Saúde — Atenção à Saúde do Recém-Nascido; Programa Nacional de Triagem Neonatal (pezinho ampliado, olhinho, orelhinha, coraçãozinho); Protocolo de Sífilis Congênita (notificação).`,
  `Materiais de Pediatria do Drive do Vinicius: 'Neonatologia' e 'Reanimação Neonatal e PCR' (ver materiais_drive.md).`
 ],
 questoes: [
  {enunciado: `Lactente nascido com 30 semanas de idade gestacional é avaliado aos 4 meses de idade cronológica. Ainda não rola, não sustenta bem a cabeça e sorri pouco. Qual a conduta mais adequada?`, alternativas: {a: `Diagnosticar atraso do desenvolvimento e encaminhar com urgência`, b: `Corrigir a idade (idade corrigida ~1,5 mês) e reavaliar os marcos por essa idade`, c: `Iniciar estimulação por suspeita de paralisia cerebral`, d: `Solicitar ressonância de crânio imediatamente`}, correta: "b", comentario: `O bebê nasceu 10 semanas antes do termo (30 vs 40 semanas ≈ 2,5 meses). Aos 4 meses cronológicos, a idade corrigida é cerca de 1,5 mês — e um bebê de 1,5 mês legitimamente ainda não rola e sustenta pouco a cabeça. A conduta é corrigir a idade e julgar os marcos por ela (correção usada até ~2 anos). Rotular 'atraso', presumir paralisia cerebral ou pedir RM sem antes corrigir a idade é o erro clássico — gera diagnóstico e intervenção desnecessários. Se, já corrigida a idade, houver de fato defasagem ou sinais de alerta, aí sim investiga-se.`, foco: `Idade corrigida (seu ponto de erro)`},
  {enunciado: `Recém-nascido de 3 semanas com icterícia persistente, colúria e acolia fecal; bilirrubina total elevada com fração DIRETA (conjugada) aumentada. Qual a principal hipótese e a urgência?`, alternativas: {a: `Icterícia fisiológica prolongada; apenas observar`, b: `Icterícia do leite materno; manter aleitamento e reavaliar`, c: `Colestase neonatal — investigar atresia de vias biliares com urgência`, d: `Incompatibilidade ABO; fototerapia`}, correta: "c", comentario: `Icterícia prolongada (>2 semanas) com fração DIRETA (conjugada) elevada, colúria e acolia é COLESTASE — e a fração direta nunca é fisiológica nem se explica pela icterícia do leite materno (que é indireta). A prioridade é investigar atresia de vias biliares, pois a cirurgia (portoenterostomia de Kasai) tem melhor resultado quanto mais cedo, idealmente nas primeiras 6–8 semanas. Incompatibilidade ABO causa icterícia INDIRETA e precoce, não esse padrão colestático. Observar ou atribuir ao leite materno perderia a janela cirúrgica.`, foco: `Icterícia: bilirrubina direta`},
  {enunciado: `Recém-nascido a termo, 24 horas de vida, com desconforto respiratório, instabilidade térmica e recusa alimentar; a mãe teve bolsa rota há 20 horas e é colonizada por Streptococcus do grupo B. Qual a interpretação e a conduta empírica?`, alternativas: {a: `Sepse neonatal tardia; iniciar vancomicina`, b: `Sepse neonatal precoce (GBS/E. coli/Listeria); hemocultura e ampicilina + gentamicina empíricas`, c: `Apenas observação, pois pode ser taquipneia transitória`, d: `Aguardar resultado da hemocultura antes de qualquer antibiótico`}, correta: "b", comentario: `Início nas primeiras 48–72 h, com fatores maternos (bolsa rota >18 h, colonização por GBS), caracteriza sepse neonatal PRECOCE, cujos agentes são GBS, E. coli e Listeria. A conduta é colher hemocultura e iniciar antibiótico empírico precoce (classicamente ampicilina + gentamicina) — não se espera a cultura para tratar o RN sintomático, pois o atraso aumenta a mortalidade. Vancomicina cobre germes de sepse tardia/hospitalar, não é a empírica precoce. Atribuir a 'apenas taquipneia transitória' diante de sinais de sepse e fatores de risco maternos é o erro perigoso. A profilaxia intraparto com penicilina na mãe GBS+ é o que previne o quadro.`, foco: `Sepse precoce × tardia`}
 ]
}

};
